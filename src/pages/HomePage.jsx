import HeroSection from "../components/HeroSection.jsx"
import LatestProducts from "../components/LatestProducts.jsx"
import NewsletterBanner from "../components/NewsLetterBanner.jsx"


function HomePage() {
    return (
        <div className="container">
            <NewsletterBanner />
            <HeroSection />
            <LatestProducts />
        </div>
    )
}
export default HomePage