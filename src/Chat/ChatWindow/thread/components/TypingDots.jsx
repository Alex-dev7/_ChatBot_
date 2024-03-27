import { threadStyles } from "../threadStyles";

function TypingDots() {

    return (
    <>
        <div
            style={{
                ...threadStyles.chatMessage,
            }}
        >
            <div style={threadStyles.avatarContainer}>
                <div
                    style={{
                        ...threadStyles.avatar,
                        backgroundColor: "#0d91017d" ,
                    }}
                />
                <span style={threadStyles.avatarName}>
                    Green Guru
                </span>
            </div>
            <div style={threadStyles.message}>
                <div className="typing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
            </div>


        </div>

    </>

    )

}

export default TypingDots

