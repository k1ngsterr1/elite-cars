import React from "react";

import "./styles/features-styles.css";
import { FormButton } from "../../components/Button/Button";

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
  return (
    <section className="screen orange-bg">
      <div className="content">
        <h2 className="heading-s mt64">
          About <span className="white">Us</span>
        </h2>
        <p className="paragraph white text-center mt32">
          Discover unrivaled luxury with [Your Service Name], the pinnacle of
          distinguished private car service. We elevate every journey with a
          unique blend of exclusive comfort, punctuality, and utmost discretion.
          Navigate your travels with us, where every ride is crafted to be an
          exquisite, memorable adventure, embodying the epitome of elite
          traveling experiences.
        </p>
        <FeatureTab
          featureHeading="20+"
          featureDescription="Years of experience"
        ></FeatureTab>
        <FeatureTab
          featureHeading="18+"
          featureDescription="Rental Outlets"
        ></FeatureTab>
        <FeatureTab
          featureHeading="32+"
          featureDescription="Repair Shop"
        ></FeatureTab>
        <FormButton text="Our Services" marginTop="mt32" />
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
            Discover unrivaled luxury with [Your Service Name], the pinnacle of
            distinguished private car service. We elevate every journey with a
            unique blend of exclusive comfort, punctuality, and utmost
            discretion. Navigate your travels with us, where every ride is
            crafted to be an exquisite, memorable adventure, embodying the
            epitome of elite traveling experiences.
          </p>
          <div className="feature-tabs">
            <FeatureTab
              featureHeading="20+"
              featureDescription="Years of experience"
            ></FeatureTab>
            <FeatureTab
              featureHeading="18+"
              featureDescription="Rental Outlets"
            ></FeatureTab>
            <FeatureTab
              featureHeading="32+"
              featureDescription="Repair Shop"
            ></FeatureTab>
          </div>
          <FormButton text="Our Services" marginTop="mt64 " />
        </div>
        <img src={feature_image_pc} alt="feature-img" className="feature-img" />
      </div>
    </section>
  );
};

export default FeaturesScreen;
