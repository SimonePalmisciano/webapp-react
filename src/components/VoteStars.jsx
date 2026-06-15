

function VoteStars({ stars }) {
    let floatStars = stars % 1;

    const filledStars = Array.from({ length: 5 }, (element, index) => {
        if (index + 1 <= stars) {
            return <img key={index} src="/bone-full.svg" />
        }
        if (floatStars >= 0.5) {
            floatStars = 0;
            return <img key={index} src="/bone-half.svg" />
        }
        else {
            return <img key={index} src="/bone-empty.svg" />
        }

    });


    return (
        filledStars
    );
}

export default VoteStars