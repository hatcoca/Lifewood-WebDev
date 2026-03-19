import admin from "firebase-admin";

let serviceAccount;
if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    try {
        serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    } catch (e) {
        console.error("FIREBASE: Failed to parse SERVICE_ACCOUNT_KEY");
        serviceAccount = null;
    }
} else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
    serviceAccount = {
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    };
}

const getAdminApp = () => {
    if (admin.apps.length > 0) return admin.apps[0];

    if (serviceAccount) {
        return admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "lifewood-webdev.appspot.com",
        });
    } else {
        // Fallback for build time if env vars are missing
        return admin.initializeApp({
            projectId: "build-time-dummy",
            storageBucket: "build-time-dummy.appspot.com",
        });
    }
};

const app = getAdminApp();

export const db = admin.firestore(app);
export const bucket = admin.storage(app).bucket();
export const auth = admin.auth(app);
