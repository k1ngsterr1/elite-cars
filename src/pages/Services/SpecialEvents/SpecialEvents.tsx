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

const SpecialEvents = () => {
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
          <span className="orange">Special Events</span>
        </h1>
        <p className="paragraph text-center mt32">
          From weddings to prom nights, we understand that special events
          require special transportation. Our team is experienced in providing
          luxurious and stylish transportation for any occasion. We offer a
          range of vehicles to choose from, ensuring that you arrive at your
          event in style and comfort.
        </p>
        <Button text="Order Now" marginTop="mt32" scroll="contacts" />
      </div>
      <div className="content-pc column mt128">
        <h1 className="heading-service">
          <div className="orange">Special Events</div>
        </h1>
        <p className="paragraph w40 mt32">
          From weddings to prom nights, we understand that special events
          require special transportation. Our team is experienced in providing
          luxurious and stylish transportation for any occasion. We offer a
          range of vehicles to choose from, ensuring that you arrive at your
          event in style and comfort.
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

export default SpecialEvents;
