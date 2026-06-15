import { useParams } from "react-router";
import { PRICE_VALUE } from "../utils/api.js";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm.jsx";
import VoteStars from "../components/VoteStars.jsx";
import useSingleProduct from "../hooks/useSingleProduct.js";

function ProductDetailPage() {
    const { productSlug } = useParams();
    const { product, reviews } = useSingleProduct(productSlug);


    let voteSum = 0;
    reviews.forEach(review => {
        voteSum += review.vote;
    })

    let voteAverage = voteSum / reviews.length;

    const stars = voteAverage;

    return (
        <div>
            <div className="container text-jurassik-light">
                <div className="row">
                    <div className="col-12 col-md-4 border border-jurassik-dark rounded p-0">
                        <img className="img-fluid rounded details-image" src={product.image} alt={product.slug}></img>
                    </div>
                    <div className="col-12 col-md-8">
                        <h2>{product.name}</h2>
                        <div className="recensioni d-flex gap-1 align-items-center">
                            <div>{voteAverage.toFixed(2) || 0}</div>
                            <div className="vote-stars d-flex">
                                <VoteStars stars={stars} />
                            </div>
                            <div className="separator">|</div>
                            <div>({reviews.length}) {reviews.length === 1 ? <span>Recensione</span> : <span>Recensioni</span>}</div>
                        </div>
                        <hr></hr>
                        <p>{product.description}</p>
                        <div className="d-flex justify-content-between">
                            <div>
                                {product.categories?.map((category, index) => <span key={index} className="badge bg-jurassik-orange">{category.label}</span>)}
                            </div>
                            <span className="badge bg-jurassik-orange">Prezzo:  {`${PRICE_VALUE} ${product.price?.toFixed(2)}`}</span>

                        </div>
                        <button className="btn btn-dark bg-jurassik-orange mt-5" data-bs-toggle="modal" data-bs-target="#review-modal">Dicci che ne pensi</button>
                        <ReviewForm product={product} />
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