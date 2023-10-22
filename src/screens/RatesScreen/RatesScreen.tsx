import React from "react";

import "./styles/rates.css";

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
        <div className="rates-tab mt64">
          <span className="rate-text right">Premium Sedan</span>
          <img className="rate-img" src={rate01} alt="rate01"></img>
          <span className="rate-name">Cadillac CT6 Luxury</span>
          <span className="rate-price-hour">From $136.00 / hour</span>
          <span className="rate-price-mile">From $3.00 / mile</span>
        </div>
        <div className="rates-tab mt32">
          <span className="rate-text right">Premium Sedan</span>
          <img className="rate-img" src={rate02} alt="rate01"></img>
          <span className="rate-name">Mercedes-Benz S-Class S 580</span>
          <span className="rate-price-hour">From $188.00 / hour</span>
          <span className="rate-price-mile">From $3.50 / mile</span>
        </div>
        <div className="rates-tab mt32">
          <span className="rate-text right">Premium Sedan</span>
          <img className="rate-img" src={rate03} alt="rate01"></img>
          <span className="rate-name">BMW 7-series 740i Xdrive</span>
          <span className="rate-price-hour">From $188.00 / hour</span>
          <span className="rate-price-mile">From $3.50 / mile</span>
        </div>
        <div className="rates-tab mt32">
          <span className="rate-text right">Premium Sedan</span>
          <img className="rate-img" src={rate04} alt="rate01"></img>
          <span className="rate-name">2023 Cadillac Escalade ESV Sport</span>
          <span className="rate-price-hour">$136.00 / hour</span>
          <span className="rate-price-mile">$3.50 / mile</span>
        </div>
      </main>
    </section>
  );
};

export default RatesScreen;
