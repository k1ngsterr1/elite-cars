import React from "react";

import "./styles/about-styles.css";

interface ServiceProps {
  serviceHeading: string;
  serviceParagraph: string;
  paragraphWidth?: string;
  serviceImage: string;
  marginBottom?: string;
}

const handshake = require("../../assets/handshake.svg").default;
const airport = require("../../assets/airport.svg").default;
const car = require("../../assets/car.svg").default;

const ServiceTab: React.FC<ServiceProps> = ({
  serviceHeading,
  paragraphWidth,
  serviceImage,
  serviceParagraph,
  marginBottom,
}) => {
  return (
    <div className="service-tab mt16">
      <div className="service-square mt32">
        <img src={serviceImage} alt="icon" className="icon" />
      </div>
      <h4 className={`service-heading mt16`}>{serviceHeading}</h4>
      <p className={`service-paragraph mt16 ${marginBottom} ${paragraphWidth}`}>
        {serviceParagraph}
      </p>
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
          serviceParagraph="Meet & Greet: Experience the VIP treatment from the moment you arrive with our Meet & Greet service. Our professional chauffeurs will be waiting for you at the airport, ready to assist with your luggage and ensure a smooth transition to our luxurious vehicles. Start your journey in style and comfort with Elite Arrival."
        ></ServiceTab>
        <ServiceTab
          serviceImage={airport}
          serviceHeading="Point-to-Point Service"
          serviceParagraph=" Point-to-Point Service: Experience the ease and convenience of our Point-to-Point Service. Our professional chauffeurs will pick you up from your desired location and drop you off directly at your destination. Whether it's a business meeting, a special event, or a night out with friends, our reliable drivers will ensure a smooth and efficient journey. Sit back, relax, and arrive in style with Elite Arrival's Point-to-Point Service."
        ></ServiceTab>
        <ServiceTab
          marginBottom="mb64"
          serviceImage={car}
          serviceHeading="Charter Service"
          serviceParagraph="Take full control of your itinerary with our Charter Service. Whether you're planning a day of sightseeing, attending multiple events, or simply want the flexibility to explore the city at your own pace, our dedicated chauffeurs will be at your disposal. Experience the ultimate luxury and convenience with Elite Arrival's Charter Service."
        ></ServiceTab>
      </main>
      <main className="content-pc jc-center column">
        <h2 className="heading-s  text-center mt64">
          Why you should <span className="orange">choose Us</span>
        </h2>
        <div className="tabs-container mt64">
          <ServiceTab
            paragraphWidth="w80"
            marginBottom="mb128"
            serviceImage={handshake}
            serviceHeading="Meet & Greet"
            serviceParagraph="Experience the VIP treatment from the moment you arrive with our Meet & Greet service. Our professional chauffeurs will be waiting for you at the airport, ready to assist with your luggage and ensure a smooth transition to our luxurious vehicles. Start your journey in style and comfort with Elite Arrival."
          ></ServiceTab>
          <ServiceTab
            paragraphWidth="w80"
            marginBottom="mb128"
            serviceImage={airport}
            serviceHeading="Point-to-Point Service"
            serviceParagraph="Experience the ease and convenience of our Point-to-Point Service. Our professional chauffeurs will pick you up from your desired location and drop you off directly at your destination. Whether it's a business meeting, a special event, or a night out with friends, our reliable drivers will ensure a smooth and efficient journey. Sit back, relax, and arrive in style with Elite Arrival's Point-to-Point Service."
          ></ServiceTab>
          <ServiceTab
            paragraphWidth="w80"
            marginBottom="mb128"
            serviceImage={car}
            serviceHeading="Charter Service"
            serviceParagraph="Take full control of your itinerary with our Charter Service. Whether you're planning a day of sightseeing, attending multiple events, or simply want the flexibility to explore the city at your own pace, our dedicated chauffeurs will be at your disposal. Experience the ultimate luxury and convenience with Elite Arrival's Charter Service."
          ></ServiceTab>
        </div>
      </main>
    </section>
  );
};

export default AboutScreen;
