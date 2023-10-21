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

  if (passengers < 1) {
    setPassengers(1);
  }

  return (
    <div className="form-container">
      <h3 className="form-heading">Step 1</h3>

      <div className="form-group">
        <label className="label">Select Your Car Type</label>
        <Select options={carOptions} className="selector" />
      </div>

      <div className="form-group">
        <label className="label">Select Service Type</label>
        <Select options={serviceOptions} className="selector" />
      </div>

      <div className="form-group">
        <label className="label">Luggage</label>
        <Select options={luggageOptions} className="selector" />
      </div>

      <div className="form-group">
        <label className="label">Passengers</label>
        <div className="counter">
          <button
            onClick={() => setPassengers(passengers - 1)}
            className="counter-btn"
          >
            -
          </button>
          <span className="quantity">{passengers}</span>
          <button
            onClick={() => setPassengers(passengers + 1)}
            className="counter-btn"
          >
            +
          </button>
        </div>
      </div>

      <button className="submit-button">Next</button>
    </div>
  );
};

export default BookingForm;
