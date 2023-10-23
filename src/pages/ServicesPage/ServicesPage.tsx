import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { Link as ScrollLink } from "react-scroll";

import "./styles/services.css";
import FormScreen from "../../screens/FormScreen/FormScreen";

interface ServiceTabProps {
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
      <FormScreen />
      <Footer />
    </div>
  );
};

export default ServicesPage;
