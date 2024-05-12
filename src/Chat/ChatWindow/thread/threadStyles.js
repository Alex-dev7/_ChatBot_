export const threadStyles = {
    // ChatThread
    chatThread: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#c3c59f3e",
        fontSize: "16px",
    },
    chatLogContainer: {
        width: "100%",
        height: "calc(100% - 90px)",
        paddingBottom: "50px",
        marginTop: "40px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "scroll",
    },
    chatMessage: {
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        color: "#0d0d0dff",
        width: "100%",
        height: "auto",
        
    },
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        paddingTop: "12px",
    },
    avatar: {
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "25px",
    },
    avatarName: {
        color: "black",
        fontSize: '17px',
        fontWeight: "600",
    },
    message: {
        width: "84%",
        paddingLeft: "42px",
    },
    inputButton: {
        backgroundColor: "#25252500",
        borderRadius: "10px",
        height: '40px',
        border: "none",
        position: "absolute",
        right: "-1%",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        width: "100%",
        height: "38px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "10px",
    },
    chatInputArea: {
        position: "absolute",
        width: "85%",
        bottom: "0%",
        height: '30px',
        backgroundColor: "#252525e7",
        fontSize: "16px",
        border: "none",
        paddingTop: "10px",
        paddingLeft: "10px",
        paddingRight: "30px",
        borderRadius: "10px",
     
    },
};
