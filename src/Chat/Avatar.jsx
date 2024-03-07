import { useState } from "react"

import { styles } from './styles'

export default function Avatar(props) {

    const [hovered, setHovered] = useState(false)

  return (
    <div style={props.style}>
        <div
            style={{ ...styles.avatarHello,
            ...{opacity: hovered ? 1 : 0}}}
        >Hi, I am your assistent!</div>

        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="chat-buttton"
            style={{ ...styles.chatWithMeButton, ...{ transform: hovered ? 'translateY(10%)' : 'translateY(4%)' }}}
        />
    </div>
  )
}

 Avatar