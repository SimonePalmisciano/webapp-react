import SingleBone from "./SingleBone";
import { useState } from "react";

function VoteInput({review, onChange}) {
    const rating = review.vote;
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="d-flex">
            {[...Array(5)].map((bone, index) => {
                const currentRate = index + 1;
                return (
                    <label
                    key={index}
                    onMouseEnter={() => setHoverRating(currentRate)}
                    onMouseLeave={() => setHoverRating(0)}>
                        
                        <input
                            type="radio"
                            name="vote"
                            className="bone-input"
                            value={currentRate}
                            onChange={(event) => {
                                onChange(event);
                            }}
                        />
                        <SingleBone isActive={currentRate <= (hoverRating || rating)} />
                    </label>
                )
            })}
        </div>
    )
}

export default VoteInput