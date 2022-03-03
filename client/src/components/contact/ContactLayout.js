import React from "react";
import ContactCard from "./ContactCard"
import ContactForm from "./ContactForm";

export default function ContactLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-5 gap-5 place-items-center">
      <ContactCard />
      <ContactForm />
    </div>
  );
}
