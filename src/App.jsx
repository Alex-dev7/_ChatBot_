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

    if (storedName) {
      setName(storedName)
      setShowPopup(true)

      setTimeout(() => {
        setShowPopup(false)
      }, 8000)
    }


  }, [])


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
