import { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import useProduct from "../hooks/useProduct.js";
import useCategories from "../hooks/useCategories.js";
import { useEffect } from "react";
import SearchBar from "../components/SearchBar";


const ITEMS_PER_PAGE = 10;



function ProductPage() {
    const [searchResults, setSearchResults] = useState(null);
    const { products, loading, error } = useProduct();
    const { categories } = useCategories();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProducts = selectedCategory
        ? products.filter(
            (product) =>
                Array.isArray(product.categories) &&
                product.categories.some((cat) => cat?.label === selectedCategory)
        )
        : products;

    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(offset, offset + ITEMS_PER_PAGE);

    // Aggiunta useEffect per riportare lo scroll all'inizio della pagina quando viene caricato il componente    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //Quando cambio categoria torno sempre a pagina 1
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    //Se i risultati diminuiscono mantengo currentPage valida
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    //Quando cambio pagina il focus torna sempre in cima
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
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
                    <ProductList products={paginatedProducts} />

                    <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                        <button
                            className="btn btn-secondary"
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            Pagina precedente
                        </button>

                        <span className="fw-semibold">
                            Pagina {currentPage} di {totalPages}
                        </span>

                        <button
                            className="btn btn-secondary"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Pagina successiva
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductPage;