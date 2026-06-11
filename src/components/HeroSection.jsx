import {Link} from "react-router";

function HeroSection() {
    return (
        
        <section className="bg-light py-5 min-vh-100 d-flex">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-12 text-center">
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
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            <Link to="/products" className="btn btn-dark btn-lg">
                                Scopri il menù
                            </Link>
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