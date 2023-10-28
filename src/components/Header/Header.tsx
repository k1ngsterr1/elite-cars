import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import Menu from "../Menu/Menu";
import { Navigate, useNavigate } from "react-router-dom";

import "./styles/header.css";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "../Button/Button";

interface HeaderProps {
  isMenuOpen?: any;
  toggleMenu?: any;
}

const logo = require("../../assets/logo.svg").default;

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();

  function navigateToMain() {
    navigate("/");
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    return () => {
      document.body.style.overflowY = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-mob">
        <img src={logo} className="logo" onClick={navigateToMain} alt="logo" />
        <Hamburger
          color="#FF5722"
          toggled={isMenuOpen ? true : false}
          onToggle={toggleMenu}
        ></Hamburger>
      </div>
      <div className="header-pc">
        <img src={logo} className="logo" onClick={navigateToMain} alt="logo" />
        <nav className="links">
          <ScrollLink to="" className="link" smooth>
            Home
          </ScrollLink>
          <ScrollLink to="" className="link" smooth>
            Services
          </ScrollLink>
          <ScrollLink to="" className="link" smooth>
            Cars & Rates
          </ScrollLink>
          <ScrollLink to="" className="link" smooth>
            Contacts
          </ScrollLink>
        </nav>
        <Button text="Contact Us" scroll="contacts" marginTop="mt0" />
      </div>
    </header>
  );
};

export default Header;
