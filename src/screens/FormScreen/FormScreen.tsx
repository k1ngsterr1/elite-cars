import React, { useState } from "react";
import Form from "../../components/Form/Form";

interface FormScreenProps {
  formParagraph?: string;
}

const FormScreen: React.FC<FormScreenProps> = ({ formParagraph }) => {
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(1);

  return (
    <section className="screen mt128" id="contacts">
      <div className="content">
        <h2 className="heading-s">
          Send <span className="orange">request</span>
        </h2>
        <p className="paragraph mt16 text-center">{formParagraph}</p>
        <Form />
      </div>
      <div className="content-pc column">
        <h2 className="heading-s text-center">
          Send <span className="orange">request</span>
        </h2>
        <p className="paragraph mt16 text-center auto w60">{formParagraph}</p>
        <Form />
      </div>
    </section>
  );
};

export default FormScreen;
