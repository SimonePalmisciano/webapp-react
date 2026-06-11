import { useEffect, useMemo, useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import useProduct from "../hooks/useProduct";

function ProductPage() {
    const { products, loading, error } = useProduct();
    const [selectedCategory, setSelectedCategory] = useState("");

    const categories = useMemo(() => {
        const labels = products.flatMap((product) =>
            Array.isArray(product.categories)
                ? product.categories.map((categorie) => categorie?.label).filter(Boolean)
                : []
        );
        return [...new Set(labels)];
    }, [products]);

    useEffect(() => {
        if (categories.length === 0) return;

        const defaultPanini =
            categories.find((c) => c.toLowerCase() === "burgers") ||
            categories.find((c) => c.toLowerCase() === "panini") ||
            categories[0];

        setSelectedCategory((prev) =>
            prev && categories.includes(prev) ? prev : defaultPanini
        );

    }, [categories]);

    const filteredProducts = useMemo(() => {
        if (!selectedCategory) return [];
        return products.filter(
            (product) =>
                Array.isArray(product.categories) &&
                product.categories.some((cat) => cat?.label === selectedCategory)
        );
    }, [products, selectedCategory]);

    if (loading) return <div className="container py-4">Caricamento prodotti...</div>;
    if (error) return <div className="container py-4 alert alert-danger">{error}</div>;

    return (
        <div className="container py-4">
            <h1 className="h4 mb-3">Prodotti</h1>

            <div className="mb-4">
                <p className="mb-2 fw-semibold">Filtra per categoria</p>
                <div className="d-flex flex-wrap gap-3">
                    {categories.map((category) => {
                        const label = category.toLowerCase() === "burgers" ? "Panini" : category;

                        return (
                            <label key={category} className="form-check-label">
                                <input
                                className="form-check-input me-2"
                                type="radio"
                                name="category"
                                value={category}
                                checked={selectedCategory === category}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                />
                                {label}
                            </label>
                        );
                    })}
                </div>
            </div>
            <ProductList products={filteredProducts}/>
        </div>
    )
}

export default ProductPage;