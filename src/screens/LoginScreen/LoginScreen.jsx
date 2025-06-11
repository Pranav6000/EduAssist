import { useEffect } from "react";
import "./LoginScreen.css";
import "../../global.css";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import logo from "../../assets/logo.png";
import { scaleElementByViewport } from "../../utils/scaleElement";

function LoginScreen() {
  useEffect(() => {
    const scale = () => scaleElementByViewport("login-container");

    scale(); // initial scale
    window.addEventListener("resize", scale);

    return () => window.removeEventListener("resize", scale);
  }, []);

  return (
    <div id="screen-container">
      <div id="login-scaler">
        <div id="login-container">
          <LoginForm />
          <div id="logo-container">
            <img src={logo} id="logo" />
            <center>
              <h1 id="logo-title">EduAssist</h1>
              <h3 id="app-motto">Your personal assistant</h3>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
