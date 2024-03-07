import Avatar from "./Avatar"
import { useState } from "react"
import ChatWindow from "./ChatWindow/ChatWindow"

function ChatBot() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <ChatWindow visible={visible} />
      <Avatar
        onClick={() => setVisible(!visible)}
        style={{position: "fixed", bottom: '44px', right: '24px'}}
      />
    </div>
  )
}

export default ChatBot