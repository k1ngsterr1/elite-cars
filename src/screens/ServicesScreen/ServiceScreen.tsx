import React from "react";

import "./styles/services-styles.css";

const service01 = require("../../assets/service_01.webp");
const service02 = require("../../assets/service_02.webp");
const service03 = require("../../assets/service_03.webp");
const service04 = require("../../assets/service_04.webp");

const ServiceScreen = () => {
  return (
    <section className="screen mt64">
      <main className="content ">
        <h2 className="heading-s">
          Our <span className="orange">Services</span>
        </h2>
        <div className="service-tab-s mt64">
          <img src={service01} className="service" alt="service" />
          <span className="service-text mt16">Service #1</span>
          <span className="more mt8">More Info</span>
        </div>
        <div className="service-tab-s mt32">
          <img src={service02} className="service" alt="service" />
          <span className="service-text mt16">Service #2</span>
          <span className="more mt8">More Info</span>
        </div>
        <div className="service-tab-s mt32">
          <img src={service03} className="service" alt="service" />
          <span className="service-text mt16">Service #3</span>
          <span className="more mt8">More Info</span>
        </div>
        <div className="service-tab-s mt32">
          <img src={service04} className="service" alt="service" />
          <span className="service-text mt16">Service #4</span>
          <span className="more mt8">More Info</span>
        </div>
      </main>
    </section>
  );
};

export default ServiceScreen;
