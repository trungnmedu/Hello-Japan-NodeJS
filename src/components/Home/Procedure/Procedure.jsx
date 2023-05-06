import { getAllPartnerStudy } from "@/services/public"
import rules from "@/validation/rule"
import procedureBanner from "@assets/images/procedure/procedure.svg"
import { useFormik } from "formik"
import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import * as Yup from 'yup'


const Redirect = () => {
    return (
        <>
            <div className="max-w-7xl px-5 mx-auto space-y-4">
                <h2 className="text-center text-2xl font-medium text-catalina-blue">Đăng Ký Hồ Sơ</h2>
                <p className="text-center">Vui lòng đăng nhập để sử dụng tính năng.</p>

                <div className="flex justify-center space-x-8">
                    <Link className="bg-indigo-900 hover:bg-catalina-blue transition-all duration-300 px-4 py-2 rounded text-white font-medium" to='/register' >Đăng Ký</Link>
                    <Link className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-4 py-2 rounded text-white font-medium" to='/login' >Đăng Nhập</Link>
                </div>
            </div>
            <div className="w-full mt-10">
                <img
                    className="block max-w-lg mx-auto object-cover"
                    src={procedureBanner}
                />
            </div>
        </>
    )
}

const studySchema = Yup.object().shape(
    {
        name: Yup.string().matches(rules.name, 'Họ và tên không hợp lệ.').required('Họ và tên là bắt buộc.'),
        email: Yup.string().matches(rules.email, "Email không hợp lệ.").required("Email là bắt buộc."),
        phone: Yup.string().matches(rules.phone, "Phone không hợp lệ.").required("Phone là bắt buộc."),
        location: Yup.mixed().required('Địa điểm là bắt buộc.')
    }
)

const StudyRegister = ({ toggle }) => {
    const account = useSelector(state => state.auth.account)
    const [locations, setLocations] = useState([])

    useEffect(() => {
        const fetchLocation = async () => {
            const { success, payload } = await getAllPartnerStudy()
            if (success) {
                setLocations(payload || [])
            }
        }
        fetchLocation()
    }, [])

    const formik = useFormik(
        {
            validateOnBlur: true,
            validateOnChange: true,
            validateOnMount: true,
            validationSchema: studySchema,
            initialValues: {
                name: account.name || '',
                email: account.email || '',
                phone: account.phone || '',
                location: ''
            }
        }
    )

    const handleSelectLocation = useCallback((value) => {
        formik.setFieldValue('location', value)
    }, [])

    const disableSubmit = !formik.isValid || formik.isSubmitting
    const { name, email, phone, location } = formik.values
    const { name: nameError, email: emailError, phone: phoneError, location: locationError } = formik.errors
    const { name: nameTouched, email: emailTouched, phone: phoneTouched, location: locationTouched } = formik.touched
    const { handleBlur, handleChange } = formik

    return (
        <div
            className="w-screen h-screen fixed top-0 left-0 z-30 bg-indigo-900/30"
        >
            <div
                className="max-w-7xl mx-auto flex h-full w-full items-center justify-center"
            >
                <div className="bg-white p-5 rounded w-8/12 space-y-10">

                    <div className="flex justify-between">
                        <h2 className="text-xl font-medium text-catalina-blue">Đăng Ký Hồ Sơ Du Học</h2>
                        <button
                            onClick={toggle}
                            className="h-6 aspect-square hover:p-1 hover:bg-red-600 hover:text-white rounded-full transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form
                        className="w-full space-y-6"
                    >
                        <div className="flex items-center space-x-4">
                            <label className="w-20">Họ Và Tên </label>
                            <div className="grow">
                                <input
                                    className={`outline-none border w-full rounded-lg px-4 py-1.5 duration-300 transition-all focus:border-dark-blue ${nameError && nameTouched ? 'border-red-400' : 'border'}`}
                                    name='name'
                                    value={name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Nguyễn Văn A"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <label className="w-20">Email </label>
                            <div className="grow">
                                <input
                                    className={`outline-none border w-full rounded-lg px-4 py-1.5 duration-300 transition-all focus:border-dark-blue ${emailError && emailTouched ? 'border-red-400' : 'border'}`}
                                    name='email'
                                    value={email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="nguyenvana@gmail.com"
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <label className="w-20">Trường</label>
                            <div className="grow relative">
                                <button
                                    className={`peer outline-none flex justify-between border w-full rounded-lg px-4 py-1.5 duration-300 transition-all focus:border-dark-blue ${locationError && locationTouched ? 'border-red-400' : 'border'}`}
                                    type="button"
                                    name="location"
                                    onBlur={handleBlur}
                                >
                                    {
                                        location ? (
                                            <p className="text-left">{location?.name}</p>
                                        ) : (
                                            <p className="text-left text-gray-400">Chọn trường</p>
                                        )
                                    }
                                    <div className="text-gray-400 self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </button>

                                <ul className="mt-1 absolute max-h-56 overflow-x-hidden overflow-y-auto peer-focus:opacity-100 peer-focus:visible invisible opacity-0 top-full w-full left-0 border bg-white shadow text-gray-400 rounded transition-all duration-300">

                                    {
                                        locations?.map(
                                            ({ id, name, logo }) => (
                                                <li
                                                    key={id}
                                                    className="px-4 py-0.5 cursor-pointer text-black hover:bg-red-500 hover:text-white transition-all"
                                                    onClick={() => handleSelectLocation({ id, name })}
                                                >
                                                    <div className="flex space-x-2 py-1 items-center">
                                                        <img
                                                            className="w-8 h-8 rounded flex-none"
                                                            src={logo}
                                                            alt="logo"
                                                        />
                                                        <p>{name}</p>
                                                    </div>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <label className="w-20">SĐT</label>
                            <div className="grow">
                                <input
                                    className={`outline-none border w-full rounded-lg px-4 py-1.5 duration-300 transition-all focus:border-dark-blue ${phoneError && phoneTouched ? 'border-red-400' : 'border'}`}
                                    name='phone'
                                    value={phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="84456789255"
                                />
                            </div>
                        </div>

                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-10 h-10 mb-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 transition-all duration-300 hover:text-red-500 space-x-1">
                                    <span className="font-semibold">Click để tải lên</span>
                                    <span>hoặc kéo thả</span>
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or PDF ...</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>


                        <button
                            className="mx-auto flex items-center space-x-2 bg-red-500 rounded-lg px-4 py-1.5 text-white disabled:opacity-50 transition-all duration-300"
                            type='submit'
                            disabled={disableSubmit}
                        >
                            <span>Gửi yêu cầu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>

                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

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

const ProcedureManager = () => {

    const [displayStudyRegister, setDisplayStudyRegister] = useState(false)
    const [displayLaborRegister, setDisplayLaborRegister] = useState(false)

    const toggleDisplayStudyRegister = useCallback(() => {
        setDisplayStudyRegister(toggle => !toggle)
    })

    const toggleDisplayLaborRegister = useCallback(() => {
        setDisplayLaborRegister(toggle => !toggle)
    })

    return (

        <div className="max-w-7xl px-5 mx-auto">
            <div className="flex justify-between">
                <h2 className="text-2xl font-medium text-catalina-blue">Trạng Thái Hồ Sơ Của Bạn</h2>

                <div className="space-x-4">
                    <button
                        className="bg-indigo-900 hover:bg-catalina-blue transition-all duration-300 px-5 py-1.5 rounded text-white font-medium"
                    >
                        Đăng Ký XKLĐ
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-5 py-1.5 rounded text-white font-medium"
                        onClick={toggleDisplayStudyRegister}
                    >
                        Đăng Ký Du Học
                    </button>
                </div>
            </div>

            <table className="w-full mt-5 border-gray-200 border">
                <thead>
                    <tr className="text-sm font-medium text-gray-700 border-gray-200">
                        <th className="w-28 px-4 border text-left">Mã hồ sơ</th>
                        <th className="py-2 px-4 border text-left">Số điện thoại</th>
                        <th className="py-2 px-4 border text-left">Loại hồ sơ</th>
                        <th className="py-2 px-4 border text-left">Địa điểm</th>
                        <th className="py-2 px-4 border text-left">Trạng thái</th>
                        <th className="py-2 px-4 border text-left">Hành động</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="text-sm text-gray-700 border-gray-200">
                        <td className="w-28 px-4 border">#4567827827</td>
                        <td className="py-4 px-4 border">0335840115</td>
                        <td className="py-4 px-4 border">Du Học</td>
                        <td className="py-4 px-4 border">Trường Đại Học Tokyo</td>
                        <td className="py-4 px-4 border">
                            <div className="flex items-center space-x-1 text-dark-blue font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Đang xử lý</span>
                            </div>


                        </td>
                        <td className="py-4 px-4 border">
                            <button
                                className="flex items-center space-x-1 hover:text-red-500 transition-all"
                            >
                                Xem chi tiết
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="w-full mt-10 grid grid-cols-2 gap-5">
                <img
                    className="block w-8/12 mx-auto object-cover"
                    src={procedureBanner}
                />
                <ul className="list-none mt-10">
                    {
                        steps.map(
                            (step, index) => (
                                <li key={index} className="relative">
                                    <div className="absolute z-0 top-0 left-5 -translate-x-1/2 w-0.25 h-full bg-ice-blue"></div>

                                    <div className="space-x-4 flex relative z-10">
                                        <div className="w-10 h-10 p-2 aspect-square border flex justify-center items-center rounded-full bg-green-500 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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

            </div>

            {displayStudyRegister ? <StudyRegister toggle={toggleDisplayStudyRegister} /> : null}

        </div>
    )
}

const Procedure = () => {
    const account = useSelector(state => state.auth.account)
    const isLogin = Object.keys(account).length > 0

    return (
        <div className="pt-10">
            {
                isLogin ? <ProcedureManager /> : <Redirect />
            }
        </div>
    )
}

export default Procedure