import React, { useEffect, useState, useContext } from "react";
import "../../styles/Nav.css";
import AMTV2 from "./AMTV2.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../store/appContext";

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
  const { store, actions } = useContext(Context);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav-logo" src={AMTV2} alt="MA-logo" />
      <FontAwesomeIcon icon="fa-regular fa-heart" />
      <div className="navbutton mb-2">
        {!store.token ? (
          <Link to="/signin">
            <Button
              onClick={() => actions.logout()}
              className="button1"
              variant="dark"
              size="lg"
            >
              Sign out
            </Button>
          </Link>
        ) : (
          <Link to="/signin">
            <Button
              onClick={() => actions.logout()}
              className="button1"
              variant="dark"
              size="lg"
            >
              Sign out
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
