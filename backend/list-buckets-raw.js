const { Storage } = require('@google-cloud/storage');
const serviceAccount = require('./serviceAccountKey.json');

const storage = new Storage({
    projectId: serviceAccount.project_id,
    credentials: {
        client_email: serviceAccount.client_email,
        private_key: serviceAccount.private_key,
    },
});

async function listBuckets() {
    try {
        const [buckets] = await storage.getBuckets();
        console.log('Available buckets:');
        buckets.forEach((bucket) => {
            console.log(bucket.name);
        });
        process.exit(0);
    } catch (err) {
        console.error('ERROR:', err);
        process.exit(1);
    }
}

listBuckets();
