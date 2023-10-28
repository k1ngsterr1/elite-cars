import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CarRate from "../../components/CarRate/CarRate";
import { RegularButton } from "../../components/Button/Button";
import { Fade } from "react-awesome-reveal";

const rate01 = require("../../assets/rates_01.webp");
const rate02 = require("../../assets/rates_02.webp");
const rate03 = require("../../assets/rates_03.webp");
const rate04 = require("../../assets/rates_04.webp");
const rate05 = require("../../assets/rates_05.webp");
const rate06 = require("../../assets/rate_06.webp");

const RatesScreen = () => {
  const [seeAll, setSeeAll] = useState(false);

  const allCars = [
    {
      image: rate01,
      category: "Premium Sedan",
      name: "Cadillac CT6 Luxury",
      hourPrice: "$136.00",
      milePrice: "$3.00",
      marginTop: "mt64",
    },
    {
      image: rate02,
      category: "Premium Sedan",
      name: "Mercedes-Benz S-Class S 580",
      hourPrice: "$188.00",
      milePrice: "$3.50",
      marginTop: "mt32",
    },
    {
      image: rate03,
      category: "Premium Sedan",
      name: "BMW 7-series 740i Xdrive",
      hourPrice: "$188.00",
      milePrice: "$3.50",
      marginTop: "mt32",
    },
    {
      image: rate04,
      category: "Luxury SUV",
      name: "2023 Cadillac Escalade ESV Sport",
      hourPrice: "$136.00",
      milePrice: "$3.50",
      marginTop: "mt32",
    },
    {
      image: rate05,
      category: "Premium Sedan",
      name: "Example Car 5",
      hourPrice: "$150.00",
      milePrice: "$3.50",
      marginTop: "mt32",
    },
    {
      image: rate06,
      category: "Luxury SUV",
      name: "Example Car 6",
      hourPrice: "$140.00",
      milePrice: "$3.40",
      marginTop: "mt32",
    },
  ];
  const displayedCars = seeAll ? allCars : allCars.slice(0, 4);

  const handleSeeAllClick = () => {
    setSeeAll(!seeAll);
  };

  return (
    <section className="screen mt128" id="rates">
      <div className="content">
        <h2 className="heading-s">
          Our <span className="orange">rates</span>
        </h2>
        {displayedCars.map((car, index) => (
          <Fade triggerOnce>
            <CarRate
              key={index}
              marginTop={car.marginTop}
              carImage={car.image}
              carCategorie={car.category}
              carName={car.name}
              carHourPrice={car.hourPrice}
              carMilePrice={car.milePrice}
            />
          </Fade>
        ))}
        <RegularButton
          text={seeAll ? "See Less" : "See All"}
          clickFunction={handleSeeAllClick}
          marginTop="mt64"
        />
      </div>
      <div className="content-pc column">
        <h2 className="heading-s">
          Our <span className="orange">rates</span>
        </h2>
        <div className="rates-list">
          <div className="rates-row">
            <CarRate
              marginTop="mt64"
              carImage={rate01}
              carCategorie="Premium Sedan"
              carName="Cadillac CT6 Luxury"
              carHourPrice="$136.00"
              carMilePrice="$3.00"
            />
            <CarRate
              marginTop="mt32"
              carImage={rate02}
              carCategorie="Premium Sedan"
              carName="Mercedes-Benz S-Class S 580"
              carHourPrice="$188.00"
              carMilePrice="$3.50"
            />
            <CarRate
              marginTop="mt32"
              carImage={rate03}
              carCategorie="Premium Sedan"
              carName="BMW 7-series 740i Xdrive"
              carHourPrice="$188.00"
              carMilePrice="$3.50"
            />
            <CarRate
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
                  marginTop="mt64"
                  carImage={rate01}
                  carCategorie="Premium Sedan"
                  carName="Cadillac CT6 Luxury"
                  carHourPrice="$136.00"
                  carMilePrice="$3.00"
                />
                <CarRate
                  marginTop="mt32"
                  carImage={rate02}
                  carCategorie="Premium Sedan"
                  carName="Mercedes-Benz S-Class S 580"
                  carHourPrice="$188.00"
                  carMilePrice="$3.50"
                />
                <CarRate
                  marginTop="mt32"
                  carImage={rate03}
                  carCategorie="Premium Sedan"
                  carName="BMW 7-series 740i Xdrive"
                  carHourPrice="$188.00"
                  carMilePrice="$3.50"
                />
                <CarRate
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
