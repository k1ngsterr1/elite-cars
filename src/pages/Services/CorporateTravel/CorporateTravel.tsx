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

const service = require("../../../assets/service_corporate_mob.webp");
const service_pc = require("../../../assets/service_corporate.webp");

const CorporateTravel = () => {
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
          Corporate Travel | Elite Arrival | Luxury Car Rental with Driver in
          Chicago
        </title>
        <meta
          property="og:title"
          content="Corporate Travel | Elite Arrival | Luxury Car Rental with Driver in Chicago"
        ></meta>
        <meta
          property="og:description"
          content="Elevate your corporate travel experience. Our flexible options cater to your business needs, ensuring a comfortable journey. Provide professional assistance for your transportationElevate your corporate travel experience. Our flexible options cater to your business needs, ensuring a comfortable journey. Provide professional assistance for your transportation
          "
        ></meta>
        <meta
          name="description"
          content="Elevate your corporate travel experience. Our flexible options cater to your business needs, ensuring a comfortable journey. Provide professional assistance for your transportation"
        ></meta>
      </Helmet>
      <div className="screen">
        {" "}
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
        <div className="content mt64">
          <h1 className="heading-s">
            <span className="orange">Corporate Travel</span>
          </h1>
          <p className="paragraph text-center mt32">
            At Elite Arrival, we understand the importance of reliable corporate
            transportation in today's fast-paced world. Punctuality and
            professionalism are essential for success, and the mode of transport
            you choose can make a significant impact. That's why we offer
            unparalleled corporate limo services to cater to your discerning
            corporate needs
          </p>
          <Button text="Order Now" marginTop="mt32" scroll="contacts" />
        </div>
        <img className="service-img-mob mt64" src={service} alt="img" />
        <div className="content-pc column mt128">
          <h1 className="heading-service">
            <span className="orange">Corporate Travel</span>
          </h1>
          <p className="paragraph w40 mt32">
            At Elite Arrival, we understand the importance of reliable corporate
            transportation in today's fast-paced world. Punctuality and
            professionalism are essential for success, and the mode of transport
            you choose can make a significant impact. That's why we offer
            unparalleled corporate limo services to cater to your discerning
            corporate needs
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
              courtyYard="3.00$"
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
                carCategorie="Sedan"
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
                carCategorie="Luxury SUV"
                carName="2023 Cadillac Escalade ESV Sport"
                carHourPrice="$188.00"
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
                carHourPrice="$188.00"
                carMilePrice="$3.50"
              />
              <CarRate
                navigate={() => navigate("/cars/mercedes-sprinter")}
                marginTop="mt32"
                carImage={sprinterRate}
                carCategorie="Van"
                carName="Mercedes Sprinter"
                carHourPrice="$465.00"
                carMilePrice="$4.00"
              />
            </div>
          </div>
          <p className="paragraph text-center auto w60 mt64">
            Whether you need to transport your executive team to an off-site
            meeting, impress a potential client, or ensure a timely airport
            pick-up for your CEO, Elite Arrival is here to provide top-notch
            service. Our fleet of luxury vehicles, driven by professional and
            experienced chauffeurs, guarantees a smooth and comfortable journey
            for your corporate travel needs. When it comes to corporate travel,
            every detail matters. That's why Elite Arrival pays attention to
            every aspect of our service to ensure your complete satisfaction.
            From the moment you book with us, our dedicated team works
            tirelessly to plan and execute your travel arrangements flawlessly.{" "}
            <br /> <br />
            Our drivers are not just ordinary chauffeurs; they are highly
            trained professionals who understand the importance of discretion
            and confidentiality. They will ensure that your executives arrive at
            their destination on time and in style, leaving a lasting impression
            on clients and business partners alike. <br /> <br /> With Elite
            Arrival, you can expect nothing less than excellence. Our fleet
            consists of luxurious vehicles that are meticulously maintained,
            providing a comfortable and elegant atmosphere for your corporate
            travel needs. Whether you prefer a sleek sedan for a solo executive
            or a spacious SUV for a larger group, we have the perfect vehicle to
            accommodate your requirements. <br /> <br /> We also understand that
            flexibility is crucial in the corporate world. That's why Elite
            Arrival offers 24/7 availability, ensuring that we are always ready
            to meet your last-minute travel requests or changes in plans. Our
            customer support team is available round the clock to assist you
            with any queries or concerns you may have. At Elite Arrival, we
            strive to exceed your expectations with our corporate limo services.
            We believe that reliable and professional transportation is the
            foundation of successful business travel. Let us take care of your
            corporate transportation needs, so you can focus on what matters
            most – your business. <br /> <br /> Choose Elite Arrival for your
            corporate travel requirements in Chicago, and experience the
            difference of our exceptional service. Contact us today to book your
            next corporate journey and discover why we are the preferred choice
            for elite car rental with driver in Chicago.
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
            courtyYard="3.00$"
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
            carCategorie="Sedan"
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
            carCategorie="Luxury SUV"
            carName="2023 Cadillac Escalade ESV Sport"
            carHourPrice="$188.00"
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
            carHourPrice="$188.00"
            carMilePrice="$3.50"
          />
          <p className="paragraph text-center mt128 ">
            Whether you need to transport your executive team to an off-site
            meeting, impress a potential client, or ensure a timely airport
            pick-up for your CEO, Elite Arrival is here to provide top-notch
            service. Our fleet of luxury vehicles, driven by professional and
            experienced chauffeurs, guarantees a smooth and comfortable journey
            for your corporate travel needs. When it comes to corporate travel,
            every detail matters. That's why Elite Arrival pays attention to
            every aspect of our service to ensure your complete satisfaction.
            From the moment you book with us, our dedicated team works
            tirelessly to plan and execute your travel arrangements flawlessly.{" "}
            <br /> <br />
            Our drivers are not just ordinary chauffeurs; they are highly
            trained professionals who understand the importance of discretion
            and confidentiality. They will ensure that your executives arrive at
            their destination on time and in style, leaving a lasting impression
            on clients and business partners alike. <br /> <br /> With Elite
            Arrival, you can expect nothing less than excellence. Our fleet
            consists of luxurious vehicles that are meticulously maintained,
            providing a comfortable and elegant atmosphere for your corporate
            travel needs. Whether you prefer a sleek sedan for a solo executive
            or a spacious SUV for a larger group, we have the perfect vehicle to
            accommodate your requirements.
          </p>
          <h4 className="heading-s text-center mt128">Send Request</h4>
          <div className="mt64" style={{ width: "100%" }}>
            <Form />
            <div className="form-lower-mob paragraph text-center">
              <br /> <br /> We also understand that flexibility is crucial in
              the corporate world. That's why Elite Arrival offers 24/7
              availability, ensuring that we are always ready to meet your
              last-minute travel requests or changes in plans. Our customer
              support team is available round the clock to assist you with any
              queries or concerns you may have. At Elite Arrival, we strive to
              exceed your expectations with our corporate limo services. We
              believe that reliable and professional transportation is the
              foundation of successful business travel. Let us take care of your
              corporate transportation needs, so you can focus on what matters
              most – your business. <br /> <br /> Choose Elite Arrival for your
              corporate travel requirements in Chicago, and experience the
              difference of our exceptional service. Contact us today to book
              your next corporate journey and discover why we are the preferred
              choice for elite car rental with driver in Chicago.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CorporateTravel;
