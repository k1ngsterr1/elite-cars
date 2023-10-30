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

  const allCars = [
    {
      image: rate01,
      category: "Premium Sedan",
      name: "Cadillac CT6 Luxury",
      hourPrice: "$136.00",
      milePrice: "$3.00",
      marginTop: "mt64",
      path: "/cars/cadillac-ct6",
    },
    {
      image: rate02,
      category: "Premium Sedan",
      name: "Mercedes-Benz S-Class S 580",
      hourPrice: "$188.00",
      milePrice: "$3.50",
      marginTop: "mt32",
      path: "/cars/mercedes-s-class",
    },
    {
      image: rate03,
      category: "Premium Sedan",
      name: "BMW 7-series 740i Xdrive",
      hourPrice: "$188.00",
      milePrice: "$3.50",
      marginTop: "mt32",
      path: "/cars/bmw-7",
    },
    {
      image: rate04,
      category: "Luxury SUV",
      name: "2023 Cadillac Escalade ESV Sport",
      hourPrice: "$136.00",
      milePrice: "$3.50",
      marginTop: "mt32",
      path: "/cars/cadillac-escalade",
    },
    {
      image: rate05,
      category: "Premium Sedan",
      name: "Ford Expedition",
      hourPrice: "$150.00",
      milePrice: "$3.50",
      marginTop: "mt32",
      path: "/cars/ford-expedition",
    },
    {
      image: rate06,
      category: "Luxury SUV",
      name: "MB Sprinter",
      hourPrice: "$140.00",
      milePrice: "$3.40",
      marginTop: "mt32",
      path: "/cars/mercedes-sprinter",
    },
  ];
  const displayedCars = seeAll ? allCars : allCars.slice(0, 4);

  const handleSeeAllClick = (event: any) => {
    setSeeAll(!seeAll);
    event.preventDefault();
    event.stopPropagation();
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
            carHourPrice="$136.00"
            carMilePrice="$3.50"
          />
          <CarRate
            navigate={() => navigate("/cars/ford-expedition")}
            marginTop="mt32"
            carImage={fordExpedition}
            carCategorie="Luxury SUV"
            carName="Ford Expedition"
            carHourPrice="$136.00"
            carMilePrice="$3.50"
          />
          <CarRate
            navigate={() => navigate("/cars/mercedes-sprinter")}
            marginTop="mt64"
            carImage={sprinterRate}
            carCategorie="Van"
            carName="Mercedes Sprinter"
            carHourPrice="$136.00"
            carMilePrice="$3.00"
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
              carHourPrice="$136.00"
              carMilePrice="$3.50"
            />
          </div>
          {seeAll && (
            <Fade className="rates-row" triggerOnce>
              <div className="rates-row">
                <CarRate
                  navigate={() => navigate("/cars/cadillac-ct6")}
                  marginTop="mt64"
                  carImage={fordExpedition}
                  carCategorie="Luxury SUV"
                  carName="Ford Expedition"
                  carHourPrice="$136.00"
                  carMilePrice="$3.00"
                />
                <CarRate
                  navigate={() => navigate("/cars/mercedes-sprinter")}
                  marginTop="mt32"
                  carImage={sprinterRate}
                  carCategorie="Van"
                  carName="Mercedes Sprinter"
                  carHourPrice="$188.00"
                  carMilePrice="$3.50"
                />
                <CarRate
                  navigate={() => navigate("/cars/cadillac-ct6")}
                  marginTop="mt32"
                  carImage={rate03}
                  carCategorie="Premium Sedan"
                  carName="BMW 7-series 740i Xdrive"
                  carHourPrice="$188.00"
                  carMilePrice="$3.50"
                />
                <CarRate
                  navigate={() => navigate("/cars/cadillac-ct6")}
                  marginTop="mt32"
                  carImage={rate04}
                  carCategorie="Luxury SUV"
                  carName="2023 Cadillac Escalade ESV Sport"
                  carHourPrice="$136.00"
                  carMilePrice="$3.50"
                />
              </div>
            </Fade>
          )}
        </div>
        <RegularButton
          text={seeAll ? "See Less" : "See All"}
          clickFunction={handleSeeAllClick}
          marginTop="mt32"
        />
      </div>
    </section>
  );
};

export default RatesScreen;
