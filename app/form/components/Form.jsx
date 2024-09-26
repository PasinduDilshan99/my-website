import React from "react";
import FormComponent from "./FormComponent";
import ContactDetail from "./ContactDetail";

const Form = () => {
  return (
    <div className="bg-[--form-section-bg] py-32 text-[--form-section-text] px-12 flex xl:flex-row flex-col justify-center gap-20">
      <FormComponent />
      <ContactDetail />
    </div>
  );
};

export default Form;
