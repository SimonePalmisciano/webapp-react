import { createContext } from "react";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../utils/api.js";

const ProductContext = createContext(null);

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        fetch(`${BASE_API_URL}/products`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Errore nel recupero dei prodotti");
                }
                return response.json();
            })
            .then(data => {
                if (data.error) {
                    throw new Error(data.error);
                }
                setProducts(data.result || []);
            })
            .catch(error => {
                setError(error.message || "Errore sconosciuto");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch(`${BASE_API_URL}/categories`)
            .then(res => res.json())
            .then(data => setCategories(data.result || []))
            .catch(() => setCategories([]));
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter(p => p.category === selectedCategory)
        : products;

    const value = {
        products,
        categories,
        selectedCategory,
        setSelectedCategory,
        filteredProducts,
        loading,
        error
    };

    return (
        <ProductContext value={value}>
            {children}
        </ProductContext>
    );
}

export {
    ProductContext,
    ProductProvider
};
