
function ReviewCard({ review }) {
    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <div className="card-title">
                    {review.title}
                </div>
                <div className="btn btn-primary">
                    <i className="bi bi-hand-thumbs-up"></i>
                </div>
            </div>
            <div className="card-body">
                {review.description}
            </div>
        </div>
    )
}

export default ReviewCard