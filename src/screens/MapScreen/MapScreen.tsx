import React, { useState, useEffect } from "react";
import BingMapsReact from "bingmaps-react";
import { Map } from "../../components/Map/Map";

const MapScreen = () => {
  const pushPin = {
    center: {
      latitude: 41.98184585537474,
      longitude: -87.7711083607984,
    },
    options: {
      title: "Elite Arrival",
    },
  };

  const pushPins = [pushPin];
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadMap(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="screen mt128">
      <div className="content-pc column">
        <p className="paragraph text-center">
          "We pride ourselves on our attention to detail and personalized
          approach. Our customer-centric philosophy means that we tailor our
          services to meet your specific requirements. From selecting the
          perfect vehicle to accommodating any special requests, we go above and
          beyond to make your journey unforgettable. Choose Elite Arrival for an
          unparalleled transportation experience that combines elegance,
          professionalism, and comfort. Let us elevate your journey and make
          every moment truly memorable
        </p>
        <div className="mt64">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default MapScreen;
