import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen.jsx";
import ChatViewScreen from "./screens/ChatViewScreen/ChatViewScreen.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/chat" element={<ChatViewScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
