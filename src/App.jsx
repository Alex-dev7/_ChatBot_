import "./App.css";
import ChatBot from "./Chat/ChatBot";
import Nav from "./Navigation/Nav";
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
                <Nav />
                <AirQualityWidget />
                <div className="header-container" draggable="false">
                    <h1 className="title">Environmental Awareness Bot</h1>

                    <ChatBot />
                </div>
            </div>
            <Modal showPopup={showPopup} name={name} />
        </main>
    );
}

export default App;
