import LogoImage from "@assets/images/Logo.png"
import { setAccount } from "@contexts/account"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const Header = () => {
    const account = useSelector(state => state.auth.account)
    const isLogin = Object.keys(account).length > 0

    const { avatar, name, phone, email } = account

    const dispatch = useDispatch()

    const handleLogout = useCallback(() => {
        localStorage.removeItem("accessToken")
        dispatch(setAccount({}))
    }, [])

    return (
        <header className="shadow sticky top-0 z-20 bg-white">
            <div className="2xl:mx-14 h-20 py-3 flex items-center justify-between">
                <Link className="h-full" to='/'>
                    <img
                        className="block h-full w-auto overflow-hidden"
                        src={LogoImage}
                        alt='Logo'
                    />
                </Link>

                <div className="flex items-center space-x-4">
                    <ul className="flex space-x-4">
                        <li className="list-none">
                            <Link className="font-medium text-dark-blue hover:text-red-600 transition-all duration-300" to='/'>Trang Chủ</Link>
                        </li>
                        <li className="list-none">
                            <Link className="font-medium text-dark-blue hover:text-red-600 transition-all duration-300" to='/introduction'>Giới Thiệu</Link>
                        </li>
                        <li className="list-none group relative">
                            <Link to='/japanese-study-abroad' className="flex space-x-1 cursor-pointer items-center">
                                <span className="font-medium text-dark-blue  group-hover:text-red-600 transition-all duration-300">Du Học Nhật Bản</span>
                                <span className="text-dark-blue  group-hover:text-red-600 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </Link>
                            <div className="hidden group-hover:block absolute right-0 top-full">
                                <ul className="mt-3 space-y-0.5 bg-white shadow-lg border rounded w-72">
                                    <li className="list-none h-fit">
                                        <HashLink
                                            smooth={true}
                                            to='/japanese-study-abroad#overall'
                                            className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                        >
                                            Tổng Quan về Du Học Nhật Bản
                                        </HashLink>
                                    </li>
                                    <li className="list-none h-fit">
                                        <HashLink
                                            smooth={true}
                                            to='/japanese-study-abroad#price'
                                            className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                        >
                                            Chi Phí Du Học Nhật Bản
                                        </HashLink>
                                    </li>
                                    <li className="list-none h-fit">
                                        <HashLink
                                            smooth={true}
                                            to='/japanese-study-abroad#procedure'
                                            className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                        >
                                            Thủ Tục và Hồ Sơ Du Học Nhật Bản
                                        </HashLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="list-none group relative">
                            <Link to='japanese-labor-export' className="flex space-x-1 cursor-pointer items-center">
                                <span className="font-medium text-dark-blue  group-hover:text-red-600 transition-all duration-300">Xuất Khẩu Lao Động Nhật Bản</span>
                                <span className="text-dark-blue  group-hover:text-red-600 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </Link>
                            <div className="hidden group-hover:block absolute right-0 top-full">
                                <ul className="mt-3 space-y-0.5 bg-white shadow-lg border rounded w-72">
                                    <li className="list-none h-fit">
                                        <HashLink
                                            smooth={true}
                                            to='/japanese-labor-export#overall'
                                            className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                        >
                                            Tổng Quan về XKLĐ Nhật Bản
                                        </HashLink>
                                    </li>
                                    <li className="list-none h-fit">
                                        <HashLink
                                            smooth={true}
                                            to='/japanese-labor-export#price'
                                            className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                        >
                                            Chi Phí XKLĐ Nhật Bản
                                        </HashLink>
                                    </li>
                                    <li className="list-none h-fit">
                                        <HashLink
                                            smooth={true}

                                            to='/japanese-labor-export#procedure'
                                            className="font-medium block text-sm px-5 py-2 text-dark-blue rounded hover:text-white hover:bg-red-600 transition-all duration-300"
                                        >
                                            Thủ Tục và Hồ Sơ XKLĐ Nhật Bản
                                        </HashLink>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="list-none">
                            <Link
                                className="font-medium text-dark-blue hover:text-red-600 transition-all duration-300"
                                to='/procedure'
                            >
                                {isLogin ? 'Kiểm Tra Trạng Thái Hồ Sơ' : 'Đăng Ký Hồ Sơ'}

                            </Link>
                        </li>
                    </ul>
                    <div className="flex">
                        {
                            isLogin ? (
                                <div className="ml-6 relative">
                                    <button
                                        className="w-fit h-fit outline-none peer"
                                    >
                                        <img
                                            alt="avatar"
                                            src={avatar}
                                            className="w-9 rounded-full aspect-square object-cover select-none"
                                        />
                                    </button>
                                    <div className="absolute shadow border bg-white px-0 right-0 w-60 hover:visible invisible peer-focus:visible rounded">
                                        <div className="flex space-x-2 p-2 border-b">
                                            <img
                                                alt="avatar"
                                                src={avatar}
                                                className="w-9 h-9 block rounded-full aspect-square object-cover select-none"
                                            />
                                            <div className="grow overflow-hidden">
                                                <h5 className="font-medium">{name}</h5>
                                                <p className="text-xs truncate">{email || phone}</p>
                                            </div>

                                        </div>


                                        <button
                                            onClick={handleLogout}
                                            className="px-3 py-2 w-full h-fit capitalize rounded font-medium text-sm transition-all duration-300 hover:text-white hover:bg-catalina-blue"
                                        >
                                            Đăng xuất
                                        </button>

                                    </div>
                                </div>

                            ) : (
                                <Link
                                    to='/login'
                                    className="px-3 py-2 h-fit capitalize rounded bg-red-600 font-medium text-white text-sm"
                                >
                                    Đăng Nhập
                                </Link>
                            )
                        }
                    </div>

                </div>
            </div>
        </header >
    )
}

export default Header