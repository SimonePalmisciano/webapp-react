

function VoteStars({ stars }) {
    let floatStars = stars % 1;

    const filledStars = Array.from({ length: 5 }, (element, index) => {
        if (index < stars - 1) {
            return <i key={index} className="bi bi-star-fill star"></i>
        }

        if (floatStars >= 0.5) {
            floatStars = 0;
            return <i key={index} className="bi bi-star-half star"></i>
        }
        else {
            return <i key={index} className="bi bi-star star"></i>
        }
    });


    return (
        filledStars
    );
}

export default VoteStars