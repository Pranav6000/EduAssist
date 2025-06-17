import "./MenuBackButton.css";
import "../../global.css";

export default function MenuBackButton() {
  return (
    <>
      <input id="checkbox" type="checkbox" />
      <label class="toggle" for="checkbox">
        <div id="bar1" class="bars"></div>
        <div id="bar2" class="bars"></div>
        <div id="bar3" class="bars"></div>
      </label>
    </>
  );
}
