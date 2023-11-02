import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CarRate from "../../components/CarRate/CarRate";
import { RegularButton } from "../../components/Button/Button";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const rate01 = require("../../assets/rates_01.webp");
const rate02 = require("../../assets/rates_02.webp");
const rate03 = require("../../assets/rates_03.webp");
const rate04 = require("../../assets/rates_04.webp");
const rate05 = require("../../assets/rates_05.webp");
const rate06 = require("../../assets/rate_06.webp");

const fordExpedition = require("../../assets/expedition-rate.webp");
const sprinterRate = require("../../assets/sprinter-rate.webp");

const RatesScreen = () => {
  const [seeAll, setSeeAll] = useState(false);

  const navigate = useNavigate();

  const handleSeeAllClick = (event: any) => {
    setSeeAll(!seeAll);
    event.preventDefault();
    event.stopPropagation();
  };

  const navigateToRates = () => {
    navigate("/prices");
  };

  return (
    <section className="screen mt128" id="rates">
      <div className="content">
        <h2 className="heading-s">
          Our <span className="orange">rates</span>
        </h2>
        <div className="rates-row">
          <CarRate
            navigate={() => navigate("/cars/cadillac-ct6")}
            marginTop="mt64"
            carImage={rate01}
            carCategorie="Premium Sedan"
            carName="Cadillac CT6 Luxury"
            carHourPrice="$136.00"
            carMilePrice="$3.00"
          />
          <CarRate
            navigate={() => navigate("/cars/mercedes-s-class")}
            marginTop="mt32"
            carImage={rate02}
            carCategorie="Premium Sedan"
            carName="Mercedes-Benz S-Class S 580"
            carHourPrice="$188.00"
            carMilePrice="$3.50"
          />
          <CarRate
            navigate={() => navigate("/cars/bmw-7")}
            marginTop="mt32"
            carImage={rate03}
            carCategorie="Premium Sedan"
            carName="BMW 7-series 740i Xdrive"
            carHourPrice="$188.00"
            carMilePrice="$3.50"
          />
          <CarRate
            navigate={() => navigate("/cars/cadillac-escalade")}
            marginTop="mt32"
            carImage={rate04}
            carCategorie="Luxury SUV"
            carName="2023 Cadillac Escalade ESV Sport"
            carHourPrice="$188.00"
            carMilePrice="$3.50"
          />
          <CarRate
            navigate={() => navigate("/cars/ford-expedition")}
            marginTop="mt32"
            carImage={fordExpedition}
            carCategorie="Luxury SUV"
            carName="Ford Expedition"
            carHourPrice="$188.00"
            carMilePrice="$3.50"
          />
          <CarRate
            navigate={() => navigate("/cars/mercedes-sprinter")}
            marginTop="mt64"
            carImage={sprinterRate}
            carCategorie="Van"
            carName="Mercedes Sprinter"
            carHourPrice="$465.00"
            carMilePrice="$4.00"
          />
        </div>
      </div>
      <div className="content-pc column">
        <h2 className="heading-s">
          Our <span className="orange">rates</span>
        </h2>
        <div className="rates-list">
          <div className="rates-row">
            <CarRate
              navigate={() => navigate("/cars/cadillac-ct6")}
              marginTop="mt64"
              carImage={rate01}
              carCategorie="Premium Sedan"
              carName="Cadillac CT6 Luxury"
              carHourPrice="$136.00"
              carMilePrice="$3.00"
            />
            <CarRate
              navigate={() => navigate("/cars/mercedes-s-class")}
              marginTop="mt32"
              carImage={rate02}
              carCategorie="Premium Sedan"
              carName="Mercedes-Benz S-Class S 580"
              carHourPrice="$188.00"
              carMilePrice="$3.50"
            />
            <CarRate
              navigate={() => navigate("/cars/bmw-7")}
              marginTop="mt32"
              carImage={rate03}
              carCategorie="Premium Sedan"
              carName="BMW 7-series 740i Xdrive"
              carHourPrice="$188.00"
              carMilePrice="$3.50"
            />
            <CarRate
              navigate={() => navigate("/cars/cadillac-escalade")}
              marginTop="mt32"
              carImage={rate04}
              carCategorie="Luxury SUV"
              carName="2023 Cadillac Escalade ESV Sport"
              carHourPrice="$188.00"
              carMilePrice="$3.50"
            />
          </div>
          {/* {seeAll && ( */}
          <div className="rates-row">
            <div className="rates-row-centered">
              <CarRate
                navigate={() => navigate("/cars/ford-expedition")}
                marginTop="mt64"
                carImage={fordExpedition}
                carCategorie="Luxury SUV"
                carName="Ford Expedition"
                carHourPrice="$188.00"
                carMilePrice="$3.50"
              />
              <CarRate
                navigate={() => navigate("/cars/mercedes-sprinter")}
                marginTop="mt32"
                carImage={sprinterRate}
                carCategorie="Van"
                carName="Mercedes Sprinter"
                carHourPrice="$465.00"
                carMilePrice="$4.00"
              />
            </div>
          </div>
          {/* )} */}
        </div>
        <RegularButton
          text={"See All"}
          clickFunction={navigateToRates}
          marginTop="mt32"
        />
      </div>
    </section>
  );
};

export default RatesScreen;
