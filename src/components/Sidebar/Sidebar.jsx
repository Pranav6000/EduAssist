import "./Sidebar.css";
import "../../global.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatsIcon from "../../assets/ChatsIcon";
import SettingsIcon from "../../assets/settingsIcon";
import ProfileIcon from "../../assets/profileIcon";

function Sidebar() {
  const [menuItems, setMenuItems] = useState([
    { graphic: <ChatsIcon />, path: "/chats" },
    { graphic: <SettingsIcon />, path: "/settings" },
    { graphic: <ProfileIcon />, path: "/profile" },
  ]);

  const navigate = useNavigate();

  return (
    <div id="sidebar">
      <ul id="sidebar-list">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className="sidebar-item"
            onClick={() => navigate(item.path)}
          >
            {typeof item.graphic === "string" ? (
              <span>{item.graphic}</span>
            ) : (
              item.graphic
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
