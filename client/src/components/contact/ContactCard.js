import React from "react";
import { Link } from "react-router-dom"
import { ReactComponent as Connect } from "../../styles/images/lets-connect.svg";
import { ReactComponent as Github } from "../../styles/images/github.svg";
import { ReactComponent as Linkedin } from "../../styles/images/linkedin.svg";
import { ReactComponent as Email } from "../../styles/images/email.svg";

export default function ContactCard() {
  return (
    <div className="flex flex-col items-center">
      <Connect alt="let's connect" width="inherit" />
      <div className="flex flex-col md:flex-row items-center w-full gap-5">
        
          <a href="https://github.com/mikdermit" className="flex flex-row px-1 gap-2 justify-center items-center rounded w-1/2 bg-white dark:bg-gray-700">
            <Github alt="github logo" />
            <h1 className="text-lg">Github</h1>
          </a>
        
        <a href="https://www.linkedin.com/in/brick-mcdermott-057393213/" className="flex flex-row px-1 gap-2 justify-center items-center rounded w-1/2 bg-white dark:bg-gray-700">
          <Linkedin alt="github logo" width="25" className="mb-1" />
          <h1 className="text-lg">Linkedin</h1>
        </a>
        <a href="mailto:brickmcdermott96@gmail.com?" className="flex flex-row px-1 gap-2 justify-center items-center rounded w-1/2 bg-white dark:bg-gray-700">
          <Email alt="github logo" width="20" />
          <h1 className="text-lg">Email</h1>
        </a>
      </div>
    </div>
  );
}
