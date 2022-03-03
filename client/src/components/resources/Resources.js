import React from "react";
import TitleCard from "../common/TitleCard";
import ResourceCards from "./ResourceCards";

export default function Resources({ title }) {
  return (
      <div className="flex flex-col items-center">
        <TitleCard title="Resources" />
        <ResourceCards />
      </div>
  );
}
