import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import PriceTable from "../../../components/PriceTable/PriceTable";
import Form from "../../../components/Form/Form";
import Footer from "../../../components/Footer/Footer";
import CarRate from "../../../components/CarRate/CarRate";

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "../../../components/Button/Button";

import "../AirportTransfers/styles/airport-styles.css";

const rate01 = require("../../../assets/rates_01.webp");
const rate02 = require("../../../assets/rates_02.webp");
const rate03 = require("../../../assets/rates_03.webp");
const rate04 = require("../../../assets/rates_04.webp");
const rate05 = require("../../../assets/rates_05.webp");

const fordExpedition = require("../../../assets/expedition-rate.webp");
const sprinterRate = require("../../../assets/sprinter-rate.webp");

const service = require("../../../assets/service_special_mob.webp");
const service_pc = require("../../../assets/service_special_event.webp");

const SpecialEvents = () => {
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
          Special Events | Elite Arrival | Luxury Car Rental with Driver in
          Chicago
        </title>
        <meta
          property="og:title"
          content="Special Events | Elite Arrival | Luxury Car Rental with Driver in Chicago"
        ></meta>
        <meta
          property="og:description"
          content="From weddings to concerts, our hourly charter service caters to your needs. Trust our experienced drivers for a stylish and hassle-free transportation experience"
        ></meta>
        <meta
          name="description"
          content="From weddings to concerts, our hourly charter service caters to your needs. Trust our experienced drivers for a stylish and hassle-free transportation experience"
        ></meta>
      </Helmet>
      <div className="screen">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
        <div className="content mt64">
          <h1 className="heading-s">
            <span className="orange">Special Events</span>
          </h1>
          <p className="paragraph text-center mt32">
            At Elite Arrival, we understand the importance of special events and
            the need for reliable and luxurious transportation. That's why we
            offer our elite car rental with a driver service in Chicago for all
            your special occasions.
          </p>
          <Button text="Order Now" marginTop="mt32" scroll="contacts" />
        </div>
        <img className="service-img-mob mt64" src={service} alt="img" />
        <div className="content-pc column mt128">
          <h1 className="heading-service">
            <div className="orange">Special Events</div>
          </h1>
          <p className="paragraph w40 mt32">
            At Elite Arrival, we understand the importance of special events and
            the need for reliable and luxurious transportation. That's why we
            offer our elite car rental with a driver service in Chicago for all
            your special occasions.
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
            Whether you're attending a sports event, a concert, or celebrating a
            birthday, Elite Arrival is here to provide you with VIP treatment.
            Our chauffeurs are experienced professionals who will ensure that
            you arrive at your event on time and in style. <br /> <br />
            For sports events in Chicago, whether you're a local fan or visiting
            the city to support your favorite team, Elite Arrival offers
            affordable and reliable transportation services. We will take care
            of getting you to and from the game, allowing you to focus on
            enjoying the experience. <br /> <br /> If you're attending a concert
            in Chicago, our luxury limousines and chauffeured transportation
            vehicles are ready to provide you with the ultimate concert
            experience. Gather your group and let us take care of the
            transportation, making sure you arrive in a fun and exciting way.
            <br /> <br />
            And when it comes to birthday parties, Elite Arrival wants to
            celebrate with you. Whether you're heading to a local bar or a
            special party in your honor, our elegant touch will make your
            special day unforgettable. Let us take care of the transportation,
            so you can focus on enjoying your celebration. With Elite Arrival,
            you can expect the same level of luxury, safety, and reliability
            that sets us apart as the premier choice for elite car rental with a
            driver in Chicago. We are committed to making your special event
            seamless and stress-free, allowing you to fully enjoy the occasion.{" "}
            <br /> <br />
            Contact Elite Arrival today to book your transportation for your
            next special event and experience the difference of our unparalleled
            chauffeured services. Trust us to elevate your travel experience to
            new heights and make your event truly memorable.
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
          <div className="rates-list mt32">
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
          <p className="paragraph text-center mt128">
            Whether you're attending a sports event, a concert, or celebrating a
            birthday, Elite Arrival is here to provide you with VIP treatment.
            Our chauffeurs are experienced professionals who will ensure that
            you arrive at your event on time and in style.
            <br />
            <br />
            For sports events in Chicago, whether you're a local fan or visiting
            the city to support your favorite team, Elite Arrival offers
            affordable and reliable transportation services. We will take care
            of getting you to and from the game, allowing you to focus on
            enjoying the experience. If you're attending a concert in Chicago,
            our luxury limousines and chauffeured transportation vehicles are
            ready to provide you with the ultimate concert experience. Gather
            your group and let us take care of the transportation, making sure
            you arrive in a fun and exciting way.
            <br />
            <br />
            And when it comes to birthday parties, Elite Arrival wants to
            celebrate with you. Whether you're heading to a local bar or a
            special party in your honor, our elegant touch will make your
            special day unforgettable. Let us take care of the transportation,
            so you can focus on enjoying your celebration. With Elite Arrival,
            you can expect the same level of luxury, safety, and reliability
            that sets us apart as the premier choice for elite car rental with a
            driver in Chicago. We are committed to making your special event
            seamless and stress-free, allowing you to fully enjoy the occasion.
            Contact Elite Arrival today to book your transportation for your
            next special event and experience the difference of our unparalleled
            chauffeured services. Trust us to elevate your travel experience to
            new heights and make your event truly memorable.
          </p>
          <div className="mt64" style={{ width: "100%" }}>
            <h3 className="heading-s text-center">Send Request</h3>
            <Form />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SpecialEvents;
