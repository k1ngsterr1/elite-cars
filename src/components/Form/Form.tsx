import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  Button,
  FormButton,
  FormButtonOrange,
  RegularButton,
} from "../Button/Button";

import "./styles/form.css";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");
  const [comment, setComment] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(1);

  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (passengers < 1) {
      setPassengers(1);
    }

    if (luggage < 1) {
      setLuggage(1);
    }
  }, [passengers, luggage]);

  function sendEmail(e: any) {
    e.preventDefault();
    setFullName("");
    setPhone("");
    setPickupAddress("");
    setDropoffAddress("");
    setComment("");
    setPassengers(1);
    setLuggage(1);
    // setOpen((o) => !o);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        e.target,
        process.env.REACT_APP_EMAILJS_KEY!
      )
      .then((res) => {
        console.log("SUCCESS");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="request-form" id="contacts">
      <form className="mobile-form" ref={form} onSubmit={sendEmail}>
        <div className="input-group">
          <label className="label-in">Name*</label>
          <input
            type="text"
            className="input-form"
            placeholder="Your Name"
            id="fullName"
            name="fullName"
            required={true}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label-in">Phone Number*</label>
          <input
            type="tel"
            className="input-form"
            placeholder="Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            required={true}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label-in">Passengers*</label>
          <div className="counter">
            <button
              className="minus"
              onClick={(event) => {
                event.preventDefault();
                setPassengers((prev) => Math.max(1, prev - 1));
              }}
            >
              −
            </button>
            <span className="quantity">{passengers}</span>
            <button
              className="plus"
              onClick={(event) => {
                event.preventDefault();
                setPassengers((prev) => prev + 1);
              }}
            >
              +
            </button>
            <input
              type="hidden"
              name="passengersNumber"
              id="passengersNumber"
              value={passengers}
            />
          </div>
        </div>
        <div className="input-group">
          <label className="label-in">Luggage*</label>
          <div className="counter">
            <button
              className="minus"
              onClick={(event) => {
                event.preventDefault();
                setLuggage((prev) => prev - 1);
              }}
            >
              −
            </button>
            <span className="quantity">{luggage}</span>
            <button
              className="plus"
              onClick={(event) => {
                event.preventDefault();
                setLuggage((prev) => prev + 1);
              }}
            >
              +
            </button>
            <input
              type="hidden"
              name="luggageNumber"
              id="luggageNumber"
              value={luggage}
            />
          </div>
        </div>
        <div className="input-group">
          <label className="label-in">Pickup Address*</label>
          <input
            type="text"
            className="input-form"
            placeholder="Choose your pickup address"
            name="pickupAddress"
            id="pickupAddress"
            required={true}
            onChange={(event) => setPickupAddress(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label-in">Drop Off Address*</label>
          <input
            type="text"
            className="input-form"
            placeholder="Choose your drop off address"
            name="dropoffAddress"
            id="dropoffAddress"
            required={true}
            onChange={(event) => setDropoffAddress(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label-in">Comment</label>
          <textarea
            className="comment"
            name="comment"
            id="comment"
            required={true}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Tell us about your trip"
          ></textarea>
        </div>
        <FormButtonOrange text="Send Request" marginTop="mt16" />
      </form>
      <form className="pc-form" ref={form} onSubmit={sendEmail}>
        <div className="input-row">
          <div className="input-group">
            <label className="label-in">Name*</label>
            <input
              type="text"
              className="input-form"
              placeholder="Your Name"
              id="fullName"
              name="fullName"
              required={true}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="label-in">Phone Number*</label>
            <input
              type="tel"
              className="input-form"
              placeholder="Phone Number"
              id="phoneNumber"
              name="phoneNumber"
              required={true}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
        </div>
        <div className="input-row mt32">
          <div className="input-group">
            <label className="label-in">Passengers*</label>
            <div className="counter">
              <button
                className="minus"
                onClick={(event) => {
                  event.preventDefault();
                  setPassengers((prev) => Math.max(1, prev - 1));
                }}
              >
                −
              </button>
              <span className="quantity">{passengers}</span>
              <button
                className="plus"
                onClick={(event) => {
                  event.preventDefault();
                  setPassengers((prev) => prev + 1);
                }}
              >
                +
              </button>
              <input
                type="hidden"
                name="passengersNumber"
                id="passengersNumber"
                value={passengers}
              />
            </div>
          </div>
          <div className="input-group">
            <label className="label-in">Luggage*</label>
            <div className="counter">
              <button
                className="minus"
                onClick={(event) => {
                  event.preventDefault();
                  setLuggage((prev) => prev - 1);
                }}
              >
                −
              </button>
              <span className="quantity">{luggage}</span>
              <button
                className="plus"
                onClick={(event) => {
                  event.preventDefault();
                  setLuggage((prev) => prev + 1);
                }}
              >
                +
              </button>
              <input
                type="hidden"
                name="luggageNumber"
                id="luggageNumber"
                value={luggage}
              />
            </div>
          </div>
        </div>
        <div className="input-row mt32">
          <div className="input-group-l">
            <label className="label-in">Pickup Address*</label>
            <input
              type="text"
              className="input-form-adress"
              placeholder="Choose your pickup address"
              name="pickupAddress"
              id="pickupAddress"
              required={true}
              onChange={(event) => setPickupAddress(event.target.value)}
            />
          </div>
        </div>
        <div className="input-row mt32">
          <div className="input-group-l">
            <label className="label-in">Dropoff Address*</label>
            <input
              type="text"
              className="input-form-adress"
              placeholder="Choose your dropoff address"
              name="dropoffAddress"
              id="dropoffAddress"
              required={true}
              onChange={(event) => setDropoffAddress(event.target.value)}
            />
          </div>
        </div>
        <div className="input-row mt32">
          <div className="input-group-l">
            <label className="label-in">Comment</label>
            <textarea
              className="input-form-comment"
              placeholder="Tell us about your trip"
              name="comment"
              id="comment"
              required={true}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
        </div>
        <RegularButton text="Send Request" marginTop="mt32" />
      </form>
    </div>
  );
};

export default Form;
