import instance from '@middleware/request'

const postRequestConsultancy = async (payload) => {
    const { data } = await instance.post(
        '/consultancy',
        payload
    )
    return data
}

export {
    postRequestConsultancy
}

