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
        left: 'calc(-100% - 54px - 58px)', 
        top: 'calc(50% - 30px)', 
        // Layering
        zIndex: '10000',
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
        backgroundColor: '#01000300',
        // Border
        borderRadius: '12px',
        border: `2px solid #010003`,
        overflow: 'hidden',
        // Shadow
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        transition: 'all 0.4s ease',
    },
    emailFormWindow: { 
        fontSize: '20px',
        fontWeight: '600',
        color: '#00398e',
        position: 'relative',
        backgroundColor: "#fffffffe",
        backgroundImage: `url(wave.svg)`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 65%',
        backgroundSize: 'fill',
        textAlign: 'center',
        width: '100%',  
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        overflow: 'hidden',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
    },
    stripe: {
        position: 'relative',
        top: '-45px',
        width: '100%',
        height: '308px',
        backgroundColor: '#7a39e0',
        transform: 'skewY(-12deg)',
    },
    topText: { 
        position: 'relative',
        width: '100%', 
        top: '15%', 
        color: 'white', 
        fontSize: '24px', 
        fontWeight: '600',
    },
    nameInput: { 
        width: '66%',
        fontSize: '17px',
        textAlign: 'center',
        outline: 'none',
        padding: '10px',
        borderRadius: '12px',
        border: '2px solid #000306ff',
        backgroundColor: "#006bde9c",
    },
    bottomText: { 
        position: 'absolute', 
        width: '100%', 
        top: '60%', 
        color: '#7a39e0', 
        fontSize: '24px', 
        fontWeight: '600' 
    },
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

    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    },
    okButton: {
        display: 'block',
        margin: "4px auto",
        fontSize: '24px',
        textAlign: 'center',
        outline: 'none',
        padding: '10px',
        border: 'none',
        backgroundColor: "transparent",
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    skip: {
        position: 'absolute',
        bottom: '-25%',
        left: '50%',
        transform: 'translateX(-50%)',
        textDecoration: 'underline',
        textAlign: 'center',
        color: '#000000',
        fontSize: '17px',
        fontWeight: '600',
        cursor: 'pointer',
    }, 


}