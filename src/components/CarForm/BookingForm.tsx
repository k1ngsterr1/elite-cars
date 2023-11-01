import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import emailjs from "@emailjs/browser";

import "react-datepicker/dist/react-datepicker.css"; // Import the CSS
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

import "./styles/car-form.css";

const carOptions = [
  { value: "Sedan", label: "Sedan" },
  { value: "Suv", label: "SUV" },
  { value: "Van", label: "Van" },
  // ... Add other car types here
];

const serviceOptions = [
  { value: "From Airport", label: "From Airport" },
  { value: "To Airport", label: "To Airport" },
];

const luggageOptions = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
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
  const [pickupAddress, setPickUpAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");

  // Step 3
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  if (passengers < 1) {
    setPassengers(1);
  }

  const sendEmail = () => {
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_SECOND_TEMPLATE_ID!,
        {
          carType: carType,
          serviceType: serviceType,
          luggage: luggage,
          passengers: passengers,
          pickupAddress: pickupAddress,
          dropoffAddress: dropoffAddress,
          selectedTime: selectedTime,
          selectedDate: selectedDate,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          emailAddress: emailAddress,
        },
        process.env.REACT_APP_EMAILJS_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleNextClick = () => {
    if (currentStep === 1) {
      if (carType && serviceType && luggage && passengers) {
        setCurrentStep(2);
      } else {
        alert("Please fill out all fields in Step 1 before proceeding!");
      }
    }
    if (currentStep === 2) {
      if (pickupAddress && dropoffAddress && selectedTime && selectedDate) {
        setCurrentStep(3);
      } else {
        alert("Please fill out all fields in Step 2 before proceeding!");
      }
    }
    if (currentStep === 3) {
      if (firstName && lastName && phoneNumber && emailAddress) {
        sendEmail();
      } else {
        alert("Please fill out all fields in Step 3 before proceeding!");
      }
    }
  };
  return (
    <div className="form-container">
      {currentStep === 1 && (
        <>
          <div className="mob-form-step-1">
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
                name="luggage"
                onChange={(option: any) => setLuggage(option?.value)}
              />
            </div>
            <div className="form-group mt32">
              <label className="label">Passengers</label>
              <div className="counter">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setPassengers((prev) => Math.max(1, prev - 1));
                  }}
                  className="counter-btn left"
                >
                  -
                </button>
                <span className="quantity">{passengers}</span>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setPassengers((prev) => prev + 1);
                  }}
                  className="counter-btn right"
                >
                  +
                </button>
                <input
                  type="hidden"
                  name="passengers"
                  id="passengers"
                  value={passengers}
                />
              </div>
            </div>
            <button className="submit-button" onClick={handleNextClick}>
              Next
            </button>
          </div>
          <div className="pc-form-step-1">
            <div className="title-row">
              <span className="title orange">Ride Info</span>
              <span className="title">Select Vehicle</span>
              <span className="title">Final Details</span>
            </div>
            <div className="input-row">
              {" "}
              <div className="form-group mt64">
                <label className="label">Select Your Car Type</label>
                <Select
                  options={carOptions}
                  className="selector"
                  name="carType"
                  onChange={(option: any) => setCarType(option?.value)}
                />
              </div>
              <div className="form-group mt64">
                <label className="label">Select Service Type</label>
                <Select
                  options={serviceOptions}
                  className="selector"
                  name="serviceType"
                  onChange={(option: any) => setServiceType(option?.value)}
                />
              </div>
              <div className="form-group mt64">
                <label className="label">Luggage</label>
                <Select
                  options={luggageOptions}
                  className="selector"
                  name="luggage"
                  onChange={(option: any) => setLuggage(option?.value)}
                />
              </div>
              <div className="form-group mt64">
                <label className="label">Passengers</label>
                <div className="counter">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setPassengers((prev) => Math.max(1, prev - 1));
                    }}
                    className="counter-btn left"
                  >
                    -
                  </button>
                  <span className="quantity">{passengers}</span>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setPassengers((prev) => prev + 1);
                    }}
                    className="counter-btn right"
                  >
                    +
                  </button>
                  <input
                    type="hidden"
                    name="passengers"
                    id="passengers"
                    value={passengers}
                  />
                </div>
              </div>
            </div>
            <button className="submit-button" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </>
      )}
      {currentStep === 2 && (
        <>
          <div className="mob-form-step-2">
            <h3 className="form-heading">Step 2</h3>
            <div className="form-group mt32">
              <label className="label">Pickup Location</label>
              <input
                type="text"
                placeholder="Enter Location"
                name="pickupAddress"
                onChange={(e: any) => setPickUpAddress(e.target.value)}
                className="b-form"
              />
            </div>
            <div className="form-group mt32">
              <label className="label">Dropoff Location</label>
              <input
                type="text"
                name="dropoffAddress"
                placeholder="Enter Location"
                onChange={(e: any) => setDropoffAddress(e.target.value)}
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
          </div>
          <div className="pc-form-step-2">
            {" "}
            <div className="title-row">
              <span className="title">Ride Info</span>
              <span className="title orange">Select Vehicle</span>
              <span className="title">Final Details</span>
            </div>
            <div className="input-row">
              {" "}
              <div className="form-group mt64">
                <label className="label">Pickup Location</label>
                <input
                  type="text"
                  name="pickupAddress"
                  placeholder="Enter Location"
                  onChange={(e: any) => setPickUpAddress(e.target.value)}
                  className="b-form"
                />
              </div>
              <div className="form-group mt64">
                <label className="label">Dropoff Location</label>
                <input
                  type="text"
                  name="dropoffAddress"
                  placeholder="Enter Location"
                  onChange={(e: any) => setDropoffAddress(e.target.value)}
                  className="b-form"
                />
              </div>
              <div className="form-group mt64">
                <label className="label">Pick-up Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date) => setSelectedDate(date)}
                  dateFormat="MMMM d, yyyy"
                  className="b-form"
                  placeholderText="Select Date"
                />
              </div>
              <div className="form-group mt64">
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
            </div>
            <button className="submit-button" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </>
      )}
      {currentStep === 3 && (
        <>
          <div className="mob-form-step-3">
            <h3 className="form-heading">Step 3</h3>
            <div className="form-group mt32">
              <label className="label">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={(e: any) => setFirstName(e.target.value)}
                className="b-form"
              />
            </div>
            <div className="form-group mt32">
              <label className="label">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={(e: any) => setLastName(e.target.value)}
                className="b-form"
              />
            </div>
            <div className="form-group mt32">
              <label className="label">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={(e: any) => setPhoneNumber(e.target.value)}
                className="b-form"
              />
            </div>
            <div className="form-group mt32">
              <label className="label">Email Adress</label>
              <input
                type="text"
                name="emailAddress"
                placeholder="example@gmail.com"
                onChange={(e: any) => setEmailAddress(e.target.value)}
                className="b-form"
              />
            </div>
            <button className="submit-button" onClick={handleNextClick}>
              Next
            </button>
          </div>
          <div className="pc-form-step-3">
            {" "}
            <div className="title-row">
              <span className="title">Ride Info</span>
              <span className="title">Select Vehicle</span>
              <span className="title orange">Final Details</span>
            </div>
            <div className="input-row">
              {" "}
              <div className="form-group mt64">
                <label className="label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={(e: any) => setFirstName(e.target.value)}
                  className="b-form"
                />
              </div>
              <div className="form-group mt64">
                <label className="label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={(e: any) => setLastName(e.target.value)}
                  className="b-form"
                />
              </div>
              <div className="form-group mt64">
                <label className="label">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={(e: any) => setPhoneNumber(e.target.value)}
                  className="b-form"
                />
              </div>
              <div className="form-group mt64">
                <label className="label">Email Adress</label>
                <input
                  type="text"
                  name="emailAddress"
                  placeholder="example@gmail.com"
                  onChange={(e: any) => setEmailAddress(e.target.value)}
                  className="b-form"
                />
              </div>
            </div>
            <button className="submit-button" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingForm;
