import {useState, useEffect} from "react";
import { BASE_API_URL } from "../utils/api";
import { useParams } from "react-router";

function useLikesUpdate(reviewSlug){
    const {productSlug} = useParams();
    const [likesNumber, setLikesNumber] = useState(0);

    

    useEffect(() => {
        fetch(`${BASE_API_URL}/products/${productSlug}/reviews/${reviewSlug}`)
        .then(response => response.json())
        .then(data => setLikesNumber(data.result.likes))
        .catch(error => console.error(error));
    }, [likesNumber,productSlug,reviewSlug,setLikesNumber])

    const updateLikes = (likesNumber) => {
        const options = {
        method:"PATCH",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({"likes":likesNumber})
    };

        fetch(`${BASE_API_URL}/products/${productSlug}/reviews/${reviewSlug}`, options)
        .then(res => res.json());
        
        setLikesNumber(likesNumber);
    }

    return({likesNumber, updateLikes});
}

export default useLikesUpdate