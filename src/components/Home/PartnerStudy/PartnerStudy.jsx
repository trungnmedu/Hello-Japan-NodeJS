
const PartnerStudy = () => {
    const partners = [
        {
            name: "EHLE Institute Japanese Language School",
            image: "https://yoko.edu.vn/wp-content/uploads/2021/11/EHLE-Institute-Japanese-Language-School.jpg"
        },
        {
            name: "TOUA International Language School",
            image: "https://yoko.edu.vn/wp-content/uploads/2021/11/TOUA-International-Language-School.jpg"
        },
        {
            name: " Unitas Japanese Langage School",
            image: "https://yoko.edu.vn/wp-content/uploads/2021/11/Unitas-Japanese-Langage-School.jpg"
        },
        {
            name: " Akamonkai Japanese Language School",
            image: "https://yoko.edu.vn/wp-content/uploads/2021/11/Akamonkai-Japanese-Language-School.jpg"
        },
        {
            name: " Asuka Gakuin Language Institute",
            image: "https://yoko.edu.vn/wp-content/uploads/2021/11/Asuka-Gakuin-Language-Institute.jpg"
        },
        {
            name: " Dynamic Business College",
            image: "https://yoko.edu.vn/wp-content/uploads/2021/11/Dynamic-Business-College.jpg"
        },
        {
            name: "EHLE Institute Japanese Language School",
            image: "https://yoko.edu.vn/wp-content/uploads/2021/11/EHLE-Institute-Japanese-Language-School.jpg"
        },
        {
            name: "EHLE Institute Japanese Language School",
            image: "https://yoko.edu.vn/wp-content/uploads/2021/11/EHLE-Institute-Japanese-Language-School.jpg"
        },
    ]
    return (
        <div className="py-10 bg-dark-blue">
            <div className="max-w-7xl px-5 mx-auto">
                <h1 className="font-semibold text-white text-2xl">ĐỐI TÁC </h1>
                <h1 className="font-semibold text-white text-xl">CỦA HELLO JAPAN</h1>
                <p className="mt-5 text-white">Hello Japan tự hào giới thiệu một số đối tác chiến lược của Trung tâm. Nhờ có các đối tác đầy uy tín, sứ mệnh kết nối văn hóa – giáo dục giữa Việt Nam và Nhật Bản của Trung tâm ngày càng được nâng lên một tầm cao mới.</p>

                <ul className="mt-10 grid grid-cols-4 gap-5">
                    {
                        partners.map(
                            (partner, index) => (
                                <li key={index} className="list-none p-2 bg-white space-y-2 rounded overflow-hidden shadow hover:cursor-pointer hover:scale-105 transition-all duration-300">
                                    <img className="block" alt='logo' src={partner.image} />
                                    <h2 className="text-center italic font-medium">{partner.name}</h2>
                                </li>
                            )
                        )
                    }

                </ul>
            </div>

        </div >
    )
}

export default PartnerStudy