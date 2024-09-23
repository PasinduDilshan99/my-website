import React from "react";
import { contactDetails } from "../../../assets/myDetails";
import ContactDetailsCard from "./ContactDetailsCard";

const ContactDetail = () => {
  return (
    <div className="content-center">
      {contactDetails.map((contactDetail) => {
        return (
          <div key={contactDetail.id} className="">
            <ContactDetailsCard props={contactDetail} />
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetail;
