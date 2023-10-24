import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { FormButton, RegularButton } from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
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
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
