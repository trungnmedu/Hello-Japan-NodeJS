import { getAllConsultancy, updateConsultancy } from "@/services/admin"
import { useCallback, useEffect, useState } from "react"

const ConsultancyItem = ({ consultancy }) => {
    const { id, name, phone, type, description, createdAt } = consultancy
    const created = new Date(createdAt).toLocaleDateString()

    const [consulted, setConsulted] = useState(consultancy.consulted)

    const handleUpdateStatusConsultancy = useCallback(async (e) => {
        const checked = e.target.checked
        setConsulted(checked)
        const payload = {
            ...consultancy,
            consulted: checked
        }
        await updateConsultancy(payload)
    }, [])

    return (
        <tr
            className="text-sm text-gray-700 border-gray-200"
        >
            <td className="w-28 px-4 border">{`#${id}`}</td>
            <td className="py-4 px-4 border">{name}</td>
            <td className="py-4 px-4 border">{phone}</td>
            <td className={`py-4 px-4 border font-medium ${type === 'STUDY' ? 'text-catalina-blue' : 'text-red-500'}`}>
                {type === 'STUDY' ? 'Du Học' : 'XKLĐ'}
            </td>
            <td className="py-4 px-4 border">{description || 'N/A'}</td>
            <td className="py-4 px-4 border">{created}</td>
            <td className="py-4 px-4 border">
                <label className="flex space-x-2 cursor-pointer">
                    <div className="self-center circle-check w-5 h-5 fill-green-600">
                        <input
                            type="checkbox"
                            onChange={handleUpdateStatusConsultancy}
                            checked={consulted}
                        />
                        <svg viewBox="0 0 35.6 35.6">
                            <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                            <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                            <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                        </svg>
                    </div>

                    {
                        consulted ? (
                            <span className="font-medium">Đã tư vấn</span>
                        ) : (
                            <span>Chưa tư vấn</span>
                        )
                    }

                </label>
            </td>
        </tr>
    )
}

const Consultancy = () => {
    const [loading, setLoading] = useState(true)
    const [consultancies, setConsultancies] = useState([])

    useEffect(() => {
        const fetchConsultancies = async () => {
            setLoading(true)
            try {
                const { success, payload } = await getAllConsultancy()
                if (success) {
                    setConsultancies(payload)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchConsultancies()
    }, [])

    return (
        <div className="mx-auto max-w-7xl px-4 pt-20 space-y-10">
            <h2 className="text-2xl text-center text-catalina-blue font-medium">Danh Sách Đăng Ký Tư Vấn</h2>

            <table className="w-full border-gray-200 border">
                <thead>
                    <tr className="text-sm font-medium text-gray-700 border-gray-200">
                        <th className="w-28 px-4 border text-left">Mã hồ sơ</th>
                        <th className="px-4 border text-left">Họ tên</th>
                        <th className="py-2 px-4 border text-left">Số điện thoại</th>
                        <th className="py-2 px-4 border text-left">Loại tư vấn</th>
                        <th className="py-2 px-4 border text-left">Yêu cầu tư vấn</th>
                        <th className="py-2 px-4 border text-left">Ngày đăng ký</th>
                        <th className="py-2 px-4 border text-left">Trạng thái tư vấn</th>
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

export default Consultancy