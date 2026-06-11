import {Link} from "react-router";

function HeroSection() {
    return (
        <section className="bg-light py-5 min-vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-12">
                        <span className="badge text-bg-danger mb-3">
                            Benvenuto nell’era del gusto
                        </span>
                        <h1 className="display-3 fw-bold mb-3">
                            Jurassic Pork
                        </h1>
                        <p className="lead mb-4">
                            La hamburgheria preistorica dove ogni piatto è una scoperta
                            archeologica a base di carne.
                        </p>
                        <p className="text-muted mb-4">
                            Scava nel nostro menù e lasciati sorprendere da burger fossili,
                            sapori selvaggi e reperti culinari indimenticabili.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                            <a to="/products" className="btn btn-dark btn-lg">
                                Scopri il menù
                            </a>
                            <a href="#" className="btn btn-outline-dark btn-lg">
                                Contatti
                            </a>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <img
                            src="..." // inserire un immagine 
                            alt="Jurassic Pork hero"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;