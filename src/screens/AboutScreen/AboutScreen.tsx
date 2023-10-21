import React from "react";

import "./styles/about-styles.css";

interface ServiceProps {
  serviceHeading: string;
  serviceParagraph: string;
  serviceImage: string;
}

const handshake = require("../../assets/handshake.svg").default;
const airport = require("../../assets/airport.svg").default;
const car = require("../../assets/car.svg").default;

const ServiceTab: React.FC<ServiceProps> = ({
  serviceHeading,
  serviceImage,
  serviceParagraph,
}) => {
  return (
    <div className="service-tab mt16">
      <div className="service-square mt32">
        <img src={serviceImage} alt="icon" className="icon" />
      </div>
      <h4 className="service-heading mt16">{serviceHeading}</h4>
      <p className="service-paragraph mt16">{serviceParagraph}</p>
    </div>
  );
};

const AboutScreen = () => {
  return (
    <section className="screen bg-white">
      <main className="content">
        <h2 className="heading-s w80 text-center mt32">
          Why you should <span className="orange">choose Us</span>
        </h2>
        <ServiceTab
          serviceImage={handshake}
          serviceHeading="Meet & Greet"
          serviceParagraph="Are you looking for a more formal greeting, help navigating a new airport, or assistance with your luggage? Your driver will be waiting in baggage claim holding a greeting sign with your name on it.  Learn more about our airport car service in Chicago."
        ></ServiceTab>
        <ServiceTab
          serviceImage={airport}
          serviceHeading="Curbside Service"
          serviceParagraph="Are you looking for a more formal greeting, help navigating a new airport, or assistance with your luggage? Your driver will be waiting in baggage claim holding a greeting sign with your name on it.  Learn more about our airport car service in Chicago."
        ></ServiceTab>
        <ServiceTab
          serviceImage={car}
          serviceHeading="Charter Service"
          serviceParagraph="Are you looking for a more formal greeting, help navigating a new airport, or assistance with your luggage? Your driver will be waiting in baggage claim holding a greeting sign with your name on it.  Learn more about our airport car service in Chicago."
        ></ServiceTab>
      </main>
    </section>
  );
};

export default AboutScreen;
