import instance from "@middleware/request";


const getProfile = async () => {
    const { data } = await instance.get('/me')
    return data
}

const googleSignIn = async (payload) => {
    const { data } = await instance.post(
        '/google-auth',
        payload
    )
    return data
}

export {
    getProfile,
    googleSignIn
};

