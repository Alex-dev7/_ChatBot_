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
        left: "0vw",
        top: "20vh",
        fontSize: "15px",
        zIndex: "1000",
        color: "white",
        transition: "all 0.2s ease",
    },
    supportWindow: {
        position: "fixed",
        bottom: "136px",
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
        fontSize: "20px",
        color: "#fffffffe",
        position: "relative",
        backgroundColor: "#05351742",
        textAlign: "center",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
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
        width: "500px",
        height: "500px",
        top: "55%",
        transform: "translateY(-50%) translateX(-4%)",
        zIndex: "100",
        cursor: "pointer",
    },
    expand: {
        position: "absolute",
        top: "2px",
        right: "5px",
        width: "20px",
        height: "20px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        zIndex: "10000",
    },
    expandW: {
        color: "white",
        width: "80vw",
        height: "80vh",
        right: "50%",
        transform: "translateX(50%)",
        backgroundColor: "#2a4d3aeb",
    },
};
