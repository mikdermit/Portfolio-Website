import React from "react";
import TitleCard from "../common/TitleCard";
import ResourceCards from "./ResourceCards";

export default function Resources({ title }) {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 min-h-screen p-5">
      <div className="flex flex-col items-center">
        <TitleCard title="Resources" />
        <ResourceCards />
      </div>
    </div>
  );
}
