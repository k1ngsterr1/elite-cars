import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "./styles/button-styles.css";

interface ButtonProps {
  text: string;
  scroll: string;
  marginTop: string;
}

interface RegButtonProps {
  text: string;
  marginTop: string;
  clickFunction?: any;
}

interface FormProps {
  text: string;
  marginTop: string;
  click?: any;
}

export const Button: React.FC<ButtonProps> = ({ text, scroll, marginTop }) => {
  return (
    <div className={`btn-container ${marginTop}`}>
      <ScrollLink to={scroll} className="btn" smooth>
        {text}
      </ScrollLink>
      <figure className="pseudo"></figure>
    </div>
  );
};

export const RegularButton: React.FC<RegButtonProps> = ({
  text,
  marginTop,
  clickFunction,
}) => {
  return (
    <button onClick={clickFunction} className={`reg-btn ${marginTop}`}>
      {text}
    </button>
  );
};

export const RegularScrollButton: React.FC<RegButtonProps> = ({
  text,
  marginTop,
  clickFunction,
}) => {
  return (
    <ScrollLink to={clickFunction} className={`reg-btn ${marginTop}`} smooth>
      {text}
    </ScrollLink>
  );
};

export const FormButton: React.FC<FormProps> = ({ text, marginTop, click }) => {
  return (
    <div className={`btn-container ${marginTop}`}>
      <button className="btn white-bg" onClick={click}>
        {text}
      </button>
      <figure className="pseudo-white"></figure>
    </div>
  );
};

export const FormButtonOrange: React.FC<FormProps> = ({
  text,
  marginTop,
  click,
}) => {
  return (
    <div className={`btn-container ${marginTop}`}>
      <button className="btn" onClick={click}>
        {text}
      </button>
      <figure className="pseudo"></figure>
    </div>
  );
};
