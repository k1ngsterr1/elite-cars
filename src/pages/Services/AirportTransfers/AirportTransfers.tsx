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
          Looking for a reliable airport transportation service to or from
          O’Hare International Airport in Chicago, IL? Look no further than
          LimoRSVP! Our O’Hare limo service offers top-notch transportation to
          meet your needs, whether you’re traveling for business or pleasure.
          Our experienced drivers will ensure you arrive at your destination
          safely and comfortably. We offer competitive O’Hare limo service rates
          and a range of vehicles to choose from, including luxury sedans, SUVs,
          and Mercedes Sprinter Vans. Additionally, we provide car service to
          O’Hare and limo service from O’Hare to suburbs surrounding Chicago.
          With LimoRSVP, you can expect timely, efficient, and affordable
          transportation every time. Contact us today to book your next ride!
        </p>
        <Button text="Order Now" marginTop="mt32" scroll="contacts" />
      </div>
      <div className="content-pc column mt128">
        <h1 className="heading-service">
          <div className="orange">Airport Transfers</div>
        </h1>
        <p className="paragraph w50 mt32">
          Looking for a reliable airport transportation service to or from
          O’Hare International Airport in Chicago, IL? Look no further than
          LimoRSVP! Our O’Hare limo service offers top-notch transportation to
          meet your needs, whether you’re traveling for business or pleasure.
          Our experienced drivers will ensure you arrive at your destination
          safely and comfortably. We offer competitive O’Hare limo service rates
          and a range of vehicles to choose from, including luxury sedans, SUVs,
          and Mercedes Sprinter Vans. Additionally, we provide car service to
          O’Hare and limo service from O’Hare to suburbs surrounding Chicago.
          With LimoRSVP, you can expect timely, efficient, and affordable
          transportation every time. Contact us today to book your next ride!
        </p>
        <div className="button-row">
          <Button text="Explore Cars" scroll="" marginTop="mt32" />
        </div>
        <img className="pc-img" src={service_pc} alt="pc-img" />
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
