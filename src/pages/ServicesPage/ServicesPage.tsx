import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import FormScreen from "../../screens/FormScreen/FormScreen";

import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./styles/services.css";

interface ServiceTabProps {
  serviceHeading: string;
  serviceDescription: string;
  serviceImage: string;
  scrollLinkText: string;
  navigate: any;
}

interface ServiceTabPropsPc {
  serviceHeading: string;
  serviceDescription: string;
  serviceImage: string;
  scrollLinkText: string;
  navigate: any;
}

const ServiceTab: React.FC<ServiceTabProps> = ({
  serviceDescription,
  serviceHeading,
  serviceImage,
  navigate,
  scrollLinkText,
}) => {
  return (
    <div className="service-tab mt64">
      <img className="service-img" src={serviceImage} alt="service"></img>
      <h4 className="heading-fourth mt32">{serviceHeading}</h4>
      <p className="service-description mt16">{serviceDescription}</p>
      <button className="scroll-link mt32" onClick={navigate}>
        {scrollLinkText}
      </button>
    </div>
  );
};

const ServiceTabPc: React.FC<ServiceTabPropsPc> = ({
  serviceDescription,
  serviceHeading,
  serviceImage,
  navigate,
  scrollLinkText,
}) => {
  return (
    <div className="service-tab-pc mt64">
      <div className="service-content">
        <h4 className="heading-fourth text-left">
          <span className="orange">{serviceHeading}</span>
        </h4>
        <p className="paragraph w70 mt16">{serviceDescription}</p>
        <button className="scroll-link mt32" onClick={navigate}>
          {scrollLinkText}
        </button>
      </div>
      <img src={serviceImage} alt="service-image" className="service-img" />
    </div>
  );
};

const service01 = require("../../assets/service_01.webp");
const service02 = require("../../assets/service_02.webp");
const service03 = require("../../assets/service_03.webp");
const service04 = require("../../assets/service_04.webp");

const ServicesPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  function navigateAirportTransfers() {
    navigate("/services/airport-transfers");
  }

  function navigateCorporateTravel() {
    navigate("/services/corporate-travel");
  }

  function navigateNationwide() {
    navigate("/services/nationwide");
  }

  function navigateSpecialEvents() {
    navigate("/services/special-events");
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Elite Arrival Services | Luxury Car Rental with Driver in Chicago
        </title>
        <meta
          property="og:title"
          content="Elite Arrival Services | Luxury Car Rental with Driver in Chicago"
        ></meta>
        <meta
          property="og:description"
          content="Discover the range of services offered by Elite Arrival. From airport transfers to corporate travel and special events. Flexible charter options cater"
        ></meta>
        <meta
          name="description"
          content="Discover the range of services offered by Elite Arrival. From airport transfers to corporate travel and special events. Flexible charter options cater"
        ></meta>
      </Helmet>
      <div className="screen">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
        <section className="content mt64">
          <h1 className="main-heading">
            Our <span className="orange">Services</span>
          </h1>
          <p className="paragraph mt32 text-center">
            At Elite Arrival, we take pride in providing top-notch car rental
            services with professional drivers in Chicago. Our range of services
            includes:
          </p>
          <ServiceTab
            navigate={navigateAirportTransfers}
            scrollLinkText="Learn More"
            serviceHeading="Airport Transfers"
            serviceDescription="We offer reliable and efficient airport transfer services to and from all major airports in the Chicago area. Our experienced drivers will ensure that you reach your destination on time and in style, taking away the stress of navigating through traffic or finding parking."
            serviceImage={service01}
          />
          <ServiceTab
            navigate={navigateCorporateTravel}
            scrollLinkText="Learn More"
            serviceHeading="Corporate Travel"
            serviceDescription="We understand the importance of making a good impression when it comes to corporate travel. That's why we offer executive car rental services for business professionals. Our fleet of luxury vehicles is well-maintained and equipped with amenities to ensure a comfortable and productive journey."
            serviceImage={service02}
          />
          <ServiceTab
            navigate={navigateNationwide}
            scrollLinkText="Learn More"
            serviceHeading="Nationwide Service"
            serviceDescription="While we are based in Chicago, we also provide car rental services with drivers across the country. Whether you need transportation for a business trip or a leisurely vacation, our nationwide service ensures that you have a reliable and professional driver wherever you go."
            serviceImage={service03}
          />
          <ServiceTab
            navigate={navigateSpecialEvents}
            scrollLinkText="Learn More"
            serviceHeading="Special Events"
            serviceDescription="From weddings to prom nights, we understand that special events require special transportation. Our team is experienced in providing luxurious and stylish transportation for any occasion. We offer a range of vehicles to choose from, ensuring that you arrive at your event in style and comfort."
            serviceImage={service04}
          />
        </section>
        <main className="content-pc column mt128">
          <h1 className="heading-s auto">Our Services</h1>
          <div className="tabs">
            <Fade direction="left" duration={1000} triggerOnce={true}>
              <ServiceTabPc
                navigate={navigateAirportTransfers}
                serviceHeading="Airport Transfers"
                serviceDescription="We offer reliable and efficient airport transfer services to and from all major airports in the Chicago area. Our experienced drivers will ensure that you reach your destination on time and in style, taking away the stress of navigating through traffic or finding parking."
                scrollLinkText="Learn More"
                serviceImage={service01}
              />
            </Fade>
            <Fade direction="left" duration={1500} triggerOnce={true}>
              <ServiceTabPc
                navigate={navigateCorporateTravel}
                serviceHeading="Corporate Travel"
                serviceDescription="We understand the importance of making a good impression when it comes to corporate travel. That's why we offer executive car rental services for business professionals. Our fleet of luxury vehicles is well-maintained and equipped with amenities to ensure a comfortable and productive journey."
                scrollLinkText="Learn More"
                serviceImage={service02}
              />
            </Fade>
            <Fade direction="left" duration={2000} triggerOnce={true}>
              <ServiceTabPc
                navigate={navigateNationwide}
                serviceHeading="Nationwide Service"
                serviceDescription="While we are based in Chicago, we also provide car rental services with drivers across the country. Whether you need transportation for a business trip or a leisurely vacation, our nationwide service ensures that you have a reliable and professional driver wherever you go."
                scrollLinkText="Learn More"
                serviceImage={service03}
              />
            </Fade>
            <Fade direction="left" duration={2500} triggerOnce={true}>
              <ServiceTabPc
                navigate={navigateSpecialEvents}
                serviceHeading="Special Events"
                serviceDescription="From weddings to prom nights, we understand that special events require special transportation. Our team is experienced in providing luxurious and stylish transportation for any occasion. We offer a range of vehicles to choose from, ensuring that you arrive at your event in style and comfort."
                scrollLinkText="Learn More"
                serviceImage={service04}
              />
            </Fade>
          </div>
        </main>
        <FormScreen formParagraph="Contact us today to learn more about our services and receive a personalized quote for your car rental needs in Chicago. Experience the Elite Arrival difference and let us take care of your transportation requirements with professionalism and style." />
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
