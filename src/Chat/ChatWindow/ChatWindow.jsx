import {  useEffect, useState } from 'react'
import { styles } from '../styles'
import Welcome from './Welcome'
import ChatThread from './ChatThread'

export default function ChatWindow(props) {
    const [user, setUser] = useState(null)
    const [thread, setThread] = useState(null)


  return (
    <div
        style={{ ...styles.supportWindow,
        ...{opacity: props.visible ? "1" : "0"}
    }}
    >
        <Welcome
            setUser={user => setUser(user)}
            setThread={thread => setThread(thread)}
            visible={user === null}
        />

        <ChatThread 
            visible={user !== null}    
        />


    </div>
  )
}

