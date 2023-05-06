const admin = require("firebase-admin")

const firebaseConfig = require("../../firebase-config.json")

admin.initializeApp(
    {
        credential: admin.credential.cert(firebaseConfig),
        storageBucket: "hello-japan-exe.appspot.com"
    }
)

const FirebaseBucket = admin.storage().bucket()

module.exports = FirebaseBucket
