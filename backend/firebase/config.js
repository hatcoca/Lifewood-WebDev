const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

// Use environment variables for key fields or fallback to local file (local dev only)
let serviceAccount;
try {
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    } else {
        // Fallback for local development
        serviceAccount = require('../serviceAccountKey.json');
    }
} catch (error) {
    console.error("CRITICAL: Firebase Service Account Key not found or invalid.");
    console.error("Please set FIREBASE_SERVICE_ACCOUNT_KEY environment variable.");
    // In production, we don't want to crash immediately during build, 
    // but the app will likely fail during first DB call if this is missing.
    serviceAccount = {};
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "lifewood-webdev.appspot.com"
});

const db = admin.firestore();
const bucket = admin.storage().bucket();
const auth = admin.auth();

module.exports = { admin, db, bucket, auth };
