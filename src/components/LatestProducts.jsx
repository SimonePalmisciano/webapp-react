import useProduct from "../hooks/useProduct.js";
import ProductCard from "./ProductCard/ProductCard";
function LatestProducts() {
    const {products, loading, error} = useProduct("?orderBy=updated_at&limit=6");

    return (
        <div className="container text-jurassik-light">
            <h2>I nostri nuovi abbattimenti!</h2>
            {loading && 
            <h4> Aspetta mentre il Brontosauro ci porta gli ultimi arrivi
            </h4>
            }
            {error && 
            <h4>
                Il Brontosauro si è perso per strada... o è stato attaccato da un T-Rex
            </h4>
            }
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {products.map((product) => (
                    <div className="col" key={product.slug}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestProducts