export const threadStyles = {
    // ChatThread
    chatThread: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
        height: "100%",
        // paddingTop: "30px",
        overflow: "hidden",
        backgroundColor: "#e3fdef2e",
        fontSize: "16px",
    },
    chatLogContainer: {
        width: "100%",
        height: "calc(100% - 90px)",
        // padding: '14px',
        paddingBottom: "50px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "scroll",
    },
    chatMessage: {
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        // alignItems: 'center',
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
        // backgroundColor: "white",
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
        // fontSize: '16px',
        fontWeight: "700",
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
        right: "-9%",
        cursor: "pointer",
    },
    formContainer: {
        width: "90%",
        height: "38px",
        position: "relative",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "10px",
    },
    chatInputArea: {
        position: "absolute",
        minWidth: "100%",
        bottom: "0%",
        left: "3%",
        // right: "30%",
        height: '20px',
        backgroundColor: "#252525d2",
        fontSize: "16px",
        borderRadius: "10px",
        border: "none",
        padding: "10px 20px",
        paddingRight: "10px",
       
    },
};
