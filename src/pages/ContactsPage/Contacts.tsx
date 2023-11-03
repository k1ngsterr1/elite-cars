import React, { useState, useEffect, useRef } from "react";
import BingMapsReact from "bingmaps-react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ThanksPopup from "../../components/Popup/ThanksPopup";
import emailjs, { send } from "@emailjs/browser";
import { Helmet } from "react-helmet";

import { FormButton, RegularButton } from "../../components/Button/Button";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/contacts.css";
import { Map } from "../../components/Map/Map";

const containerStyle = {
  width: "100%",
  height: "clamp(240px,24.9984vw,960px)",
};

const Contacts = () => {
  const [loadMap, setLoadMap] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadMap(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const sendEmail = (event: any) => {
    event.preventDefault();
    setOpen((o) => !o);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        {
          fullName: fullName,
          phoneNumber: phoneNumber,
          comment: comment,
        },
        process.env.REACT_APP_EMAILJS_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Contact Elite Arrival | Luxury Car Rental with Driver in Chicago
        </title>
        <meta
          property="og:title"
          content="Contact Elite Arrival | Luxury Car Rental with Driver in Chicago"
        ></meta>
        <meta
          property="og:description"
          content="For all your luxury car rental needs in Chicago. Dedicated team is available to assist you. Experience the highest level of service and comfort"
        ></meta>
        <meta
          name="description"
          content="For all your luxury car rental needs in Chicago. Dedicated team is available to assist you. Experience the highest level of service and comfort"
        ></meta>
      </Helmet>
      <div className="screen">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
        <main className="content mt64">
          <h1 className="main-heading">
            Our <span className="orange">Contacts</span>
          </h1>
          <p className="paragraph text-center mt32">
            Let us take the stress out of your journey. With Elite Arrival, you
            can sit back, relax, and enjoy the ride, knowing that our
            professional chauffeurs are handling the logistics for you.
            <br /> <br /> Arrive in style and make a lasting impression with
            Elite Arrival's Point-to-Point Service. Whether it's for business or
            pleasure, our service will enhance your professional or social
            image, leaving a positive and memorable impression. <br /> <br />{" "}
            Contact us today to experience the exceptional service of Elite
            Arrival, the leading car rental service with drivers in Chicago.
          </p>
          <form
            ref={form}
            action=""
            onSubmit={sendEmail}
            className="contact-form"
          >
            <div className="input-group">
              <label htmlFor="" className="label">
                Name*
              </label>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                id="fullName"
                name="fullName"
                required
                onChange={(event) => setFullName(event.target.value)}
              />
            </div>
            <div className="input-group mt32">
              <label htmlFor="" className="label">
                Phone Number or Email*
              </label>
              <input
                type="text"
                className="input"
                placeholder="Phone Number or Email"
                id="phoneNumber"
                name="phoneNumber"
                required
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            {/* <div className="input-group mt32">
              <label htmlFor="" className="label">
                Subject*
              </label>
              <input
                type="text"
                className="input"
                placeholder="Subject"
                required
              />
            </div> */}
            <div className="input-group mt32">
              <label htmlFor="" className="label">
                Comment
              </label>
              <input
                type="text"
                className="input"
                placeholder="Write your message"
                name="comment"
                id="comment"
                required={true}
                onChange={(event) => setComment(event.target.value)}
              />
            </div>
            <RegularButton marginTop="mt32" text="Submit" />
          </form>
          {/* <h2 className="heading-fourth mt64">Our Location</h2> */}
          <div
            className="contact-link-container justify-center mt32"
            style={{ width: "100%" }}
          >
            <FontAwesomeIcon icon={faPhone} className="fa-icon" />
            <a href="tel: +1 (312) 972-3890" className="contact-link">
              +1 (312) 972-3890
            </a>
          </div>
          <div className="contact-link-container mt32">
            <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
            <a
              href="mailto: contact@[yourcompany].com"
              className="contact-link"
            >
              elitearrivalchicago@gmail.com{" "}
            </a>
          </div>
          <div className="contact-link-container mt32">
            <FontAwesomeIcon icon={faLocationDot} className="fa-icon" />
            <a href="" className="contact-link">
              5516 N Major Ave Chicago IL 60630{" "}
            </a>
          </div>
        </main>
        <main className="content-pc column  mt128">
          <h1 className="heading-s auto">
            Our <span className="orange">Contacts</span>
          </h1>
          <p className="paragraph w50 text-center auto mt32">
            Let us take the stress out of your journey. With Elite Arrival, you
            can sit back, relax, and enjoy the ride, knowing that our
            professional chauffeurs are handling the logistics for you.
            <br /> <br /> Arrive in style and make a lasting impression with
            Elite Arrival's Point-to-Point Service. Whether it's for business or
            pleasure, our service will enhance your professional or social
            image, leaving a positive and memorable impression. <br /> <br />{" "}
            Contact us today to experience the exceptional service of Elite
            Arrival, the leading car rental service with drivers in Chicago.
          </p>
          <div className="contacts-container column align-center items-center  mt128">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <h5 className="contact-heading">Contact Form</h5>
              <div className="input-group-pc">
                <label htmlFor="" className="label">
                  Name*
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="input-group-pc">
                <label htmlFor="" className="label">
                  Phone Number or Email*
                </label>
                <input
                  type="phone"
                  className="form-input"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  placeholder="Phone Number or Email"
                />
              </div>
              {/* <div className="input-group-pc">
                <label htmlFor="" className="label">
                  Subject*
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Subject"
                />
              </div> */}
              <div className="input-group-pc">
                <label htmlFor="" className="label">
                  Comment
                </label>
                <textarea
                  className="form-input-comment"
                  placeholder="Comment"
                  name="comment"
                  id="comment"
                  required={true}
                  onChange={(event) => setComment(event.target.value)}
                />
              </div>
              <div className="btn-container">
                <RegularButton text="Submit" marginTop="mt32 left" />
              </div>
            </form>
            <div className="map-content">
              <div className="location-container">
                <div className="contact-link-container mt32">
                  <FontAwesomeIcon icon={faPhone} className="fa-icon" />
                  <a href="tel: +1 (312) 972-3890" className="contact-link">
                    +1 (312) 972-3890{" "}
                  </a>
                </div>
                <div className="contact-link-container mt32">
                  <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
                  <a
                    href="mailto: elitearrivalchicago@gmail.com"
                    className="contact-link"
                  >
                    elitearrivalchicago@gmail.com
                  </a>
                </div>
                <div className="contact-link-container mt32">
                  <FontAwesomeIcon icon={faLocationDot} className="fa-icon" />
                  <a href="" className="contact-link">
                    5516 N Major Ave Chicago IL 60630{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <ThanksPopup open={isOpen} closeMenu={() => setOpen(false)} />
        <Footer />
      </div>
    </>
  );
};

export default Contacts;
