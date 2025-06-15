import { useState } from "react";
import "../../global.css";
import "./ChatViewScreen.css";
import "../../components/Sidebar/Sidebar.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

function ChatViewScreen() {
  const chats = [
    "Algebra 2",
    "Biology Advanced",
    "English",
    "Computer Science",
  ];

  return (
    <div id="chat-screen-container">
      <Sidebar />
    </div>
  );
}

export default ChatViewScreen;
