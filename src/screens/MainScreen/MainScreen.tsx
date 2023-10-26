import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { Button, RegularButton } from "../../components/Button/Button";
import BookingForm from "../../components/CarForm/BookingForm";

const mainPhoto = require("../../assets/main_photo.webp");

const MainScreen = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <section className="screen gray">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      <main className="content mt64">
        <span className="sub-heading text-center">
          Premier Private <span className="orange">Car Service</span>
        </span>
        <h1 className="main-heading text-center mt16">
          Drive into the Future with our <span className="orange">cars</span>
        </h1>
        <p className="paragraph mt16 text-center">
          Experience elite travel with [Your Service Name], where luxury and
          discretion drive your private car experience. Every journey with us is
          a tailor-made, sophisticated adventure, ensuring each mile is as
          exclusive and memorable as the last.
        </p>
        <Button text="Explore Cars" scroll="" marginTop="mt32" />
        <RegularButton text="Book Now" marginTop="mt16" />
        <BookingForm />
      </main>
      <main className="content-pc mt128">
        <div className="text-content">
          <span className="sub-heading">
            Premier Private <span className="orange">Car Service</span>
          </span>
          <h1 className="main-heading mt16 w90">
            Drive into the Future with <span className="orange">our cars</span>
          </h1>
          <p className="paragraph mt32 w50">
            Experience elite travel with [Your Service Name], where luxury and
            discretion drive your private car experience. Every journey with us
            is a tailor-made, sophisticated adventure, ensuring each mile is as
            exclusive and memorable as the last.
          </p>
          <div className="button-row mt32">
            <Button text="Explore Cars" scroll="rates" marginTop="mt0" />
            <RegularButton text="Book Now" marginTop="" />
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
