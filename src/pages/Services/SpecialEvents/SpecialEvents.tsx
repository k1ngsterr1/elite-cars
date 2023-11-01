import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import PriceTable from "../../../components/PriceTable/PriceTable";
import Form from "../../../components/Form/Form";
import Footer from "../../../components/Footer/Footer";

import { Helmet } from "react-helmet";
import { Button } from "../../../components/Button/Button";

import "../AirportTransfers/styles/airport-styles.css";

const service = require("../../../assets/service_special_mob.webp");
const service_pc = require("../../../assets/service_special_event.webp");

const SpecialEvents = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
          <h4 className="heading-s text-center mt128">Send Request</h4>
          <p className="paragraph text-center auto w60 mt64">
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
            <h3 className="heading-s text-center">Send Request</h3>
            <p className="paragraph text-center mt32">
              Whether you're attending a sports event, a concert, or celebrating
              a birthday, Elite Arrival is here to provide you with VIP
              treatment. Our chauffeurs are experienced professionals who will
              ensure that you arrive at your event on time and in style.
              <br />
              <br />
              For sports events in Chicago, whether you're a local fan or
              visiting the city to support your favorite team, Elite Arrival
              offers affordable and reliable transportation services. We will
              take care of getting you to and from the game, allowing you to
              focus on enjoying the experience. If you're attending a concert in
              Chicago, our luxury limousines and chauffeured transportation
              vehicles are ready to provide you with the ultimate concert
              experience. Gather your group and let us take care of the
              transportation, making sure you arrive in a fun and exciting way.
              <br />
              <br />
              And when it comes to birthday parties, Elite Arrival wants to
              celebrate with you. Whether you're heading to a local bar or a
              special party in your honor, our elegant touch will make your
              special day unforgettable. Let us take care of the transportation,
              so you can focus on enjoying your celebration. With Elite Arrival,
              you can expect the same level of luxury, safety, and reliability
              that sets us apart as the premier choice for elite car rental with
              a driver in Chicago. We are committed to making your special event
              seamless and stress-free, allowing you to fully enjoy the
              occasion. Contact Elite Arrival today to book your transportation
              for your next special event and experience the difference of our
              unparalleled chauffeured services. Trust us to elevate your travel
              experience to new heights and make your event truly memorable.
            </p>
            <Form />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SpecialEvents;
