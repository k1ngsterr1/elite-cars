import React from "react";

import "./styles/car-feature.css";

interface CarFeaturesProps {
  icon: string;
  featureName: string;
  featureDescription: string;
}

const CarFeature: React.FC<CarFeaturesProps> = ({
  icon,
  featureName,
  featureDescription,
}) => {
  return (
    <div className="car-feature mt32">
      <div className="feature-content">
        <img src={icon} alt="icon" className="feature-icon" />
        <span className="feature-heading">{featureName}</span>
        <span className="feature-description">{featureDescription}</span>
      </div>
    </div>
  );
};

export default CarFeature;
