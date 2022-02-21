import React from "react";
import {Link} from "react-router-dom"

export default function ResourceCards() {
  const resources = [
    {
      name: "Project 1",
      description: "This is one of my projects.",
      url: require("https://www.google.com/"),
    },
    {
      name: "Project 2",
      description: "This is one of my projects.",
      url: require("../../styles/images/dog2.jpg"),
    },
    {
      name: "Project 3",
      description: "This is one of my projects.",
      url: require("../../styles/images/dog3.jpg"),
    },
    {
      name: "Project 4",
      description: "This is one of my projects.",
      url: require("../../styles/images/dog4.jpg"),
    },
  ];

  return resources.map((resource) => (
    <div
      className="flex flex-row items-center
      rounded-lg
      w-3/4
      mt-3 mx-5
      p-3
      divide-x
      bg-white dark:bg-gray-800
      text-gray-800 dark:text-gray-400
      shadow-lg resource-card"
    >
      <Link to={resource.url} className="text-xl pr-3 hover:text-yellow-600 hover:dark:text-yellow-400">{resource.name}</Link>
      <p className="text-md pl-4">{resource.description}</p>
    </div>
  ));
}
