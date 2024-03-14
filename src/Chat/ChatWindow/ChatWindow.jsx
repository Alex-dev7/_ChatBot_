import { useState, useEffect } from 'react'
import { styles } from '../styles'
import Welcome from './Welcome'
import ChatThread from './thread/ChatThread'

export default function ChatWindow(props) {
    const [user, setUser] = useState(null)
    const [threadId, setThreadId] = useState(null)
    const [data, setData] = useState(null)
    const [expandWindow, setExpandWindow] = useState(false)




  return (
    <div
        style={{ ...styles.supportWindow,
            ...(expandWindow ? {...styles.expandW} : {}),
            ...{opacity: props.visible ? "1" : "0"},
       
    }}
    >
        <div style={styles.expand}
        onClick={() => setExpandWindow(() => !expandWindow)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
        </div>
        <Welcome
            setUser={user => setUser(user)}
            setThreadId={threadId => setThreadId(threadId)}
            visible={user === null && threadId === null} 
            expandWindow={expandWindow}
        />

        <ChatThread 
            visible={user !== null && threadId !== null}   
            user={user}
            threadId={threadId} 
            expandWindow={expandWindow}
        />


    </div>
  )
}

