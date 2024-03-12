import ReactMarkdown from "react-markdown";
import { threadStyles } from "../threadStyles";

function ChatMessage({ message }) {
    return (
        <div
            style={{
                ...threadStyles.chatMessage,
                backgroundColor:
                    message.user === "gpt" ? "#21342aff" : "inherit",
            }}
        >
            <div style={threadStyles.avatarContainer}>
                <div style={threadStyles.avatar} />
                <span style={threadStyles.avatarName}>
                    {message.user === "gpt" ? "Green Guru" : "You"}
                </span>
            </div>
            <div style={threadStyles.message}>
                {message.user === "gpt" ?
                <ReactMarkdown>
                    {message.message}
                </ReactMarkdown>
                :
                message.message}
            </div>
        </div>
    );
}

export default ChatMessage;
