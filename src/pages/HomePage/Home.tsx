import React, { useState } from "react";
import { Helmet } from "react-helmet";

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
import MapScreen from "../../screens/MapScreen/MapScreen";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Luxury Car Rental with Driver in Chicago | Elite Arrival</title>
        <meta
          property="og:title"
          content="Luxury Car Rental with Driver in Chicago | Elite Arrival"
        ></meta>
        <meta
          property="og:description"
          content="Experience the ultimate in luxury car rental with Elite Arrival. Our professional drivers provide personalized and hassle-free service, ensuring a VIP experience from start to finish"
        ></meta>
        <meta
          name="description"
          content="Experience the ultimate in luxury car rental with Elite Arrival. Our professional drivers provide personalized and hassle-free service, ensuring a VIP experience from start to finish"
        ></meta>
      </Helmet>
      <div className="screen">
        <MainScreen />
        <AboutScreen />
        <FeaturesScreen />
        <ReviewsScreen />
        <ServiceScreen />
        <RatesScreen />
        <FormScreen
          formParagraphLower="We pride ourselves on our attention to detail and personalized approach. Our customer-centric philosophy means that we tailor our services to meet your specific requirements. From selecting the perfect vehicle to accommodating any special requests, we go above and beyond to make your journey unforgettable.
Choose Elite Arrival for an unparalleled transportation experience that combines elegance, professionalism, and comfort. Let us elevate your journey and make every moment truly memorable."
        />
        <Footer />
      </div>
    </>
  );
};

export default Home;
