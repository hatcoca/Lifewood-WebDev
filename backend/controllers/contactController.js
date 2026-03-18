const { db } = require('../firebase/config');
const { sendConfirmationEmail, notifyAdmin } = require('../services/emailService');

const submitContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newMessage = {
            name,
            email,
            subject,
            message,
            status: 'new',
            createdAt: new Date().toISOString()
        };

        const docRef = await db.collection('contact_messages').add(newMessage);

        // Send emails (background)
        sendConfirmationEmail(email, name, 'contact').catch(console.error);
        notifyAdmin({ ...newMessage, id: docRef.id }, 'contact').catch(console.error);

        res.status(201).json({ id: docRef.id, message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting contact:", error);
        res.status(500).json({ error: "Failed to submit message" });
    }
};

const getMessages = async (req, res) => {
    try {
        const snapshot = await db.collection('contact_messages').orderBy('createdAt', 'desc').get();
        const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ error: "Failed to fetch messages" });
    }
};

const markAsReplied = async (req, res) => {
    try {
        const { id } = req.params;
        await db.collection('contact_messages').doc(id).update({ status: 'replied' });
        res.json({ message: "Status updated to replied" });
    } catch (error) {
        console.error("Error updating status:", error);
        res.status(500).json({ error: "Failed to update status" });
    }
};

const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        await db.collection('contact_messages').doc(id).delete();
        res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
        console.error("Error deleting message:", error);
        res.status(500).json({ error: "Failed to delete message" });
    }
};

module.exports = { submitContact, getMessages, markAsReplied, deleteMessage };
