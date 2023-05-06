import LogoImage from "@assets/images/Logo.png";
import { setAccount } from "@contexts/account";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = useCallback(() => {
        localStorage.removeItem("accessToken")
        dispatch(setAccount({}))
        navigate('/login')
    }, [])

    return (
        <header className="bg-white sticky top-0 z-40 shadow">

            <div className="h-20 py-3 mx-auto max-w-7xl px-4 flex items-center justify-between">
                <Link to='/admin' className="h-full">
                    <img
                        className="block h-full w-auto overflow-hidden"
                        src={LogoImage}
                        alt='Logo'
                    />
                </Link>

                <ul className="flex items-baseline space-x-4">
                    <Link
                        className={`font-medium hover:text-red-600 transition-all duration-300 ${pathname === '/admin' ? 'text-red-600' : 'text-dark-blue'}`}
                        to='/admin'
                    >
                        Hỗ Trợ Tư Vấn
                    </Link>
                    <Link
                        className={`font-medium hover:text-red-600 transition-all duration-300 ${pathname === '/admin/study-abroad-procedure' ? 'text-red-600' : 'text-dark-blue'}`}
                        to='/admin/study-abroad-procedure'
                    >
                        Hồ Sơ Du Học
                    </Link>
                    <Link
                        className={`font-medium hover:text-red-600 transition-all duration-300 ${pathname === '/admin/labor-export-procedure' ? 'text-red-600' : 'text-dark-blue'}`}
                        to='/admin/labor-export-procedure'
                    >
                        Hồ Sơ XKLĐ
                    </Link>
                    <Link
                        className={`font-medium hover:text-red-600 transition-all duration-300 ${pathname === '//admin/partner-study' ? 'text-red-600' : 'text-dark-blue'}`}
                        to='/admin/partner-study'
                    >
                        Liên Kết Du Học
                    </Link>
                    <Link
                        className={`font-medium hover:text-red-600 transition-all duration-300 ${pathname === '//admin/partner-study' ? 'text-red-600' : 'text-dark-blue'}`}
                        to='/admin/partner-labor'
                    >
                        Liên Kết XKLĐ
                    </Link>
                </ul>

                <div className="relative ml-3">
                    <button
                        type="button"
                        className="w-fit h-fit peer"
                    >
                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>

                    <ul className="absolute right-0 z-10 mt-2 w-48 bg-white border rounded peer-focus:visible invisible">
                        <li
                            className="block px-4 py-1.5 text-sm hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            Cài đặt
                        </li>
                        <li
                            className="block px-4 py-1.5 text-sm hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
                            onClick={handleLogout}
                        >
                            Đăng xuất
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar