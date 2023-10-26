import React, { useState } from "react";
import Form from "../../components/Form/Form";

const FormScreen = () => {
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(1);

  return (
    <section className="screen mt64" id="contacts">
      <div className="content">
        <h2 className="heading-s">
          Send <span className="orange">request</span>
        </h2>
        <Form />
      </div>
      <div className="content-pc column">
        <h2 className="heading-s text-center">
          Send <span className="orange">request</span>
        </h2>
        <Form />
      </div>
    </section>
  );
};

export default FormScreen;
