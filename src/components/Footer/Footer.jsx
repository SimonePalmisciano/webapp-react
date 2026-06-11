import { Link } from "react-router";

function Footer() {
    return (
        <footer id="footer" className="bg-light border-top mt-4 jurassic-footer py-5">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-12 col-md-4">
                        <h4 className="footer-title">Jurassic Pork 🦖</h4>
                        <p className="footer-text mb-0">
                            La hamburgheria preistorica dove ogni morso è un reperto da
                            riscoprire.
                        </p>
                    </div>

                    <div className="col-12 col-md-4">
                        <h5 className="footer-subtitle">Navigazione</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/" className="footer-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/products" className="footer-link">Prodotti</Link>
                            </li>
                            <li>
                                <Link to="/about-us" className="footer-link">Chi siamo</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4">
                        <h5 className="footer-subtitle">Contatti</h5>
                        <p className="footer-text mb-1">Via dei Dinosauri, 23</p>
                        <p className="footer-text mb-1">jurassicpork@email.com</p>
                        <p className="footer-text mb-0">+39 333 1234567</p>
                    </div>
                </div>

                <hr className="footer-divider my-4" />

                <div className="text-center">
                    <p className="footer-copy mb-0">
                        &copy; 2026 Jurassic Pork — Tutti i diritti riservati
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;