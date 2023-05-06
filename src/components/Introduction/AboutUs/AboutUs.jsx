
const AboutUs = () => {
    return (
        <>
            <div className="aspect-video select-none relative overflow-hidden">
                <img
                    className="block w-full h-full object-cover"
                    alt="Japan"
                    src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="max-w-7xl px-5 mx-auto w-fit p-8 space-y-5 bg-slate-800/80 rounded-xl">
                        <h2 className="text-white text-center font-medium text-3xl">"KHÁCH HÀNG LÀ TRỌNG TÂM - THÀNH CÔNG LÀ TẤT YẾU"</h2>
                        <p className="text-white text-lg">Hello Jpan là trung tâm tư vấn Du học Nhật Bản hoạt động tại Việt Nam. Tư vấn và xử lý hồ sơ thành công học viên, với tỷ lệ đỗ Visa luôn đảm bảo qua các kỳ là 95%.</p>
                        <p className="text-white text-lg">Bám sát các giá trị cốt lõi CHỦ ĐỘNG – CAM KẾT – SÁNG TẠO, Hello Japan tự tin với những giá trị trung tâm mang tới cho học viên trong suốt thời gian qua. Và tự hào viết tiếp hành trình của mình, với lớp lớp du học sinh đang trưởng thành từng ngày tại Nhật Bản.</p>
                    </div>
                </div>

            </div>
            <div className="py-8">
                <div className="max-w-7xl px-5 mx-auto grid grid-cols-2 gap-5">
                    <div className="space-y-4 self-center">
                        <h2 className="font-medium text-xl text-red-600">Lời ngỏ</h2>
                        <h2 className="font-medium text-2xl">TRUNG TÂM DU HỌC NHẬT BẢN HELLO JAPAN</h2>
                        <p>Được thành lập với sứ mệnh trở thành cầu nối văn hóa – giáo dục giữa Việt Nam và Nhật Bản. Trong suốt hơn 7 năm hoạt động. Đội ngũ Hello Japan đoàn kết và chung chí hướng, mang tới trải nghiệm và giá trị tốt nhất cho toàn bộ các học viên. </p>
                        <p>Với TẦM NHÌN được cụ thể hóa và SỨ MỆNH mang đầy cảm hứng. Hello Japan luôn cố gắng hoàn thiện từng ngày, đích đến cuối cùng là tạo ra các giải pháp đột phá về Du học Nhật Bản cho các học viên của trung tâm. Xa hơn nữa, Hello Japan mong muốn sẽ ghi tên mình vào tâm trí của khách hàng trên cả nước mỗi khi nhớ đến Du học Nhật Bản.</p>
                    </div>
                    <img
                        className="select-none w-8/12 mx-auto"
                        src="https://yoko.edu.vn/wp-content/uploads/2021/11/gioi-thieu-YOKO.jpg"
                    />
                </div>

            </div>
        </>
    )
}

export default AboutUs