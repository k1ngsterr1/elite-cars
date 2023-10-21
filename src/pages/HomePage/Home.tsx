import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import MainScreen from "../../screens/MainScreen/MainScreen";
import AboutScreen from "../../screens/AboutScreen/AboutScreen";
import FeaturesScreen from "../../screens/FeaturesScreen/FeaturesScreen";
import ReviewsScreen from "../../screens/ReviewsScreen/ReviewsScreen";

const Home = () => {
  return (
    <div className="screen">
      <MainScreen />
      <AboutScreen />
      <FeaturesScreen />
      <ReviewsScreen />
    </div>
  );
};

export default Home;
