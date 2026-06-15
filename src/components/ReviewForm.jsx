import { BASE_API_URL } from "../utils/api";
import VoteInput from "./voteInput";
import { useState } from "react";
import { Modal } from "bootstrap";
import { useRef } from "react";

const templateReview = {
    "title": "",
    "description": "",
    "vote": 0,
    "likes": 0
}

function ReviewForm({ product }) {
    const [review, setReview] = useState(templateReview);
    const modal = useRef(null);

    const handleChange = (event) => {
        const inputName = event.target?.name;
        let inputValue = event.target?.value;

        if (inputName === "vote") {
            inputValue = Number(inputValue);
            console.log(inputValue);
        }

        const newReview = {
            ...review,
            [inputName]: inputValue
        }

        setReview(newReview);
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        };

        console.log(JSON.stringify(review));
        fetch(`${BASE_API_URL}/products/${product.slug}/reviews`, options)
            .then(response => {
                if (!response.ok) {
                    console.log("Errore nella creazione della recensione");
                }
                else {
                    const allModals = document.querySelectorAll(".modal-backdrop");
                    const toggleableModal = Modal.getInstance(modal.current);
                    // Resetta la form SOLO dopo che Bootstrap ha completamente rimosso il modale e il suo backdrop. 
                    // Resettare lo state prima fa si che il backdrop rimanga orfano e quindi resti visibile
                    modal.current.addEventListener(
                        "hidden.bs.modal",
                        () => {
                            console.log("Modal è chiuso");
                            setReview(templateReview);}
                    );
                    toggleableModal.hide();
                    allModals.forEach(modalBackdrop => {
                        modalBackdrop.remove();
                    })
                }
            }
            )
    }

    return (
        <div className="modal fade" id="review-modal" ref={modal}>
            <div className="modal-dialog">
                <div className="modal-content">
                    {product && <form className="d-flex flex-column form-control row-gap-2" data-bs-theme="dark" onSubmit={handleSubmit}>
                        <div>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-danger p-0 d-flex align-items-center h-50" data-bs-dismiss="modal" data-bs-target="#review-modal">
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </div>
                            <label htmlFor="review-title" className="form-label">Titolo Review</label>
                            <input
                                required
                                id="review-title"
                                name="title"
                                className="form-control"
                                type="text"
                                placeholder="Inserisci il titolo della review.."
                                onChange={handleChange}
                                value={review.title}
                            />
                        </div>
                        <label htmlFor="review-description" className="form-label">Che ne pensi?</label>
                        <textarea
                            id="review-description"
                            name="description"
                            className="form-control"
                            placeholder={`Cosa pensi del nostro ${product.name}?`}
                            onChange={handleChange}
                            value={review.description}
                        ></textarea>
                        <p className="form-label">Che voto daresti?</p>
                        <VoteInput review={review} onChange={handleChange} />
                        <button className="btn btn-dark bg-jurassik-orange" type="submit">Invia Recensione</button>
                    </form>}
                </div>
            </div>
        </div>

    )
}

export default ReviewForm