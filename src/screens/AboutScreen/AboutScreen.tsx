import React from "react";

import "./styles/about-styles.css";

interface ServiceProps {
  serviceHeading: string;
  serviceParagraph: string;
  serviceImage: string;
}

const ServiceTab: React.FC<ServiceProps> = ({
  serviceHeading,
  serviceImage,
  serviceParagraph,
}) => {
  return <div className="service-tab"></div>;
};

const AboutScreen = () => {
  return (
    <section className="screen bg-white">
      <main className="content">
        <h2 className="heading-s w80 text-center">
          Why you should <span className="orange">choose Us</span>
        </h2>
      </main>
    </section>
  );
};

export default AboutScreen;
