import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/SignupScreen.css";

function Signup() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Login</h1>
        <input placeholder="Username" type="email" />
        <input placeholder="Password" type="password" />
        <Button className="watch_button" variant="dark">
          Watch Now!
        </Button>

        <h4>
          <span className="signup_gray">New to MA-TV? </span>
          <span className="signup_link">Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default Signup;
