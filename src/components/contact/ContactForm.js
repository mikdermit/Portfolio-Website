import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubmitButton from "../common/buttons/SubmitButton"
import ResetButton from "../common/buttons/ResetButton"
import ContactFormItem from "./ContactFormItem";

export default function ContactForm() {
  const url = useLocation();
  const navigate = useNavigate();

  // set initial form state
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const { formData, setFormData } = useState({ ...initialFormState });

  // update form data when changed
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  // send message and navigate to success page
  const handleSubmit = (event) => {
    event.preventDefault();
    // api to send message to
    navigate(`${url}/success`);
  };

  // form styling
  

  return (
    <div className="flex flex-col items-center justify-content mt-10 p-8 w-full mx-auto bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
      <h1 className="mb-8 text-gray-800 dark:text-white">
        Send me a message
      </h1>
      <form onSubmit={handleSubmit} className="w-5/6">
        <ContactFormItem id="name" type="text" placeholder="John Smith" className=""/>
        <ContactFormItem id="email" type="email" placeholder="johnsmith@example.com" className="mt-3 "/>
        <ContactFormItem id="phone" type="phone" placeholder="(000) 000-0000" className="mt-3 "/>
        <ContactFormItem id="subject" type="text" placeholder="" className="mt-8 "/>
        <ContactFormItem id="message" className="mt-3 "/>
        <div className="flex flex-row justify-between mx-10 mt-10">
          <ResetButton />
          <SubmitButton />
        </div>
      </form>./
    </div>
  );
}
