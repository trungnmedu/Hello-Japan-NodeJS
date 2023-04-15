const FirebaseBucket = require("@databases/firebase.database")

class BucketFirebaseService {
    static async uploadFile(file) {
        const time = Date.now().toString()
        const { mimetype, originalname, buffer } = file

        const fileName = `${time}-${originalname}`
        const fileUpload = FirebaseBucket.file(fileName)

        return new Promise(
            (resolve, reject) => {

                const stream = fileUpload.createWriteStream(
                    {
                        metadata: {
                            contentType: mimetype
                        },
                        resumable: false
                    }
                )

                stream.on(
                    "error",
                    (error) => {
                        reject(error)
                    }
                )

                stream.on(
                    "finish",
                    async () => {
                        const url = `https://firebasestorage.googleapis.com/v0/b/hello-japan-exe.appspot.com/o/${fileName}?alt=media`
                        resolve(url)
                    }
                )

                stream.end(buffer)
            }
        )

    }

}


module.exports = BucketFirebaseService