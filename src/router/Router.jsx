import LaborExport from "@/pages/LaborExport"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import StudyAboard from "@/pages/StudyAboard"

import Consultancy from "@components/Admin/Consultancy/Consultancy"
import AdminLaborExportProcedure from "@components/Admin/LaborExport/LaborExport"
import PartnerStudy from "@components/Admin/PartnerStudy/PartnerStudy"
import AdminStudyAboardProcedure from "@components/Admin/StudyAbroad/StudyAbroad"
import Procedure from "@components/Home/Procedure/Procedure"
import Admin from "@layouts/Admin"
import Main from "@layouts/Main"
import Home from "@pages/Home"
import Introduction from "@pages/Introduction"
import { useSelector } from "react-redux"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

const AppRouter = () => {
    const { role = "CUSTOMER" } = useSelector(state => state.auth.account)

    return (
        <BrowserRouter>
            <Routes>
                {
                    role === "ADMIN" ? (
                        <>
                            <Route path="admin" element={<Admin />} >
                                <Route index element={<Consultancy />} />
                                <Route path="study-abroad-procedure" element={<AdminStudyAboardProcedure />} />
                                <Route path="labor-export-procedure" element={<AdminLaborExportProcedure />} />
                                <Route path="partner-study" element={<PartnerStudy />} />
                            </Route>
                            <Route path="*" element={<Navigate to='/admin' />} />
                        </>
                    ) : (
                        <Route path="*" element={<Main />}>
                            <Route index element={<Home />} />
                            <Route path="introduction" element={<Introduction />} />
                            <Route path="japanese-study-abroad" element={<StudyAboard />} />
                            <Route path="japanese-labor-export" element={<LaborExport />} />
                            <Route path="procedure" element={<Procedure />} />
                        </Route>
                    )
                }
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter