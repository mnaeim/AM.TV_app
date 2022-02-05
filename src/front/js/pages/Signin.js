import React, { useState } from "react";
import AMTV1 from "./AMTV1.png";
import "../../styles/signinScreen.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  console.log("this is your token", token)

  const handleClick = () =>{
  const opts = {
    method: "POST",
    body : JSON.stringify({
      
   
        "email": email,
        "password": password
    
    })
  }
    fetch("https://3001-mnaeim-matvapp-zewp3qv4xrf.ws-us30.gitpod.io/api/login",opts)
    .then(resp => {
      if (resp.status === 200) return resp.json();
      else alert("there has been some error");
    })
    .then(data => {
      console.log("this came from the back end",data)
      sessionStorage.setItem("token",data.token);
    })
    .catch(error => {
      console.error("there was an error"), error;
    })
  }

return (
  
    <div>
    {(token && token !="" && token !=undefined ) ?  <Link to="/">sucsess</Link>:
    <div>
<input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
<input type="text" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
<button onClick={handleClick}>
  login
</button>
</div>
}
</div>
)
}
  
export default Signin;
