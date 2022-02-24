import React from "react";
import ProjectContributors from "./ProjectContributors";

export default function ProjectCards() {
  // placeholder, change this to api in future
  const projects = [
    {
      name: "Project 1",
      description: "This is one of my projects.",
      url: require("../../styles/images/dog1.png"),
      last_updated: "31 October 2020",
      contributors: [
        {
          name: "Joe Schmoe",
          image_url: require("../../styles/images/joe.jpg"),
          reference: "https://www.google.com/",
        },
        {
          name: "BamBam Williams",
          image_url: require("../../styles/images/bambam.jpg"),
          reference: "https://www.google.com/",
        },
        {
          name: "Greg Hanson",
          image_url: require("../../styles/images/greg.jpg"),
          reference: "https://www.google.com/",
        },
        {
          name: "Tina Taco",
          image_url: require("../../styles/images/tina.jpg"),
          reference: "https://www.google.com/",
        },
      ],
    },
    {
      name: "Project 2",
      description: "This is one of my projects.",
      url: require("../../styles/images/dog2.jpg"),
      last_updated: "25 November 2020",
      contributors: [
        {
          name: "BamBam",
          image_url: require("../../styles/images/bambam.jpg"),
          reference: "https://www.google.com/",
        },
        {
          name: "Joe Schmoe",
          image_url: require("../../styles/images/joe.jpg"),
          reference: "https://www.google.com/",
        },
        {
          name: "Greg",
          image_url: require("../../styles/images/greg.jpg"),
          reference: "https://www.google.com/",
        },
        {
          name: "Tina Taco",
          image_url: require("../../styles/images/tina.jpg"),
          reference: "https://www.google.com/",
        },
      ],
    },
    {
      name: "Project 3",
      description: "This is one of my projects.",
      url: require("../../styles/images/dog3.jpg"),
      last_updated: "21 October 2020",
      contributors: [
        {
          name: "Tina Taco",
          image_url: require("../../styles/images/tina.jpg"),
          reference: "https://www.google.com/",
        },
        {
          name: "Joe Schmoe",
          image_url: require("../../styles/images/joe.jpg"),
          reference: "https://www.google.com/",
        },
        {
          name: "BamBam",
          image_url: require("../../styles/images/bambam.jpg"),
          reference: "https://www.google.com/",
        },
        {
          name: "Greg",
          image_url: require("../../styles/images/greg.jpg"),
          reference: "https://www.google.com/",
        },
      ],
    },
    {
      name: "Project 4",
      description: "This is one of my projects.",
      url: require("../../styles/images/dog4.jpg"),
      last_updated: "7 August 2020",
      contributors: [
        {
          name: "Greg",
          image_url: require("../../styles/images/greg.jpg"),
          reference: "https://www.google.com/",
        },
        {
          name: "Joe Schmoe",
          image_url: require("../../styles/images/joe.jpg"),
          reference: "https://www.google.com/",
        },
        {
          name: "BamBam",
          image_url: require("../../styles/images/bambam.jpg"),
          reference: "https://www.google.com/",
        },
        {
          name: "Tina Taco",
          image_url: require("../../styles/images/tina.jpg"),
          reference: "https://www.google.com/",
        },
      ],
    },
  ];

  return projects.map((project) => (
    <div className="flex">
      <div
        className="flex flex-col md:flex-row
            rounded-lg
            w-full 
            mx-5
            h-auto
            bg-white dark:bg-gray-800
            text-gray-800 dark:text-gray-400
            shadow-lg"
      >
        <img
          className="rounded-t-lg md:rounded-none md:rounded-l-lg w-full md:w-48  "
          src={project.url}
        />
        <div className="flex flex-col p-6 w-full ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-xl font-medium">{project.name}</h1>
            <p className="text-right text-sm text-gray-600 dark:text-gray-500">
              Updated: {project.last_updated}
            </p>
          </div>
          <div className="w-75 divide-y divide-gray-800 dark:divide-gray-300 ">
            <p className="my-5 text-md text-center md:text-left">
              {project.description}
            </p>
            <div>
              <h3 className="text-md text-center md:text-left pt-2 font-medium">
                Contributors
              </h3>
              <div className="grid grid-cols-2 justify-center">
                <ProjectContributors contributors={project.contributors} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}
