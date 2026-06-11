import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import ReviewCard from "../components/ReviewCard";
import { BASE_API_URL } from "../utils/api.js";

function ProductDetailPage() {
    const { productSlug } = useParams();
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${BASE_API_URL}/products/${productSlug}`)
            .then(res => res.json())
            .then(data => setProduct(data));

        fetch(`${BASE_API_URL}/products/${productSlug}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [productSlug]);

    if (!product) return <p>Loading ...</p>;


    return (
        <div>
            <ProductCard product={product} />

            <h2>Recensioni</h2>
            {reviews.length === 0 && <p>Nessuna recensione</p>}

            {reviews.map(r => (
                <ReviewCard key={r.id} review={r} />
            ))}
        </div>

    );
}

export default ProductDetailPage;