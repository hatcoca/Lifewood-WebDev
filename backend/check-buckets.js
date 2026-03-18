const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const storage = admin.storage();

async function checkBuckets() {
    try {
        const [buckets] = await admin.storage().getBuckets();
        console.log("Available buckets:");
        buckets.forEach(bucket => {
            console.log(bucket.name);
        });
        process.exit(0);
    } catch (error) {
        console.error("Error listing buckets:", error);
        process.exit(1);
    }
}

checkBuckets();
