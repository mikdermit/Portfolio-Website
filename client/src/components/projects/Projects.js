import React, { useState } from "react";
import TitleCard from "../common/TitleCard"
import ProjectCards from "./ProjectCards"

export default function Projects() {
  // api to get projects

  return (
      <div className="flex flex-col items-center">
        <TitleCard title="Projects" />
        <ProjectCards />
      </div>
  );
}
