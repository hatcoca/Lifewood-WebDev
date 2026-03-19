import admin from "firebase-admin";

const getServiceAccount = () => {
    // 1. Check for full JSON key first (BEST WAY)
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        try {
            console.log("FIREBASE: Using FIREBASE_SERVICE_ACCOUNT_KEY JSON");
            const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

            // Aggressively clean the private_key field from JSON to fix ASN.1 errors
            if (sa.private_key) {
                sa.private_key = sa.private_key.trim();
                sa.private_key = sa.private_key.replace(/\\n/g, "\n");

                // Remove existing headers and re-wrap to ensure perfect PEM format
                sa.private_key = sa.private_key
                    .replace(/-----BEGIN PRIVATE KEY-----/g, "")
                    .replace(/-----END PRIVATE KEY-----/g, "")
                    .replace(/-----BEGIN RSA PRIVATE KEY-----/g, "")
                    .replace(/-----END RSA PRIVATE KEY-----/g, "")
                    .trim();

                sa.private_key = `-----BEGIN PRIVATE KEY-----\n${sa.private_key}\n-----END PRIVATE KEY-----`;
            }
            return sa;
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

        // AGGRESSIVE CLEANING to fix ASN.1 / Unparsed DER error
        let privateKey = privateKeyRaw.trim();

        // Remove surrounding quotes (common Vercel copy-paste issue)
        if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
            privateKey = privateKey.substring(1, privateKey.length - 1);
        }
        if (privateKey.startsWith("'") && privateKey.endsWith("'")) {
            privateKey = privateKey.substring(1, privateKey.length - 1);
        }

        // Fix escaped newlines
        privateKey = privateKey.replace(/\\n/g, "\n");

        // REMOVE all existing headers/footers to avoid duplicates or extra newlines
        // We look for any combination of BEGIN/END and PRIVATE KEY and strip them
        privateKey = privateKey
            .replace(/-----BEGIN PRIVATE KEY-----/g, "")
            .replace(/-----END PRIVATE KEY-----/g, "")
            .replace(/-----BEGIN RSA PRIVATE KEY-----/g, "")
            .replace(/-----END RSA PRIVATE KEY-----/g, "")
            .trim();

        // Final wrap with EXACTLY one newline between header and content, and content and footer
        privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----`;

        // Return object with BOTH camelCase and snake_case for maximum compatibility
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

        if (missing.length > 0) {
            console.error(`FIREBASE Error: Missing environment variables: ${missing.join(", ")}`);
            throw new Error(`FIREBASE Error: Missing Vercel variables: ${missing.join(", ")}`);
        }
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
