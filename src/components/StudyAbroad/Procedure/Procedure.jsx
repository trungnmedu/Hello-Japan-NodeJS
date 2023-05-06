const steps = [
    {
        name: "Bước 1",
        description: "Nạp giấy tờ cái nhân",
    },
    {
        name: "Bước 2",
        description: "Liên hệ trường nhật ngữ để phỏng vấn.",
    },
    {
        name: "Bước 3",
        description: "Xử lý hồ sơ và đăng ký thi JLPT.",
    },
    {
        name: "Bước 4",
        description: "Nạp hồ sơ và bằng JLPT sang trường nhật ngữ.",
    },
    {
        name: "Bước 5",
        description: "Trường nhật ngữ nộp hồ sơ lên cục xuất nhập cảnh và xin giấy COE.",
    },
    {
        name: "Bước 6",
        description: "Trường gửi bản sao COE, giấy nạp học phí cho trung tâm.",
    },
    {
        name: "Bước 7",
        description: "Du học sinh nộp học phí.",
    },
    {
        name: "Bước 8",
        description: "Nhận COE gốc và trung tâm làm thủ tục xin visa.",
    },
    {
        name: "Bước 9",
        description: "Xác nhận ngày sang nhật.",
    }
]

const Step = () => {
    return (
        <div className="max-w-7xl px-5 mx-auto pt-10 space-y-10 pb-8 border-b border-dashed">

            <div className="space-y-5">
                <div className='px-10 py-2 bg-orange-600 rounded-3xl mx-auto w-fit'>
                    <span className='text-white text-2xl font-semibold'>Phần V</span>
                </div>
                <h2 className='text-2xl font-semibold text-center'>QUY TRÌNH XỬ LÝ HỒ SƠ DU HỌC NHẬT BẢN</h2>
                <h2 className='text-2xl text-center text-aqua italic'>2023</h2>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <ul className="list-none">
                    {
                        steps.map(
                            (step, index) => (
                                <li key={index} className="relative">
                                    <div className="absolute z-0 top-0 left-5 -translate-x-1/2 w-0.25 h-full bg-ice-blue"></div>

                                    <div className="space-x-4 flex relative z-10">
                                        <div className="w-10 h-10 p-2 aspect-square border flex justify-center items-center rounded-full bg-white">
                                            <svg className="w-4 text-gray-600" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" >
                                                <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22" />
                                                <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15" />
                                            </svg>
                                        </div>

                                        <div className="w-full overflow-hidden pb-4">
                                            <p className="mb-2 text-lg font-bold">{step.name}</p>
                                            <p className="text-gray-700">{step.description}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        )
                    }

                    <li>
                        <div className="space-x-4 flex">
                            <div className="w-10 h-10 p-2 aspect-square border flex justify-center items-center rounded-full bg-green-500 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <p className="self-center text-lg font-bold">Hoàn thành</p>
                        </div>
                    </li>
                </ul>
                <img
                    className="block w-full h-full object-cover object-bottom rounded shadow-lg"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                />
            </div>
        </div>
    )
}


const Procedure = () => {
    return (
        <section id="procedure" className="space-y-5">
            <div className="bg-aqua">
                <div className="max-w-7xl py-20 px-5 mx-auto space-y-5">
                    <div className='px-10 py-2 bg-white rounded-3xl mx-auto w-fit'>
                        <span className='text-aqua text-2xl font-semibold'>Phần V</span>
                    </div>
                    <h2 className='text-white text-2xl font-semibold text-center'>HỒ SƠ DU HỌC NHẬT BẢN GỒM NHỮNG GÌ??</h2>
                </div>
            </div>

            <div className="max-w-7xl px-5 mx-auto space-y-5 pb-8 border-b border-dashed">
                <div className="flex justify-center items-center space-x-2">
                    <span className="h-0.5 w-5 bg-aqua"></span>
                    <h2 className="font-medium text-3xl text-aqua">01</h2>
                    <span className="h-0.5 w-5 bg-aqua"></span>
                </div>
                <h2 className="font-medium text-2xl text-center text-aqua">GIẤY TỜ CÁ NHÂN</h2>

                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-5">
                        <h2 className="w-fit mx-auto px-8 py-2 rounded-3xl bg-aqua text-xl text-white">ẢNH</h2>
                        <img
                            alt='Japan'
                            className="block mx-auto"
                            src='https://yoko.edu.vn/wp-content/uploads/2022/03/cam-nang-du-hoc-nhat-phan-VII-1.png'
                        />
                        <p>Nền trắng, áo trắng.</p>
                        <p>Kích thước: 3x4cm (12 chiếc), 4x6cm (12 chiếc), 4,5×4,5 (2 chiếc)</p>
                    </div>

                    <div className="space-y-5">
                        <h2 className="w-fit mx-auto px-8 py-2 rounded-3xl bg-aqua text-xl text-white">CĂN CƯỚC CÔNG DÂN</h2>
                        <img
                            alt='Japan'
                            className="block mx-auto"
                            src='https://yoko.edu.vn/wp-content/uploads/2022/03/cam-nang-du-hoc-nhat-phan-VII-2.png'
                        />
                        <p>Của học viên và người bảo lãnh: mỗi CCCD cần 2 bản photo công chứng (2 mặt chứng minh thư phải nằm trên cùng 1 mặt của tờ A4).</p>
                    </div>

                    <div className="space-y-5">
                        <h2 className="w-fit mx-auto px-8 py-2 rounded-3xl bg-aqua text-xl text-white">SỔ HỘ KHẨU</h2>
                        <img
                            alt='Japan'
                            className="block mx-auto"
                            src='https://yoko.edu.vn/wp-content/uploads/2022/03/cam-nang-du-hoc-nhat-phan-VII-3.png'
                        />
                        <p>Hộ khẩu: Đầy đủ thông tin của gia đình học viên, 2 bản photo công chứng</p>
                        <p>Hộ chiếu: 1 bản gốc (còn thời hạn).</p>
                    </div>

                    <div className="space-y-5">
                        <h2 className="w-fit mx-auto px-8 py-2 rounded-3xl bg-aqua text-xl text-white">GIẤY KHAI SINH</h2>
                        <img
                            alt='Japan'
                            className="block mx-auto"
                            src='https://yoko.edu.vn/wp-content/uploads/2022/03/cam-nang-du-hoc-nhat-phan-VII-4.png'
                        />
                        <p>02 bản photo công chứng (công chứng trong vòng 3 tháng tính từ ngày nộp hồ sơ lên Cục xuất nhập cảnh).</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl px-5 mx-auto space-y-5 pb-8 border-b border-dashed">
                <div className="flex justify-center items-center space-x-2">
                    <span className="h-0.5 w-5 bg-aqua"></span>
                    <h2 className="font-medium text-3xl text-aqua">02</h2>
                    <span className="h-0.5 w-5 bg-aqua"></span>
                </div>
                <h2 className="font-medium text-2xl text-center text-aqua">BẰND CẤP HỌC VẤN</h2>

                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-5 flex flex-col">
                        <h2 className="w-fit mx-auto px-8 py-2 rounded-3xl bg-aqua text-xl text-white">BẰNG CẤP</h2>
                        <div className="space-y-5 p-5 bg-aqua text-white grow">
                            <p>Bằng tốt nghiệp THPT hoặc giấy chứng nhận tốt nghiệp tạm thời.</p>
                            <p>Bằng tốt nghiệp Trung Cấp/ Cao đẳng/Đại học (nếu đã tốt nghiệp) Hoặc giấy xác nhận sinh viên, thẻ sinh viên (nếu chưa tốt nghiệp).</p>
                            <p>Số lượng: 1 bản gốc, 2 bản photo công chứng</p>
                        </div>
                    </div>

                    <div className="space-y-5 flex flex-col">
                        <h2 className="w-fit mx-auto px-8 py-2 rounded-3xl bg-aqua text-xl text-white">HỌC BẠ VÀ HÀNH KIỂM</h2>
                        <div className="space-y-5 p-5 bg-aqua text-white grow">
                            <p> Học bạ cấp 3 hoặc bảng điểm Trung cấp/Cao đẳng/Đại học.</p>
                            <p>Số lượng: 1 bản gốc, 2 bản photo công chứng</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-w-7xl px-5 mx-auto space-y-5">
                <div className="flex justify-center items-center space-x-2">
                    <span className="h-0.5 w-5 bg-aqua"></span>
                    <h2 className="font-medium text-3xl text-aqua">03</h2>
                    <span className="h-0.5 w-5 bg-aqua"></span>
                </div>
                <h2 className="font-medium text-2xl text-center text-aqua">CHỨNG MINH TÀI CHÍNH</h2>

                <p>Sổ tiết kiệm: trên 500.000.000 VNĐ</p>
                <p>Chứng minh thu nhập: trên 320.000.000 VNĐ</p>
                <p className="font-medium">Liên hệ với trung tâm tư vấn du học để được hướng dẫn cụ thể nhất.</p>
            </div>

            <Step />

        </section>
    )
}

export default Procedure