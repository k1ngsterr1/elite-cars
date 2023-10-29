import React from "react";
import { FormButton } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

import "./styles/features-styles.css";

interface FeatureProps {
  featureHeading: string;
  featureDescription: string;
}

const feature_image = require("../../assets/features_img.webp");
const feature_image_pc = require("../../assets/photo_about.webp");

const FeatureTab: React.FC<FeatureProps> = ({
  featureDescription,
  featureHeading,
}) => {
  return (
    <div className="feature-tab">
      <h5 className="feature-heading">{featureHeading}</h5>
      <span className="feature-description">{featureDescription}</span>
    </div>
  );
};

const FeaturesScreen = () => {
  const navigate = useNavigate();

  function navigateServices() {
    navigate("/services");
  }

  return (
    <section className="screen orange-bg">
      <div className="content">
        <h2 className="heading-s mt64">
          About <span className="white">Us</span>
        </h2>
        <p className="paragraph white text-center mt32">
          Elite Arrival is a premier transportation service that caters to the
          discerning needs of our clients. With a commitment to excellence, we
          provide luxurious and reliable transportation solutions for various
          occasions. Our fleet of high-end vehicles is meticulously maintained
          to ensure the utmost comfort and style for our customers.
        </p>
        <FeatureTab
          featureHeading="20+"
          featureDescription="Years of experience"
        ></FeatureTab>
        <FeatureTab
          featureHeading="24/7"
          featureDescription="Every day"
        ></FeatureTab>
        <FeatureTab
          featureHeading="20000"
          featureDescription="Сlients"
        ></FeatureTab>
        <FormButton
          text="Our Services"
          click={navigateServices}
          marginTop="mt32"
        />
      </div>
      <img
        className="image mt32"
        src={feature_image}
        alt="features-image"
      ></img>
      <div className="content-pc">
        <div className="text-content mt64">
          <h3 className="feature-heading">
            <span className="black">
              About <span className="white">Us</span>{" "}
            </span>
          </h3>
          <p className="paragraph white w60 mt32">
            Elite Arrival is a premier transportation service that caters to the
            discerning needs of our clients. With a commitment to excellence, we
            provide luxurious and reliable transportation solutions for various
            occasions. Our fleet of high-end vehicles is meticulously maintained
            to ensure the utmost comfort and style for our customers.
          </p>
          <div className="feature-tabs">
            <FeatureTab
              featureHeading="20+"
              featureDescription="Years of experience"
            ></FeatureTab>
            <FeatureTab
              featureHeading="24/7"
              featureDescription="Every Day"
            ></FeatureTab>
            <FeatureTab
              featureHeading="20000"
              featureDescription="Clients"
            ></FeatureTab>
          </div>
          <FormButton
            text="Our Services"
            click={navigateServices}
            marginTop="mt64"
          />
        </div>
        <img src={feature_image_pc} alt="feature-img" className="feature-img" />
      </div>
    </section>
  );
};

export default FeaturesScreen;
