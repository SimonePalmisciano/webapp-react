function ProductCard({ product }) {
    const { name, description, price, categories, geological_era, image } = product;

    return(
        <div className="card h-100">
            {image && <img src={image} className="card-img-top" alt={name} />}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted small">{geological_era}</p>
                <p className="card-text flex-grow-1">{description}</p>
                <div className="mt-auto">
                    <span className="badge bg-secondary me-1">
                        {categories?.[0]}
                    </span>
                    <strong className="float-end">€{price.toFixed(2)}</strong>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;