import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";

export default function ProductDetailPage() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/products/${slug}`)
            .then(res => res.json())
            .then(data => setProduct(data));

        fetch(`http://localhost:3000/products/${slug}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [slug]);

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