import "./App.css";
import ChatBot from "./Chat/ChatBot";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="home">
      <Nav />
      <div className="header-container">
        <h1>Environmental Awareness Bot</h1>

        <ChatBot />
      </div>
    </main>
  );
}

export default App;
