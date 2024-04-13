export const styles = {
    chatWithMeButton: {
        // cursor: "pointer",
        // borderRadius: "50%",
        // // backgroundImage: `url(robot.png)`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // width: "84px",
        // height: "84px",
        // transition: "all 0.2s ease",
    },
    avatarHello: {
        position: "absolute",
        right: "-30px",
        top: "65vh",
        width: "100px",
        fontSize: "15px",
        zIndex: "10",
        color: "black",
        transition: "all 0.2s ease",
    },
    supportWindow: {
        position: "fixed",
        bottom: "10%",
        right: "24px",
        width: "440px",
        height: "640px",
        maxWidth: "calc(100% - 48px)",
        maxHeight: "calc(100% - 48px)",
        borderRadius: "3px",
        overflow: "hidden",
        boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
        transition: "all 0.4s ease",
    },
    welcomeWindow: {
        // paddingTop: "30px",
        fontSize: "19px",
        color: "#fffffffe",
        position: "relative",
        backgroundColor: "#05351742",
        textAlign: "center",
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
    },
    nameInput: {
        width: "66%",
        fontSize: "17px",
        textAlign: "center",
        outline: "none",
        padding: "10px",
        border: "none",
        borderBottom: "1px solid #ffffffff",
        backgroundColor: "#07b5e500",
    },
    loadingDiv: {
        position: "absolute",
        height: "100%",
        width: "100%",
        textAlign: "center",
        backgroundColor: "#071b2bfd",
        zIndex: "100",
    },
    loadingIcon: {
        position: "absolute",
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)",
        width: "100px",
        height: "100px",
        border: ".5px solid #fff",
    },
    okButton: {
        display: "block",
        position: "absolute",
        bottom: "-70%",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "24px",
        textAlign: "center",
        outline: "none",
        padding: "8px 20px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#32fb0058",
        cursor: "pointer",
        transition: "all 0.2s ease",
    },
    skip: {
        position: "absolute",
        bottom: "-100%",
        left: "50%",
        transform: "translateX(-50%)",
        textDecoration: "underline",
        textAlign: "center",
        color: "#000000",
        fontSize: "17px",
        fontWeight: "200",
        cursor: "pointer",
    },
    hoverArea: {
        position: "absolute",
        width: "400px",
        height: "400px",
        top: "55%",
        transform: "translateY(-50%) translateX(-4%)",
        zIndex: "100",
        cursor: "pointer",
    
    },
    expand: {
        position: "absolute",
        top: "8px",
        right: "5px",
        width: "20px",
        height: "20px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        zIndex: "10000",
    },
    arrowDown: {
        position: "absolute",
        top: "0%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "40px",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0",
        background: "#416b551d",
        zIndex: "10000",
    },
    expandW: {
        // color: "#242424ff",
        width: "80vw",
        height: "80vh",
        right: "50%",
        transform: "translateX(50%)",
        backgroundColor: "#a4b9aeec",
    },
    expandWMobile: {
        // marginTop: "30px",
        width: "100vw",
        height: "100vh",
        bottom: "0",
        right: "0",
        maxWidth: "100vw",
        maxHeight: "100%",
        backgroundColor: "#a4b9aeec",
        zIndex: "10000",
    },
};
