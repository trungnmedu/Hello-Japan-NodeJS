import instance from "@middleware/request"

const getAllPartnerStudy = async () => {
    const { data } = await instance.get('/partner-study')
    return data
}

export {
    getAllPartnerStudy
}

