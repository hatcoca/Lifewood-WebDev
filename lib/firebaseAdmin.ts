import admin from "firebase-admin";

const getServiceAccount = () => {
    // 1. Check for full JSON key first (BEST WAY)
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        try {
            console.log("FIREBASE: Using FIREBASE_SERVICE_ACCOUNT_KEY JSON");
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
        console.log("FIREBASE: Using individual environment variables");

        // Aggressive cleaning
        let privateKey = privateKeyRaw.trim();

        // Remove surrounding quotes
        if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
            privateKey = privateKey.substring(1, privateKey.length - 1);
        }
        if (privateKey.startsWith("'") && privateKey.endsWith("'")) {
            privateKey = privateKey.substring(1, privateKey.length - 1);
        }

        // Fix newlines
        privateKey = privateKey.replace(/\\n/g, "\n");

        // Ensure headers are present
        if (!privateKey.includes("-----BEGIN PRIVATE KEY-----")) {
            // Remove any existing manual headers or whitespace
            privateKey = privateKey.replace(/-----BEGIN PRIVATE KEY-----/g, "").replace(/-----END PRIVATE KEY-----/g, "").trim();
            privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----`;
        }

        // Return object with BOTH camelCase and snake_case to be 100% safe
        return {
            projectId,
            clientEmail,
            privateKey,
            project_id: projectId,
            client_email: clientEmail,
            private_key: privateKey
        };
    }

    // Log failures
    if (process.env.NODE_ENV === "production" && !process.env.NEXT_PHASE) {
        const missing = [];
        if (!projectId) missing.push("FIREBASE_PROJECT_ID");
        if (!clientEmail) missing.push("FIREBASE_CLIENT_EMAIL");
        if (!privateKeyRaw) missing.push("FIREBASE_PRIVATE_KEY");
        console.error(`FIREBASE Error: Missing environment variables: ${missing.join(", ")}`);
    }

    return null;
};

const initAdmin = () => {
    if (admin.apps.length > 0) return admin.apps[0];

    const serviceAccount = getServiceAccount();

    if (serviceAccount) {
        try {
            console.log("FIREBASE: Initializing Admin SDK...");
            return admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "lifewood-webdev.appspot.com",
            });
        } catch (error: any) {
            console.error("FIREBASE: Initialization error:", error.message);
            // This error will be caught by the API route and shown to the user
            throw new Error(`Firebase Auth Failed: ${error.message}. Check your Private Key!`);
        }
    }

    // Fallback for build time
    return admin.initializeApp({
        projectId: "build-time-dummy",
        storageBucket: "build-time-dummy.appspot.com",
    });
};

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

export const db = admin.apps.length ? admin.firestore(admin.apps[0]) : (null as any);
export const bucket = admin.apps.length ? admin.storage(admin.apps[0]).bucket() : (null as any);
