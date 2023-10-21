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
}

interface FormProps {
  text: string;
  marginTop: string;
}

export const Button: React.FC<ButtonProps> = ({ text, scroll, marginTop }) => {
  return (
    <div className={`btn-container ${marginTop}`}>
      <ScrollLink to={scroll} className="btn">
        {text}
      </ScrollLink>
      <figure className="pseudo"></figure>
    </div>
  );
};

export const RegularButton: React.FC<RegButtonProps> = ({
  text,
  marginTop,
}) => {
  return <button className={`reg-btn ${marginTop}`}>{text}</button>;
};

export const FormButton: React.FC<FormProps> = ({ text, marginTop }) => {
  return (
    <div className={`btn-container ${marginTop}`}>
      <button className="btn">{text}</button>
      <figure className="pseudo"></figure>
    </div>
  );
};
