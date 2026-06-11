import { createContext } from "react";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../utils/api.js";

const ProductContext = createContext(null);

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
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
    const value = {
        products,
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
