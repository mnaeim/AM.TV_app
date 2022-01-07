import React, { useEffect, useState } from "react";
import "../../styles/Nav.css";
import AMTV2 from "./AMTV2.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <img className="nav-logo" src={AMTV2} alt="MA-logo" />
      <FontAwesomeIcon icon="fa-regular fa-heart" />
      <div className="navbutton mb-2">
        <Link to="/signin">
          <Button className="button1" variant="dark" size="lg">
            Sign Out
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
