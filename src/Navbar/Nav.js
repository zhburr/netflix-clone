import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  const transitionEffect = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionEffect);
    return () => {
      window.removeEventListener("scroll", transitionEffect);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src={require("../assets/logo/netflix.png")}
          alt="logo"
        />

        <img
          className="nav__avatar "
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar "
        />
      </div>
    </div>
  );
}

export default Nav;
