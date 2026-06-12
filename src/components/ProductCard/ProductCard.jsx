import { Link } from "react-router";
import { PRICE_VALUE } from "../../utils/api.js";

function ProductCard({ product }) {
    const { name, price, categories, geological_era, image, slug } = product;
    return (
        <Link to={`/products/${slug}`} preventScrollReset>
            <div className="card h-100 product-card" data-bs-theme="dark">
                <img src={image} className="card-img-top product-image" alt={name} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted small">{geological_era}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                        {categories.map(category => {
                            return (
                                <span key={category.slug} className="badge bg-jurassik-orange text-jurassik-light">
                                    {category.label}
                                </span>
                            )
                        })}
                        <strong className="align-self-end">{`${PRICE_VALUE} ${price.toFixed(2)}`}</strong>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard