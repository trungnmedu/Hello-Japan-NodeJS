import introduceImage from '@assets/images/home/introduce_hello_japan.png'
const Introduce = () => {
    return (
        <div className="py-10">
            <div className="max-w-7xl px-5 mx-auto">
                <div className="grid grid-cols-12 gap-5">

                    <div className="col-span-8">
                        <h1 className="font-semibold text-cyan-900 text-2xl">ĐÔI NÉT VỀ</h1>
                        <h1 className="font-semibold text-cyan-900 text-2xl">TRUNG TÂM NHẬT BẢN HELLO JAPAN</h1>

                        <h5 className="mt-2 font-medium italic text-cyan-900">Công Ty TNHH Tư Vấn Và Dịch Vụ Việt Nhật Hello Japan Kính Chào Quý Khách!</h5>
                        <p className="mt-4">Trung tâm Du học Nhật Bản Hello Japan là đơn vị chuyên về tư vấn Du học Nhật Bản tại Việt Nam. Trong suốt gần 10 năm hoạt động của mình, Hello Japan luôn là một trong những thương hiệu có uy tín nhất theo đánh giá của Khách hàng và Đối tác. Trải qua quãng thời gian hơn 8 năm, hiện tại Hello Japan đã thành công trong việc giúp hơn 5000 học viên được học tập, sinh sống và làm việc tại Nhật Bản.</p>
                        <p className="mt-4">Đến với Trung tâm Hello Japan, các học viên sẽ luôn nhận được sự tư vấn nhiệt tình, hiệu quả cho từng trường hợp. Hello Japan cũng là đơn vị đầu tiên tại Việt Nam cam kết MIỄN 100% PHÍ TƯ VẤN và PHÍ XỬ LÝ HỒ SƠ cho học viên. Với TẦM NHÌN, SỨ MỆNH, và bộ GIÁ TRỊ CỐT LÕI được định hướng rõ ràng. Chúng tôi tự hào mang tới cho học viên sự hỗ trợ tốt nhất, là chỗ dựa vững chắc cho những bước chân đầu tiên hướng tới giấc mơ Du học Nhật Bản của học viên.</p>
                    </div>
                    <div className="col-span-4">
                        <img
                            className="block w-full h-full rounded object-contain"
                            src={introduceImage}
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Introduce