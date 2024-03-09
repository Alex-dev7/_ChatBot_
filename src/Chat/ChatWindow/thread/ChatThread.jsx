import {threadStyles }from "./threadStyles"

function ChatThread() {
  return (
    <div style={{...threadStyles.chatThread}}
    >
        <div className="chatLogContainer" style={threadStyles.chatLogContainer}>
            <div style={threadStyles.chatMessage}>
                <div style={threadStyles.avatarContainer}>
                  <div style={threadStyles.avatar} />
                  <span style={threadStyles.avatarName}>You</span>
                </div>
                <div style={threadStyles.message}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi tempora officia fugiat dignissimos reprehenderit quos eos facere magni ipsa. Ad alias sit hic quis quia voluptatibus. Quos, sed delectus.e
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia, harum, corrupti cupiditate cum omnis laborum quo ex in ducimus magni fugit excepturi eius iusto suscipit quos error magnam saepe!
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis laboriosam numquam debitis esse officiis, accusantium inventore, nulla assumenda vero quod perferendis dolorum deleniti et maxime! Qui et ad eos nemo?

               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, eos assumenda unde quae numquam labore earum error magnam, eveniet nesciunt inventore expedita doloribus illum magni, mollitia fugit cumque laborum ullam!
                </div>
            </div>

            <div style={{...threadStyles.chatMessage,  backgroundColor: '#21342aff'}}>
               <div style={threadStyles.avatarContainer}>
                  <div style={threadStyles.avatar} />
                  <span style={threadStyles.avatarName}>Assistant</span>
                </div>
                <div style={threadStyles.message}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, laborum fugiat iure nisi nulla quaerat molestiae sequi qui quidem cumque provident exercitationem deserunt magni praesentium, soluta consequatur numquam, veritatis ab.
                </div>
            </div>
            
        </div>
        <div style={threadStyles.chatInputContainer}>
          <form action="">
            <input style={threadStyles.chatInputArea}  rows="1"></input>
          </form>
            
        </div>
    </div>
  )
}

export default ChatThread