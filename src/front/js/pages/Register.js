import React from "react";
import Button from "react-bootstrap/Button";
import "../../styles/Register.css";
import AMTV1 from "./AMTV1.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="registerScreen">
        <img className="registerScreen_logo" src={AMTV1} alt="main-logo" />
        <Link to="/signin">
          <Button className="registerScreen_button" variant="dark" size="lg">
            Sign In
          </Button>
        </Link>
        <div className="registerScreen_gradient" />
      </div>
      <div className="registerScreen_body">
        <>
          <div className="registerScreen_input">
            <form>
              <h1>Sign Up</h1>
              <input placeholder="Full Name" type="text" />
              <input placeholder="Username" type="email" />
              <input placeholder="Password" type="password" />
              <Link to="/">
                <Button
                  onClick={() => setSignIn(true)}
                  className="registerScreen_submit"
                  variant="dark"
                  size="md"
                >
                  Register
                </Button>
              </Link>
              <br></br>
              <h5>
                <span className="signup_gray">Already have an account? </span>
                <Link to="/signin">
                  <span className="signup_link">Sign In</span>
                </Link>
              </h5>
            </form>
          </div>
        </>
      </div>
    </div>
  );
}

export default Register;
