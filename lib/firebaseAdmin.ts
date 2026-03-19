import admin from "firebase-admin";

const getServiceAccount = () => {
    // 1. Check for full JSON key first
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        try {
            return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
        } catch (e) {
            console.error("FIREBASE: Failed to parse SERVICE_ACCOUNT_KEY JSON");
        }
    }

    // 2. Check for individual components
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;

    if (projectId && clientEmail && privateKeyRaw) {
        let privateKey = privateKeyRaw.trim().replace(/\\n/g, "\n");

        if (!privateKey.includes("-----BEGIN PRIVATE KEY-----")) {
            privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----`;
        }

        return {
            projectId,
            clientEmail,
            privateKey,
        };
    }

    // Log missing variables at runtime to help the user
    const missing = [];
    if (!projectId) missing.push("FIREBASE_PROJECT_ID");
    if (!clientEmail) missing.push("FIREBASE_CLIENT_EMAIL");
    if (!privateKeyRaw) missing.push("FIREBASE_PRIVATE_KEY");

    if (missing.length > 0 && process.env.NODE_ENV === "production" && !process.env.NEXT_PHASE) {
        console.error(`FIREBASE Error: Missing environment variables: ${missing.join(", ")}`);
    }

    return null;
};

const initAdmin = () => {
    if (admin.apps.length > 0) return admin.apps[0];

    const serviceAccount = getServiceAccount();

    if (serviceAccount) {
        try {
            return admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "lifewood-webdev.appspot.com",
            });
        } catch (error) {
            console.error("FIREBASE: Initialization error:", error);
            throw error;
        }
    }

    // Fallback for build time
    return admin.initializeApp({
        projectId: "build-time-dummy",
        storageBucket: "build-time-dummy.appspot.com",
    });
};

// Lazy-loaded exports to prevent crashes during static build/collecting page data
export const getFirestore = () => {
    const app = admin.apps.length ? admin.apps[0] : initAdmin();
    return admin.firestore(app);
};

export const getStorage = () => {
    const app = admin.apps.length ? admin.apps[0] : initAdmin();
    return admin.storage(app);
};

export const getAuth = () => {
    const app = admin.apps.length ? admin.apps[0] : initAdmin();
    return admin.auth(app);
};

// Legacy support if they are used directly
export const db = admin.apps.length ? admin.firestore(admin.apps[0]) : (null as any);
export const bucket = admin.apps.length ? admin.storage(admin.apps[0]).bucket() : (null as any);
