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
        onClick={() => setVisible(true)}
        style={{ position: "fixed", bottom: "44px", right: "24px" }}
      />
    </div>
  );
}

export default ChatBot;
