
const Price = () => {
    return (
        <section id="price">

            <div className="max-w-7xl px-5 mx-auto space-y-2">
                <div className='px-10 py-2 bg-white rounded-3xl mx-auto w-fit'>
                    <span className='text-aqua text-2xl font-semibold'>Phần II</span>
                </div>
                <h2 className='text-catalina-blue text-2xl font-semibold text-center'>CHI PHÍ XKLĐ NHẬT BẢN</h2>
                <h2 className='text-catalina-blue text-2xl  text-center'>2023</h2>
            </div>

            <div className="max-w-7xl px-5 mx-auto mt-10">
                <h2 className="text-xl text-center font-medium bg-black text-white py-1.5">BẢNG CHI PHÍ DU HỌC TỰ TÚC TẠI TRUNG TÂM DU HỌC NHẬT BẢN</h2>
                <div className="text-white grid grid-cols-12 bg-slate-700">
                    <div className="col-span-1 text-center font-medium py-1.5 border-r">STT</div>
                    <div className="col-span-8 text-center font-medium py-1.5 border-r">CÁC HẠNG MỤC CHI PHÍ</div>
                    <div className="col-span-3 text-center font-medium py-1.5">SỐ TIỀN (VNĐ)</div>
                </div>

                <ul className="list-none">
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">01</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Giới thiệu về Nhật Bản và tư vấn thủ tục xuất khẩu lao động.</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">02</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Tư vấn chọn đơn hàng theo khả năng.</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">03</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Chi phí khám sức khoẻ.</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">1.000.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">04</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Chi phí đăng ký hồ sơ giấy tờ, dịch thuật.</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">4.000.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">05</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Học phí lớp đào tạo trước thi tuyển.</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">4.000.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">06</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Khóa học bổ trợ online.</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">200.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">07</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Phí đào tạo tay nghề</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">0</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">08</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Tiền KTX(bắt buộc sau khi đỗ phỏng vấn)</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">4.800.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">09</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Phí xin tư cách lưu trú</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">37.900.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">10</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Phí xin visa</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">650.000</div>
                    </li>
                    <li className="text-black grid grid-cols-12 bg-white last:border-b-0 border-b">
                        <div className="col-span-1 text-center py-1.5 font-medium border-r">11</div>
                        <div className="col-span-8 px-5 py-1.5 font-medium border-r">Vé máy bay</div>
                        <div className="col-span-3 text-center py-1.5 font-medium border-r">15.000.000</div>
                    </li>
                </ul>


                <div className="text-white mt-5 bg-slate-700">
                    <h3 className="col-span-3 text-center font-medium py-1.5">TỔNG CHI PHÍ: 64.550.000 VNĐ</h3>
                </div>
            </div>

        </section>
    )
}

export default Price