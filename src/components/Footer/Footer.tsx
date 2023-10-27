import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import "./styles/footer-style.css";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

//! "AIzaSyB8xYBxapbDpusz8RsfkxoqFhyZXw_cvls"

const logo = require("../../assets/logo_white.svg").default;

const Footer = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadMap(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <footer className="footer mt64">
      <div className="footer-content mt32">
        {loadMap ? (
          <LoadScript googleMapsApiKey="AIzaSyB8xYBxapbDpusz8RsfkxoqFhyZXw_cvls">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            ></GoogleMap>
          </LoadScript>
        ) : (
          <></>
        )}
        <div className="footer-links mt32">
          <img className="logo" src={logo} alt="logo"></img>
          <span className="text white mt16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore
          </span>
          <div className="navigation-container mt32">
            <span className="nav-bold">Navigation</span>
            <Link to="" className="link mt16">
              Example
            </Link>
            <Link to="" className="link mt8">
              Example
            </Link>
            <Link to="" className="link mt8">
              Example
            </Link>
            <Link to="" className="link mt8">
              Example
            </Link>
            <div className="navigation-container mt32">
              <span className="nav-bold">Services</span>
              <Link to="" className="link mt16">
                Example
              </Link>
              <Link to="" className="link mt8">
                Example
              </Link>
              <Link to="" className="link mt8">
                Example
              </Link>
              <Link to="" className="link mt8">
                Example
              </Link>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore{" "}
            </span>
          </div>
          <div className="nav-container">
            <span className="navigation-bold">Navigation</span>
            <nav className="links">
              <a className="link" href="">
                Example
              </a>
              <a className="link" href="">
                Example
              </a>
              <a className="link" href="">
                Example
              </a>
              <a className="link" href="">
                Example
              </a>
              <a className="link" href="">
                Example
              </a>
            </nav>
          </div>
          <div className="nav-container">
            <span className="navigation-bold">Services</span>
            <nav className="links">
              <a className="link" href="">
                Example
              </a>
              <a className="link" href="">
                Example
              </a>
              <a className="link" href="">
                Example
              </a>
              <a className="link" href="">
                Example
              </a>
              <a className="link" href="">
                Example
              </a>
            </nav>
          </div>
          <div className="nav-container">
            <span className="navigation-bold">Get In Touch</span>
            <nav className="links">
              <span className="contact-bold">Contact:</span>
              <div className="contact-group">
                <FontAwesomeIcon className="icon" icon={faPhone} />
                <a className="link-g" href="">
                  +773-494-9021
                </a>
              </div>
              <span className="contact-bold">Email:</span>
              <div className="contact-group">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <a className="link-g" href="">
                  cars@example.com
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
