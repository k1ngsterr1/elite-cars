import React, { useEffect, useState } from "react";
import BingMapsReact from "bingmaps-react";

export const Map = () => {
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
    <>
      {" "}
      <div style={{ width: "100%", height: "clamp(150px,70.092vw,600px)" }}>
        {loadMap && (
          <BingMapsReact
            viewOptions={{
              center: {
                latitude: 41.98184585537474,
                longitude: -87.7711083607984,
              },
            }}
            pushPins={pushPins}
            zoom={1}
            bingMapsKey="Av8PI_RnVrQpZ-gaBBkTGBqwbzn_0heKbd1tjpKdYyIu_iIweBT4N0Rgr_RCWqZn"
          />
        )}
      </div>
    </>
  );
};
