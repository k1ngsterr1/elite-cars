import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import "./styles/footer-style.css";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

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
          <LoadScript googleMapsApiKey="YOUR_API_KEY">
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
            {/* <div className="navigation-container mt32">
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
            </div> */}
          </div>
        </div>
        <figure className="separator mt32"></figure>
        <span className="text mt16">All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
