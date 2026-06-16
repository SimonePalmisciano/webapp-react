import { useEffect } from "react";
import { useVisit } from "../contexts/VisitContext.jsx";
import "./NewsletterBanner.module.css";

function NewsletterBanner() {
    const { isFirstVisit, newsletterHandled, markNewsletterHandled } = useVisit();

    const shouldShow = isFirstVisit === true && newsletterHandled === false; // mostra il banner solo se è la prima volta
    // e la newsLetter non è stata già gestita

    useEffect(() => {
        if (shouldShow) {
            document.body.style.overflow = "hidden"; //Questo dice al browser:
            // non far scorrere la pagina, quindi l’utente non può muoversi nella pagina sotto.
        } else {
            document.body.style.overflow = "auto"; // quando il banner viene chiuso: Quindi lo scroll torna normale.
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [shouldShow]);

    if (isFirstVisit === null) return null;
    if (!shouldShow) return null;

    return (
        <div className="newsletter-overlay">
            <div className="newsletter-modal">
                <span className="newsletter-badge">Benvenuto 🦕</span>

                <h2>Unisciti alla nostra newsletter</h2>

                <p>
                    Ricevi offerte speciali, novità sui nostri hamburger e promozioni
                    riservate ai clienti più golosi.
                </p>

                <div className="newsletter-buttons">
                    <button className="btn-primary" onClick={markNewsletterHandled}>
                        Iscrivimi
                    </button>

                    <button className="btn-secondary" onClick={markNewsletterHandled}>
                        No grazie
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NewsletterBanner;