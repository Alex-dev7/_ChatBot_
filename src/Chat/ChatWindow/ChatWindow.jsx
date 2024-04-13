import { useEffect, useState } from "react";
import { styles } from "../styles";
import Welcome from "./thread/Welcome";
import ChatThread from "./thread/ChatThread";
import Expand from "../../components/Expand";

export default function ChatWindow(props) {
    const [threadId, setThreadId] = useState(null);
    const [name, setName] = useState(null);
    const [expandWindow, setExpandWindow] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowDown, setWindowDown] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const storedName = window.localStorage.getItem("user");
        const storedId = window.localStorage.getItem("threadId");

        setName(storedName);
        setThreadId(storedId);
    }, []);

    return (
        <div
            className="chat-window"
            style={{
                ...styles.supportWindow,
                ...(expandWindow ? { ...styles.expandW } : {}),
                ...(windowWidth < 800 ? { ...styles.expandWMobile} : {}),
                ...{ opacity: props.visible ? "1" : "0" },
                ...{ zIndex: props.visible ? "1000" : "-10" },
                ...{ color: expandWindow ? "white" : "black" },
                ...(windowDown ?  { transform: "translateY(95%)"} : null )
            }
            }
        >
            {windowWidth < 800 ? (
                <button style={{...styles.arrowDown, ...(windowDown ?  { transform: "rotate(180deg) translateX(50%)"} : null )}} className="down-arrow" onClick={() => setWindowDown(!windowDown)}>
                    <img src="down-arrow.svg" alt="down arrow" />
                </button>
                
            )
             : (
                <div
                    style={styles.expand}
                    onClick={() => setExpandWindow(() => !expandWindow)}
                >
                    <Expand expandWindow={expandWindow} />
                </div>
            )}
            <Welcome
                setThreadId={(threadId) => setThreadId(threadId)}
                setName={(name) => setName(name)}
                threadId={threadId}
                visible={threadId === null}
                expandWindow={expandWindow}
            />

            <ChatThread
                visible={threadId !== null && name.length > 0}
                threadId={threadId}
                name={name}
                expandWindow={expandWindow}
            />
        </div>
    );
}
