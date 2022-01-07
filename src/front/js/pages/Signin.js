import React, { useState } from "react";
import AMTV1 from "./AMTV1.png";
import "../../styles/signinScreen.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Signin() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="signinScreen">
      <div className="signinScreen_background">
        <img className="signinScreen_logo" src={AMTV1} alt="main-logo" />
        <Link to="/Register">
          <Button
            onClick={() => setSignIn(true)}
            className="signinScreen_button"
            variant="dark"
            size="lg"
          >
            Sign Up
          </Button>
        </Link>
        <div className="signinScreen_gradient" />
      </div>
      <div className="signinScreen_body">
        <>
          <div className="signinScreen_input">
            <form>
              <h1>Sign In</h1>
              <input placeholder="Username" type="email" />
              <input placeholder="Password" type="password" />
              <Link to="/">
                <Button
                  onClick={() => setSignIn(true)}
                  className="signinScreen_submit"
                  variant="dark"
                  size="md"
                >
                  Watch now!
                </Button>
              </Link>
              <br></br>
              <h5>
                <span className="signup_gray">New to AM-TV? </span>
                <Link to="/register">
                  <span className="signup_link">Sign Up now.</span>
                </Link>
              </h5>
            </form>
          </div>
        </>
      </div>
    </div>
  );
}

export default Signin;
