import React from "react";
import { contactDetails } from "../../../assets/myDetails";
import ContactInformationCard from "./ContactInformationCard";

const ContactInformation = () => {
  return (
    <div className="xl:flex hidden">
      {contactDetails.map((contactDetail) => {
        return (
          <div key={contactDetail.id} className="">
            <ContactInformationCard props={contactDetail} />
          </div>
        );
      })}
    </div>
  );
};

export default ContactInformation;
