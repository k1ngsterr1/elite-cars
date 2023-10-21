import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { Button, RegularButton } from "../../components/Button/Button";
import BookingForm from "../../components/CarForm/BookingForm";

const MainScreen = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="screen gray">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      <div className="content mt64">
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
      </div>
    </div>
  );
};

export default MainScreen;
