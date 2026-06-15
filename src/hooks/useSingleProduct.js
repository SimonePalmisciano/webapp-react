import { useState, useEffect } from "react"
import { BASE_API_URL } from "../utils/api.js";
import { useNavigate } from "react-router";

function useSingleProduct(productSlug, review) {
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${BASE_API_URL}/products/${productSlug}`)
            .then(res => {
                if (!res.ok) {
                    navigate("/404");
                }
                return res.json()
            })
            .then(data => {
                if (!data) {
                    navigate("/404");
                }
                setProduct(data.result)
            })
            .catch((error) => {
                navigate("/404");
            });

        fetch(`${BASE_API_URL}/products/${productSlug}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data.result));
    }, [productSlug, navigate, review]);

    return {product,reviews};
}

export default useSingleProduct