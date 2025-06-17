import "./Sidebar.css";
import "../../global.css";
import logo from "../../assets/logo2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatsIcon from "../../assets/ChatsIcon";
import SettingsIcon from "../../assets/settingsIcon";
import ProfileIcon from "../../assets/ProfileIcon";
import MenuBackButton from "../MenuBackButton/MenuBackButton";
import { motion } from "framer-motion";

function Sidebar() {
  const [menuItems] = useState([
    {
      graphic: <ChatsIcon width="30" height="30" />,
      name: "Chats",
      path: "/chats",
    },
    {
      graphic: <SettingsIcon width="30" height="30" />,
      name: "Settings",
      path: "/settings",
    },
  ]);

  const [selectedItem, setSelectedItem] = useState("Settings");
  const [expanded, setExpanded] = useState(true);

  const navigate = useNavigate();

  return (
    <motion.div id="sidebar">
      <div className="back-button-title-wrapper">
        <div className="LogoTitle">
          <img src={logo} />
          <h1>EduAssist</h1>
        </div>
        <MenuBackButton />
      </div>
      <div className="sidebar-item-container">
        <div className="sidebar-grow">
          {menuItems.map((item) => (
            <div
              className={`sidebar-item ${
                selectedItem === item.name ? "selected-item" : ""
              }`}
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setSelectedItem(item.name);
              }}
            >
              <span className="icon-wrapper">{item.graphic}</span>
              {expanded && <h3 className="sidebar-item-label">{item.name}</h3>}
            </div>
          ))}
        </div>

        <div className="profile-wrapper">
          <div className="profile-button sidebar-item">
            <span className="icon-wrapper">
              <ProfileIcon width="30" height="30" />
            </span>
            {expanded && <h3 className="sidebar-item-label">Profile</h3>}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
