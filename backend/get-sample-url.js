const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function listCollections() {
    try {
        const collections = await db.listCollections();
        // The original instruction provided a code snippet that referenced 'snapshot'
        // which was not defined in the context of this function.
        // To make the code syntactically correct and fulfill the spirit of printing JSON data,
        // I will assume the intent was to fetch a document from one of the collections
        // and print its data.
        // For demonstration, let's try to get the first document from the first collection found.
        if (collections.length > 0) {
            const firstCollectionId = collections[0].id;
            const snapshot = await db.collection(firstCollectionId).limit(1).get();

            if (!snapshot.empty) {
                const docData = snapshot.docs[0].data();
                console.log("Full Message Data:", JSON.stringify(docData, null, 2));
            } else {
                console.log(`Collection '${firstCollectionId}' is empty.`);
            }
        } else {
            console.log("No collections found.");
        }
        process.exit(0);
    } catch (error) {
        console.error("Error listing collections or fetching document:", error);
        process.exit(1);
    }
}

listCollections();
