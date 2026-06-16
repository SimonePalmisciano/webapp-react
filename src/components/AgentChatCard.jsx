

function AgentChatCard({ children, className, role }) {
    return (
        <div className={className}>
            <strong>
                {role === "user" ? "Tu" : "Claudio"}:
            </strong>
            <div
            dangerouslySetInnerHTML={{ __html: children }}
            />
            
        </div>
    )
}

export default AgentChatCard