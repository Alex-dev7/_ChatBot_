import { styles } from '../styles'

export default function ChatWindow(props) {
  return (
    <div
        style={{ ...styles.supportWindow,
        ...{opacity: props.visible ? 1 : 0}
    }}
    >

    </div>
  )
}

