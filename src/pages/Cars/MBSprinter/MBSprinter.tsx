import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import PriceTable from "../../../components/PriceTable/PriceTable";
import CarFeature from "../../../components/CarFeature/CarFeature";
import FormScreen from "../../../screens/FormScreen/FormScreen";
import Footer from "../../../components/Footer/Footer";
import SwiperCore from "swiper";

import { Navigation, Pagination } from "swiper/modules";
import { Form, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../../../components/Button/Button";
import { Helmet } from "react-helmet";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../CadillacPage/styles/car.css";

const cadillacMob = require("../../../assets/mercedes-sprinter-mob.webp");
const cadillacPc = require("../../../assets/mercedes-sprinter.webp");
const icon = require("../../../assets/icon.svg").default;

const MBSprinter = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="screen">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
        <section className="content mt64 align-start">
          <div className="bread-dots ">
            <Link to="" className="link">
              Home
            </Link>
            <div className="circle"></div>
            <Link to="/rates" className="link">
              Rates
            </Link>
            <div className="circle-orange"></div>
            <Link to="/cars/mercedes-sprinter" className="link orange">
              MB Sprinter
            </Link>
          </div>
          <h1 className="car-heading mt32">MB Sprinter</h1>
          <p className="car-paragraph mt32">
            Our Mercedes-Benz Sprinter is perfect for group transportation or
            corporate events. With its spacious interior, comfortable seating,
            and high-end amenities, this luxury van provides a first-class
            experience for both business and leisure travel.
          </p>
          <div className="button-row">
            <Button text="Order Now" marginTop="mt64" scroll="contact" />
            <span className="price mt16">From $136.00 / hour</span>
            <span className="price mt16">From $3.50 / mile</span>
          </div>
        </section>
        <section className="content-pc mt128">
          <div className="text-content">
            <div className="bread-dots">
              <Link to="/" className="bread-link">
                Home
              </Link>
              <div className="circle"></div>
              <Link to="/rates" className="bread-link">
                Rates
              </Link>
              <div className="circle-orange"></div>
              <Link to="/cars/mercedes-sprinter" className="bread-link">
                <span className="orange">MB Sprinter</span>
              </Link>
            </div>
            <div className="text-content mt32">
              <h1 className="heading-s orange w30">MB Sprinter</h1>
              <p className="paragraph mt32 w40">
                Our Mercedes-Benz Sprinter is perfect for group transportation
                or corporate events. With its spacious interior, comfortable
                seating, and high-end amenities, this luxury van provides a
                first-class experience for both business and leisure travel.
              </p>
            </div>
            <div className="button-row-car">
              <Button text="Order Now" marginTop="mt32" scroll="contacts" />
              <div className="prices-group mt32">
                <span className="text-price orange">From $136.00 / hour</span>
                <span className="text-price orange mt8">From $3.50 / mile</span>
              </div>
            </div>
          </div>
        </section>
        <img src={cadillacPc} alt="car-pc" className="car-pc-img" />
        <Swiper
          slidesPerView={1}
          spaceBetween={100}
          loop={true}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          style={
            {
              "--swiper-pagination-color": "#FF5722",
              "--swiper-pagination-bullet-inactive-color": "white",
              "--swiper-navigation-color": "#FF5722",
            } as React.CSSProperties
          }
          className="car-swiper"
        >
          <SwiperSlide>
            <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
          </SwiperSlide>
        </Swiper>
        <div className="content-pc items-center column justify-center mt256">
          <h2 className="heading-s text-center">
            <span className="orange">Gallery</span>
          </h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={400}
            navigation={true}
            loop={true}
            centeredSlides={true}
            pagination={false}
            modules={[Pagination, Navigation]}
            style={
              {
                "--swiper-pagination-color": "#FF5722",
                "--swiper-pagination-bullet-inactive-color": "white",
                "--swiper-navigation-color": "#FF5722",
              } as React.CSSProperties
            }
            className="car-swiper-pc"
          >
            <SwiperSlide>
              <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="car-img mt64" src={cadillacMob} alt="cadillac" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="content-pc column items-center mt128">
          <h3 className="heading-s text-centers">
            <span className="orange">Prices</span>
          </h3>
          <PriceTable
            cityRent="136$"
            courtyYard="102"
            minimalRentTime="6"
            holidayPrices="112"
          />
        </div>
        <div className="content-pc column mt128">
          <h4 className="heading-s w100">
            Car <span className="orange">Features</span>
          </h4>
          <p className="paragraph mt16 w60">
            When it comes to elite car rental with a driver in Chicago, Elite
            Arrival is the company you can trust. Our Chicago Limo Fleet offers
            a luxurious and reliable transportation service that will exceed
            your expectations.
          </p>
          <div className="features-row mt64">
            <CarFeature
              icon={icon}
              featureName="Personalized Greeting"
              featureDescription="At Elite Arrival, we understand the importance of a warm and professional welcome. Our Meet & Greet service ensures that your driver will be waiting for you in the baggage claim area, holding a personalized sign with your name on it. This formal greeting adds a touch of elegance to your arrival experience, making you feel like a VIP from the moment you step off the plane."
            />
            <CarFeature
              icon={icon}
              featureName="Hassle-Free Pickup"
              featureDescription="With our Curbside Service, you can enjoy a seamless and convenient airport car service experience. We have designated pick-up and drop-off areas at O'Hare and Midway airports, ensuring a smooth transition from the terminal to your luxury vehicle. Our chauffeur will come down to meet you after you have retrieved all your luggage, eliminating any unnecessary waiting time and allowing you to get on your way without delay."
            />
            <CarFeature
              icon={icon}
              featureName="Luxury Fleet"
              featureDescription="When you choose Elite Arrival for your car rental needs, you can expect a fleet of luxurious vehicles that are meticulously maintained and equipped with the latest amenities. From sleek sedans to spacious SUVs, our diverse selection of vehicles caters to every preference and occasion. Experience the ultimate in comfort and style as you travel through Chicago in one of our premium vehicles."
            />
            <CarFeature
              icon={icon}
              featureName="Professional Assistance"
              featureDescription="In addition to our Meet & Greet service, our experienced drivers are trained to provide professional assistance throughout your journey. They can help you navigate unfamiliar airports, offer recommendations for local attractions and dining options, and assist with any luggage or special requests you may have. With Elite Arrival, you can trust that our team will go above and beyond to ensure your comfort and satisfaction."
            />
          </div>
        </div>
        <div className="content mt64 align-center">
          <h2 className="car-heading-s text-center">Prices</h2>
          <PriceTable
            cityRent="136$"
            courtyYard="102"
            minimalRentTime="6"
            holidayPrices="112"
          />
        </div>
        <div className="content mt64 align-center">
          <h2 className="car-heading-s text-center">
            <span className="black">Car</span> Features
          </h2>
          <p className="car-paragraph align-center text-center mt32">
            When it comes to elite car rental with a driver in Chicago, Elite
            Arrival is the company you can trust. Our Chicago Limo Fleet offers
            a luxurious and reliable transportation service that will exceed
            your expectations.
          </p>
          <CarFeature
            icon={icon}
            featureName="Personalized Greeting"
            featureDescription="At Elite Arrival, we understand the importance of a warm and professional welcome. Our Meet & Greet service ensures that your driver will be waiting for you in the baggage claim area, holding a personalized sign with your name on it. This formal greeting adds a touch of elegance to your arrival experience, making you feel like a VIP from the moment you step off the plane."
          />
          <CarFeature
            icon={icon}
            featureName="Hassle-Free Pickup"
            featureDescription="With our Curbside Service, you can enjoy a seamless and convenient airport car service experience. We have designated pick-up and drop-off areas at O'Hare and Midway airports, ensuring a smooth transition from the terminal to your luxury vehicle. Our chauffeur will come down to meet you after you have retrieved all your luggage, eliminating any unnecessary waiting time and allowing you to get on your way without delay."
          />
          <CarFeature
            icon={icon}
            featureName="Luxury Fleet"
            featureDescription="When you choose Elite Arrival for your car rental needs, you can expect a fleet of luxurious vehicles that are meticulously maintained and equipped with the latest amenities. From sleek sedans to spacious SUVs, our diverse selection of vehicles caters to every preference and occasion. Experience the ultimate in comfort and style as you travel through Chicago in one of our premium vehicles."
          />
          <CarFeature
            icon={icon}
            featureName="Professional Assistance"
            featureDescription="In addition to our Meet & Greet service, our experienced drivers are trained to provide professional assistance throughout your journey. They can help you navigate unfamiliar airports, offer recommendations for local attractions and dining options, and assist with any luggage or special requests you may have. With Elite Arrival, you can trust that our team will go above and beyond to ensure your comfort and satisfaction."
          />
        </div>
        <FormScreen formParagraph="The Mercedes-Benz Sprinter is a luxury van that offers spacious and comfortable transportation for group travel or corporate events. Its interior is designed with comfort in mind, featuring plush seating, ample legroom, and high-end amenities such as a mini-fridge and entertainment system. The Sprinter's advanced safety features, including lane-keeping assist and collision prevention assist, provide peace of mind during the journey. With its smooth ride and powerful engine, this luxury van ensures a first-class experience for both business and leisure travel." />
        <Footer />
      </div>
    </>
  );
};

export default MBSprinter;
