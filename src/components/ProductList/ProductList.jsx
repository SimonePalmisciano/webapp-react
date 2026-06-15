
import ProductCard from "../ProductCard/ProductCard";

function ProductList({products}){
    
    return(
        <div className="container py-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {products.length === 0 && <div className="alert alert-warning w-100 text-center">🦕 I nostri cacciatori non hanno trovato nessun dinosauro che ti soddisfi...  🦕</div>}
                {products.map((product) => (
                    <div className="col" key={product.slug}>
                        <ProductCard product={product}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;