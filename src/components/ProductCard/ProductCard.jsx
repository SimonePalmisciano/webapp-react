function ProductCard({ product }) {
    const { name, description, price, categories, geological_era, image } = product;

    return (
        <div className="card h-100 shadow-sm">
            {image ? (
                <img src={image} className="card-img-top" alt={name} />
            ) : (
                <div className="bg-light d-flex align-items-center justify-content-center alt-image-text" >
                    <span className="text-muted">Nesuna immagine</span>
                </div>
            )}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted small">{geological_era}</p>
                <p className="card-text flex-grow-1">
                    {description.length > 120 ? description.slice(0, 120) + "..." : description}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="badge bg-secondary">
                        {Array.isArray(categories) && categories.length > 0
                            ? categories[0].label
                            : "altro"}
                    </span>
                    <strong className="float-end">€{price.toFixed(2)}</strong>
                </div>
            </div>
        </div>
    );
}

export default ProductCard