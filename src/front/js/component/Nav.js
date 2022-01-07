import React, { useEffect, useState } from "react";
import "../../styles/Nav.css";
import logo3 from "./logo3.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      // window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav-logo" src={logo3} alt="MA-logo" />
      <div className="navbutton mb-2">
        <Link to="/signin">
          <Button className="button1" variant="dark" size="lg">
            Log In / Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
