import React from "react";
import CardComponent from "@/components/card";
import BreadCrumbProfile from "@/components/header/BreadCrumbProfile";
import { AlertDemo } from "@/components/common/Alert";
import { AddTask } from "../task/AddTask";
import { Star } from "lucide-react";
import FavoriteStar from "./SetStar";
export default async function TodoPage({ tasks, workSpaceById, location }) {
  const taskList = [...tasks];

  return (
    <>
      <section className="p-2 overflow-hidden h-screen  bg-gray-50">
        <BreadCrumbProfile workSpaceById={workSpaceById} location={location} />
        {/* show where am at */}

        <div className=" flex  justify-between gap-2  mb-5  ">
          <p className="text-xl font-bold">{workSpaceById?.workspaceName}</p>
          <FavoriteStar workSpaceById={workSpaceById} />
        </div>
        {/* progress */}
        <div className="grid grid-cols-3 gap-2 text-sm">
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

        <div className=" grid grid-cols-3 gap-3 text-sm ">
          <div className="scrollbar-hidden h-screen overflow-y-scroll pb-50">
            {/* NOT_STARTED */}
            <CardComponent
              workSpaceById={workSpaceById}
              taskList={taskList?.filter(
                (task) => task.status === "NOT_STARTED"
              )}
            />
          </div>
          <div className="scrollbar-hidden h-screen overflow-y-scroll pb-50">
            {/* in progres */}
            <CardComponent
              workSpaceById={workSpaceById}
              taskList={taskList?.filter(
                (task) => task.status === "IN_PROGRESS"
              )}
            />
          </div>

          <div className="scrollbar-hidden h-screen overflow-y-scroll pb-50">
            {/* FINISHED */}
            <CardComponent
              workSpaceById={workSpaceById}
              taskList={taskList?.filter((task) => task.status === "FINISHED")}
            />
          </div>
        </div>
        <span className=" absolute bottom-10 right-20  rounded-xl text-white">
          <AddTask workSpaceById={workSpaceById} />
        </span>
      </section>
    </>
  );
}
