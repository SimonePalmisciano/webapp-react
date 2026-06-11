import ProductList from "../ProductList/ProductList"

function Main({ products, loading, error}) {
    if (loading) {
        return <div className="container py-4">Caricamento prodotti...</div>;
    }

    if (error) {
        return <div className="container py-4 alert alert-danger">{error}</div>;
    }
    
        return <ProductList products={products}/>;
}
export default Main