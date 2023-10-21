import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import Menu from "../Menu/Menu";

import "./styles/header.css";

interface HeaderProps {
  isMenuOpen?: any;
  toggleMenu?: any;
}

const logo = require("../../assets/logo.svg").default;

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
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
      <img src={logo} alt="logo" className="logo" />
      <Hamburger
        color="#FF5722"
        toggled={isMenuOpen ? true : false}
        onToggle={toggleMenu}
      ></Hamburger>
    </header>
  );
};

export default Header;
