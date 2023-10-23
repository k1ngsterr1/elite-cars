import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { Link } from "react-router-dom";

import "./styles/car.css";
import { Button } from "../../components/Button/Button";

const cadillacMob = require("../../assets/cadillac_mob.webp");

const Cadillac = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="screen">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      <section className="content mt64 align-start">
        <div className="bread-dots ">
          <Link to="" className="link">
            Home
          </Link>
          <div className="circle"></div>
          <Link to="/rates" className="link">
            Rates
          </Link>
          <div className="circle-orange"></div>
          <Link to="/cadillac" className="link orange">
            Cadillac Escalade
          </Link>
        </div>
        <h1 className="car-heading mt32">2023 Cadillac Escalade ESV Sport</h1>
        <p className="car-paragraph mt32">
          Experience luxury like never before with our Cadillac Private Premium
          Service. Tailored for the discerning individual, we combine the
          timeless elegance of Cadillac with an unmatched level of personalized
          service. Whether you're heading to a special event, business meeting,
          or simply seeking a refined journey, our fleet of pristine Cadillacs
          ensures a seamless and sophisticated ride every time. Choose
          excellence. Choose Cadillac Private Premium
        </p>
        <div className="button-row">
          <Button text="Order Now" marginTop="mt64" scroll="contact" />
          <span className="price mt16">From $136.00 / hour</span>
          <span className="price mt16">From $3.50 / mile</span>
        </div>
      </section>
      <img className="car-img mt64" src={cadillacMob} alt="cadillac"></img>
      <div className="content mt64 align-center">
        <h2 className="car-heading-s text-center">Prices</h2>
      </div>
    </div>
  );
};

export default Cadillac;
