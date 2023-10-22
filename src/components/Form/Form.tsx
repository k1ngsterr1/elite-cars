import React, { useState } from "react";

import "./styles/form.css";
import { Button, FormButton } from "../Button/Button";

const Form = () => {
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(1);

  return (
    <form className="request-form">
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
            onClick={() => setPassengers(passengers - 1)}
          >
            −
          </button>
          <span className="quantity">{passengers}</span>
          <button
            className="plus"
            onClick={() => setPassengers(passengers + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="input-group">
        <label className="label-in">Luggage*</label>
        <div className="counter">
          <button className="minus" onClick={() => setLuggage(luggage - 1)}>
            −
          </button>
          <span className="quantity">{luggage}</span>
          <button className="plus" onClick={() => setLuggage(luggage + 1)}>
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
        <textarea placeholder="Tell us about your trip"></textarea>
      </div>
      <FormButton text="Send Request" marginTop="mt32" />
    </form>
  );
};

export default Form;
