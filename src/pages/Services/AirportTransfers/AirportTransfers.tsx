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

import "./styles/airport-styles.css";

const rate01 = require("../../../assets/rates_01.webp");
const rate02 = require("../../../assets/rates_02.webp");
const rate03 = require("../../../assets/rates_03.webp");
const rate04 = require("../../../assets/rates_04.webp");
const rate05 = require("../../../assets/rates_05.webp");

const fordExpedition = require("../../../assets/expedition-rate.webp");
const sprinterRate = require("../../../assets/sprinter-rate.webp");

const service = require("../../../assets/service_airport.webp");
const service_pc = require("../../../assets/service_airport_pc.webp");

const AirportTransfers = () => {
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
          Elite Arrival Airport Transfers | Luxury Car Rental with Driver in
          Chicago
        </title>
        <meta
          property="og:title"
          content="Elite Arrival Airport Transfers | Luxury Car Rental with Driver in Chicago"
        ></meta>
        <meta
          property="og:description"
          content="Enjoy a personalized and hassle-free airport transfer. Trust our reliable and punctual service for all your airport transportation needs"
        ></meta>
        <meta
          name="description"
          content="Enjoy a personalized and hassle-free airport transfer. Trust our reliable and punctual service for all your airport transportation needs"
        ></meta>
      </Helmet>
      <div className="screen">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
        <div className="content mt64">
          <h1 className="heading-s">
            <span className="orange">Airport Transfers</span>
          </h1>
          <p className="paragraph text-center mt32">
            At Elite Arrival, we take pride in being the elite car rental
            service with professional drivers in Chicago. Our specialty lies in
            providing top-notch airport transfers to and from O'Hare
            International Airport (ORD) and Midway International Airport (MDW).
            We understand the importance of prompt and efficient transfers, and
            our expert chauffeurs are well-acquainted with the best routes to
            ensure you reach your destination promptly and comfortably.
          </p>
          <Button text="Order Now" marginTop="mt32" scroll="contacts" />
        </div>
        <img className="service-img-mob mt64" src={service} alt="img" />
        <div className="content-pc column mt128">
          <h1 className="heading-service">
            <div className="orange">Airport Transfers</div>
          </h1>
          <p className="paragraph w40 mt32">
            At Elite Arrival, we take pride in being the elite car rental
            service with professional drivers in Chicago. Our specialty lies in
            providing top-notch airport transfers to and from O'Hare
            International Airport (ORD) and Midway International Airport (MDW).
            We understand the importance of prompt and efficient transfers, and
            our expert chauffeurs are well-acquainted with the best routes to
            ensure you reach your destination promptly and comfortably.
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
          <p className="paragraph text-center auto w70 mt128">
            When you choose Elite Arrival's Chicago airport car service, you can
            expect unsurpassed luxury. Our fleet consists of only the best
            luxury vehicles, meticulously maintained to ensure they are always
            in pristine condition. Our chauffeurs are not just drivers; they are
            trained professionals who prioritize punctuality, safety, and
            courtesy. With their knowledge of Chicago's ins and outs, they
            always pick the quickest and safest routes.
            <br />
            <br />
            Punctuality is our promise at Elite Arrival. We understand the value
            of time, especially in the world of travel. With our impeccable
            track record, you never have to worry about missing a flight or an
            important meeting. We also believe in transparent pricing, so what
            you see is what you pay. There are no hidden charges or last-minute
            surprises with us. No matter where you are, you can expect the same
            level of luxury and professionalism that Elite Arrival is known for.
            To book a service with Elite Arrival, simply visit our online
            booking portal or contact our 24/7 customer support. Your safety is
            our utmost priority, and we take all necessary safety measures. Our
            fleet is regularly serviced and maintained to meet the highest
            safety standards, and our chauffeurs undergo rigorous training and
            background checks. We also adapt to the latest health and safety
            guidelines to ensure your well-being.
            <br />
            <br />
            Whether you need transportation for a large corporate group or a
            special event, Elite Arrival offers customized solutions to meet
            your specific requirements. Don't just take our word for it – hear
            what our clients have to say. They have experienced the luxury,
            professionalism, and excellence of Elite Arrival's Chicago airport
            car service firsthand. Choose Elite Arrival today and experience the
            journey of excellence. Contact us now to book your ride and let us
            exceed your expectations with our refined, comfortable, and
            exceptional service
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
          <p className="paragraph text-center mt128">
            When you choose Elite Arrival's Chicago airport car service, you can
            expect unsurpassed luxury. Our fleet consists of only the best
            luxury vehicles, meticulously maintained to ensure they are always
            in pristine condition. Our chauffeurs are not just drivers; they are
            trained professionals who prioritize punctuality, safety, and
            courtesy. With their knowledge of Chicago's ins and outs, they
            always pick the quickest and safest routes.
            <br />
            <br />
            Punctuality is our promise at Elite Arrival. We understand the value
            of time, especially in the world of travel. With our impeccable
            track record, you never have to worry about missing a flight or an
            important meeting. We also believe in transparent pricing, so what
            you see is what you pay. There are no hidden charges or last-minute
            surprises with us. No matter where you are, you can expect the same
            level of luxury and professionalism that Elite Arrival is known for.
            To book a service with Elite Arrival, simply visit our online
            booking portal or contact our 24/7 customer support. Your safety is
            our utmost priority, and we take all necessary safety measures. Our
            fleet is regularly serviced and maintained to meet the highest
            safety standards, and our chauffeurs undergo rigorous training and
            background checks. We also adapt to the latest health and safety
            guidelines to ensure your well-being.
            <br />
            <br />
            Whether you need transportation for a large corporate group or a
            special event, Elite Arrival offers customized solutions to meet
            your specific requirements. Don't just take our word for it – hear
            what our clients have to say. They have experienced the luxury,
            professionalism, and excellence of Elite Arrival's Chicago airport
            car service firsthand. Choose Elite Arrival today and experience the
            journey of excellence. Contact us now to book your ride and let us
            exceed your expectations with our refined, comfortable, and
            exceptional service
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

export default AirportTransfers;
