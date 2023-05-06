import { useState } from "react"

const StudyAboardProcedure = () => {
    return (
        <div className="">

        </div>
    )
}



const AdminStudyAboardProcedure = () => {
    const [loading, setLoading] = useState(true)
    const [consultancies, setConsultancies] = useState([])

    return (
        <div className="mx-auto max-w-7xl px-4 pt-20 space-y-10">
            <h2 className="text-2xl text-center text-catalina-blue font-medium">Hồ Sơ Du Học</h2>

            <table className="w-full border-gray-200 border">
                <thead>
                    <tr className="text-sm font-medium text-gray-700 border-gray-200">
                        <th className="w-28 px-4 border text-left">Mã hồ sơ</th>
                        <th className="px-4 border text-left">Họ tên</th>
                        <th className="py-2 px-4 border text-left">Số điện thoại</th>
                        <th className="py-2 px-4 border text-left">Trường đăng ký</th>
                        <th className="py-2 px-4 border text-left">Ngày đăng ký</th>
                        <th className="py-2 px-4 border text-left">Trạng thái hồ sơ</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        loading ? (
                            <tr>
                                <td colSpan={7} >
                                    <div className="flex justify-center items-center">
                                        <div className="my-5 h-8 w-8 loading"></div>
                                    </div>
                                </td>
                            </tr>
                        ) : null
                    }

                    {
                        consultancies.length > 0 ? consultancies.map(
                            (consultancy, index) => <ConsultancyItem key={index} consultancy={consultancy} />
                        ) : null
                    }

                </tbody>

            </table>

        </div >
    )
}

export default AdminStudyAboardProcedure

