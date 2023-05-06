
import { postRequestConsultancy } from '@/services/customer'
import rules from '@/validation/rule'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const contactSchema = Yup.object().shape(
    {
        name: Yup.string().matches(rules.name, 'Họ và tên không hợp lệ.').required('Họ và tên là bắt buộc.'),
        email: Yup.string().matches(rules.email, "Email không hợp lệ.").required("Email là bắt buộc."),
        phone: Yup.string().matches(rules.phone, "Phone không hợp lệ.").required("Phone là bắt buộc."),
        description: Yup.string().matches(rules.description, "Yêu cầu tư vấn không hợp lệ.")
    }
)


const Consultancy = () => {

    const formik = useFormik(
        {
            validateOnBlur: true,
            validateOnChange: true,
            validateOnMount: true,
            validationSchema: contactSchema,
            initialValues: {
                name: '',
                email: '',
                phone: '',
                description: '',
                type: 'STUDY'
            }
        }
    )

    const handleRegisterRequestConsultancy = async (e) => {
        e.preventDefault()
        formik.setSubmitting(true)
        try {
            const id = Date.now().toString()
            const payload = {
                ...formik.values,
                id

            }

            await postRequestConsultancy(payload)
            console.log("Submit form success!")
        } finally {
            formik.resetForm()
            formik.setSubmitting(false)
        }

    }

    const disableSubmit = !formik.isValid || formik.isSubmitting
    const { name, email, type, phone, description } = formik.values
    const { name: nameError, email: emailError, phone: phoneError, description: descriptionError } = formik.errors
    const { name: nameTouched, email: emailTouched, phone: phoneTouched, description: descriptionTouched } = formik.touched
    const { handleBlur, handleChange } = formik

    return (
        <div className="bg-white">
            <div className="max-w-7xl px-5 mx-auto grid grid-cols-2 gap-5">
                <img
                    className="select-none"
                    alt="contact"
                    src='https://yoko.edu.vn/wp-content/uploads/2021/11/dang-ky-tu-van.png'
                />
                <div className="space-y-10 flex flex-col items-center justify-center">
                    <h2 className="text-center text-dark-blue font-medium text-2xl">ĐĂNG KÝ NHẬN TƯ VẤN</h2>
                    <form
                        onSubmit={handleRegisterRequestConsultancy}
                        className="w-full space-y-6"
                    >
                        <input
                            className={`outline-none border w-8/12 mx-auto block rounded-lg px-4 py-1.5 duration-300 transition-all focus:border-dark-blue ${nameError && nameTouched ? 'border-red-400' : 'border'}`}
                            name='name'
                            value={name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Họ và tên:"
                        />
                        <input
                            className={`outline-none border w-8/12 mx-auto block rounded-lg px-4 py-1.5 duration-300 transition-all focus:border-dark-blue ${emailError && emailTouched ? 'border-red-400' : 'border'}`}
                            name='email'
                            value={email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Email của bạn:"
                        />
                        <input
                            className={`outline-none border w-8/12 mx-auto block rounded-lg px-4 py-1.5 duration-300 transition-all focus:border-dark-blue ${phoneError && phoneTouched ? 'border-red-400' : 'border'}`}
                            name='phone'
                            value={phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Số điện thoại:"
                        />

                        <div className='w-8/12 mx-auto flex space-x-4'>
                            <span>Mong muốn tư vấn về: </span>
                            <label className='flex space-x-2 items-center cursor-pointer group'>
                                <div className="circle-check w-5 h-5 fill-catalina-blue">
                                    <input
                                        name='type'
                                        type="radio"
                                        value='STUDY'
                                        onChange={handleChange}
                                        checked={type === 'STUDY'}
                                    />
                                    <svg viewBox="0 0 35.6 35.6">
                                        <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                                        <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                        <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                    </svg>
                                </div>
                                <span className={`group-hover:text-catalina-blue transition-all duration-300 group-hover:font-medium ${type === 'STUDY' ? 'text-catalina-blue font-medium' : 'font-normal'}`}>Du học</span>
                            </label>
                            <label className='flex space-x-2 items-center cursor-pointer group'>
                                <div className="circle-check w-5 h-5 fill-red-600">
                                    <input
                                        name='type'
                                        type="radio"
                                        value='LABOR'
                                        onChange={handleChange}
                                        checked={type === 'LABOR'}
                                    />
                                    <svg viewBox="0 0 35.6 35.6">
                                        <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                                        <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                        <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                    </svg>
                                </div>
                                <span className={`group-hover:text-red-600 transition-all duration-300 group-hover:font-medium ${type === 'LABOR' ? 'text-red-600 font-medium' : 'font-normal'}`}>Lao động</span>
                            </label>
                        </div>

                        <textarea
                            className={`outline-none border w-8/12 mx-auto block rounded-lg px-4 py-1.5 duration-300 transition-all focus:border-dark-blue ${descriptionError && descriptionTouched ? 'border-red-400' : 'border'}`}
                            value={description}
                            name='description'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows={5}
                            placeholder="Yêu cầu tư vấn:"
                        />

                        <button
                            className="mx-auto flex items-center space-x-2 bg-dark-blue rounded-lg px-4 py-1.5 text-white disabled:opacity-50 transition-all duration-300"
                            type='submit'
                            disabled={disableSubmit}
                        >
                            <span>Đăng Ký Ngay</span>
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

export default Consultancy