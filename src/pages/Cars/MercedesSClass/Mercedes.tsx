import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import PriceTable from "../../../components/PriceTable/PriceTable";
import CarFeature from "../../../components/CarFeature/CarFeature";
import FormScreen from "../../../screens/FormScreen/FormScreen";
import Footer from "../../../components/Footer/Footer";
import Popup from "reactjs-popup";

import { Button } from "../../../components/Button/Button";
import { Form, Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "react-helmet";
import { Zoom } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../CadillacPage/styles/car.css";

const cadillacMob = require("../../../assets/mercedes-s-mob.webp");
const cadillacPc = require("../../../assets/mercedes-s-class.webp");
const icon = require("../../../assets/icon.svg").default;

const MercedesSClass = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setOpened] = useState();
  const [activeImage, setActiveImage] = useState("");

  const openModal = (imageSrc: any) => {
    setActiveImage(imageSrc);
    setModalOpen(true);
    console.log("ZOO");
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Mercedes-Benz S-class S580 | Luxury Car Rental with Driver in Chicago
        </title>
        <meta
          property="og:title"
          content="Mercedes-Benz S-class S580 | Luxury Car Rental with Driver in Chicago"
        ></meta>
        <meta
          property="og:description"
          content="Indulge in luxury with the Mercedes-Benz S-class S580 from Elite Arrival. Reserve your Mercedes-Benz S-class S580 today and elevate your journey in Chicago"
        ></meta>
        <meta
          name="description"
          content="Indulge in luxury with the Mercedes-Benz S-class S580 from Elite Arrival. Reserve your Mercedes-Benz S-class S580 today and elevate your journey in Chicago"
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
            <Link to="/cars/mercedes-s-class" className="link orange">
              MB S-class S580
            </Link>
          </div>
          <h1 className="car-heading mt32">MB S-class S580</h1>
          <p className="car-paragraph mt32">
            Experience the epitome of luxury with the Mercedes-Benz S-Class
            S580. This flagship sedan boasts a stunning design, exquisite
            craftsmanship, and cutting-edge technology. From its refined
            interior to its powerful performance, the S-Class S580 offers an
            unparalleled driving experience.
          </p>
          <div className="button-row">
            <Button text="Order Now" marginTop="mt64" scroll="contact" />
            <span className="price mt16">From $188.00 / hour</span>
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
              <Link to="/cars/mercedes-s-class" className="bread-link">
                <span className="orange">MB S-class S580</span>
              </Link>
            </div>
            <div className="text-content mt32">
              <h1 className="heading-s orange w30">MB S-class S580</h1>
              <p className="paragraph mt32 w40">
                Experience the epitome of luxury with the Mercedes-Benz S-Class
                S580. This flagship sedan boasts a stunning design, exquisite
                craftsmanship, and cutting-edge technology. From its refined
                interior to its powerful performance, the S-Class S580 offers an
                unparalleled driving experience.
              </p>
            </div>
            <div className="button-row-car">
              <Button text="Order Now" marginTop="mt32" scroll="contacts" />
              <div className="prices-group mt32">
                <span className="text-price orange">From $188.00 / hour</span>
                <span className="text-price orange mt8">From $3.50 / mile</span>
              </div>
            </div>
          </div>
        </section>
        <img src={cadillacPc} alt="car-pc" className="car-pc-img" />
        {/* <Swiper
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
              onClick={() => openModal(cadillacMob)}
              src={cadillacMob}
              alt="cadillac"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="car-img-gallery mt64"
              onClick={() => openModal(cadillacMob)}
              src={cadillacMob}
              alt="cadillac"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="car-img-gallery mt64"
              onClick={() => openModal(cadillacMob)}
              src={cadillacMob}
              alt="cadillac"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="car-img-gallery mt64"
              onClick={() => openModal(cadillacMob)}
              src={cadillacMob}
              alt="cadillac"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="car-img-gallery mt64"
              onClick={() => openModal(cadillacMob)}
              src={cadillacMob}
              alt="cadillac"
            />
          </SwiperSlide>
        </Swiper> */}
        {/* <div className="content-pc items-center column justify-center mt356">
          <h2 className="heading-s text-center">
            <span className="orange">Gallery</span>
          </h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={190}
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
                onClick={() => openModal(cadillacMob)}
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                onClick={() => openModal(cadillacMob)}
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                onClick={() => openModal(cadillacMob)}
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                onClick={() => openModal(cadillacMob)}
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                onClick={() => openModal(cadillacMob)}
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                onClick={() => openModal(cadillacMob)}
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                onClick={() => openModal(cadillacMob)}
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                onClick={() => openModal(cadillacMob)}
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                onClick={() => openModal(cadillacMob)}
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="car-img-gallery mt64"
                onClick={() => openModal(cadillacMob)}
                src={cadillacMob}
                alt="cadillac"
              />
            </SwiperSlide>
          </Swiper>
        </div> */}
        <div className="content-pc column items-center mt356">
          <h3 className="heading-s text-centers">
            <span className="orange">Prices</span>
          </h3>
          <PriceTable
            cityRent="188$"
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
            Our professional and experienced drivers are dedicated to providing
            the highest level of customer service. They will go above and beyond
            to make your experience with us unforgettable, ensuring that you
            arrive at your destination in style.
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
            cityRent="188$"
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
            Our professional and experienced drivers are dedicated to providing
            the highest level of customer service. They will go above and beyond
            to make your experience with us unforgettable, ensuring that you
            arrive at your destination in style.
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
        <FormScreen formParagraph="The Mercedes-Benz S-Class S580 is the epitome of luxury and sophistication. Its stunning design and exquisite craftsmanship are evident in every detail, from the elegant exterior to the opulent interior. The S-Class S580 is equipped with cutting-edge technology, including a widescreen digital cockpit display, voice control, and advanced driver assistance systems. The refined interior features premium materials, comfortable seating, and ambient lighting, creating a serene and luxurious atmosphere. With its powerful performance and smooth ride, the S-Class S580 offers an unparalleled driving experience." />
        <Footer />
        <Popup
          open={modalOpen}
          modal
          onClose={closeModal}
          className="modal-photo"
          position="center center"
          overlayStyle={{ background: "rgba(0,0,0,0.7)" }}
        >
          <Zoom>
            <img
              src={activeImage}
              className="photo"
              alt="Enlarged car"
              onClick={closeModal}
            />
          </Zoom>
        </Popup>
      </div>
    </>
  );
};

export default MercedesSClass;
