import React, { useState } from "react";
import Select from "react-select";

import "./styles/car-form.css";

const carOptions = [
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  // ... Add other car types here
];

const serviceOptions = [
  { value: "fromAirport", label: "From Airport" },
  { value: "toAirport", label: "To Airport" },
];

const luggageOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const BookingForm: React.FC = () => {
  const [passengers, setPassengers] = useState(1);
  const [carType, setCarType] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [luggage, setLuggage] = useState(null);

  if (passengers < 1) {
    setPassengers(1);
  }

  const isStep2Visible = carType && serviceType && luggage && passengers;

  return (
    <div className="form-container">
      {!isStep2Visible ? (
        <>
          <h3 className="form-heading">Step 1</h3>
          <div className="form-group mt32">
            <label className="label">Select Your Car Type</label>
            <Select
              options={carOptions}
              className="selector"
              onChange={(option: any) => setCarType(option?.value)}
            />
          </div>

          <div className="form-group mt32">
            <label className="label">Select Service Type</label>
            <Select
              options={serviceOptions}
              className="selector"
              onChange={(option: any) => setServiceType(option?.value)}
            />
          </div>

          <div className="form-group mt32">
            <label className="label">Luggage</label>
            <Select
              options={luggageOptions}
              className="selector"
              onChange={(option: any) => setLuggage(option?.value)}
            />
          </div>

          <div className="form-group mt32">
            <label className="label">Passengers</label>
            <div className="counter">
              <button
                onClick={() => setPassengers(passengers - 1)}
                className="counter-btn left"
              >
                -
              </button>
              <span className="quantity">{passengers}</span>
              <button
                onClick={() => setPassengers(passengers + 1)}
                className="counter-btn right"
              >
                +
              </button>
            </div>
          </div>

          <button className="submit-button">Next</button>
        </>
      ) : (
        <h3>aaa</h3>
      )}
    </div>
  );
};

export default BookingForm;
