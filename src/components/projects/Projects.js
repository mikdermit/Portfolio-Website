import React, { useState } from "react";
import TitleCard from "../common/TitleCard"
import ProjectCards from "./ProjectCards"

export default function Projects() {
  // api to get projects

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 p-10">
      <div className="flex justify-center">
        <TitleCard title="Projects" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-screen md:p-10">
        <ProjectCards />
      </div>
    </div>
  );
}
