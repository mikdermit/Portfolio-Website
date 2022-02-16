import React from "react";
import ContactCard from "./ContactCard"
import ContactForm from "./ContactForm";

export default function ContactLayout() {
  return (
    <div className="grid grid-cols-1 min-h-screen p-5">
      <div className="w-full mt-2 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ContactCard />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
