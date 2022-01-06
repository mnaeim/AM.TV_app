import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/SignupScreen.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Login</h1>
        <input placeholder="Username" type="email" />
        <input placeholder="Password" type="password" />
        <Link to="/">
          <Button className="watch_button" variant="dark">
            Watch Now!
          </Button>
        </Link>
        <br></br>
        <h4>
          <span className="signup_gray">New to AM-TV? </span>
          <Link to="/Register">
            <span className="signup_link">Sign Up now.</span>
          </Link>
        </h4>
      </form>
    </div>
  );
}

export default Signup;
