import "./FillButton.css";
import "../../global.css";

function FillButton({
  colorOne = "#c1a362",
  colorTwo = "transparent",
  text = "Enter",
  height = "10px",
}) {
  return (
    <button
      className="button"
      style={{ "--button-color-one": colorOne, "--button-color-two": colorTwo }}
    >
      {text}
    </button>
  );
}

export default FillButton;
