import useProduct from "../hooks/useProduct.jsx";
import ProductCard from "./ProductCard/ProductCard.jsx";

function ProductsSection() {
    const {products, loading, error} = useProduct();

    if (loading) {
        return <div className="container py-4">Caricamento prodotti...</div>;
    }

    if (error) {
        return <div className="container py-4 alert alert-danger">{error}</div>;
    }

    return (
        <section className="py-5">
            <div className="container">
                <div className="text-center">
                    <h2>Lista prodotti</h2>
                </div>
                {products.length === 0 ? (
                    <h1 className="text-center">
                        Nessun prodotto disponibile al momento.
                    </h1>
                ) : (
                    <div className="row g-4">
                        {products.map((product) => (
                            <div className="col-12 col-md-6 col-lg-4" key={product.slug}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
export default ProductsSection