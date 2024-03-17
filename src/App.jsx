import "./App.css";
import ChatBot from "./Chat/ChatBot";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="home">
      <Nav />
      <div className="header-container">
        <h1>Environmental Awareness Bot</h1>

        <ChatBot />
      </div>
      <About />
    </main>
  );
}

export default App;
