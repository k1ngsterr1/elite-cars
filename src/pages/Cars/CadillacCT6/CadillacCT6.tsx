import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import PriceTable from "../../../components/PriceTable/PriceTable";
import CarFeature from "../../../components/CarFeature/CarFeature";
import FormScreen from "../../../screens/FormScreen/FormScreen";
import Footer from "../../../components/Footer/Footer";
import SwiperCore from "swiper";

import { Button } from "../../../components/Button/Button";
import { Form, Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "react-helmet";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../CadillacPage/styles/car.css";

const cadillacMob = require("../../../assets/cadillac-ct-6-mob.webp");
const cadillacPc = require("../../../assets/cadillac-ct-6.webp");
const icon = require("../../../assets/icon.svg").default;

const CadillacCT6 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Cadillac CT6 Luxury | Luxury Car Rental with Driver in Chicago
        </title>
        <meta
          property="og:title"
          content="Cadillac CT6 Luxury | Luxury Car Rental with Driver in Chicago"
        ></meta>
        <meta
          property="og:description"
          content="Experience luxury and sophistication with the Cadillac CT6 Luxury from Elite Arrival. Book your Cadillac CT6 Luxury today and enjoy a memorable journey in Chicago"
        ></meta>
        <meta
          name="description"
          content="Experience luxury and sophistication with the Cadillac CT6 Luxury from Elite Arrival. Book your Cadillac CT6 Luxury today and enjoy a memorable journey in Chicago"
        ></meta>
      </Helmet>
      <div className="screen">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
        <section className="content mt64 align-start">
          <div className="bread-dots ">
            <Link to="" className="link">
              Home
            </Link>
            <div className="circle"></div>
            <Link to="/prices" className="link">
              Rates
            </Link>
            <div className="circle-orange"></div>
            <Link to="/cars/cadillac-ct6" className="link orange">
              Cadillac CT6 Luxury
            </Link>
          </div>
          <h1 className="car-heading mt32">Cadillac CT6 Luxury</h1>
          <p className="car-paragraph mt32">
            This elegant and spacious sedan offers a comfortable ride with its
            plush leather seats and advanced technology features. With its
            powerful engine and smooth handling, the Cadillac CT6 Luxury ensures
            a luxurious and enjoyable journey.
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
              <Link to="/prices" className="bread-link">
                Rates
              </Link>
              <div className="circle-orange"></div>
              <Link to="/cars/cadillac-ct6" className="bread-link">
                <span className="orange">Cadillac CT6 Luxury</span>
              </Link>
            </div>
            <div className="text-content mt32">
              <h1 className="heading-s orange w30">Cadillac CT6 Luxury</h1>
              <p className="paragraph mt32 w40">
                This elegant and spacious sedan offers a comfortable ride with
                its plush leather seats and advanced technology features. With
                its powerful engine and smooth handling, the Cadillac CT6 Luxury
                ensures a luxurious and enjoyable journey.
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
            <img
              className="car-img-gallery mt64"
              src={cadillacMob}
              alt="cadillac"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="car-img-gallery mt64"
              src={cadillacMob}
              alt="cadillac"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="car-img-gallery mt64"
              src={cadillacMob}
              alt="cadillac"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="car-img-gallery mt64"
              src={cadillacMob}
              alt="cadillac"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="car-img-gallery mt64"
              src={cadillacMob}
              alt="cadillac"
            />
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
              <img
                className="car-img-gallery mt64"
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                src={cadillacMob}
                alt="cadillac"
              />
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
            Don't settle for anything less than the best when it comes to your
            transportation needs in Chicago. Book your Chicago limo with Elite
            Arrival today and experience the difference of our unparalleled
            chauffeured services. Trust us to elevate your travel experience to
            new heights and make your journey truly memorable.
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
            Don't settle for anything less than the best when it comes to your
            transportation needs in Chicago. Book your Chicago limo with Elite
            Arrival today and experience the difference of our unparalleled
            chauffeured services. Trust us to elevate your travel experience to
            new heights and make your journey truly memorable.
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
        <FormScreen formParagraph="The Cadillac CT6 Luxury is a top-of-the-line sedan that offers a truly luxurious experience. Its plush leather seats provide maximum comfort, allowing passengers to relax and enjoy the ride. The advanced technology features include a touchscreen infotainment system, Bluetooth connectivity, and a premium sound system, ensuring a seamless and enjoyable journey. The powerful engine and smooth handling of the CT6 Luxury make it a pleasure to drive, providing a refined and exhilarating driving experience." />
        <Footer />
      </div>
    </>
  );
};

export default CadillacCT6;
