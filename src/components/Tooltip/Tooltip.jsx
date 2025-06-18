import { useState } from "react";

export default function Tooltip({
  text,
  enabled = false,
  children,
  setEnabled,
}) {
  const [isVisible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => enabled && setVisible(true)}
      onMouseLeave={() => enabled && setVisible(false)}
      onClick={() => setEnabled && setEnabled(!enabled)} // Optional: toggle on click
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      {isVisible && <div className="tooltip">{text}</div>}
    </div>
  );
}
