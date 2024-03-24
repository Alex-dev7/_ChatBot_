import { useEffect, useState } from "react";
import { threadStyles } from "./threadStyles";
import ChatMessage from "./components/ChatMessage";

function ChatThread(props) {
    const [inputText, setInpuText] = useState("");
    const [userPrompt, setUserPrompt] = useState("");
    const [userName, setUserName] = useState();
    const [chatLog, setChatLog] = useState([
        {
            user: "gpt",
            message: `Hello ${
                userName ? userName : "there"
            }! I'm Green Guru, your personal sustainability assistant.`,
        },
        {
            user: "user",
            message: "",
        },
    ]);

    useEffect(() => {
        const name = window.localStorage.getItem("user");
        setUserName(name);
        console.log(name);
    }, []);

    // retrieve threadId from local storage and fetch data on mount
    useEffect(() => {
        const id = window.localStorage.getItem("threadId");

        async function getMessagesList(id) {
            if (id) {
                console.log(id);
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
        console.log(chatLog);
    }, []);



    // fetch data on submit
    async function handleSubmit(event) {
        event.preventDefault();
        // setUserPrompt(inputText);
        let newChatLog = [...chatLog, { user: "user", message: `${inputText}` }]
        setChatLog(newChatLog)
       setInpuText("")

        // fetch request to the API
        const response = await fetch( import.meta.env.VITE_BASE_URL + "/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                threadId: props.threadId,
                message: inputText,
            }),
        });
         setInpuText("");
        const data = await response.json();
        setChatLog([
            ...newChatLog,
            { user: "gpt", message: data.messages[0][0].text.value },
        ]);
    }

    return (
        <div style={{ ...threadStyles.chatThread }}>
            <div
                className="chatLogContainer"
                style={threadStyles.chatLogContainer}
            >
                {chatLog.map((message, index) =>
                    message.message === "" ? null : (
                        <ChatMessage key={index} message={message} />
                    )
                )}
            </div>
            <div >
                <form
                    onSubmit={handleSubmit}
                    style={threadStyles.formContainer}
                >
                    <input
                        value={inputText}
                        onChange={(e) => setInpuText(e.target.value)}
                        rows="1"
                        id="chatInput"
                        style={threadStyles.chatInputArea}
                    ></input>
                    <button
                    type="submit"
                        style={threadStyles.inputButton}
                    >
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 128 128"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M26.6667 64L23.4454 35.0027C22.5227 26.704 31.0667 20.608 38.6134 24.1867L102.315 54.3627C110.448 58.2133 110.448 69.7867 102.315 73.6373L38.6134 103.819C31.0667 107.392 22.5227 101.301 23.4454 93.0027L26.6667 64ZM26.6667 64H64"
                                stroke="white"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChatThread;
