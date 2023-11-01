import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import PriceTable from "../../../components/PriceTable/PriceTable";
import Form from "../../../components/Form/Form";
import Footer from "../../../components/Footer/Footer";
import CarRate from "../../../components/CarRate/CarRate";

import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import { Helmet } from "react-helmet";

import "../AirportTransfers/styles/airport-styles.css";

const rate01 = require("../../../assets/rates_01.webp");
const rate02 = require("../../../assets/rates_02.webp");
const rate03 = require("../../../assets/rates_03.webp");
const rate04 = require("../../../assets/rates_04.webp");
const rate05 = require("../../../assets/rates_05.webp");

const fordExpedition = require("../../../assets/expedition-rate.webp");
const sprinterRate = require("../../../assets/sprinter-rate.webp");

const service = require("../../../assets/service_nationwide_mob.webp");
const service_pc = require("../../../assets/service_nationwide_pc.webp");

const Nationwide = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nationwide Service | Elite Arrival | Luxury Car Rental with Driver in
          Chicago
        </title>
        <meta
          property="og:title"
          content="Nationwide Service | Elite Arrival | Luxury Car Rental with Driver in Chicago"
        ></meta>
        <meta
          property="og:description"
          content="Experience luxury and professionalism across the nation with Elite Arrival's nationwide service. Trust our reliable service for a seamless journey wherever you go"
        ></meta>
        <meta
          name="description"
          content="Experience luxury and professionalism across the nation with Elite Arrival's nationwide service. Trust our reliable service for a seamless journey wherever you go"
        ></meta>
      </Helmet>
      <div className="screen">
        {" "}
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
        <div className="content mt64">
          <h1 className="heading-s">
            <span className="orange">Nationwide Service</span>
          </h1>
          <p className="paragraph text-center mt32">
            With our nationwide service, Elite Arrival sets itself apart as the
            premier choice for elite car rental with a driver in Chicago. Our
            commitment to luxury, safety, and reliability is evident in every
            aspect of our service, making us the undisputed leader in
            chauffeured services and ground transportation logistics management
          </p>
          <Button text="Order Now" marginTop="mt32" scroll="contacts" />
        </div>
        <img className="service-img-mob mt64" src={service} alt="img" />
        <div className="content-pc column mt128">
          <h1 className="heading-service">
            <div className="orange">Nationwide Service</div>
          </h1>
          <p className="paragraph w40 mt32">
            With our nationwide service, Elite Arrival sets itself apart as the
            premier choice for elite car rental with a driver in Chicago. Our
            commitment to luxury, safety, and reliability is evident in every
            aspect of our service, making us the undisputed leader in
            chauffeured services and ground transportation logistics management
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
          <h3 className="heading-s text-center mt128">
            <span className="orange">Our Fleet</span>
          </h3>
          <div className="rates-list mt64">
            <div className="rates-row">
              <CarRate
                navigate={() => navigate("/cars/cadillac-ct6")}
                marginTop="mt32"
                carImage={rate01}
                carCategorie="Premium Sedan"
                carName="Cadillac CT6 Luxury"
                carHourPrice="$136.00"
                carMilePrice="$3.00"
              />
              <CarRate
                navigate={() => navigate("/cars/mercedes-s-class")}
                marginTop="mt32"
                carImage={rate02}
                carCategorie="Luxury Sedan"
                carName="Mercedes-Benz S-Class S 580"
                carHourPrice="$188.00"
                carMilePrice="$3.50"
              />
              <CarRate
                navigate={() => navigate("/cars/bmw-7")}
                marginTop="mt32"
                carImage={rate03}
                carCategorie="Luxury Sedan"
                carName="BMW 7-series 740i Xdrive"
                carHourPrice="$188.00"
                carMilePrice="$3.50"
              />
              <CarRate
                navigate={() => navigate("/cars/cadillac-escalade")}
                marginTop="mt32"
                carImage={rate04}
                carCategorie="Luxury Sedan"
                carName="2023 Cadillac Escalade ESV Sport"
                carHourPrice="$136.00"
                carMilePrice="$3.50"
              />
            </div>
            <div className="rates-row-centered">
              <CarRate
                navigate={() => navigate("/cars/ford-expedition")}
                marginTop="mt32"
                carImage={fordExpedition}
                carCategorie="Luxury SUV"
                carName="Ford Expedition"
                carHourPrice="$136.00"
                carMilePrice="$3.00"
              />
              <CarRate
                navigate={() => navigate("/cars/mercedes-sprinter")}
                marginTop="mt32"
                carImage={sprinterRate}
                carCategorie="Van"
                carName="Mercedes Sprinter"
                carHourPrice="$188.00"
                carMilePrice="$3.50"
              />
            </div>
          </div>
          <p className="paragraph text-center auto w60 mt128">
            At Elite Arrival, we understand that luxury goes beyond just a
            vehicle. That's why we offer a world-class fleet of late-model
            executive vehicles that are meticulously maintained to provide the
            utmost comfort and elegance for your travels. Whether you need a
            sleek sedan for a solo executive or a spacious SUV for a larger
            group, we have the perfect vehicle to meet your requirements.
            <br />
            <br />
            But it's not just about the vehicles; it's also about the
            chauffeurs. Our chauffeurs are not just professionals; they are
            ambassadors of the Elite Arrival brand. Highly trained and
            experienced, they understand the importance of discretion and
            confidentiality. They will ensure that your executives arrive at
            their destination on time and in style, leaving a lasting impression
            on clients and business partners alike.
            <br />
            <br />
            We pride ourselves on offering comprehensive transportation
            solutions that go beyond the basics. From point-to-point
            transportation to specialized transportation management, we cater to
            every need. Our goal is to make your travel experience seamless and
            stress-free, allowing you to focus on what matters most – your
            business.
            <br />
            <br />
            With Elite Arrival, you can expect consistent quality assurance no
            matter where you're headed. Our commitment to excellence remains
            uncompromised, ensuring that the Elite Arrival experience is
            unparalleled in every city we serve. And with our 24/7 customer
            helpline, we are always there to support you, no matter the time or
            location.
            <br />
            <br />
            In a world filled with choices, let Elite Arrival be your clear
            choice for unparalleled chauffeured services. Experience the
            difference of our nationwide service and discover why we are the
            preferred choice for elite car rental with a driver in Chicago.
            Contact us today to book your next corporate journey and elevate
            your travel experience to new heights.
          </p>
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
          <h3 className="heading-s text-center mt128">
            <span className="orange">Our Fleet</span>
          </h3>
          <CarRate
            navigate={() => navigate("/cars/cadillac-ct6")}
            marginTop="mt32"
            carImage={rate01}
            carCategorie="Premium Sedan"
            carName="Cadillac CT6 Luxury"
            carHourPrice="$136.00"
            carMilePrice="$3.00"
          />
          <CarRate
            navigate={() => navigate("/cars/mercedes-s-class")}
            marginTop="mt32"
            carImage={rate02}
            carCategorie="Luxury Sedan"
            carName="Mercedes-Benz S-Class S 580"
            carHourPrice="$188.00"
            carMilePrice="$3.50"
          />
          <CarRate
            navigate={() => navigate("/cars/bmw-7")}
            marginTop="mt32"
            carImage={rate03}
            carCategorie="Luxury Sedan"
            carName="BMW 7-series 740i Xdrive"
            carHourPrice="$188.00"
            carMilePrice="$3.50"
          />
          <CarRate
            navigate={() => navigate("/cars/cadillac-escalade")}
            marginTop="mt32"
            carImage={rate04}
            carCategorie="Luxury Sedan"
            carName="2023 Cadillac Escalade ESV Sport"
            carHourPrice="$136.00"
            carMilePrice="$3.50"
          />
          <CarRate
            navigate={() => navigate("/cars/mercedes-sprinter")}
            marginTop="mt32"
            carImage={rate05}
            carCategorie="Van"
            carName="Mercedes Sprinter Shuttle (14 pax.) plus luggage"
            carHourPrice="$465.00"
            carMilePrice="$4.00"
          />
          <CarRate
            navigate={() => navigate("/cars/ford-expedition")}
            marginTop="mt32"
            carImage={fordExpedition}
            carCategorie="Luxury SUV"
            carName="Ford Expedition"
            carHourPrice="$136.00"
            carMilePrice="$3.00"
          />
          <p className="paragraph text-center mt128 ">
            At Elite Arrival, we understand that luxury goes beyond just a
            vehicle. That's why we offer a world-class fleet of late-model
            executive vehicles that are meticulously maintained to provide the
            utmost comfort and elegance for your travels. Whether you need a
            sleek sedan for a solo executive or a spacious SUV for a larger
            group, we have the perfect vehicle to meet your requirements.
            <br />
            <br />
            But it's not just about the vehicles; it's also about the
            chauffeurs. Our chauffeurs are not just professionals; they are
            ambassadors of the Elite Arrival brand. Highly trained and
            experienced, they understand the importance of discretion and
            confidentiality. They will ensure that your executives arrive at
            their destination on time and in style, leaving a lasting impression
            on clients and business partners alike.
            <br />
            <br />
            We pride ourselves on offering comprehensive transportation
            solutions that go beyond the basics. From point-to-point
            transportation to specialized transportation management, we cater to
            every need. Our goal is to make your travel experience seamless and
            stress-free, allowing you to focus on what matters most – your
            business.
            <br />
            <br />
            With Elite Arrival, you can expect consistent quality assurance no
            matter where you're headed. Our commitment to excellence remains
            uncompromised, ensuring that the Elite Arrival experience is
            unparalleled in every city we serve. And with our 24/7 customer
            helpline, we are always there to support you, no matter the time or
            location.
            <br />
            <br />
            In a world filled with choices, let Elite Arrival be your clear
            choice for unparalleled chauffeured services. Experience the
            difference of our nationwide service and discover why we are the
            preferred choice for elite car rental with a driver in Chicago.
            Contact us today to book your next corporate journey and elevate
            your travel experience to new heights.
          </p>
          <h4 className="heading-s text-center mt128">Send Request</h4>

          <div className="mt64" style={{ width: "100%" }}>
            <Form />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Nationwide;
