import { useState, useEffect } from "react";
import { BASE_API_URL } from "../utils/api";

function useProduct(searchParams, isProductPage = false) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {

        fetch(`${BASE_API_URL}/products/${searchParams.toString()}`)
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
                setError(error.message || "Errore sconosciuto nel fetch dei prodotti");
            })
            .finally(() => {
                setLoading(false);
            });
        if(isProductPage){
            fetch(`${BASE_API_URL}/products/count`)
            .then(response => {
                setLoading(true);
                if (!response.ok){
                    throw new Error("Errore nel recupero del count dei prodotti");
                }
                return response.json();
            })
            .then(data => {
                if(data.error){
                    throw new Error(data.error);
                }
                setProductCount(data.result || 0);
            })
            .catch(error => {
                setError(error.message || "Errore sconosciuto nel fetch del count dei prodotti");  
            })
            .finally(() => setLoading(false));
        }

    }, [searchParams, isProductPage]);

    return{
        products,
        loading,
        error,
        productCount,
        setProductCount
    }
}

export default useProduct;