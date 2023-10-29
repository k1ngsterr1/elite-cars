import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import {
  Button,
  RegularButton,
  RegularScrollButton,
} from "../../components/Button/Button";
import BookingForm from "../../components/CarForm/BookingForm";

import { useNavigate } from "react-router-dom";
import CookieBanner from "../../components/CookiesButton/CookiesButton";

const mainPhoto = require("../../assets/main_photo.webp");

const MainScreen = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <section className="screen gray" id="home">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      <main className="content mt64">
        <span className="sub-heading text-center">
          Premier Private <span className="orange">Car Service</span>
        </span>
        <h1 className="main-heading text-center mt16">
          Elite arrival - car rental{" "}
          <span className="orange"> with driver</span>
        </h1>
        <p className="paragraph mt16 text-center">
          At Elite Arrival, we understand the importance of punctuality and
          professionalism. Our team of highly trained chauffeurs is dedicated to
          delivering a seamless and enjoyable experience from the moment you
          step into our vehicles. Whether it's airport transfers, corporate
          events, weddings, or special occasions, we strive to exceed
          expectations with our exceptional service.
        </p>
        <CookieBanner />
        <Button text="Explore Cars" scroll="" marginTop="mt32" />
        <RegularScrollButton
          text="Book Now"
          marginTop="mt16"
          clickFunction="contacts"
        />
        <BookingForm />
      </main>
      <main className="content-pc mt128">
        <div className="text-content">
          <span className="sub-heading">
            Premier Private <span className="orange">Car Service</span>
          </span>
          <h1 className="main-heading mt16 w90">
            Elite arrival - car rental{" "}
            <span className="orange">with driver</span>
          </h1>
          <p className="paragraph mt32 w50">
            At Elite Arrival, we understand the importance of punctuality and
            professionalism. Our team of highly trained chauffeurs is dedicated
            to delivering a seamless and enjoyable experience from the moment
            you step into our vehicles. Whether it's airport transfers,
            corporate events, weddings, or special occasions, we strive to
            exceed expectations with our exceptional service.
          </p>
          <CookieBanner />
          <div className="button-row mt32">
            <Button text="Explore Cars" scroll="rates" marginTop="mt0" />
            <RegularScrollButton
              text="Book Now"
              marginTop="mt16"
              clickFunction="contacts"
            />
          </div>
        </div>
        <img src={mainPhoto} alt="mercedes" className="pc-img" />
      </main>
      <div className="pc-form">
        <BookingForm />
      </div>
    </section>
  );
};

export default MainScreen;
