import React from "react";
import BreadCrumb from "../common/BreadCrumb";
import Profile from "../common/Profile";

export default function BreadCrumbProfile({ workSpaceById }) {
  console.log("task in BreadCrumb", workSpaceById);
  return (
    <div className="flex items-center justify-between gap-2 p-2">
      <BreadCrumb workSpaceById={workSpaceById} />
      <Profile />
    </div>
  );
}
