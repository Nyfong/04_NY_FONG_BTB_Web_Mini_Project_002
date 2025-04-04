import React from "react";
import BreadCrumb from "../common/BreadCrumb";
import Profile from "../common/Profile";

export default function BreadCrumbProfile({ workSpaceById, location }) {
  console.log("task in BreadCrumb", workSpaceById);
  return (
    <div className="flex items-center justify-between gap-2 py-2 border-gray-200 border-b-1 mb-2">
      <BreadCrumb workSpaceById={workSpaceById} location={location} />
      <Profile />
    </div>
  );
}
