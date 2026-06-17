import useFavourites from "../hooks/useFavourites"
import ProductCard from "./ProductCard/ProductCard";


function OffCanvas() {
    const {favourites} = useFavourites();

    return (
        <div className="d-flex justify-content-end offcanvas-container">
            <button className="btn btn-warning boder border-jurassik-dark " type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvasPreferiti" aria-controls="offCanvasPreferiti">
                Preferiti
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offCanvasPreferiti" aria-labelledby="preferiti" data-bs-theme="dark">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="preferiti">Preferiti</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Ecco tutti i tuoi preferiti!
                    </div>
                    <div className="d-flex flex-column row-gap-2">
                        {favourites.length === 0 ? <h5>Non hai ancora scelto nessun dinosauro da sterminare!</h5> : favourites.map(favourite=>
                        <div key={favourite.slug}>
                            <ProductCard product={favourite}/>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffCanvas