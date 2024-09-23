import React from "react";
import FormComponent from "./FormComponent";
import ContactDetail from "./ContactDetail";

const Form = () => {
  return (
    <div className="bg-black py-32 text-white px-12 flex gap-10">
      <FormComponent />
      <ContactDetail />
    </div>
  );
};

export default Form;
