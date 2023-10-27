import React, { useState } from "react";

import "./styles/form.css";
import { Button, FormButton, RegularButton } from "../Button/Button";

const Form = () => {
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(1);

  if (passengers < 1) {
    setPassengers(1);
  }

  if (luggage < 1) {
    setLuggage(1);
  }

  return (
    <div className="request-form">
      <form className="mobile-form">
        <div className="input-group">
          <label className="label-in">Name*</label>
          <input type="text" className="input-form" placeholder="Your Name" />
        </div>
        <div className="input-group">
          <label className="label-in">Phone Number*</label>
          <input type="tel" className="input-form" placeholder="Phone Number" />
        </div>
        <div className="input-group">
          <label className="label-in">Passengers*</label>
          <div className="counter">
            <button
              className="minus"
              onClick={(event) => {
                event.preventDefault();
                setPassengers(passengers + -1);
              }}
            >
              −
            </button>
            <span className="quantity">{passengers}</span>
            <button
              className="plus"
              onClick={(event) => {
                event.preventDefault();
                setPassengers(passengers + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="input-group">
          <label className="label-in">Luggage*</label>
          <div className="counter">
            <button
              className="minus"
              onClick={(event) => {
                event.preventDefault();
                setLuggage(luggage - 1);
              }}
            >
              −
            </button>
            <span className="quantity">{luggage}</span>
            <button
              className="plus"
              onClick={(event) => {
                event.preventDefault();
                setLuggage(luggage + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="input-group">
          <label className="label-in">Pickup Address*</label>
          <input
            type="text"
            className="input-form"
            placeholder="Choose your pickup address"
          />
        </div>
        <div className="input-group">
          <label className="label-in">Drop Off Address*</label>
          <input
            type="text"
            className="input-form"
            placeholder="Choose your drop off address"
          />
        </div>
        <div className="input-group">
          <label className="label-in">Comment</label>
          <textarea
            className="comment"
            placeholder="Tell us about your trip"
          ></textarea>
        </div>
        <Button text="Send Request" scroll="" marginTop="mt16" />
      </form>
      <form action="" className="pc-form">
        <div className="input-row">
          <div className="input-group">
            <label className="label-in">Name*</label>
            <input type="text" className="input-form" placeholder="Your Name" />
          </div>
          <div className="input-group">
            <label className="label-in">Phone Number*</label>
            <input
              type="tel"
              className="input-form"
              placeholder="Phone Number"
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
                  setPassengers(passengers + -1);
                }}
              >
                −
              </button>
              <span className="quantity">{passengers}</span>
              <button
                className="plus"
                onClick={(event) => {
                  event.preventDefault();
                  setPassengers(passengers + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="input-group">
            <label className="label-in">Luggage*</label>
            <div className="counter">
              <button
                className="minus"
                onClick={(event) => {
                  event.preventDefault();
                  setLuggage(luggage - 1);
                }}
              >
                −
              </button>
              <span className="quantity">{luggage}</span>
              <button
                className="plus"
                onClick={(event) => {
                  event.preventDefault();
                  setLuggage(luggage + 1);
                }}
              >
                +
              </button>
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
            />
          </div>
        </div>
        <div className="input-row mt32">
          <div className="input-group-l">
            <label className="label-in">Comment</label>
            <textarea
              className="input-form-comment"
              placeholder="Choose your dropoff address"
            />
          </div>
        </div>
        <RegularButton text="Send Request" marginTop="mt32" />
      </form>
    </div>
  );
};

export default Form;
