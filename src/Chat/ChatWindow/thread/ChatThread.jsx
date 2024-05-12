import { useEffect, useRef, useState } from "react";
import { threadStyles } from "./threadStyles";
import ChatMessage from "./components/ChatMessage";
import TypingDots from "./components/TypingDots";

function ChatThread(props) {
    const [inputText, setInpuText] = useState("");
    const [loading, setLoading] = useState(false);
    const [chatLog, setChatLog] = useState([
        {
            user: "gpt",
            message: `## Greetings, Seekers of Sustainability! 🌿\n\nWelcome to the sanctuary of green wisdom and eco-enlightenment. May your journey towards a more sustainable existence be guided by the gentle whispers of Mother Nature herself. Embrace the beauty of sustainable living and let us walk this path together, hand in hand with this Planet. 🌍💚`,
        },
        {
            user: "user",
            message: "",
        },
    ]);

    const inputRef = useRef();

   // automatically scroll to the bottom of the chat log
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    useEffect(scrollToBottom, [chatLog])




    // retrieve threadId from local storage and fetch data on mount
    useEffect(() => {
        const id = window.localStorage.getItem("threadId");

        async function getMessagesList(id) {
            if (id) {
                // fetch request to the API
                const response = await fetch(
                    `${import.meta.env.VITE_BASE_URL}/list/${id}`
                );
                const list = await response.json();
                // setChatLog([...chatLog, {user: "gpt", message: list.messages[0][0].text.value}])
                if (list.messages.length > 0) {
                    const newMessages = [...list.messages]
                        .reverse()
                        .map((message, index) => {
                            const user = index % 2 === 0 ? "user" : "gpt";
                            return { user, message: message[0]?.text?.value };
                        });

                    setChatLog([...newMessages]);
                }
            }
        }
        getMessagesList(id);
    }, []);

    useEffect(() => {
        inputRef.current.style.height = 'auto';
        if(inputRef.current.scrollHeight < 450) {
            inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
        } else if(inputRef.current.scrollHeight > 450) {
            inputRef.current.style.height = '450px'
        }
        
    }, [inputText])


    // fetch data on submit
    async function handleSubmit(event) {
        event.preventDefault();
        let newChatLog = [
            ...chatLog,
            { user: "user", message: `${inputText}` },
        ];
        setChatLog(newChatLog)
        setInpuText("")
        inputRef.current.style.height = '20px';

        setLoading(true)

        // fetch request to the API
        const response = await fetch(
            import.meta.env.VITE_BASE_URL + "/message",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    threadId: props.threadId,
                    message: inputText,
                }),
            }
        );
        setInpuText("");
        const data = await response.json();
        setChatLog([
            ...newChatLog,
            { user: "gpt", message: data.messages[0][0].text.value },
        ]);
        setLoading(false)
    }



    return (
        <div
            style={{
                ...threadStyles.chatThread,
                ...{
                    zIndex: props.visible ? "1000" : "-10",
                    height: props.visible ? "100%" : "0%",
                    opacity: props.visible ? "1" : "0",
                },
            }}
        >
            <div
                className="chatLogContainer"
                style={threadStyles.chatLogContainer}
            >
                {chatLog.map((message, index) =>
                    message.message === "" ? null : (
                        <ChatMessage
                            key={index}
                            message={message}
                            loading={loading}
                        />
                    )
                )}
                {loading ? <TypingDots /> : null}
                <div ref={messagesEndRef} />
            </div>
            <div>
                <form
                    onSubmit={handleSubmit}
                    style={threadStyles.formContainer}
                >
                    <textarea
                      
                        ref={inputRef}
                        value={inputText}
                        onChange={(e) => {
                            setInpuText(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit(e);
                            }
                        }}
                        placeholder="Ask a question..."
                        id="chatInput"
                        rows={1}
                        style={{ ...threadStyles.chatInputArea }}
                    ></textarea>
                    <button type="submit" style={threadStyles.inputButton}>
                        <svg
                        id="send-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                        >
                            <g fill="currentColor">
                                <path d="m14.854 11.974l1.415-1.414l-4.243-4.243l-4.243 4.243l1.414 1.414l1.829-1.828v7.537h2v-7.537z" />
                                <path
                                    fillRule="evenodd"
                                    d="M1 19a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4zm4 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2"
                                    clipRule="evenodd"
                                />
                            </g>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChatThread;
