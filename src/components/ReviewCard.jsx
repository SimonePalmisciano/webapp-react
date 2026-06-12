import useLikesUpdate from "../hooks/useLikesUpdate"
import VoteStars from "./VoteStars";

function ReviewCard({ review }) {

    const { likesNumber, updateLikes } = useLikesUpdate(review.slug);

    return (
        <div className="card p-0 border-0 shadow-sm rounded-4 overflow-hidden" data-bs-theme="dark">
            <div className="card-body d-flex flex-column gap-3 p-4">

                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        <h5 className="mb-1 fw-bold">{review.title}</h5>
                    </div>

                    <div className="px-3 py-2 rounded-pill border">
                        <VoteStars stars={review.vote}/>
                    </div>
                </div>

                <div className="border-top border-secondary opacity-50"></div>

                <div className="flex-grow-1">
                    <p className="mb-0 lh-lg">
                        {review.description}
                    </p>
                </div>

                <div className="d-flex justify-content-end pt-2">
                    <button
                        type="button"
                        className="btn btn-primary rounded-pill px-3 d-flex align-items-center gap-2"
                        onClick={() => updateLikes(likesNumber + 1)}
                    >
                        <i className="bi bi-hand-thumbs-up"></i>
                        <span>{likesNumber}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard