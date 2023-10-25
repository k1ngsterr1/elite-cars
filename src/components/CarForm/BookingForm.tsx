import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

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
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("10:00");

  const [currentStep, setCurrentStep] = useState(1);
  const [passengers, setPassengers] = useState(1);
  const [carType, setCarType] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [luggage, setLuggage] = useState(null);

  if (passengers < 1) {
    setPassengers(1);
  }

  const handleNextClick = () => {
    if (carType && serviceType && luggage && passengers) {
      setCurrentStep(2);
    } else {
      // You can add some alert or notification to inform user to fill all fields
      alert("Please fill out all fields before proceeding!");
    }
  };
  return (
    <div className="form-container">
      {currentStep === 1 ? (
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
          <button className="submit-button" onClick={handleNextClick}>
            Next
          </button>
        </>
      ) : (
        <>
          {" "}
          <h3 className="form-heading">Step 2</h3>
          <div className="form-group mt32">
            <label className="label">Pickup Location</label>
            <input
              type="text"
              placeholder="Enter Location"
              className="b-form"
            />
          </div>
          <div className="form-group mt32">
            <label className="label">Dropoff Location</label>
            <input
              type="text"
              placeholder="Enter Location"
              className="b-form"
            />
          </div>
          <div className="form-group mt32">
            <label className="label">Pick-up Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              className="b-form"
              placeholderText="Select Date"
            />
          </div>
          <div className="form-group mt32">
            <label className="label">Pick-up Time</label>
            <TimePicker
              value={selectedTime}
              onChange={(value) => {
                if (value) {
                  setSelectedTime(value);
                }
              }}
              className="b-form"
              disableClock={true}
            />
          </div>
          <button className="submit-button" onClick={handleNextClick}>
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default BookingForm;
