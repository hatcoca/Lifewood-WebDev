import admin from "firebase-admin";

const getServiceAccount = () => {
    // 1. Check for full JSON key first
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        try {
            console.log("FIREBASE DEBUG: Attempting to parse FIREBASE_SERVICE_ACCOUNT_KEY");
            const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

            if (sa && typeof sa === 'object') {
                console.log("FIREBASE DEBUG: JSON parse successful. Keys found:", Object.keys(sa));
                // Aggressively clean the private_key field from JSON
                if (sa.private_key) {
                    let pk = sa.private_key.trim();
                    pk = pk.replace(/\\n/g, "\n");

                    pk = pk
                        .replace(/-----BEGIN PRIVATE KEY-----/g, "")
                        .replace(/-----END PRIVATE KEY-----/g, "")
                        .replace(/-----BEGIN RSA PRIVATE KEY-----/g, "")
                        .replace(/-----END RSA PRIVATE KEY-----/g, "")
                        .replace(/\s+/g, "") // Remove ALL spaces/newlines
                        .trim();

                    sa.private_key = `-----BEGIN PRIVATE KEY-----\n${pk}\n-----END PRIVATE KEY-----`;
                }
                return sa;
            }
        } catch (e: any) {
            console.error("FIREBASE DEBUG: JSON Parse Error:", e.message);
        }
    }

    // 2. Check for individual components
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;

    if (projectId && clientEmail && privateKeyRaw) {
        console.log("FIREBASE DEBUG: Using individual variables");

        // Ultra-aggressive cleaning
        let pk = privateKeyRaw.trim();
        pk = pk.replace(/\\n/g, "\n");
        pk = pk
            .replace(/-----BEGIN PRIVATE KEY-----/g, "")
            .replace(/-----END PRIVATE KEY-----/g, "")
            .replace(/\s+/g, "")
            .trim();

        const privateKey = `-----BEGIN PRIVATE KEY-----\n${pk}\n-----END PRIVATE KEY-----`;

        return {
            projectId,
            clientEmail,
            privateKey,
            project_id: projectId,
            client_email: clientEmail,
            private_key: privateKey
        };
    }

    console.log("FIREBASE DEBUG: No credential variables found in process.env");
    return null;
};

const initAdmin = () => {
    // If already initialized, return existing
    if (admin.apps.length > 0) {
        return admin.apps[0];
    }

    const serviceAccount = getServiceAccount();

    if (serviceAccount) {
        try {
            console.log("FIREBASE DEBUG: Calling initializeApp with credential object...");
            return admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "lifewood-webdev.appspot.com",
            });
        } catch (error: any) {
            console.error("FIREBASE DEBUG: Init Error:", error.message);
            throw new Error(`Firebase Auth Failed: ${error.message}`);
        }
    }

    // Fallback for build time ONLY (prevents crash during static site generation)
    console.log("FIREBASE DEBUG: Returning dummy app for build-time safety");
    return admin.initializeApp({
        projectId: "build-time-dummy",
        storageBucket: "build-time-dummy.appspot.com",
    });
};

// Exports
export const getFirestore = () => {
    const app = admin.apps.length ? admin.apps[0] : initAdmin();
    return admin.firestore(app!);
};

export const getStorage = () => {
    const app = admin.apps.length ? admin.apps[0] : initAdmin();
    return admin.storage(app!);
};

export const getAuth = () => {
    const app = admin.apps.length ? admin.apps[0] : initAdmin();
    return admin.auth(app!);
};

// Legacy exports
export const db = (null as any);
export const bucket = (null as any);
