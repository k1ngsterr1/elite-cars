import React, { useEffect } from "react";

import Hamburger from "hamburger-react";
import Menu from "../Menu/Menu";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "./styles/header.css";

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

  function navigateToServices() {
    navigate("/services");
  }

  function navigateToCarsAndRates() {
    navigate("/prices");
  }

  function navigateToContacts() {
    navigate("/contacts");
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
        <div className="logo-container">
          <img
            src={logo}
            className="logo"
            onClick={navigateToMain}
            alt="logo"
          />
          <a href="tel:+1 (312) 972-3890">
            <FontAwesomeIcon className="phone" icon={faPhone} />
          </a>
        </div>
        <Hamburger
          color="#FF5722"
          toggled={isMenuOpen ? true : false}
          onToggle={toggleMenu}
        ></Hamburger>
      </div>
      <div className="header-pc">
        <img src={logo} className="logo" onClick={navigateToMain} alt="logo" />
        <nav className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/services" className="link">
            Services
          </Link>
          <Link to="/prices" className="link">
            Cars & Rates
          </Link>
          <Link to="/contacts" className="link">
            Contacts
          </Link>
        </nav>
        <Button text="Contact Us" scroll="contacts" marginTop="mt0" />
      </div>
    </header>
  );
};

export default Header;
