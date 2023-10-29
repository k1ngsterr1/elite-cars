import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles/error-styles.css";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error-screen">
      <h1 className="heading-main">
        <span className="orange">404</span>
      </h1>
      <button className="btn mt16" onClick={() => navigate("/")}>
        Home Page
      </button>
    </div>
  );
};

export default Error;
