import React, { useState } from "react";
import Form from "../../components/Form/Form";

interface FormScreenProps {
  formParagraph?: string;
  formParagraphLower?: string;
}

const FormScreen: React.FC<FormScreenProps> = ({
  formParagraphLower,
  formParagraph,
}) => {
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(1);

  return (
    <section className="screen mt128" id="contacts">
      <div className="content">
        <h2 className="heading-s">
          Send <span className="orange">request</span>
        </h2>
        <Form />
        <p className="paragraph mt64 text-center">{formParagraphLower}</p>{" "}
      </div>
      <div className="content-pc column">
        <h2 className="heading-s text-center">
          Send <span className="orange">request</span>
        </h2>
        <Form />
        <p className="paragraph mt64 text-center">{formParagraphLower}</p>
      </div>
    </section>
  );
};

export default FormScreen;
