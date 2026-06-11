
import ProductsSection from "../ProductsSection";

function Main({ products, loading, error}) {
    if (loading) {
        return <div className="container py-4">Caricamento prodotti...</div>;
    }

    if (error) {
        return <div className="container py-4 alert alert-danger">{error}</div>;
    }
    
        return <ProductsSection products={products}/>;
}
export default Main