import React from "react";
import { contactDetails } from "../../../assets/myDetails";
import ContactDetailsCard from "./ContactDetailsCard";

const ContactDetail = () => {
  return (
    <div className="content-center flex flex-col lg:flex-row xl:flex-col  item lg:ml-0 ml-[10%]">
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
