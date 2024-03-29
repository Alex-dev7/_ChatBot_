import "./App.css";
import ChatBot from "./Chat/ChatBot";
import Nav from "./Navigation/Nav";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";

function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [name, setName] = useState(null);



    useEffect(() => {
        const storedName = window.localStorage.getItem("user");
        setName(storedName)
        if (name !== null) {
          
             setShowPopup(true);
            console.log("showPopup set to true");

            setTimeout(() => {
                setShowPopup(false);
                console.log("showPopup set to false");
            }, 8000);

            }
    }, []);



    return (
        <main className="main-container">
            <div className="home">
                <Nav />
                <div className="header-container">
                    <h1>Environmental Awareness Bot</h1>

                    <ChatBot />
                </div>
            </div>
            <Modal showPopup={showPopup} name={name} />
        </main>
    );
}

export default App;
