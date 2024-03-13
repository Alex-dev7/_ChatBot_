import "./App.css";
import ChatBot from "./Chat/ChatBot";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="home">
      {/* <div className="tree-div">
        <img src="tree.svg" alt="tree" className="tree"/>
      </div> */}
      <Nav />
      <div className="header-container">
        <h1>Environmental Awareness Bot</h1>

        <ChatBot />
      </div>
    </main>
  );
}

export default App;
