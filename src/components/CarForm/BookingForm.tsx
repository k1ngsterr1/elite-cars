import React, { useState, useEffect } from "react";
import { BingMap, Pushpin } from "bingmaps-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import emailjs from "@emailjs/browser";
import ThanksPopup from "../Popup/ThanksPopup";

import "react-datepicker/dist/react-datepicker.css"; // Import the CSS
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
  { value: "Point to Point", label: "Point To point" },
  { value: "Hourly Charter", label: "Hourly charter" },
];

const luggageOptions = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

const sedan = require("../../assets/sedan.webp");
const premium_sedan = require("../../assets/premium_sedan.webp");
const SUV = require("../../assets/SUV.webp");
const van = require("../../assets/van.webp");

const BookingForm: React.FC = () => {
  // Step 1
  const [currentStep, setCurrentStep] = useState(1);
  const [passengers, setPassengers] = useState(1);
  const [selectedCar, setSelectedCar] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [luggage, setLuggage] = useState(null);
  const [isOpen, setOpen] = useState(false);

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

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const [dropOffQuery, setDropOffQuery] = useState("");
  const [dropOffSuggestions, setDropOffSuggestions] = useState([]);

  const formattedSuggestions = suggestions.map((suggestion) => ({
    label: suggestion,
    value: suggestion,
  }));
  const formattedDropOffSuggestions = dropOffSuggestions.map((suggestion) => ({
    label: suggestion,
    value: suggestion,
  }));

  useEffect(() => {
    if (query.length > 2 || dropOffQuery.length > 2) {
      // Fetch suggestions for pickupAddress
      fetch(
        `https://dev.virtualearth.net/REST/v1/Locations?query=${query}&key=Av8PI_RnVrQpZ-gaBBkTGBqwbzn_0heKbd1tjpKdYyIu_iIweBT4N0Rgr_RCWqZn`
      )
        .then((response) => response.json())
        .then((data) => {
          const places = data.resourceSets[0].resources.map(
            (res: any) => res.name
          );
          setSuggestions(places);
        })
        .catch((error) => {
          console.error(error);
        });

      // Fetch suggestions for dropOffAddress
      fetch(
        `https://dev.virtualearth.net/REST/v1/Locations?query=${dropOffQuery}&key=Av8PI_RnVrQpZ-gaBBkTGBqwbzn_0heKbd1tjpKdYyIu_iIweBT4N0Rgr_RCWqZn`
      )
        .then((response) => response.json())
        .then((data) => {
          const places = data.resourceSets[0].resources.map(
            (res: any) => res.name
          );
          setDropOffSuggestions(places);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setSuggestions([]);
      setDropOffSuggestions([]);
    }
  }, [query, dropOffQuery]);
  const handlePickupAddressChange = (address: string) => {
    setQuery(address);
    setPickUpAddress(address);
  };

  const handleDropoffAddressChange = (address: string) => {
    setDropOffQuery(address);
    setDropoffAddress(address);
  };

  if (passengers < 1) {
    setPassengers(1);
  }

  const handleCheckboxChange = (carType: any) => {
    if (selectedCar === carType) {
      setSelectedCar(null);
    } else {
      setSelectedCar(carType);
    }
  };

  function handleCardClick(carType: any) {
    handleCheckboxChange(carType);
  }

  const sendEmail = () => {
    setOpen((o) => !o);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_SECOND_TEMPLATE_ID!,
        {
          carType: selectedCar,
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
      if (selectedCar && serviceType && luggage && passengers) {
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
            <div className="form-group text-center mt32">
              <label className="label">Select Your Car Type</label>
              <Swiper
                className="form-swiper"
                slidesPerView={1}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation={true}
                centeredSlides={true}
                pagination={false}
                style={
                  {
                    "--swiper-navigation-color": "#FF5722",
                  } as React.CSSProperties
                }
              >
                <SwiperSlide className="slide">
                  <div
                    className="car-card"
                    onClick={() => handleCardClick("Sedan")}
                  >
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedCar === "Sedan"}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleCheckboxChange("Sedan");
                      }}
                    />
                    <span className="card-text orange">Sedan</span>
                    <img className="car-card-image" src={sedan} alt="sedan" />
                  </div>
                  <div className="field orange mt16">
                    <FontAwesomeIcon
                      className="icon orange"
                      icon={faBriefcase}
                    />
                    <span className="text">4</span>
                  </div>
                  <div className="field orange mt16">
                    <FontAwesomeIcon className="icon orange" icon={faPerson} />
                    <span className="text">4</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <div
                    className="car-card"
                    onClick={() => handleCardClick("Premium Sedan")}
                  >
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedCar === "Premium Sedan"}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleCheckboxChange("Premium Sedan");
                      }}
                    />
                    <span className="card-text orange">Premium Sedan</span>
                    <img
                      className="car-card-image"
                      src={premium_sedan}
                      alt="premium_sedan"
                    />
                  </div>
                  <div className="field orange mt16">
                    <FontAwesomeIcon
                      className="icon orange"
                      icon={faBriefcase}
                    />
                    <span className="text">4</span>
                  </div>
                  <div className="field orange mt16">
                    <FontAwesomeIcon className="icon orange" icon={faPerson} />
                    <span className="text">4</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <div
                    className="car-card"
                    onClick={() => handleCardClick("Suv")}
                  >
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedCar === "Suv"}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleCheckboxChange("Suv");
                      }}
                    />
                    <span className="card-text orange">SUV</span>
                    <img className="car-card-image" src={SUV} alt="sedan" />
                  </div>
                  <div className="field orange mt16">
                    <FontAwesomeIcon
                      className="icon orange"
                      icon={faBriefcase}
                    />
                    <span className="text">6</span>
                  </div>
                  <div className="field orange mt16">
                    <FontAwesomeIcon className="icon orange" icon={faPerson} />
                    <span className="text">6</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <div
                    className="car-card"
                    onClick={() => handleCardClick("Van")}
                  >
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedCar === "Van"}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleCheckboxChange("Van");
                      }}
                    />
                    <span className="card-text orange">Van</span>
                    <img className="car-card-image" src={van} alt="sedan" />
                  </div>
                  <div className="field orange mt16">
                    <FontAwesomeIcon
                      className="icon orange"
                      icon={faBriefcase}
                    />
                    <span className="text">13</span>
                  </div>
                  <div className="field orange mt16">
                    <FontAwesomeIcon className="icon orange" icon={faPerson} />
                    <span className="text">13</span>
                  </div>
                </SwiperSlide>
              </Swiper>
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
              <span className="title">Select Address</span>
              <span className="title">Final Details</span>
            </div>
            <div className="gallery-switcher">
              <div className="form-group mt64">
                <label className="label">Select Your Car Type</label>
                <Swiper
                  className="form-swiper"
                  slidesPerView={1}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  navigation={true}
                  centeredSlides={true}
                  pagination={false}
                  style={
                    {
                      "--swiper-navigation-color": "#FF5722",
                    } as React.CSSProperties
                  }
                >
                  <SwiperSlide className="slide">
                    <div
                      className="car-card"
                      onClick={() => handleCardClick("Sedan")}
                    >
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedCar === "Sedan"}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleCheckboxChange("Sedan");
                        }}
                      />
                      <span className="card-text orange">Sedan</span>
                      <img className="car-card-image" src={sedan} alt="sedan" />
                    </div>
                    <div className="field orange mt16">
                      <FontAwesomeIcon
                        className="icon orange"
                        icon={faBriefcase}
                      />
                      <span className="text">4</span>
                    </div>
                    <div className="field orange mt16">
                      <FontAwesomeIcon
                        className="icon orange"
                        icon={faPerson}
                      />
                      <span className="text">4</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <div
                      className="car-card"
                      onClick={() => handleCardClick("Premium Sedan")}
                    >
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedCar === "Premium Sedan"}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleCheckboxChange("Premium Sedan");
                        }}
                      />
                      <span className="card-text orange">Premium Sedan</span>
                      <img
                        className="car-card-image"
                        src={premium_sedan}
                        alt="premium_sedan"
                      />
                    </div>
                    <div className="field orange mt16">
                      <FontAwesomeIcon
                        className="icon orange"
                        icon={faBriefcase}
                      />
                      <span className="text">4</span>
                    </div>
                    <div className="field orange mt16">
                      <FontAwesomeIcon
                        className="icon orange"
                        icon={faPerson}
                      />
                      <span className="text">4</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <div
                      className="car-card"
                      onClick={() => handleCardClick("Suv")}
                    >
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedCar === "Suv"}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleCheckboxChange("Suv");
                        }}
                      />
                      <span className="card-text orange">SUV</span>
                      <img className="car-card-image" src={SUV} alt="sedan" />
                    </div>
                    <div className="field orange mt16">
                      <FontAwesomeIcon
                        className="icon orange"
                        icon={faBriefcase}
                      />
                      <span className="text">6</span>
                    </div>
                    <div className="field orange mt16">
                      <FontAwesomeIcon
                        className="icon orange"
                        icon={faPerson}
                      />
                      <span className="text">6</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <div
                      className="car-card"
                      onClick={() => handleCardClick("Van")}
                    >
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedCar === "Van"}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleCheckboxChange("Van");
                        }}
                      />
                      <span className="card-text orange">Van</span>
                      <img className="car-card-image" src={van} alt="sedan" />
                    </div>
                    <div className="field orange mt16">
                      <FontAwesomeIcon
                        className="icon orange"
                        icon={faBriefcase}
                      />
                      <span className="text">13</span>
                    </div>
                    <div className="field orange mt16">
                      <FontAwesomeIcon
                        className="icon orange"
                        icon={faPerson}
                      />
                      <span className="text">13</span>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="input-row">
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
                value={query}
                onChange={(e) => handlePickupAddressChange(e.target.value)}
                className="b-form"
              />
              <div className="mt16">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="orange paragraph  mt8"
                    onClick={() => handlePickupAddressChange(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>
            <div className="form-group mt32">
              <label className="label">Dropoff Location</label>
              <input
                type="text"
                name="dropoffAddress"
                placeholder="Enter Location"
                value={dropOffQuery}
                onChange={(e) => handleDropoffAddressChange(e.target.value)}
                className="b-form"
              />
              <div className="mt16">
                {dropOffSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="orange paragraph mt8"
                    onClick={() => handleDropoffAddressChange(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
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
              <span className="title orange">Select Address</span>
              <span className="title">Final Details</span>
            </div>
            <div className="input-row">
              {" "}
              <div className="form-group mt64">
                <label className="label">Pickup Location</label>
                <Select
                  name="pickupAddress"
                  placeholder="Enter Pickup Location"
                  options={formattedSuggestions}
                  onInputChange={(inputValue: string) => setQuery(inputValue)} // Capturing input
                  onChange={(selectedOption: any) =>
                    handlePickupAddressChange(selectedOption.value)
                  }
                  className="b-form"
                  noOptionsMessage={() => "Loading..."} // Display a loading message instead of 'No Options'
                />
                {/* <div className="mt16">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="orange paragraph mt8"
                      onClick={() => handlePickupAddressChange(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div> */}
              </div>
              <div className="form-group mt64">
                <label className="label">Dropoff Location</label>
                <Select
                  name="dropoffAddress"
                  placeholder="Enter Dropoff Location"
                  options={formattedDropOffSuggestions}
                  onInputChange={(inputValue: string) =>
                    setDropOffQuery(inputValue)
                  } // Capturing input
                  onChange={(selectedOption: any) =>
                    handleDropoffAddressChange(selectedOption.value)
                  }
                  className="b-form"
                  noOptionsMessage={() => "Loading..."} // Display a loading message instead of 'No Options'
                />
                {/* <div className="mt16">
                  {dropOffSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="orange paragraph mt8"
                      onClick={() => handleDropoffAddressChange(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div> */}
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
              <span className="title">Select Address</span>
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
      <ThanksPopup open={isOpen} closeMenu={() => setOpen(false)} />
    </div>
  );
};

export default BookingForm;
