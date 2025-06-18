import "./Sidebar.css";
import "../../global.css";
import logo from "../../assets/logo2.png";
import { useState, useEffect, useRef } from "react";
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
  const [isScreenWide, setScreenWide] = useState(window.innerWidth < 1000);

  const sidebarRef = useRef(null);

  const expandedWidth = Math.min(window.innerWidth * 0.15, 300);

  useEffect(() => {
    const handleResize = () => {
      setScreenWide(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isCollapsed = isScreenWide || !expanded;

  const handleNavigation = (path, name) => {
    console.log(`Navigating to ${path}`);
    setSelectedItem(name);
  };

  return (
    <motion.div
      id="sidebar"
      className={isCollapsed ? "collapsed" : "expanded"}
      animate={{ width: isCollapsed ? "80px" : expandedWidth }}
      transition={{ duration: 0.3 }}
      ref={sidebarRef}
    >
      <div className="heading-bar">
        <div className="heading-left">
          <img src={logo} id="heading-logo" alt="Logo" />
          {!isScreenWide && <h1 id="heading">EduAssist</h1>}
        </div>
        {!isScreenWide && (
          <MenuBackButton scale="0.5" setChecked={setExpanded} />
        )}
      </div>

      <div className="sidebar-item-container">
        <div className="sidebar-grow">
          {menuItems.map((item) => (
            <div
              className={`sidebar-item ${
                selectedItem === item.name ? "selected-item" : ""
              }`}
              key={item.path}
              onClick={() => handleNavigation(item.path, item.name)}
            >
              <span className="icon-wrapper">{item.graphic}</span>
              <span className="tooltip">{item.name}</span>
              <h3 className="sidebar-item-label">{item.name}</h3>
            </div>
          ))}
        </div>

        <div
          className="profile-button sidebar-item"
          onClick={() => handleNavigation("/profile", "Profile")}
          style={{ cursor: "pointer" }}
        >
          <span className="icon-wrapper">
            <ProfileIcon width="30" height="30" />
          </span>
          <span className="tooltip">Profile</span>
          <h3 className="sidebar-item-label">Profile</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
