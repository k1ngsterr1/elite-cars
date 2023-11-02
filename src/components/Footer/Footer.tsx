import React, { useEffect, useState } from "react";
import BingMapsReact from "bingmaps-react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/footer-style.css";
import { Map } from "../Map/Map";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const logo = require("../../assets/logo_white.svg").default;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer mt128">
      <div className="footer-content mt32">
        <div className="footer-links mt32">
          <img className="logo" src={logo} alt="logo"></img>
          <span className="text white mt16">
            Elite Arrival ensures that every ride is not only luxurious but also
            secure
          </span>
          <div className="navigation-container mt32">
            <span className="nav-bold">Navigation</span>
            <Link to="/" className="link mt16">
              Home
            </Link>
            <Link to="/services" className="link mt8">
              Services
            </Link>
            <Link to="/prices" className="link mt8">
              Cars & Rates
            </Link>
            <Link to="/contacts" className="link mt8">
              Contacts
            </Link>
            <Link to="/policy" className="link mt8">
              Privacy Policy
            </Link>
            <div className="navigation-container mt32">
              <span className="nav-bold">Services</span>
              <Link to="/services/airport-transfers" className="link mt16">
                Airport Transfers
              </Link>
              <Link to="/services/corporate-travel" className="link mt8">
                Corporate Travel
              </Link>
              <Link to="/services/nationwide" className="link mt8">
                Nationwide Service
              </Link>
              <Link to="/services/special-events" className="link mt8">
                Special Events
              </Link>
            </div>
            <div className="navigation-container mt32">
              <span className="nav-bold">Contacts</span>
              <a className="link mt16" href="tel:+1 (312) 972-3890">
                <FontAwesomeIcon className="contacts-icon" icon={faPhone} />
                <span className="ml16">+1 (312) 972-3890</span>
              </a>
              <a
                className="link mt16"
                href="mailto:elitearrivalchicago@gmail.com"
              >
                <FontAwesomeIcon className="contacts-icon" icon={faEnvelope} />
                <span className="ml16">elitearrivalchicago@gmail.com</span>
              </a>
              <a className="link mt16">
                <FontAwesomeIcon
                  className="contacts-icon"
                  icon={faLocationDot}
                />
                <span className="ml16">5516 N Major Ave Chicago IL 60630</span>
              </a>
            </div>
          </div>
        </div>
        <figure className="separator mt32"></figure>
        <span className="text mt16">All rights reserved</span>
      </div>
      <div className="footer-content-pc">
        <div className="content-pc">
          <div className="logo-group">
            <img src={logo} alt="logo-white" />
            <span className="logo-text">
              Elite Arrival ensures that every ride is not only luxurious but
              also secure
            </span>
          </div>
          <div className="nav-container">
            <span className="navigation-bold">Navigation</span>
            <nav className="links">
              <Link to="/" className="link mt16">
                Home
              </Link>
              <Link to="/services" className="link mt8">
                Services
              </Link>
              <Link to="/prices" className="link mt8">
                Cars & Rates
              </Link>
              <Link to="/contacts" className="link mt8">
                Contacts
              </Link>
              <Link to="/policy" className="link mt8">
                Privacy Policy
              </Link>
            </nav>
          </div>
          <div className="nav-container">
            <span className="navigation-bold">Services</span>
            <nav className="links">
              <Link className="link" to="/services/airport-transfers">
                Airport Transfers
              </Link>
              <Link className="link" to="/services/corporate-travel">
                Corporate Travel
              </Link>
              <Link className="link" to="/services/nationwide">
                Nationwide Service
              </Link>
              <Link className="link" to="/services/special-events">
                Special Events
              </Link>
            </nav>
          </div>
          <div className="nav-container">
            <span className="navigation-bold">Get In Touch</span>
            <nav className="links">
              <span className="contact-bold">Contact:</span>
              <div className="contact-group">
                <FontAwesomeIcon className="icon" icon={faPhone} />
                <a className="link-g" href="tel:+1 (312) 972-3890">
                  +1 (312) 972-3890
                </a>
              </div>
              <span className="contact-bold">Email:</span>
              <div className="contact-group">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <a
                  className="link-g"
                  href="mailto: elitearrivalchicago@gmail.com"
                >
                  elitearrivalchicago@gmail.com
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
