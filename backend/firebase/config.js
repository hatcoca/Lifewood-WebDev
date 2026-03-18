const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

// Use environment variables for key fields or fallback to local file (local dev only)
let serviceAccount;
try {
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        console.log("Attempting to parse FIREBASE_SERVICE_ACCOUNT_KEY from environment...");
        serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
        console.log("Firebase Service Account Key successfully parsed.");
    } else {
        console.log("FIREBASE_SERVICE_ACCOUNT_KEY not found in environment, falling back to local file...");
        serviceAccount = require('../serviceAccountKey.json');
    }
} catch (error) {
    console.error("CRITICAL ERROR in Firebase initialization:");
    console.error("- Error Message:", error.message);
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        console.error("- Hint: Check if the FIREBASE_SERVICE_ACCOUNT_KEY variable in Render is valid JSON (it must start with { and end with }).");
    }
    // We still have to set something, but the app will crash at startup if this is invalid.
    serviceAccount = null;
}

if (!serviceAccount) {
    console.error("App will now exit because Firebase credentials are required.");
    process.exit(1);
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "lifewood-webdev.appspot.com"
});

const db = admin.firestore();
const bucket = admin.storage().bucket();
const auth = admin.auth();

module.exports = { admin, db, bucket, auth };
