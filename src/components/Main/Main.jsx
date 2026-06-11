
import ProductsSection from "../ProductsSection";
import useProduct from "../../hooks/useProduct";

function Main() {
    const {products, loading, error} = useProduct();
    if (loading) {
        return <div className="container py-4">Caricamento prodotti...</div>;
    }

    if (error) {
        return <div className="container py-4 alert alert-danger">{error}</div>;
    }
    
        return <ProductsSection products={products}/>;
}
export default Main