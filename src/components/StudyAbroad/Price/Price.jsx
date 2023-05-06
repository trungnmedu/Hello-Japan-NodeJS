
const Price = () => {
    return (
        <section className="py-20 bg-ice-blue space-y-5" id="price">
            <div className="max-w-7xl px-5 mx-auto space-y-5">
                <div className='px-10 py-2 bg-dark-blue rounded-3xl mx-auto w-fit'>
                    <span className='text-white text-2xl font-semibold'>Phần IV</span>
                </div>
                <h2 className='text-2xl font-semibold text-center'>CHI PHÍ DU HỌC NHẬT BẢN</h2>
                <h2 className='text-2xl text-center text-aqua italic'>2023</h2>
            </div>

            <div className="max-w-7xl px-5 mx-auto">
                <h2 className="text-xl text-center font-medium bg-black text-white py-1.5">BẢNG CHI PHÍ DU HỌC TỰ TÚC TẠI TRUNG TÂM DU HỌC NHẬT BẢN</h2>
                <div className="text-white grid grid-cols-12 bg-slate-700">
                    <div className="col-span-1 text-center font-medium py-1.5 border-r">STT</div>
                    <div className="col-span-8 text-center font-medium py-1.5 border-r">CÁC HẠNG MỤC CHI PHÍ</div>
                    <div className="col-span-3 text-center font-medium py-1.5">SỐ TIỀN (VNĐ)</div>
                </div>

                <div className="text-white grid grid-cols-12 bg-blue-gray py-1.5 ">
                    <div className="col-span-1 text-center font-medium">I</div>
                    <div className="col-span-8 px-5 font-medium">Tư vấn du học</div>
                </div>

                <ul className="list-none">
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">01</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Giới thiệu về Nhật Bản và tư vấn thủ tục du học</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">02</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Tư vấn lộ trình du học phù hợp với khả năng</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">03</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Tư vấn chọn trường Nhật ngữ</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                </ul>

                <div className="text-white grid grid-cols-12 bg-blue-gray py-1.5 ">
                    <div className="col-span-1 text-center font-medium">II</div>
                    <div className="col-span-8 px-5 font-medium">Đánh giá năng lực tiếng Nhật</div>
                </div>

                <ul className="list-none">
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">01</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Kiểm tra trình độ tiếng Nhật hiện tại</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">02</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Liên hệ trường Nhật ngữ, sắp xếp lịch phỏng vấn</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">03</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Đào tạo tiếng Nhật cho người mới bắt đầu (từ chưa biết gì lên N4)</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">10.300.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">04</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Thi chứng chỉ Năng lực tiếng Nhật (các kỳ thi tổ chức tại Việt Nam)</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">700.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">05</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Luyện phỏng vấn với trường Nhật ngữ cho từng học viên</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                </ul>

                <div className="text-white grid grid-cols-12 bg-blue-gray py-1.5 ">
                    <div className="col-span-1 text-center font-medium">III</div>
                    <div className="col-span-8 px-5 font-medium">Tư vấn xử lý hồ sơ</div>
                </div>

                <ul className="list-none">
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">01</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Xét duyệt hồ sơ ban đầu</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">02</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Nhận định, tư vấn phương án hồ sơ phù hợp với từng học viên</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">03</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Hoàn thiện hồ sơ du học</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">04</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Hướng dẫn phỏng vấn xin Visa cho từng học viên</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">05</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Xin xác thực bằng tốt nghiệp cao nhất</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">750.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">06</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Xin xác thực bằng tốt nghiệp THPT</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">250.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">07</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Phí xin Visa tại Đại sứ quán Nhật Bản tại Việt Nam</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">930.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">08</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Phí chuyển phát nhanh hồ sơ sang trường</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">750.000</div>
                    </li>
                </ul>

                <div className="text-white grid grid-cols-12 bg-blue-gray py-1.5 ">
                    <div className="col-span-1 text-center font-medium">IV</div>
                    <div className="col-span-8 px-5 font-medium">Chuẩn bị trước khi sang Nhật</div>
                </div>

                <ul className="list-none">
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">01</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Luyện phỏng vấn với cục Xuất Nhập cảnh</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">02</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Đào tạo kỹ năng phỏng vấn, xin việc tại Nhật Bản</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">03</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Học phí năm đầu tiên tại trường Nhật ngữ (nộp sau khi có COE)</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">130.000.000 - 170.000.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">04</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Làm thủ tục xuất cảnh và tiễn học viên tại sân bay Việt Nam</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                </ul>
                <div className="text-white mt-5 bg-slate-700">
                    <h3 className="col-span-3 text-center font-medium py-1.5">TỔNG CHI PHÍ: 143.680.000 - 183.680.000 VNĐ</h3>
                </div>
            </div>

        </section>
    )
}

export default Price