import React from "react";
import ProjectCard from "./ProjectCard"

export default function Projects() {
  // api to get projects

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-h-screen p-10">
      <ProjectCard />
    </div>
  );
}
