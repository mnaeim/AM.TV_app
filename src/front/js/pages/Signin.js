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
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>login</button>
        </div>
      )}
    </div>
  );
}

export default Signin;
