import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/common/Sidebar";
import CardComponent from "@/components/card";
import BreadCrumbProfile from "@/components/header/BreadCrumbProfile";
import { AlertDemo } from "@/components/common/Alert";
export default async function todoPage() {
  const session = await auth();
  // console.log("This is session in todo", session);
  if (session?.status == "BAD_REQUEST") {
    redirect("/login");
  }
  if (!session?.payload.token) {
    redirect("/login");
  }

  return (
    <>
      <section className="p-2 overflow-hidden h-screen relative">
        <BreadCrumbProfile />
        <div className="grid grid-cols-3 gap-2">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className=" grid grid-cols-3 gap-3  ">
          {/* not started */}
          <div className="flex flex-col gap-2 h-screen scrollbar-hidden  overflow-y-scroll pb-[200px]">
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          {/* in progress */}
          <div className="flex flex-col gap-2 h-screen scrollbar-hidden  overflow-y-scroll pb-[200px]">
            <CardComponent />
            <CardComponent />
          </div>
          {/* finished */}
          <div className="flex flex-col gap-2 h-screen scrollbar-hidden  overflow-y-scroll pb-[200px]">
            <CardComponent />
          </div>
        </div>
        {/* {session?.status == "OK" ? (
          <div className="absolute top-10 right-5">
            <AlertDemo />
          </div>
        ) : (
          ""
        )} */}
        {/* Use the client-side AlertHandler */}
        <div className="absolute top-10 right-5">
          <AlertDemo status={session?.status} message={session?.message} />
        </div>
      </section>
    </>
  );
}
