import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/common/Sidebar";
import CardComponent from "@/components/card";
import BreadCrumb from "@/components/common/BreadCrumb";
import BreadCrumbProfile from "@/components/header/BreadCrumbProfile";

export default async function todoPage() {
  const session = await auth();
  console.log("This is session in todo", session);
  if (session?.status == "BAD_REQUEST") {
    redirect("/login");
  }
  if (!session?.payload.token) {
    redirect("/login");
  }
  return (
    <>
      <section className="p-2">
        <BreadCrumbProfile />
        <div>header</div>
        <div className=" grid grid-cols-3 gap-3">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </section>
    </>
  );
}
