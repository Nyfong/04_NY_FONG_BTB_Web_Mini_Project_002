import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import CardComponent from "@/components/card";
import BreadCrumbProfile from "@/components/header/BreadCrumbProfile";
import { AlertDemo } from "@/components/common/Alert";

export default async function TodoPage({ tasks }) {
  const session = await auth();
  //console.log("task in ---------++++++", tasks);
  const taskList = [...tasks];
  return (
    <>
      <section className="p-2 overflow-hidden h-screen relative">
        <BreadCrumbProfile />
        <div className="grid grid-cols-3 gap-2">
          <p
            className={`border-b-2 border-watermelon-red text-watermelon-red `}
          >
            NOT_STARTED
          </p>
          <p className={`border-b-2 border-blue-200 text-blue-200`}>
            IN_PROGRESS
          </p>
          <p className={`border-b-2 border-green-500 text-green-500`}>
            FINISHED
          </p>
        </div>
        <div className=" grid grid-cols-3 gap-3  ">
          <div className="scrollbar-hidden h-screen overflow-y-scroll pb-50">
            {/* NOT_STARTED */}
            <CardComponent
              taskList={taskList.filter(
                (task) => task.status === "NOT_STARTED"
              )}
            />
          </div>
          <div className="scrollbar-hidden h-screen overflow-y-scroll pb-50">
            {/* in progres */}
            <CardComponent
              taskList={taskList.filter(
                (task) => task.status === "IN_PROGRESS"
              )}
            />
          </div>

          <div className="scrollbar-hidden h-screen overflow-y-scroll pb-50">
            {/* FINISHED */}
            <CardComponent
              taskList={taskList.filter((task) => task.status === "FINISHED")}
            />
          </div>
        </div>
        {/* Use the client-side AlertHandler */}
        <div className="absolute bottom-10 right-5">
          <AlertDemo status={session?.status} message={session?.message} />
        </div>
      </section>
    </>
  );
}
