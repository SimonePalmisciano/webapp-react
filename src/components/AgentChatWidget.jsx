import { useState } from "react";
import { BASE_API_URL } from "../utils/api";
import AgentChatCard from "./AgentChatCard";



function AgentChatWidget() {

    const [open, setOpen] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function sendMessage() {
        const trimmedPrompt = prompt.trim();

        if (!trimmedPrompt || loading) {
            return;
        }

        setError("");
        setPrompt("");
        setMessages((prevMessages) => [
            ...prevMessages,

            { role: "user", text: trimmedPrompt }
        ]);
        setLoading(true);

        try {
            const response = await fetch(`${BASE_API_URL}/agent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: trimmedPrompt
                })
            });

            if (!response.ok) {
                throw new Error("Errore nella chiamata al server");
            }

            const data = await response.json();
            const answerText = data?.result || "Nessuna risposta disponibile.";

            setMessages((prevMessages) => [
                ...prevMessages,
                { role: "assistant", text: answerText }
            ]);
        } catch (error) {
            setError("Non riesco a contattare Claudio in questo momento.");
        } finally {
            setLoading(false);
        }
    }


    function handleKeyDown(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    }

    return (
        <>
            <button
                type="button"
                className="agent-chat-fab btn btn-warning rounded-circle shadow d-flex align-items-center justify-content-center agent-chat-toggle"
                onClick={() => setOpen((currentValue) => !currentValue)}
                aria-label={open ? "Chiudi chat" : "Apri chat con Claudio"}
                title={open ? "Chiudi chat" : "Hai fame? Chiedi a Claudio!"}
            >
                <i className="bi bi-egg egg-icon egg-icon-default" aria-hidden="true"></i>
                <i className="bi bi-egg-fill egg-icon egg-icon-hover" aria-hidden="true"></i>
            </button>

            {open && (
                <div className="agent-chat-panel border border-dark rounded-4 bg-jurassik-sand p-3 shadow-lg">
                    <h5 className="mb-3">Assistente Personale</h5>

                    <div className="agent-chat-messages border rounded-3 p-2 mb-3 bg-white">
                        {messages.length === 0 ? (
                            <p className="text-muted mb-0">
                                Ciao! Chiedimi pure qualcosa sul menu.
                            </p>
                        ) : (
                            messages.map((message, index) => (
                                    <AgentChatCard key={index} children={message.text} role={message.role} className={
                                        "mb-2 p-2 rounded-3 " +
                                        (message.role === "user"
                                            ? "bg-jurassik-orange text-jurassik-light"
                                            : "bg-light border")
                                    }
                                    />

                            ))
                        )}
                    </div>

                    {error && (
                        <p className="text-danger small mb-2">{error}</p>
                    )}

                    <textarea
                        className="form-control mb-2"
                        rows={3}
                        value={prompt}
                        onChange={(event) => setPrompt(event.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Scrivi la tua domanda..."
                    />

                    <button
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={sendMessage}
                        disabled={loading}
                    >
                        {loading ? "Invio in corso..." : "Invia"}
                    </button>
                </div>
            )}
        </>
    )
}

export default AgentChatWidget;