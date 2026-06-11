import HeroSection from "../components/HeroSection.jsx"
import { Link } from "react-router"

function HomePage() {
    return (
        <div className="container">
            <HeroSection />
            <Link to="/products" className="btn btn-dark btn-sm">
                Vai alla ProductPage
            </Link>
        </div>
    )
}
export default HomePage