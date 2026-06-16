import { createContext, useContext, useEffect, useState } from "react";

const VisitContext = createContext(null);

function VisitProvider({ children }) {
    const [isFirstVisit, setIsFirstVisit] = useState(null);
    const [newsletterHandled, setNewsletterHandled] = useState(false);

    useEffect(() => {
        const visited = localStorage.getItem("hasVisited");
        // recupera dalla memoria locale del browser la chiave "hasVisited" 
        // che restituisce true se esiste altrimenti restituisce null, quindi salva se da quel determinato dispositivo da quel brawser 
        // ha visitato già il sito web, quindi non salva l'utente ma semplicemente il dispositivo e il browser usato
        const newsletter = localStorage.getItem("newsletterHandled");
        console.log(visited);
        

        if (visited === "true") {
            setIsFirstVisit(false);
        } else {
            setIsFirstVisit(true);
            localStorage.setItem("hasVisited", "true");
        }

        if (newsletter === "true") {
            setNewsletterHandled(true);
        }
    }, []);

    const markNewsletterHandled = () => {
        localStorage.setItem("newsletterHandled", "true");
        setNewsletterHandled(true);
    };

    return (
        <VisitContext value={{
                isFirstVisit,
                newsletterHandled,
                markNewsletterHandled
            }}
        >
            {children}
        </VisitContext>
    );
}

export function useVisit() { // Restituisce tutto quello che c'è dentro value 
    return useContext(VisitContext);
}

export {
    VisitContext,
    VisitProvider
}


// funzione con il modale di benvenuto invece di una news letter

// function VisitProvider({ children }) {
//     const [isFirstVisit, setIsFirstVisit] = useState(null);
//     const [showWelcomeModal, setShowWelcomeModal] = useState(false);

//     useEffect(() => {
//         const visited = localStorage.getItem("hasVisited");

//         if (visited === "true") {
//             setIsFirstVisit(false);
//             setShowWelcomeModal(false);
//         } else {
//             setIsFirstVisit(true);
//             setShowWelcomeModal(true);
//             localStorage.setItem("hasVisited", "true");
//         }
//     }, []);

//     const closeWelcomeModal = () => {
//         setShowWelcomeModal(false);
//     };

//     return (
//         <VisitContext.Provider
//             value={{
//                 isFirstVisit,
//                 showWelcomeModal,
//                 closeWelcomeModal,
//             }}
//         >
//             {children}
//         </VisitContext.Provider>
//     );
// }