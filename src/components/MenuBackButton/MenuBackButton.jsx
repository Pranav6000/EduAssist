import "./MenuBackButton.css";
import "../../global.css";
import { useState } from "react";

export default function MenuBackButton({ scale = 1, isChecked, setChecked }) {
  return (
    <div style={{ transform: `scale(${scale})` }}>
      <input
        id="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label className="toggle" htmlFor="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
      </label>
    </div>
  );
}
