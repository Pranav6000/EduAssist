import "../../global.css";
import "./ChatViewScreen.css";

function ChatViewScreen() {
  return (
    <div id="chat-screen-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Chats</h2>
        <ul className="chat-list">
          <li>Math</li>
          <li>Science</li>
          <li>English</li>
        </ul>
      </div>
    </div>
  );
}

export default ChatViewScreen;
