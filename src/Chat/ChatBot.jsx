import Avatar from "./Avatar";
import { useState, useEffect, useRef } from "react";
import ChatWindow from "./ChatWindow/ChatWindow";

function ChatBot() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <ChatWindow visible={visible} />
      <Avatar
        onClick={() => setVisible(visible => !visible)}
        // style={{ position: "absolute", top: "0", right: "0"}}
      />
    </div>
  );
}

export default ChatBot;
