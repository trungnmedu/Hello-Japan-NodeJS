import logoImage from "@assets/images/Logo.png";
import GooglePopupSignIn from "@components/GoogleAuthProvider/GooglePopupSignIn";
import { Link } from "react-router-dom";


const Login = () => {

    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">

            <div className="max-w-4xl animate-fade-in">

                <div className="m-5 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 rounded-2xl shadow-lg">
                    <div className="space-y-5 p-8">
                        <div className="space-y-2">
                            <Link to='/'>
                                <img
                                    className="w-20 h-20 mx-auto"
                                    src={logoImage}
                                />
                            </Link>
                            <h2 className="font-bold text-center text-2xl text-catalina-blue">Đăng Nhập</h2>
                            <p className="text-xs text-center text-catalina-blue">Nếu bạn đã có tài khoản, hãy đăng nhập</p>
                        </div>

                        <form
                            className="space-y-5 w-full"
                        >
                            <input
                                name="username"
                                type="text"
                                placeholder="Nhập số điện thoại email"
                                className="w-full outline-none px-4 py-2 rounded-xl border focus:border-catalina-blue transition-all duration-300"
                            />
                            <div className="relative">
                                <input
                                    className="w-full outline-none px-4 py-2 rounded-xl border focus:border-catalina-blue transition-all duration-300"
                                    type="password"
                                    name="password"
                                    placeholder="Nhập mật khẩu"
                                />
                                <button
                                    type="button"
                                    className="absolute h-full p-3 right-0 top-0 inline-block items-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="h-full w-full" viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                                </button>

                            </div>
                            <button
                                className="bg-catalina-blue rounded-xl text-white py-2 w-full hover:scale-105 duration-300"
                                type="submit"
                            >
                                Đăng nhập
                            </button>
                        </form>

                        <div className="grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">HOẶC</p>
                            <hr className="border-gray-400" />
                        </div>

                        <GooglePopupSignIn />

                        <div className="text-xs border-b border-catalina-blue py-4 text-catalina-blue">
                            <Link to='/login'>Quên mật khẩu?</Link>
                        </div>

                        <div className="text-xs flex justify-between items-center text-catalina-blue">
                            <p>Bạn chưa có tài khoản?</p>
                            <Link
                                to='/register'
                                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                            >
                                Đăng Ký
                            </Link>
                        </div>
                    </div>
                    <div className="p-8">
                        <img
                            className="rounded-2xl block w-full h-full object-cover"
                            src="https://theworldtravelguy.com/wp-content/uploads/2020/04/DSCF7836-2.jpg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login