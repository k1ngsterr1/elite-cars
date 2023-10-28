import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import { Button } from "../../../components/Button/Button";
import PriceTable from "../../../components/PriceTable/PriceTable";
import Form from "../../../components/Form/Form";
import Footer from "../../../components/Footer/Footer";

import "./styles/airport-styles.css";

const service = require("../../../assets/service_airport.webp");
const service_pc = require("../../../assets/service_airport_pc.webp");

const AirportTransfers = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="screen">
      {" "}
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      <div className="content mt64">
        <h1 className="heading-s">
          <span className="orange">Airport Transfers</span>
        </h1>
        <p className="paragraph text-center mt32">
          We offer reliable and efficient airport transfer services to and from
          all major airports in the Chicago area. Our experienced drivers will
          ensure that you reach your destination on time and in style, taking
          away the stress of navigating through traffic or finding parking.
        </p>
        <Button text="Order Now" marginTop="mt32" scroll="contacts" />
      </div>
      <div className="content-pc column mt128">
        <h1 className="heading-service">
          <div className="orange">Airport Transfers</div>
        </h1>
        <p className="paragraph w40 mt32">
          We offer reliable and efficient airport transfer services to and from
          all major airports in the Chicago area. Our experienced drivers will
          ensure that you reach your destination on time and in style, taking
          away the stress of navigating through traffic or finding parking.
        </p>
        <div className="button-row">
          <Button text="Order Now" scroll="" marginTop="mt32" />
        </div>
        <img className="pc-img-service" src={service_pc} alt="pc-img" />
        <div className="content-pc column justify-center items-center mt256">
          <h2 className="heading-s text-center">
            <span className="orange">Prices</span>
          </h2>
          <PriceTable
            cityRent="136$"
            courtyYard="102"
            minimalRentTime="6"
            holidayPrices="112"
          />
        </div>
        <h4 className="heading-s text-center mt128">Send Request</h4>
        <Form />
      </div>
      <img className="img mt64" src={service} alt="img" />
      <div className="content mt64">
        <h2 className="heading-s">
          <span className="orange">Prices</span>
        </h2>
        <PriceTable
          cityRent="136$"
          courtyYard="102"
          minimalRentTime="6"
          holidayPrices="112"
        />
        <div className="mt64" style={{ width: "100%" }}>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AirportTransfers;
