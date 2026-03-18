const { db, bucket } = require('../firebase/config');
const { sendConfirmationEmail, notifyAdmin } = require('../services/emailService');
const { v4: uuidv4 } = require('uuid');

const submitApplication = async (req, res) => {
    try {
        const { name, email, phone, position, portfolio, message } = req.body;
        const file = req.file;

        if (!name || !email || !phone || !position || !file) {
            return res.status(400).json({ error: "Required fields missing" });
        }

        // File is already uploaded locally via multer.diskStorage
        // Construct local URL to access it later
        const url = `/uploads/${file.filename}`;

        const applicationId = uuidv4();
        const newApplication = {
            id: applicationId,
            name,
            email,
            phone,
            position,
            resumeURL: url,
            portfolio: portfolio || '',
            message: message || '',
            status: 'pending',
            createdAt: new Date().toISOString()
        };

        await db.collection('applications').doc(applicationId).set(newApplication);

        // Emails
        sendConfirmationEmail(email, name, 'application').catch(console.error);
        notifyAdmin(newApplication, 'application').catch(console.error);

        res.status(201).json({ id: applicationId, message: "Application submitted successfully" });
    } catch (error) {
        console.error("Error submitting application:", error);
        res.status(500).json({ error: "Failed to submit application" });
    }
};

const getApplications = async (req, res) => {
    try {
        const snapshot = await db.collection('applications').orderBy('createdAt', 'desc').get();
        const applications = snapshot.docs.map(doc => doc.data());
        res.json(applications);
    } catch (error) {
        console.error("Error fetching applications:", error);
        res.status(500).json({ error: "Failed to fetch applications" });
    }
};

const updateStatus = async (req, res) => {
    try {
        const { id, status } = req.body;
        await db.collection('applications').doc(id).update({ status });
        res.json({ message: `Status updated to ${status}` });
    } catch (error) {
        console.error("Error updating status:", error);
        res.status(500).json({ error: "Failed to update status" });
    }
};

const deleteApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const docRef = db.collection('applications').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            return res.status(404).json({ error: "Application not found" });
        }

        const appData = doc.data();

        // Delete from Firestore
        await docRef.delete();

        // Delete local resume file if exists
        if (appData.resumeURL) {
            const fs = require('fs');
            const path = require('path');
            const fileName = appData.resumeURL.replace('/uploads/', '');
            const filePath = path.join(__dirname, '../uploads', fileName);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }

        res.json({ message: "Application deleted successfully" });
    } catch (error) {
        console.error("Error deleting application:", error);
        res.status(500).json({ error: "Failed to delete application" });
    }
};

module.exports = { submitApplication, getApplications, updateStatus, deleteApplication };
