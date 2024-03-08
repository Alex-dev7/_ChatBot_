import { styles } from '../styles'
import Welcome from './Welcome'

export default function ChatWindow(props) {
  return (
    <div
        style={{ ...styles.supportWindow,
        ...{opacity: props.visible ? 1 : 0}
    }}
    >
        <Welcome />

    </div>
  )
}

