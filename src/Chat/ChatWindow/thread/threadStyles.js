export const threadStyles = {
    // ChatThread
    chatThread: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
        height: "100%",
        paddingTop: "30px",
        overflow: "hidden",
        backgroundColor: "#023e1e2b",
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
        backgroundColor: "white",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
    },
    avatarName: {
        color: "white",
        // fontSize: '16px',
        fontWeight: "700",
    },
    message: {
        // padding: '0px',
        width: "84%",
        paddingLeft: "42px",
    },
    inputButton: {
        backgroundColor: "#00000000",
        borderRadius: "10px",
        border: "none",
        position: "absolute",
        right: "1%",
        cursor: "pointer",
    },
    formContainer: {
        with: "100%",
        height: "60px",
        position: "absolute",
        bottom: "5%",
        left: "5%",
        right: "5%",
        display: "flex",
        alignItems: "center",
    },
    chatInputArea: {
        width: "100%",
        // height: '40px',
        backgroundColor: "#0000007b",
        fontSize: "16px",
        borderRadius: "10px",
        border: "none",
        padding: "10px 15px",
    },
};
