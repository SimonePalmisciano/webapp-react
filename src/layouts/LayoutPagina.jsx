import { Outlet } from "react-router"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import OffCanvas from "../components/OffCanvas"

function LayoutPagina() {
    return (
        <>
            <div className="bg-jurassik-green min-vh-100 d-flex flex-column justify-content-between">
                <Header />
                <OffCanvas />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default LayoutPagina