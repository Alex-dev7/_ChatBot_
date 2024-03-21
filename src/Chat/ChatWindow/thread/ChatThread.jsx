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
                    `http://localhost:4000/list/${id}`
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
        const response = await fetch("http://localhost:4000/message", {
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
            <div style={threadStyles.chatInputContainer}>
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
                </form>
            </div>
        </div>
    );
}

export default ChatThread;
