import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import { BASE_API_URL, PRICE_VALUE } from "../utils/api.js";

function ProductDetailPage() {
    const { productSlug } = useParams();
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
            .catch(error => {
                console.error(error);
                navigate("/404");
            });

        fetch(`${BASE_API_URL}/products/${productSlug}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data.result));
    }, [productSlug, navigate]);

    if (!product) return <p>Loading ...</p>;


    return (
        <div>
            <div className="container text-jurassik-light">
                <div className="row">
                    <div className="col-12 col-md-4 border border-jurassik-dark rounded p-0">
                        <img className="img-fluid rounded" src={product.image} alt={product.slug}></img>
                    </div>
                    <div className="col-12 col-md-8">
                        <h2>{product.name}</h2>
                        <div>({reviews.length}) {reviews.length === 1 ? <span>Recensione</span> : <span>Recensioni</span>}</div>
                        <hr></hr>
                        <p>{product.description}</p>
                        <div className="d-flex justify-content-between">
                            <div>
                                {product.categories?.map((category, index) => <span key={index} className="badge bg-jurassik-orange">{category.label}</span>)}
                            </div>
                            <span className="badge bg-jurassik-orange">Prezzo:  {`${PRICE_VALUE} ${product.price?.toFixed(2)}`}</span>
                        </div>
                    </div>
                    <h2>Recensioni</h2> 
                    {reviews.length === 0 && <p>Nessuna recensione</p>}
                    <div className="d-flex flex-column row-gap-2 border border-jurassik-dark rounded p-0">
                        {reviews.map(r => (
                            <ReviewCard key={r.slug} review={r} />
                        ))}
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ProductDetailPage;