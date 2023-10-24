import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import { Button } from "../../../components/Button/Button";
import PriceTable from "../../../components/PriceTable/PriceTable";
import CarFeature from "../../../components/CarFeature/CarFeature";
import FormScreen from "../../../screens/FormScreen/FormScreen";
import Footer from "../../../components/Footer/Footer";
import { Form, Link } from "react-router-dom";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles/car.css";

const cadillacMob = require("../../../assets/cadillac_mob.webp");
const icon = require("../../../assets/icon.svg").default;

const Cadillac = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
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
          <Link to="/cadillac" className="link orange">
            Cadillac Escalade
          </Link>
        </div>
        <h1 className="car-heading mt32">2023 Cadillac Escalade ESV Sport</h1>
        <p className="car-paragraph mt32">
          Experience luxury like never before with our Cadillac Private Premium
          Service. Tailored for the discerning individual, we combine the
          timeless elegance of Cadillac with an unmatched level of personalized
          service. Whether you're heading to a special event, business meeting,
          or simply seeking a refined journey, our fleet of pristine Cadillacs
          ensures a seamless and sophisticated ride every time. Choose
          excellence. Choose Cadillac Private Premium
        </p>
        <div className="button-row">
          <Button text="Order Now" marginTop="mt64" scroll="contact" />
          <span className="price mt16">From $136.00 / hour</span>
          <span className="price mt16">From $3.50 / mile</span>
        </div>
      </section>
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
          Experience luxury like never before with our Cadillac Private Premium
          Service. Tailored for the discerning individual, we combine the
          timeless elegance of Cadillac with an unmatched level of personalized
          service. Whether you're heading to a special event, business meeting,
          or simply seeking a refined journey, our fleet of pristine Cadillacs
          ensures a seamless and sophisticated ride every time. Choose
          excellence. Choose Cadillac Private Premium
        </p>
        <CarFeature
          icon={icon}
          featureName="Elite Fleet Selection"
          featureDescription="Our meticulously maintained collection of Cadillacs represents the pinnacle of luxury automotive design. Every vehicle is modern, spotless, and equipped with the latest features to ensure a driving experience that's unparalleled."
        />
        <CarFeature
          icon={icon}
          featureName="Elite Fleet Selection"
          featureDescription="Our meticulously maintained collection of Cadillacs represents the pinnacle of luxury automotive design. Every vehicle is modern, spotless, and equipped with the latest features to ensure a driving experience that's unparalleled."
        />
        <CarFeature
          icon={icon}
          featureName="Elite Fleet Selection"
          featureDescription="Our meticulously maintained collection of Cadillacs represents the pinnacle of luxury automotive design. Every vehicle is modern, spotless, and equipped with the latest features to ensure a driving experience that's unparalleled."
        />
      </div>
      <FormScreen />
      <Footer />
    </div>
  );
};

export default Cadillac;
