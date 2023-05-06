import Navbar from "@components/Admin/Navbar/Navbar"
import { Outlet } from "react-router-dom"

const Admin = () => {
    return (
        <div className="h-screen overflow-x-hidden overflow-y-auto">
            <Navbar />
            <div className="grow">
                <Outlet />
            </div>
        </div>
    )
}

export default Admin