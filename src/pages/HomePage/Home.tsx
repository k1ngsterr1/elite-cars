import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import MainScreen from "../../screens/MainScreen/MainScreen";
import AboutScreen from "../../screens/AboutScreen/AboutScreen";

const Home = () => {
  return (
    <div className="screen">
      <MainScreen />
      <AboutScreen />
    </div>
  );
};

export default Home;
