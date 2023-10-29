import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./styles/services-styles.css";

const service01 = require("../../assets/service_01.webp");
const service02 = require("../../assets/service_02.webp");
const service03 = require("../../assets/service_03.webp");
const service04 = require("../../assets/service_04.webp");

const ServiceScreen = () => {
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

  return (
    <section className="screen mt128" id="services">
      <div className="content">
        <h2 className="heading-s">
          Our <span className="orange">Services</span>
        </h2>
        <div className="service-tab-s mt64">
          <img src={service01} className="service" alt="service" />
          <span className="service-text mt16">Airport Transfers</span>
          <span className="more mt8" onClick={navigateAirportTransfers}>
            More Info
          </span>
        </div>
        <div className="service-tab-s mt32">
          <img src={service02} className="service" alt="service" />
          <span className="service-text mt16">Corporate Travel</span>
          <span className="more mt8" onClick={navigateCorporateTravel}>
            More Info
          </span>
        </div>
        <div className="service-tab-s mt32">
          <img src={service03} className="service" alt="service" />
          <span className="service-text mt16">Nationwide Service</span>
          <span className="more mt8" onClick={navigateNationwide}>
            More Info
          </span>
        </div>
        <div className="service-tab-s mt32">
          <img src={service04} className="service" alt="service" />
          <span className="service-text mt16">Special Events</span>
          <span className="more mt8" onClick={navigateSpecialEvents}>
            More Info
          </span>
        </div>
      </div>
      <div className="content-pc column">
        <h2 className="heading-s text-right">
          Our <span className="orange">Services</span>
        </h2>
        <div className="services-list mt64">
          <div className="service-tab-s ">
            <img src={service01} className="service" alt="service" />
            <span className="service-text mt16">Airport Transfers</span>
            <span className="more mt8" onClick={navigateAirportTransfers}>
              More Info
            </span>
          </div>
          <div className="service-tab-s">
            <img src={service02} className="service" alt="service" />
            <span className="service-text mt16">Corporate Travel</span>
            <span className="more mt8" onClick={navigateCorporateTravel}>
              More Info
            </span>
          </div>
          <div className="service-tab-s ">
            <img src={service03} className="service" alt="service" />
            <span className="service-text mt16">Nationwide Service</span>
            <span className="more mt8" onClick={navigateNationwide}>
              More Info
            </span>
          </div>
          <div className="service-tab-s ">
            <img src={service04} className="service" alt="service" />
            <span className="service-text mt16">Special Events</span>
            <span className="more mt8" onClick={navigateCorporateTravel}>
              More Info
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceScreen;
