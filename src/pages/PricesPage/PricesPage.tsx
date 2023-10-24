import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import CarRate from "../../components/CarRate/CarRate";

const rate01 = require("../../assets/rates_01.webp");
const rate02 = require("../../assets/rates_02.webp");
const rate03 = require("../../assets/rates_03.webp");
const rate04 = require("../../assets/rates_04.webp");
const rate05 = require("../../assets/rates_05.webp");

const PricesPage = () => {
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
          <span className="orange">Elite Arrival</span>
        </h1>
        <p className="paragraph text-center mt32">
          Our fleet consists of Lincoln Town Cars and Cadillac Sedans,
          Mercedes-Benz S-Class, and BMW 7-Series sedans, Ford Expedition,
          Chevrolet Suburban, Lincoln Navigator, and Cadillac Escalade SUVs, the
          Mercedes Sprinter in both 11 and 14 passenger configurations. Our
          vehicles are washed at least twice daily and fully detailed a minimum
          of twice a month.
        </p>
        <h2 className="heading-s mt32">
          <span className="orange">Our Rates</span>
          <CarRate
            marginTop="mt32"
            carImage={rate01}
            carCategorie="Premium Sedan"
            carName="Cadillac CT6 Luxury"
            carHourPrice="$136.00"
            carMilePrice="$3.00"
          />
          <CarRate
            marginTop="mt32"
            carImage={rate02}
            carCategorie="Luxury Sedan"
            carName="Mercedes-Benz S-Class S 580"
            carHourPrice="$188.00"
            carMilePrice="$3.50"
          />
          <CarRate
            marginTop="mt32"
            carImage={rate03}
            carCategorie="Luxury Sedan"
            carName="BMW 7-series 740i Xdrive"
            carHourPrice="$188.00"
            carMilePrice="$3.50"
          />
          <CarRate
            marginTop="mt32"
            carImage={rate04}
            carCategorie="Luxury Sedan"
            carName="2023 Cadillac Escalade ESV Sport"
            carHourPrice="$136.00"
            carMilePrice="$3.50"
          />
          <CarRate
            marginTop="mt32"
            carImage={rate05}
            carCategorie="Van"
            carName="Mercedes Sprinter Shuttle (14 pax.) plus luggage"
            carHourPrice="$465.00"
            carMilePrice="$4.00"
          />
          <CarRate
            marginTop="mt32"
            carImage={rate05}
            carCategorie="Van"
            carName="Mercedes Sprinter (11 pax.) with significant luggage space"
            carHourPrice="$336.00"
            carMilePrice="$4.00"
          />
        </h2>
      </main>
    </div>
  );
};

export default PricesPage;
