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
  const inputStyle = "w-full px-2 bg-transparent text-md dark:text-gray-300 border-b-2 border-gray-300 focus:border-purple-600 hover:border-purple-600 dark:border-gray-600 dark:focus:border-purple-500 appearance-none focus:ring-0 peer outline-none"

  return (
    <div className="flex flex-col items-center justify-content mt-10 p-8 w-full mx-auto bg-gray-100 dark:bg-gray-800 shadow-lg overflow-hidden">
      <h1 className="mb-8 text-black dark:text-white">
        Send me a message
      </h1>
      <form onSubmit={handleSubmit} className="w-5/6">
        <ContactFormItem id="name" type="text" placeholder="John Smith" className={inputStyle}/>
        <ContactFormItem id="email" type="email" placeholder="johnsmith@example.com" className={inputStyle + " mt-3"}/>
        <ContactFormItem id="phone" type="phone" placeholder="(000) 000-0000" className={inputStyle + " mt-3"}/>
        <ContactFormItem id="subject" type="text" placeholder="" className={inputStyle + " mt-8"}/>
        <ContactFormItem id="message" className={inputStyle + " mt-3"}/>
        <div className="flex flex-row justify-between mx-10 mt-10">
          <ResetButton />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
