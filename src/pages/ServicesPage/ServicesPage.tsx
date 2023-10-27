import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { Link as ScrollLink } from "react-scroll";

import "./styles/services.css";
import FormScreen from "../../screens/FormScreen/FormScreen";
import { Fade, Slide } from "react-awesome-reveal";

interface ServiceTabProps {
  serviceHeading: string;
  serviceDescription: string;
  serviceImage: string;
  scrollLinkText: string;
  scroll: string;
}

interface ServiceTabPropsPc {
  serviceHeading: string;
  serviceDescription: string;
  serviceImage: string;
  scrollLinkText: string;
  scroll: string;
}

const ServiceTab: React.FC<ServiceTabProps> = ({
  serviceDescription,
  serviceHeading,
  serviceImage,
  scroll,
  scrollLinkText,
}) => {
  return (
    <div className="service-tab mt64">
      <img className="service-img" src={serviceImage} alt="service"></img>
      <h4 className="heading-fourth mt32">{serviceHeading}</h4>
      <p className="service-description mt16">{serviceDescription}</p>
      <ScrollLink className="scroll-link mt32" to={scroll}>
        {scrollLinkText}
      </ScrollLink>
    </div>
  );
};

const ServiceTabPc: React.FC<ServiceTabPropsPc> = ({
  serviceDescription,
  serviceHeading,
  serviceImage,
  scroll,
  scrollLinkText,
}) => {
  return (
    <div className="service-tab-pc mt64">
      <div className="service-content">
        <h4 className="heading-fourth text-left">
          <span className="orange">{serviceHeading}</span>
        </h4>
        <p className="paragraph w70 mt16">{serviceDescription}</p>
        <ScrollLink to={scroll} className="scroll-link mt32">
          {scrollLinkText}
        </ScrollLink>
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

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="screen">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      <section className="content mt64">
        <h1 className="main-heading">
          Our <span className="orange">Services</span>
        </h1>
        <ServiceTab
          scroll=""
          scrollLinkText="Book Now"
          serviceHeading="Airport Transfers"
          serviceDescription="Looking for a reliable airport transportation service to or from O’Hare International Airport in Chicago, IL? Look no further than LimoRSVP! Our O’Hare limo service offers top-notch transportation to meet your needs, whether you’re traveling for business or pleasure. Our experienced drivers will ensure you arrive at your destination safely and comfortably.
            We offer competitive O’Hare limo service rates and a range of vehicles to choose from, including luxury sedans, SUVs, and Mercedes Sprinter Vans. Additionally, we provide car service to O’Hare and limo service from O’Hare to suburbs surrounding Chicago. With LimoRSVP, you can expect timely, efficient, and affordable transportation every time. Contact us today to book your next ride!"
          serviceImage={service01}
        />

        <ServiceTab
          scroll=""
          scrollLinkText="Book Now"
          serviceHeading="Airport Transfers"
          serviceDescription="Looking for a reliable airport transportation service to or from O’Hare International Airport in Chicago, IL? Look no further than LimoRSVP! Our O’Hare limo service offers top-notch transportation to meet your needs, whether you’re traveling for business or pleasure. Our experienced drivers will ensure you arrive at your destination safely and comfortably.
            We offer competitive O’Hare limo service rates and a range of vehicles to choose from, including luxury sedans, SUVs, and Mercedes Sprinter Vans. Additionally, we provide car service to O’Hare and limo service from O’Hare to suburbs surrounding Chicago. With LimoRSVP, you can expect timely, efficient, and affordable transportation every time. Contact us today to book your next ride!"
          serviceImage={service02}
        />

        <ServiceTab
          scroll=""
          scrollLinkText="Book Now"
          serviceHeading="Airport Transfers"
          serviceDescription="Looking for a reliable airport transportation service to or from O’Hare International Airport in Chicago, IL? Look no further than LimoRSVP! Our O’Hare limo service offers top-notch transportation to meet your needs, whether you’re traveling for business or pleasure. Our experienced drivers will ensure you arrive at your destination safely and comfortably.
            We offer competitive O’Hare limo service rates and a range of vehicles to choose from, including luxury sedans, SUVs, and Mercedes Sprinter Vans. Additionally, we provide car service to O’Hare and limo service from O’Hare to suburbs surrounding Chicago. With LimoRSVP, you can expect timely, efficient, and affordable transportation every time. Contact us today to book your next ride!"
          serviceImage={service03}
        />
        <ServiceTab
          scroll=""
          scrollLinkText="Book Now"
          serviceHeading="Airport Transfers"
          serviceDescription="Looking for a reliable airport transportation service to or from O’Hare International Airport in Chicago, IL? Look no further than LimoRSVP! Our O’Hare limo service offers top-notch transportation to meet your needs, whether you’re traveling for business or pleasure. Our experienced drivers will ensure you arrive at your destination safely and comfortably.
            We offer competitive O’Hare limo service rates and a range of vehicles to choose from, including luxury sedans, SUVs, and Mercedes Sprinter Vans. Additionally, we provide car service to O’Hare and limo service from O’Hare to suburbs surrounding Chicago. With LimoRSVP, you can expect timely, efficient, and affordable transportation every time. Contact us today to book your next ride!"
          serviceImage={service04}
        />
      </section>
      <main className="content-pc column mt128">
        <h1 className="heading-s auto">Our Services</h1>
        <div className="tabs">
          <Fade direction="left" duration={1000} triggerOnce>
            <ServiceTabPc
              serviceHeading="Airport Transfers"
              serviceDescription="Looking for a reliable airport transportation service to or from O’Hare International Airport in Chicago, IL? Look no further than LimoRSVP! Our O’Hare limo service offers top-notch transportation to meet your needs, whether you’re traveling for business or pleasure. Our experienced drivers will ensure you arrive at your destination safely and comfortably.
            We offer competitive O’Hare limo service rates and a range of vehicles to choose from, including luxury sedans, SUVs, and Mercedes Sprinter Vans. Additionally, we provide car service to O’Hare and limo service from O’Hare to suburbs surrounding Chicago. With LimoRSVP, you can expect timely, efficient, and affordable transportation every time. Contact us today to book your next ride!
            "
              scroll=""
              scrollLinkText="Book Now"
              serviceImage={service01}
            />
          </Fade>
          <Fade direction="left" duration={1500} triggerOnce>
            <ServiceTabPc
              serviceHeading="Airport Transfers"
              serviceDescription="Looking for a reliable airport transportation service to or from O’Hare International Airport in Chicago, IL? Look no further than LimoRSVP! Our O’Hare limo service offers top-notch transportation to meet your needs, whether you’re traveling for business or pleasure. Our experienced drivers will ensure you arrive at your destination safely and comfortably.
            We offer competitive O’Hare limo service rates and a range of vehicles to choose from, including luxury sedans, SUVs, and Mercedes Sprinter Vans. Additionally, we provide car service to O’Hare and limo service from O’Hare to suburbs surrounding Chicago. With LimoRSVP, you can expect timely, efficient, and affordable transportation every time. Contact us today to book your next ride!
            "
              scroll=""
              scrollLinkText="Book Now"
              serviceImage={service02}
            />
          </Fade>
          <Fade direction="left" duration={2000} triggerOnce>
            <ServiceTabPc
              serviceHeading="Airport Transfers"
              serviceDescription="Looking for a reliable airport transportation service to or from O’Hare International Airport in Chicago, IL? Look no further than LimoRSVP! Our O’Hare limo service offers top-notch transportation to meet your needs, whether you’re traveling for business or pleasure. Our experienced drivers will ensure you arrive at your destination safely and comfortably.
            We offer competitive O’Hare limo service rates and a range of vehicles to choose from, including luxury sedans, SUVs, and Mercedes Sprinter Vans. Additionally, we provide car service to O’Hare and limo service from O’Hare to suburbs surrounding Chicago. With LimoRSVP, you can expect timely, efficient, and affordable transportation every time. Contact us today to book your next ride!
            "
              scroll=""
              scrollLinkText="Book Now"
              serviceImage={service03}
            />
          </Fade>
          <Fade direction="left" duration={2500} triggerOnce>
            <ServiceTabPc
              serviceHeading="Airport Transfers"
              serviceDescription="Looking for a reliable airport transportation service to or from O’Hare International Airport in Chicago, IL? Look no further than LimoRSVP! Our O’Hare limo service offers top-notch transportation to meet your needs, whether you’re traveling for business or pleasure. Our experienced drivers will ensure you arrive at your destination safely and comfortably.
            We offer competitive O’Hare limo service rates and a range of vehicles to choose from, including luxury sedans, SUVs, and Mercedes Sprinter Vans. Additionally, we provide car service to O’Hare and limo service from O’Hare to suburbs surrounding Chicago. With LimoRSVP, you can expect timely, efficient, and affordable transportation every time. Contact us today to book your next ride!
            "
              scroll=""
              scrollLinkText="Book Now"
              serviceImage={service04}
            />
          </Fade>
        </div>
      </main>
      <FormScreen />
      <Footer />
    </div>
  );
};

export default ServicesPage;
