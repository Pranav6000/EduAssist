import "./Sidebar.css";
import "../../global.css";
import logo from "../../assets/logo2.png";
import { useState, useEffect, useRef } from "react";
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
  const [expanded, setExpanded] = useState(false);

  const sidebarRef = useRef(null);

  const navigate = useNavigate();

  return (
    <motion.div
      id="sidebar"
      className={expanded ? "expanded" : "collapsed"}
      animate={{ width: expanded ? "300px" : "60px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="heading-bar">
        <div className="heading-left">
          <img src={logo} id="heading-logo" />
          <h1 id="heading">EduAssist</h1>
        </div>
        <MenuBackButton scale="0.5" setChecked={setExpanded} />
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
              <h3 className="sidebar-item-label">{item.name}</h3>
            </div>
          ))}
        </div>

        <div
          className="profile-button sidebar-item"
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }} // optional, but good UX to show clickable
        >
          <span className="icon-wrapper">
            <ProfileIcon width="30" height="30" />
          </span>
          <h3 className="sidebar-item-label">Profile</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
