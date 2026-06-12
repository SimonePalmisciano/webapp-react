import { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import useProduct from "../hooks/useProduct.js";
import useCategories from "../hooks/useCategories.js";
import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import PageNavigator from "../components/PageNavigator.jsx";

const MAX_ITEMS_PER_PAGE = 9;

function ProductPage() {
    const [searchResults, setSearchResults] = useState(null);
    const [currentOffset, setCurrentOffset] = useState(0);
    const { products, loading, error, productCount } = useProduct(`?limit=${MAX_ITEMS_PER_PAGE}&offset=${currentOffset}`, true);
    const { categories } = useCategories();
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredProducts = selectedCategory
        ? products.filter(
            (product) =>
                Array.isArray(product.categories) &&
                product.categories.some((cat) => cat?.label === selectedCategory)
        )
        : products;

    // Aggiunta useEffect per riportare lo scroll all'inizio della pagina quando viene caricato il componente    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //Quando cambio categoria torno sempre a pagina 1
    useEffect(() => {
        setCurrentOffset(0);
    }, [selectedCategory]);

    //Se i risultati diminuiscono mantengo currentPage valida

    //Quando cambio pagina il focus torna sempre in cima
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentOffset]);

    const handlePrevPage = () => {
        setCurrentOffset((prev) => Math.max(prev - MAX_ITEMS_PER_PAGE, 0));
    };

    const handleNextPage = () => {
        setCurrentOffset((prev) => Math.min(prev + MAX_ITEMS_PER_PAGE, productCount)
        );
    };

    if (loading) return <div className="container py-4">Caricamento prodotti...</div>;
    if (error) return <div className="container py-4 alert alert-danger">{error}</div>;


    if (searchResults !== null) {
        return (
            <div className="container py-4 text-jurassik-light">
                <h1 className="h4 mb-3">Prodotti</h1>

                <SearchBar setResults={setSearchResults} />

                {searchResults.length === 0 ? (
                    <div className="alert alert-warning mt-4">
                        Nessun prodotto trovato.
                    </div>
                ) : (
                    <ProductList products={searchResults} />
                )}
            </div>
        );
    }

    return (
        <div className="container py-4 text-jurassik-light">
            <h1 className="h4 mb-3">Prodotti</h1>


            <SearchBar setResults={setSearchResults} />

            <div className="mb-4 py-4 sticky-top bg-jurassik-orange rounded px-2">
                <p className="mb-2 fw-semibold">Filtra per categoria</p>
                <div className="d-flex flex-wrap gap-3">
                    <label className="form-check-label">
                        <input
                            className="form-check-input me-2"
                            type="radio"
                            name="category"
                            value=""
                            checked={selectedCategory === ""}
                            onChange={() => setSelectedCategory("")}
                        />
                        Tutte
                    </label>

                    {categories.map((category) => (
                        <label key={category.slug} className="form-check-label">
                            <input
                                className="form-check-input me-2"
                                type="radio"
                                name="category"
                                value={category.label}
                                checked={selectedCategory === category.label}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            />
                            {category.slug === "burgers" ? "Panini" : category.label}
                        </label>
                    ))}
                </div>
            </div>

            {filteredProducts.length === 0 ? (
                <div className="alert alert-warning">
                    Nessun prodotto disponibile per questa categoria.
                </div>
            ) : (
                <>
                    <PageNavigator
                        currentOffset={currentOffset}
                        MAX_ITEMS_PER_PAGE={MAX_ITEMS_PER_PAGE}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                        productCount={productCount}
                    />
                    <ProductList products={products} />
                    <PageNavigator
                        currentOffset={currentOffset}
                        MAX_ITEMS_PER_PAGE={MAX_ITEMS_PER_PAGE}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                        productCount={productCount}
                    />

                </>
            )}
        </div>
    );
}

export default ProductPage;