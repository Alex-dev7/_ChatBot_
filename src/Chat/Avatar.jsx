import { useState } from "react"

import { styles } from './styles'

export default function Avatar(props) {

    const [hovered, setHovered] = useState(false)

  return (
    <div style={props.style}>
        <div
            style={{ ...styles.avatarHello,
            ...{opacity: hovered ? "1" : "0"}}}
        >click to interact</div>

        {/* <div
            onClick={() => props.onClick && props.onClick()}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="chat-buttton"
            style={{ ...styles.chatWithMeButton, ...{ transform: hovered ? 'translateY(10%)' : 'translateY(4%)' }}}
        /> */}
        <div className="tree-div"
          onClick={() => props.onClick && props.onClick()}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src="tree.svg" alt="tree" className="tree"/>
      </div>
    </div>
    
  )
}

 Avatar