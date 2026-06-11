import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function NotFound() {
  return (
    <div className="d-flex vh-100 flex-column">
        <Header/>
        <div>
            <h2><strong>404</strong> - Page Not Found</h2>
        </div>
        <Footer/>
    </div>
  )
}

export default NotFound