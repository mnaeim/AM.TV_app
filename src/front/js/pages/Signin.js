import React, { useState, useContext } from "react";
import AMTV1 from "./AMTV1.png";
import "../../styles/signinScreen.css";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  const token = sessionStorage.getItem("token");
  console.log("this is your token", token);
  const history = useHistory();

  const handleClick = () => {
    actions.login(email, password).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      {token && token != "" && token != undefined ? (
        "You are logged in with this token" + token
      ) : (
        <div className="signinScreen">
          <div className="signinScreen_background">
            <img className="signinScreen_logo" src={AMTV1} alt="main-logo" />
            <div className="signinScreen_gradient" />
          </div>
          <div className="signinScreen_body">
            <>
              <div className="signinScreen_input">
                <form>
                  <h1>Sign In</h1>
                  <input
                    placeholder="Username"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button onClick={handleClick}>Watch Now</Button>
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
      )}
    </div>
  );
}

export default Signin;
