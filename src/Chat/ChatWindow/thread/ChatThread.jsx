import {  useEffect, useState } from "react";
import { threadStyles } from "./threadStyles";
import ChatMessage from "./components/ChatMessage";

function ChatThread(props) {
    const [inputText, setInpuText] = useState("");
    const [chatLog, setChatLog] = useState([
     { 
      user: "gpt",
      message: ""
    },
    { 
      user: "user",
      message: ""
    }
    ]);

const id = window.localStorage.getItem("threadId");

  //   useEffect(() => {
      
  //     async function getMessagesList(id) {
  //       // const storedId = window.localStorage.getItem("threadId");
  //       if (id) {
  //         console.log(id)
  //       // fetch request to the API 
  //       const response = await fetch(`http://localhost:4000/list/${id}`);
  //       const list = await response.json() 
  //       // setChatLog([...chatLog, {user: "gpt", message: list.messages[0][0].text.value}])
  //       const newMessages = [...list.messages].reverse().map((message, index) => {
  //         const user = index % 2 === 0 ? "user" : "gpt";
  //         return { user, message: message[0]?.text?.value };
  //       });
        
        
  //       setChatLog([ ...newMessages]);
  //       console.log(list) 
  //       }
  //   }
  //   getMessagesList(id)
      
  // }, [id])

   

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("submitting");
        setChatLog([...chatLog, {user: "user", message: `${inputText}`}])
        setInpuText("");

        // fetch request to the API 
        const response = await fetch("http://localhost:4000/message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            threadId: props.threadId,
            message: inputText,
            // .filter((message) => message.user === "user")
            // .map((message) => message.message)
            // .join("")
          })
        })
        const data = await response.json()
        setChatLog([...chatLog, {user: "gpt", message: data.messages[0][0].text.value}])
        console.log(data)
    }





    return (
        <div style={{ ...threadStyles.chatThread }}>
            <div
                className="chatLogContainer"
                style={threadStyles.chatLogContainer}
            >
              {chatLog.map((message, index) => (
                  <ChatMessage key={index} message={message} />
              ))}
              

                {/* <div
                    style={{
                        ...threadStyles.chatMessage,
                        backgroundColor: "#21342aff",
                    }}
                >
                    <div style={threadStyles.avatarContainer}>
                        <div style={threadStyles.avatar} />
                        <span style={threadStyles.avatarName}>Assistant</span>
                    </div>
                    <div style={threadStyles.message}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Odio, laborum fugiat iure nisi nulla quaerat
                        molestiae sequi qui quidem cumque provident
                        exercitationem deserunt magni praesentium, soluta
                        consequatur numquam, veritatis ab.
                    </div>
                </div> */}
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
                      style={threadStyles.chatInputArea} ></input>
                </form>
            </div>
        </div>
    );
}

export default ChatThread;
