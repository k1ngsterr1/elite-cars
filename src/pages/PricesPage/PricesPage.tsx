import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import CarRate from "../../components/CarRate/CarRate";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import PriceTable from "../../components/PriceTable/PriceTable";

import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import "./styles/prices-styles.css";

const rate01 = require("../../assets/rates_01.webp");
const rate02 = require("../../assets/rates_02.webp");
const rate03 = require("../../assets/rates_03.webp");
const rate04 = require("../../assets/rates_04.webp");
const rate05 = require("../../assets/rates_05.webp");

const PricesPage = () => {
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
          Elite Arrival Cars & Rates | Luxury Car Rental with Driver in Chicago
        </title>
        <meta
          property="og:title"
          content="Elite Arrival Cars & Rates | Luxury Car Rental with Driver in Chicago"
        ></meta>
        <meta
          property="og:description"
          content="Explore the impressive fleet of luxury vehicles. Our meticulously maintained cars offer the ultimate in comfort and style. Иook your dream car today"
        ></meta>
        <meta
          name="description"
          content="Explore the impressive fleet of luxury vehicles. Our meticulously maintained cars offer the ultimate in comfort and style. Иook your dream car today"
        ></meta>
      </Helmet>
      <div className="screen">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
        <main className="content mt64">
          <h1 className="main-heading text-center">Cars for rent and prices</h1>
          <p className="paragraph text-center mt32">
            We provide transparent and competitive pricing for our car rental
            service with professional drivers in Chicago. We believe in offering
            value for money without compromising on the quality of our service.
            We look forward to serving you and exceeding your expectations with
            our exceptional service and competitive rates.
          </p>
          <h2 className="heading-s mt32">
            <span className="orange">Our Rates</span>
          </h2>
          <CarRate
            navigate={navigate("/cars/cadillac-ct6")}
            marginTop="mt32"
            carImage={rate01}
            carCategorie="Premium Sedan"
            carName="Cadillac CT6 Luxury"
            carHourPrice="$136.00"
            carMilePrice="$3.00"
          />
          <CarRate
            navigate={navigate("/cars/mercedes-s-class")}
            marginTop="mt32"
            carImage={rate02}
            carCategorie="Luxury Sedan"
            carName="Mercedes-Benz S-Class S 580"
            carHourPrice="$188.00"
            carMilePrice="$3.50"
          />
          <CarRate
            navigate={navigate("/cars/bmw-7")}
            marginTop="mt32"
            carImage={rate03}
            carCategorie="Luxury Sedan"
            carName="BMW 7-series 740i Xdrive"
            carHourPrice="$188.00"
            carMilePrice="$3.50"
          />
          <CarRate
            navigate={navigate("/cars/cadillac-escalade")}
            marginTop="mt32"
            carImage={rate04}
            carCategorie="Luxury Sedan"
            carName="2023 Cadillac Escalade ESV Sport"
            carHourPrice="$136.00"
            carMilePrice="$3.50"
          />
          <CarRate
            navigate={navigate("/cars/mercedes-sprinter")}
            marginTop="mt32"
            carImage={rate05}
            carCategorie="Van"
            carName="Mercedes Sprinter Shuttle (14 pax.) plus luggage"
            carHourPrice="$465.00"
            carMilePrice="$4.00"
          />
          <CarRate
            navigate={navigate("/cars/mercedes-sprinter")}
            marginTop="mt32"
            carImage={rate05}
            carCategorie="Van"
            carName="Mercedes Sprinter (11 pax.) with significant luggage space"
            carHourPrice="$336.00"
            carMilePrice="$4.00"
          />
          <p className="paragraph text-center w90  mt64">
            Experience the convenience, comfort, and professionalism of Elite
            Arrival's car rental service with drivers in Chicago. Contact us
            today to receive a personalized quote and book your next journey
            with us. At Elite Arrival, we strive to offer competitive rates
            while maintaining the highest standards of service. Our goal is to
            provide you with a seamless and luxurious transportation experience
            at a reasonable price. When you choose Elite Arrival, reliability is
            guaranteed. Our professional drivers prioritize punctuality,
            ensuring you never miss an important appointment or event. Safety is
            also paramount to us. Rest assured that our chauffeurs are highly
            trained and experienced, prioritizing your well-being throughout the
            entire journey.
          </p>
          <h3 className="heading-third mt64">Arrivals</h3>
          <table className="charter-rates">
            <thead className="table-heading">
              <tr>
                <th className="table-heading-text" colSpan={3}>
                  HOURLY CHARTER RATES
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="rate-row">
                <td className="td">
                  Standard Sedan – Lincoln Town Car Or Cadillac Sedan (Rate
                  Incl. 32%)
                </td>
              </tr>
              <tr className="rate-row-white">
                <td className="td">
                  $75.00 ($99.00) / hour, or $3.00 ($3.96) / mile <br />
                </td>
              </tr>
              <tr className="rate-row-white">
                <td className="td">
                  $192.00 (2.0 hr. minimum charge incl. 32%)
                </td>
              </tr>
              <tr className="rate-row">
                <td className="td">
                  Premium Sedan – Mercedes S-Class or BMW 7-Series (Rate incl.
                  32%)
                </td>
              </tr>
              <tr className="rate-row-white">
                <td className="td">
                  $100.00 ($132.00) / hour, or $3.50 ($4.62) / mile
                </td>
              </tr>
              <tr className="rate-row-white">
                <td className="td">
                  $256.00 (2.0 hr. minimum charge incl. 32%)
                </td>
              </tr>
              <tr className="rate-row">
                <td className="td">
                  Premium Sedan – Mercedes S-Class or BMW 7-Series (Rate incl.
                  32%)
                </td>
              </tr>
              <tr className="rate-row-white">
                <td className="td">
                  $100.00 ($132.00) / hour, or $3.50 ($4.62) / mile
                </td>
              </tr>
              <tr className="rate-row-white">
                <td className="td">
                  $256.00 (2.0 hr. minimum charge incl. 32%)
                </td>
              </tr>
            </tbody>
          </table>
          <h3 className="heading-third mt64">Departures</h3>
          <table className="charter-rates">
            <thead className="table-heading">
              <tr>
                <th className="table-heading-text" colSpan={3}>
                  HOURLY CHARTER RATES
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="rate-row">
                <td className="td">
                  Standard Sedan – Lincoln Town Car Or Cadillac Sedan (Rate
                  Incl. 32%)
                </td>
              </tr>
              <tr className="rate-row-white">
                <td className="td">
                  $75.00 ($99.00) / hour, or $3.00 ($3.96) / mile <br />
                </td>
              </tr>
              <tr className="rate-row-white">
                <td className="td">
                  $192.00 (2.0 hr. minimum charge incl. 32%)
                </td>
              </tr>
              <tr className="rate-row">
                <td className="td">
                  Premium Sedan – Mercedes S-Class or BMW 7-Series (Rate incl.
                  32%)
                </td>
              </tr>
              <tr className="rate-row-white">
                <td className="td">
                  $100.00 ($132.00) / hour, or $3.50 ($4.62) / mile
                </td>
              </tr>
              <tr className="rate-row-white">
                <td className="td">
                  $256.00 (2.0 hr. minimum charge incl. 32%)
                </td>
              </tr>
              <tr className="rate-row">
                <td className="td">
                  Premium Sedan – Mercedes S-Class or BMW 7-Series (Rate incl.
                  32%)
                </td>
              </tr>
              <tr className="rate-row-white">
                <td className="td">
                  $100.00 ($132.00) / hour, or $3.50 ($4.62) / mile
                </td>
              </tr>
              <tr className="rate-row-white">
                <td className="td">
                  $256.00 (2.0 hr. minimum charge incl. 32%)
                </td>
              </tr>
            </tbody>
          </table>
        </main>
        <main className="content-pc m64 column">
          <h2 className="heading-s mt64 text-center auto">
            Cars for rent and prices
          </h2>
          <p className="paragraph text-center w50 auto mt32">
            We provide transparent and competitive pricing for our car rental
            service with professional drivers in Chicago. We believe in offering
            value for money without compromising on the quality of our service.
            We look forward to serving you and exceeding your expectations with
            our exceptional service and competitive rates.
          </p>
          <h3 className="heading-third mt64 auto">
            <strong>
              <span className="orange">Our Rates</span>
            </strong>
          </h3>
          <div className="rates-list">
            <div className="rates-row">
              <CarRate
                navigate={navigate("/cars/cadillac-ct6")}
                marginTop="mt32"
                carImage={rate01}
                carCategorie="Premium Sedan"
                carName="Cadillac CT6 Luxury"
                carHourPrice="$136.00"
                carMilePrice="$3.00"
              />
              <CarRate
                navigate={navigate("/cars/mercedes-s-class")}
                marginTop="mt32"
                carImage={rate02}
                carCategorie="Luxury Sedan"
                carName="Mercedes-Benz S-Class S 580"
                carHourPrice="$188.00"
                carMilePrice="$3.50"
              />
              <CarRate
                navigate={navigate("/cars/bmw-7")}
                marginTop="mt32"
                carImage={rate03}
                carCategorie="Luxury Sedan"
                carName="BMW 7-series 740i Xdrive"
                carHourPrice="$188.00"
                carMilePrice="$3.50"
              />
              <CarRate
                navigate={navigate("/cars/cadillac-escalade")}
                marginTop="mt32"
                carImage={rate04}
                carCategorie="Luxury Sedan"
                carName="2023 Cadillac Escalade ESV Sport"
                carHourPrice="$136.00"
                carMilePrice="$3.50"
              />
            </div>
            <div className="rates-row">
              <CarRate
                navigate={navigate("/cars/mercedes-sprinter")}
                marginTop="mt32"
                carImage={rate05}
                carCategorie="Van"
                carName="Mercedes Sprinter Shuttle (14 pax.) plus luggage"
                carHourPrice="$465.00"
                carMilePrice="$4.00"
              />
              <CarRate
                navigate={navigate("/cars/mercedes-sprinter")}
                marginTop="mt32"
                carImage={rate05}
                carCategorie="Van"
                carName="Mercedes Sprinter (11 pax.) with significant luggage space"
                carHourPrice="$336.00"
                carMilePrice="$4.00"
              />
            </div>
          </div>
          <p className="paragraph text-center w50 auto mt64">
            Experience the convenience, comfort, and professionalism of Elite
            Arrival's car rental service with drivers in Chicago. Contact us
            today to receive a personalized quote and book your next journey
            with us. At Elite Arrival, we strive to offer competitive rates
            while maintaining the highest standards of service. Our goal is to
            provide you with a seamless and luxurious transportation experience
            at a reasonable price. When you choose Elite Arrival, reliability is
            guaranteed. Our professional drivers prioritize punctuality,
            ensuring you never miss an important appointment or event. Safety is
            also paramount to us. Rest assured that our chauffeurs are highly
            trained and experienced, prioritizing your well-being throughout the
            entire journey.
          </p>
          <span className="heading-third mt128 auto">
            <strong>
              <span className="orange">Arrivals</span>
            </strong>
          </span>
          <table className="charter-rates">
            <thead className="table-heading">
              <tr>
                <th className="table-heading-text" colSpan={3}>
                  HOURLY CHARTER RATES
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="rate-row">
                <td className="td">
                  <p className="mt0">
                    Standard Sedan – Lincoln Town Car or Cadillac Sedan (
                    <span className="orange">
                      <strong> Rate incl. 32% </strong>
                    </span>{" "}
                    )
                  </p>
                  <p className="mt8">
                    $75.00 ({" "}
                    <span className="orange">
                      <strong>$99.00</strong>{" "}
                    </span>
                    ) / hour, or $3.00 (
                    <span className="orange">
                      <strong>$3.96</strong>
                    </span>
                    ) / mile
                  </p>
                  <p className="mt8">
                    <span className="orange">
                      <strong>$192.00</strong>
                    </span>{" "}
                    (2.0 hr. minimum charge incl. 32%)
                  </p>
                </td>
              </tr>
              <tr className="rate-row">
                <td className="td">
                  <p className="mt0">
                    Standard Sedan – Lincoln Town Car or Cadillac Sedan (
                    <span className="orange">
                      <strong> Rate incl. 32% </strong>
                    </span>{" "}
                    )
                  </p>
                  <p className="mt8">
                    $75.00 ({" "}
                    <span className="orange">
                      <strong>$99.00</strong>{" "}
                    </span>
                    ) / hour, or $3.00 (
                    <span className="orange">
                      <strong>$3.96</strong>
                    </span>
                    ) / mile
                  </p>
                  <p className="mt8">
                    <span className="orange">
                      <strong>$192.00</strong>
                    </span>{" "}
                    (2.0 hr. minimum charge incl. 32%)
                  </p>
                </td>
              </tr>
              <tr className="rate-row">
                <td className="td">
                  <p className="mt0">
                    Standard Sedan – Lincoln Town Car or Cadillac Sedan (
                    <span className="orange">
                      <strong> Rate incl. 32% </strong>
                    </span>{" "}
                    )
                  </p>
                  <p className="mt8">
                    $75.00 ({" "}
                    <span className="orange">
                      <strong>$99.00</strong>{" "}
                    </span>
                    ) / hour, or $3.00 (
                    <span className="orange">
                      <strong>$3.96</strong>
                    </span>
                    ) / mile
                  </p>
                  <p className="mt8">
                    <span className="orange">
                      <strong>$192.00</strong>
                    </span>{" "}
                    (2.0 hr. minimum charge incl. 32%)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <span className="heading-third mt128 auto">
            <strong>
              <span className="orange">Departures</span>
            </strong>
          </span>
          <table className="charter-rates">
            <thead className="table-heading">
              <tr>
                <th className="table-heading-text" colSpan={3}>
                  HOURLY CHARTER RATES
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="rate-row">
                <td className="td">
                  <p className="mt0">
                    Standard Sedan – Lincoln Town Car or Cadillac Sedan (
                    <span className="orange">
                      <strong> Rate incl. 32% </strong>
                    </span>{" "}
                    )
                  </p>
                  <p className="mt8">
                    $75.00 ({" "}
                    <span className="orange">
                      <strong>$99.00</strong>{" "}
                    </span>
                    ) / hour, or $3.00 (
                    <span className="orange">
                      <strong>$3.96</strong>
                    </span>
                    ) / mile
                  </p>
                  <p className="mt8">
                    <span className="orange">
                      <strong>$192.00</strong>
                    </span>{" "}
                    (2.0 hr. minimum charge incl. 32%)
                  </p>
                </td>
              </tr>
              <tr className="rate-row">
                <td className="td">
                  <p className="mt0">
                    Standard Sedan – Lincoln Town Car or Cadillac Sedan (
                    <span className="orange">
                      <strong> Rate incl. 32% </strong>
                    </span>{" "}
                    )
                  </p>
                  <p className="mt8">
                    $75.00 ({" "}
                    <span className="orange">
                      <strong>$99.00</strong>{" "}
                    </span>
                    ) / hour, or $3.00 (
                    <span className="orange">
                      <strong>$3.96</strong>
                    </span>
                    ) / mile
                  </p>
                  <p className="mt8">
                    <span className="orange">
                      <strong>$192.00</strong>
                    </span>{" "}
                    (2.0 hr. minimum charge incl. 32%)
                  </p>
                </td>
              </tr>
              <tr className="rate-row">
                <td className="td">
                  <p className="mt0">
                    Standard Sedan – Lincoln Town Car or Cadillac Sedan (
                    <span className="orange">
                      <strong> Rate incl. 32% </strong>
                    </span>{" "}
                    )
                  </p>
                  <p className="mt8">
                    $75.00 ({" "}
                    <span className="orange">
                      <strong>$99.00</strong>{" "}
                    </span>
                    ) / hour, or $3.00 (
                    <span className="orange">
                      <strong>$3.96</strong>
                    </span>
                    ) / mile
                  </p>
                  <p className="mt8">
                    <span className="orange">
                      <strong>$192.00</strong>
                    </span>{" "}
                    (2.0 hr. minimum charge incl. 32%)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
        <h2 className="heading-s mt64 text-center">
          Send <span className="orange">Request</span>
        </h2>
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default PricesPage;
