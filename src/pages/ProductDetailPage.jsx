import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import { BASE_API_URL } from "../utils/api.js";

function ProductDetailPage() {
    const { productSlug } = useParams();
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);
    console.log(product);
    console.log(reviews);

    useEffect(() => {
        fetch(`${BASE_API_URL}/products/${productSlug}`)
            .then(res => res.json())
            .then(data => setProduct(data.result));

        fetch(`${BASE_API_URL}/products/${productSlug}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data.result));
    }, [productSlug]);

    if (!product) return <p>Loading ...</p>;


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img className="img-fluid" src={product.image} alt={product.slug}></img>
                    </div>
                    <div className="col-12 col-md-8">
                        <h2>{product.name}</h2>
                        <hr></hr>
                        <p>{product.description}</p>
                        <p className="text-end">Prezzo: &euro; {product.price?.toFixed(2)}</p>
                    </div>
                    <h2>Recensioni</h2>
                    {reviews.length === 0 && <p>Nessuna recensione</p>}

                    {reviews.map(r => (
                        <ReviewCard key={r.slug} review={r} />
                    ))}
                </div>
            </div>

        </div>

    );
}

export default ProductDetailPage;