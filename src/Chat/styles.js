export const styles = {
    chatWithMeButton: {
        cursor: 'pointer',
        // boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        borderRadius: '50%',
        // Background 
        backgroundImage: `url(robot.png)`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // Size
        width: '84px',
        height: '84px',
        transition: 'all 0.2s ease',
        
    },
    avatarHello: { 
        // Position
        position: 'absolute', 
        left: '0vw', 
        top: '20vh', 
        fontSize: '18px',
        // Layering
        zIndex: '1000',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.172)',
        // Border
        padding: '12px 12px 12px 16px',
        borderRadius: '24px', 
        // Color
        // backgroundColor: '#f9f0ff',
        color: 'white',
        transition: 'all 0.2s ease',
    },
    supportWindow: {
        // Position
        position: 'fixed',
        bottom: '136px',
        right: '24px',
        zIndex:"100",
        // Size
        width: '420px',
        height: '530px',
        maxWidth: 'calc(100% - 48px)',
        maxHeight: 'calc(100% - 48px)',
        // backgroundColor: '#a7aa0200',
        // Border
        borderRadius: '3px',
        // border: `1px solid #02811f57`,
        overflow: 'hidden',
        // Shadow
        // boxShadow: '0px 0px 29px 3px rgba(99, 106, 6, 0.349)',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        transition: 'all 0.4s ease',
    },
    welcomeWindow: { 
        fontSize: '20px',
        // fontWeight: '600',
        color: '#fffffffe',
        position: 'relative',
        backgroundColor: '#05351742',
        textAlign: 'center',
        width: '100%',  
        height: '100%',
        display: 'flex', 
        // justifyContent: 'start',
        flexDirection: 'column',
        // gap: '2px',
        // overflow: 'hidden',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
    },
    // topText: { 
    //     position: 'relative',
    //     width: '100%', 
    //     top: '15%', 
    //     color: 'white', 
    //     fontSize: '24px', 
    //     fontWeight: '600',
    // },
    nameInput: { 
        width: '66%',
        fontSize: '17px',
        textAlign: 'center',
        outline: 'none',
        padding: '10px',
        border: 'none',
        borderBottom: '1px solid #ffffffff',
        // borderRadius: '12px',
        // border: '2px solid #000306ff',
        backgroundColor: "#07b5e500",
        
    },
    // bottomText: { 
    //     position: 'absolute', 
    //     width: '100%', 
    //     top: '60%', 
    //     color: '#7a39e0', 
    //     fontSize: '24px', 
    //     fontWeight: '600' 
    // },
    loadingDiv: { 
        position: 'absolute', 
        height: '100%', 
        width: '100%', 
        textAlign: 'center', 
        backgroundColor: '#071b2bfd',
        zIndex: "100",
        
    },
    loadingIcon: { 
        position: 'absolute', 
        top: 'calc(50% - 50px)', 
        left: 'calc(50% - 50px)',  
        width: '100px',
        height: '100px',
        border: '.5px solid #fff',
    },

    // chatEngineWindow: {
    //     width: '100%',  
    //     backgroundColor: '#fff',
    // },
    okButton: {
        display: 'block',
        position: 'absolute',
        bottom: '-70%',
        left: '50%',
        transform: 'translateX(-50%)',
        // margin: "24px auto 0px auto",
        fontSize: '24px',
        textAlign: 'center',
        outline: 'none',
        padding: '8px 20px',
        // border: '1px solid black',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: "#32fb0058",
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    skip: {
        position: 'absolute',
        bottom: '-110%',
        left: '50%',
        transform: 'translateX(-50%)',
        textDecoration: 'underline',
        textAlign: 'center',
        color: '#000000',
        fontSize: '17px',
        fontWeight: '200',
        cursor: 'pointer',
    }, 
hoverArea: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    top: '55%',
    transform: 'translateY(-50%) translateX(-4%)',
    // left: '0',
    // backgroundColor: 'rgba(0, 0, 0, 0)',
    zIndex: '100',
    // borderRadius: '50%',
    // boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
    cursor: 'pointer',
},
expand: {
    position: 'absolute',
    top: '1px',
    right: '5px',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    zIndex: '1000',

},
expandW : {
    color: 'white',
    width: '80vw',
    height: '80vh',
    right: '50%',
    transform: 'translateX(50%)',
    backgroundColor: '#023e1eb9',
   
}

}