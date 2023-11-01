import React from "react";
import { Slide } from "react-awesome-reveal";
import { Navigate, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

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
        <img className="logo" src={logo} alt="logo" onClick={navigateToMain} />
        <figure className="separator" />
        <nav className="links mt16">
          <Link className="link" to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link className="link mt16" to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link className="link mt16" to="/prices" onClick={closeMenu}>
            Cars & Rates
          </Link>
          <Link className="link mt16" to="/contacts" onClick={closeMenu}>
            Contacts
          </Link>
        </nav>
      </div>
    </Slide>
  );
};

export default Menu;
