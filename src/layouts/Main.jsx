import Consultancy from "@components/Consultancy/Consultancy"
import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"
import ChatSupport from "@components/Home/Chat/Chat"
import { Outlet } from "react-router-dom"

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <ChatSupport />
            <Consultancy />
            <Footer />
        </>
    )
}

export default Main