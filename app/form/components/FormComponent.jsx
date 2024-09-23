"use client";
import React, { useState } from "react";
import "../css/formComponent.css";
import { myDetails } from "../../../assets/myDetails";

const FormComponent = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const services = [
    "Front End Development",
    "Back End Development",
    "Full Stack Development",
    "Web Application",
  ];

  return (
    <div className="bg-[--form-bg] flex flex-col gap-4 py-10 px-4 rounded-xl">
      <div className="formTitle text-5xl font-bold">Lets Work Together</div>
      <div className="text-lg">
        I design and code beautifully simple things, and I love what I do. Just
        simple like that!
      </div>
      <div className="flex flex-col text-lg gap-2 ">
        <div className="grid grid-cols-2 gap-2 ">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formValue.firstName}
            onChange={handleChange}
            className="bg-[--form-text-bg] px-4 py-2 rounded-md border-2 border-[--form-text-border]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formValue.lastName}
            onChange={handleChange}
            className="bg-[--form-text-bg] px-4 py-2 rounded-md border-2 border-[--form-text-border]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formValue.email}
            onChange={handleChange}
            className="bg-[--form-text-bg] px-4 py-2 rounded-md border-2 border-[--form-text-border]"
          />

          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formValue.phoneNumber}
            className="bg-[--form-text-bg] px-4 py-2 rounded-md border-2 border-[--form-text-border] focus:border-2 focus:border-[--form-input-active-border]"
          />
        </div>
        <select
          name="service"
          value={formValue.service}
          onChange={handleChange}
          className="bg-[--form-text-bg] px-4 py-2 rounded-md border-2 border-[--form-text-border] "
        >
          <option value="">Choose Service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
        <textarea
          name="message"
          placeholder="Message"
          value={formValue.message}
          onChange={handleChange}
          className="bg-[--form-text-bg] px-4 py-2 rounded-md border-2 border-[--form-text-border] min-h-[200px] w-full"
        />
      </div>
      <div className="formSubmitButton w-[200px] px-4 py-2 rounded-full font-semibold  text-lg text-center">
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${myDetails.email}&su=${myDetails.emailSubject}&body=Dear%20${myDetails.firstname},%0D%0A%0D%0AFirst Name: ${formValue.firstName}%0D%0ALast Name: ${formValue.lastName}%0D%0AEmail: ${formValue.email}%0D%0APhone Number: ${formValue.phoneNumber}%0D%0AService: ${formValue.service}%0D%0AMessage: ${formValue.message}%0D%0A%0D%0A${myDetails.emailComplimentaryClose},%0D%0A%0D%0A${myDetails.emailUserName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Send Message
        </a>
      </div>
    </div>
  );
};

export default FormComponent;
