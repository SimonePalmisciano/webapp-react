import { createContext, useState, useEffect } from "react";
import { BASE_API_URL } from "../utils/api";

const CategoryContext = createContext(null);

function CategoryProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`${BASE_API_URL}/categories`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Errore nel recupero delle categorie");
                }
                return response.json();
            })
            .then(data => {
                if (data.error) {
                    throw new Error(data.error);
                }
                setCategories(data.result || []);
            })
            .catch(error => {
                setError(error.message || "Errore sconosciuto");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const value = {
        categories,
        loading,
        error
    };

    return (
        <CategoryContext value={value}>
            {children}
        </CategoryContext>
    );
}

export {
    CategoryContext,
    CategoryProvider
};