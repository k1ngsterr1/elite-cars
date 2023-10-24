import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { FormButton, RegularButton } from "../../components/Button/Button";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/contacts.css";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Contacts = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  //   const [loadMap, setLoadMap] = useState(false);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setLoadMap(true);
  //     }, 5000);

  //     return () => clearTimeout(timer);
  //   }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="screen">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      <main className="content mt64">
        <h1 className="main-heading">
          Our <span className="orange">Contacts</span>
        </h1>
        <p className="paragraph text-center mt32">
          At [Your Company Name], we prioritize open channels of communication.
          We're here to answer your queries, listen to your feedback, and
          discuss any opportunities for collaboration. Reach out to us through
          any of the means below, and our dedicated team will be in touch
          shortly.
        </p>
        <form action="" className="contact-form">
          <div className="input-group">
            <label htmlFor="" className="label">
              Name*
            </label>
            <input type="text" className="input" placeholder="Your Name" />
          </div>
          <div className="input-group mt32">
            <label htmlFor="" className="label">
              Phone Number or Email*
            </label>
            <input
              type="text"
              className="input"
              placeholder="Phone Number or Email"
            />
          </div>
          <div className="input-group mt32">
            <label htmlFor="" className="label">
              Subject*
            </label>
            <input type="text" className="input" placeholder="Subject" />
          </div>
          <div className="input-group mt32">
            <label htmlFor="" className="label">
              Comment
            </label>
            <input
              type="text"
              className="input"
              placeholder="Write your message"
            />
          </div>
          <RegularButton marginTop="mt32" text="Submit" />
        </form>
        <h2 className="heading-fourth mt64">Our Location</h2>

        <LoadScript googleMapsApiKey="AIzaSyB8xYBxapbDpusz8RsfkxoqFhyZXw_cvls">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          ></GoogleMap>
        </LoadScript>
        <div className="contact-link-container mt32">
          <FontAwesomeIcon icon={faPhone} className="fa-icon" />
          <a href="tel: +13129723890" className="contact-link">
            +1 (312) 972-3890
          </a>
        </div>
        <div className="contact-link-container mt32">
          <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
          <a href="mailto: contact@[yourcompany].com" className="contact-link">
            contact@[yourcompany].com
          </a>
        </div>
        {/* <div className="contact-link-container mt32">
          <FontAwesomeIcon icon={faLocationDot} className="fa-icon" />
          <a href="" className="contact-link-adress">
            200 E Randolph St, Suite 5100, Chicago, IL 60601
          </a>
        </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
