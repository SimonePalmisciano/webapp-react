function ProductsSection(products) {
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
                            <div className="col-12 col-md-6 col-lg-4" key={product.id}>
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