import "./App.css";
import ChatBot from "./Chat/ChatBot";
import Nav from "./components/Navigation/Nav";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import AirQualityWidget from "./components/AirQualityWidget";

function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [name, setName] = useState(null);



    useEffect(() => {
        const storedName = window.localStorage.getItem("user");
        setName(storedName)
        if (name !== null) {
             setShowPopup(true)

            setTimeout(() => {
                setShowPopup(false)
            }, 8000)

            }
    }, [])



    return (
        <main className="main-container" >
            <div className="home" draggable="false">
               
                <AirQualityWidget />
                <div className="header-container" draggable="false">
                    <Nav /> 
                    <h1 className="title">Environmental Awareness Bot</h1>

                    <ChatBot />
                </div>
                <Modal showPopup={showPopup} name={name} />
            </div>
        
        </main>
    );
}

export default App;
