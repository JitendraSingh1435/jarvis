import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home"> Home </a>
    </p>
    <p>
      <a href="#wjarvis"> What is Jaris?</a>
    </p>
    <p>
      <a href="#openai"> Open AI </a>
    </p>
    <p>
      <a href="#casestudy"> Case Studies </a>
    </p>
    <p>
      <a href="#library"> Library </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="jarvis_navbar">
      <div className="jarvis_navbar-links">
        <div className="jarvis_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="jarvis_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="jarvis_navbar-sign">
        <p> Sign in</p>
        <button type="button"> Sign up</button>
      </div>

      <div className="jarvis_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="jarvis_navbar-menu_container scale-up-center">
            <div>
              <div className="jarvis_navbar-menu_container-links">
                <Menu />
                <div className="jarvis_navbar-menu_container-links-sign">
                  <p> Sign in</p>
                  <button type="button "> Sign up</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
