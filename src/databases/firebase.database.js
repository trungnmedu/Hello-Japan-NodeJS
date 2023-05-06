const admin = require("firebase-admin")

const serviceAccount = require("../../firebase-config.json")

admin.initializeApp(
    {
        credential: admin.credential.cert(serviceAccount),
        storageBucket: "hello-japan-exe.appspot.com"
    }
)

const FirebaseBucket = admin.storage().bucket()

module.exports = FirebaseBucket
