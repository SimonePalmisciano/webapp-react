import useLikesUpdate from "../hooks/useLikesUpdate"

function ReviewCard({ review }) {

    const {likesNumber, updateLikes} = useLikesUpdate(review.slug);

    return (
        <div className="card p-0" data-bs-theme="dark">
            <div className="card-header d-flex justify-content-between">
                <div className="card-title">
                    {review.title}
                </div>
                <div className="btn btn-primary" onClick={()=>updateLikes(likesNumber+1)}>
                    <i className="bi bi-hand-thumbs-up"></i><span> {likesNumber} </span>
                </div>
            </div>
            <div className="card-body">
                {review.description}
            </div>
        </div>
    )
}

export default ReviewCard