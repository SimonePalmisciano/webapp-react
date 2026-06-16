import { useVisit } from "../contexts/VisitContext.jsx";

function NewsletterBanner() {
    const { isFirstVisit, newsletterHandled, markNewsletterHandled } = useVisit();

    if (isFirstVisit === null) return null;

    if (!isFirstVisit || newsletterHandled) {
        return null;
    }

    return (
        <div>
            <p>Vuoi iscriverti alla nostra newsletter?</p>
            <button onClick={markNewsletterHandled}>Iscrivimi</button>
            <button onClick={markNewsletterHandled}>No grazie</button>
        </div>
    );
}

export default NewsletterBanner;