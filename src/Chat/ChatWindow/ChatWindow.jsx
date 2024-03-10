import { useState, useEffect } from 'react'
import { styles } from '../styles'
import Welcome from './Welcome'
import ChatThread from './thread/ChatThread'

export default function ChatWindow(props) {
    const [user, setUser] = useState(null)
    const [threadId, setThreadId] = useState(null)
    const [data, setData] = useState(null)


  return (
    <div
        style={{ ...styles.supportWindow,
        ...{opacity: props.visible ? "1" : "0"}
    }}
    >
        <Welcome
            setUser={user => setUser(user)}
            setThreadId={threadId => setThreadId(threadId)}
            visible={user === null && threadId === null} 
        />

        <ChatThread 
            visible={user !== null && threadId !== null}   
            user={user}
            threadId={threadId} 
        />


    </div>
  )
}

