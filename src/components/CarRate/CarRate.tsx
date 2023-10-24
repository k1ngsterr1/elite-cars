import React from "react";

import "./styles/car-tab-styles.css";

interface CarTabProps {
  carName: string;
  carCategorie: string;
  carHourPrice: string;
  carMilePrice: string;
  carImage: any;
  marginTop: string;
}

const CarRate: React.FC<CarTabProps> = ({
  carName,
  carCategorie,
  carHourPrice,
  carMilePrice,
  carImage,
  marginTop,
}) => {
  return (
    <div className={`rates-tab ${marginTop}`}>
      <span className="rate-text right">{carCategorie}</span>
      <img className="rate-img" src={carImage} alt="rate01"></img>
      <span className="rate-name">{carName}</span>
      <span className="rate-price-hour">From {carHourPrice} / hour</span>
      <span className="rate-price-mile">From {carMilePrice} / mile</span>
    </div>
  );
};

export default CarRate;
