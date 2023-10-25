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
  // Step 1
  const [currentStep, setCurrentStep] = useState(1);
  const [passengers, setPassengers] = useState(1);
  const [carType, setCarType] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [luggage, setLuggage] = useState(null);

  // Step 2
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("10:00");
  const [pickupLocation, setPickUpLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  // Step 3
  const [fullName, setFullName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAdress, setEmailAdress] = useState("");

  if (passengers < 1) {
    setPassengers(1);
  }

  const handleNextClick = () => {
    if (currentStep === 1) {
      if (carType && serviceType && luggage && passengers) {
        setCurrentStep(2);
      } else {
        alert("Please fill out all fields in Step 1 before proceeding!");
      }
    } else if (currentStep === 2) {
      if (pickupLocation && dropoffLocation && selectedTime && selectedDate) {
        setCurrentStep(3);
      } else {
        alert("Please fill out all fields in Step 2 before proceeding!");
      }
    }
  };

  return (
    <div className="form-container">
      {currentStep === 1 && (
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
      )}
      {currentStep === 2 && (
        <>
          {" "}
          <h3 className="form-heading">Step 2</h3>
          <div className="form-group mt32">
            <label className="label">Pickup Location</label>
            <input
              type="text"
              placeholder="Enter Location"
              onChange={(e: any) => setPickUpLocation(e.target.value)}
              className="b-form"
            />
          </div>
          <div className="form-group mt32">
            <label className="label">Dropoff Location</label>
            <input
              type="text"
              placeholder="Enter Location"
              onChange={(e: any) => setDropoffLocation(e.target.value)}
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
      {currentStep === 3 && (
        <>
          {" "}
          <h3 className="form-heading">Step 3</h3>
          <div className="form-group mt32">
            <label className="label">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e: any) => setFullName(e.target.value)}
              className="b-form"
            />
          </div>
          <div className="form-group mt32">
            <label className="label">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e: any) => setLastName(e.target.value)}
              className="b-form"
            />
          </div>
          <div className="form-group mt32">
            <label className="label">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e: any) => setPhoneNumber(e.target.value)}
              className="b-form"
            />
          </div>
          <div className="form-group mt32">
            <label className="label">Email Adress</label>
            <input
              type="text"
              placeholder="example@gmail.com"
              onChange={(e: any) => setEmailAdress(e.target.value)}
              className="b-form"
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
