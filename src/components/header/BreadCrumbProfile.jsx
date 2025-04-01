import React from "react";
import BreadCrumb from "../common/BreadCrumb";
import Profile from "../common/Profile";

export default function BreadCrumbProfile() {
  return (
    <div className="flex items-center justify-between gap-2 p-2">
      <BreadCrumb />
      <Profile />
    </div>
  );
}
