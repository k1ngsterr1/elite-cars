import React from "react";
import CarRate from "../../components/CarRate/CarRate";

const rate01 = require("../../assets/rates_01.webp");
const rate02 = require("../../assets/rates_02.webp");
const rate03 = require("../../assets/rates_03.webp");
const rate04 = require("../../assets/rates_04.webp");

const RatesScreen = () => {
  return (
    <section className="screen">
      <main className="content">
        <h2 className="heading-s">
          Our <span className="orange">rates</span>
        </h2>
        <CarRate
          marginTop="mt64"
          carImage={rate01}
          carCategorie="Premium Sedan"
          carName="Cadillac CT6 Luxury"
          carHourPrice="$136.00"
          carMilePrice="$3.00"
        />
        <CarRate
          marginTop="mt32"
          carImage={rate02}
          carCategorie="Premium Sedan"
          carName="Mercedes-Benz S-Class S 580"
          carHourPrice="$188.00"
          carMilePrice="$3.50"
        />
        <CarRate
          marginTop="mt32"
          carImage={rate03}
          carCategorie="Premium Sedan"
          carName="BMW 7-series 740i Xdrive"
          carHourPrice="$188.00"
          carMilePrice="$3.50"
        />
        <CarRate
          marginTop="mt32"
          carImage={rate04}
          carCategorie="Luxury SUV"
          carName="2023 Cadillac Escalade ESV Sport"
          carHourPrice="$136.00"
          carMilePrice="$3.50"
        />
      </main>
    </section>
  );
};

export default RatesScreen;
