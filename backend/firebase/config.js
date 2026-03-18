const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

// The service account key should be provided by the user in a file or env var
// For implementation, we assume it exists in serviceAccountKey.json
// Or we use environment variables for key fields
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
    ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
    : require('../serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "lifewood-webdev.appspot.com"
});

const db = admin.firestore();
const bucket = admin.storage().bucket();
const auth = admin.auth();

module.exports = { admin, db, bucket, auth };
