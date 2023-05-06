const steps = [
    {
        name: "Bước 1",
        description: "Nạp giấy tờ cái nhân",
    },
    {
        name: "Bước 2",
        description: "Liên công ty Nhật để phỏng vấn.",
    },
    {
        name: "Bước 3",
        description: "Xử lý hồ sơ và đăng ký giảng dạy và thi JLPT.",
    },
    {
        name: "Bước 4",
        description: "Nạp hồ sơ và bằng JLPT sang công ty Nhật.",
    },
    {
        name: "Bước 5",
        description: "Công ty Nhật nộp hồ sơ lên cục xuất nhập cảnh và xin giấy COE.",
    },
    {
        name: "Bước 6",
        description: "Công ty Nhật gửi bản sao COE, giấy nạp học phí cho trung tâm.",
    },
    {
        name: "Bước 7",
        description: "Nạp các chi phí lên quan.",
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
const Procedure = () => {
    return (
        <section id="procedure">
            <div className="max-w-7xl px-5 mx-auto space-y-5 pt-20">
                <div className='px-10 py-2 bg-orange-600 rounded-3xl mx-auto w-fit'>
                    <span className='text-white text-2xl font-semibold'>Phần II</span>
                </div>
                <h2 className='text-aqua text-2xl font-semibold text-center'>THỦ TỤC</h2>
            </div>

            <div className="max-w-7xl px-5 mx-auto pt-20">

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
                    <div className="w-full h-full">
                        <img
                            className="block h-full object-cover object-right rounded shadow-lg"
                            src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                            alt=""
                        />

                    </div>
                </div>
            </div>


        </section>
    )
}

export default Procedure