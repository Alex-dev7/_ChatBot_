import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ChatBot from './Chat/chatBot.jsx'

// const path = window.location.pathname

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* { path.indexOf('/chat') === -1 ?  <App /> : <ChatBot/> } */}
  <App />
  </React.StrictMode>,
)
