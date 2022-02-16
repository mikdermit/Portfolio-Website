import React from "react";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 min-h-screen">
      <div className="w-full">
        <div className="text-center">
          <div className="text-black dark:text-white" title="project1">
            Project 1
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="text-center">
          <div className="text-black dark:text-white" title="project2">
            Project 2
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="text-center">
          <div className="text-black dark:text-white" title="project3">
            Project 3
          </div>
        </div>
      </div>
    </div>
  );
}
