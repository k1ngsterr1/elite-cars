import React from "react";
import { Slide } from "react-awesome-reveal";
import { Navigate, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Hamburger from "hamburger-react";

import "./styles/menu-styles.css";
interface MenuProps {
  isMenuOpen?: any;
  toggleMenu?: any;
  openModal?: any;
}

const logo = require("../../assets/logo_white.svg").default;

const Menu: React.FC<MenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();

  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  function navigateToMain() {
    navigate("/");
    if (isMenuOpen) {
      toggleMenu();
    }
  }

  return (
    <Slide className="menu" direction="down" triggerOnce={isMenuOpen}>
      <div className="menu-content">
        <div className="hamburger-btn">
          <Hamburger toggled={true} toggle={closeMenu} color="#fff" />
        </div>
        <img className="logo" src={logo} alt="logo" />
        <figure className="separator" />
        <nav className="links mt16">
          <ScrollLink className="link" to="home">
            Home
          </ScrollLink>
          <ScrollLink className="link mt16" to="services">
            Services
          </ScrollLink>
          <ScrollLink className="link mt16" to="rates">
            Cars & Rates
          </ScrollLink>
          <ScrollLink className="link mt16" to="contacts">
            Contacts
          </ScrollLink>
        </nav>
      </div>
    </Slide>
  );
};

export default Menu;
