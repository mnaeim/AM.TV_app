import React, { useState } from "react";
import logo from "./logo.png";
import "../../styles/LoginScreen.css";
import Button from "react-bootstrap/Button";
import Signup from "./Signup";
import { Home } from "./Home";
import { Link } from "react-router-dom";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img className="loginScreen_logo" src={logo} alt="main-logo" />
        <Link to="/Register"><Button
          onClick={() => setSignIn(true)}
          className="loginScreen_button"
          variant="dark"
          size="lg"
        >
          Sign Up
        </Button></Link>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <Signup />
        ) : (
          <>
            <h1>Unlimited movies for you and your loved ones.</h1>
            <h2>Watch all you want. Anywhere you are.</h2>
            <h3>Ready to watch? Login now.</h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email" />
                <Button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_submit"
                  variant="dark"
                  size="md"
                >
                  Submit
                </Button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
