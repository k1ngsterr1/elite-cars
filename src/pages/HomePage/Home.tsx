import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import MainScreen from "../../screens/MainScreen/MainScreen";
import AboutScreen from "../../screens/AboutScreen/AboutScreen";
import FeaturesScreen from "../../screens/FeaturesScreen/FeaturesScreen";
import ReviewsScreen from "../../screens/ReviewsScreen/ReviewsScreen";
import ServiceScreen from "../../screens/ServicesScreen/ServiceScreen";
import RatesScreen from "../../screens/RatesScreen/RatesScreen";
import FormScreen from "../../screens/FormScreen/FormScreen";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="screen">
      <MainScreen />
      <AboutScreen />
      <FeaturesScreen />
      <ReviewsScreen />
      <ServiceScreen />
      <RatesScreen />
      <FormScreen />
      <Footer />
    </div>
  );
};

export default Home;
