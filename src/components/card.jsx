"use client ";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";
import { HoverSettingTask } from "./task/HoverSettingTask";
import StatusTask from "./task/StatusTask";

export default function CardComponent({ taskList, workSpaceById }) {
  //console.log("wo eh eh", workSpaceById);
  if (taskList == null) {
    return <p>nothting</p>;
  }
  const data = [...taskList];
  const color = ["bg-watermelon-red", "bg-blue-200", "bg-green-500"];
  return (
    <div>
      {data == null
        ? ""
        : data?.map((el) => (
            <div
              key={el.taskId}
              className="border border-gray-300 bg-white shadow-md rounded-xl mt-8 h-fit"
            >
              <div>
                <div className="p-5">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold capitalize">
                      {el.taskTitle ? el.taskTitle : "HRD Design"}
                    </h2>
                    {/* <Ellipsis /> */}
                    <HoverSettingTask
                      taskId={el?.taskId}
                      taskTitle={el?.taskTitle}
                      workSpaceById={workSpaceById}
                    />
                  </div>

                  {/* task detials */}
                  <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
                    {el.taskDetails ? el.taskDetails : "HRD Descripton"}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    {/* tag */}
                    <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
                      {el.tag ? el.tag : "DESIGN"}
                    </p>

                    {/* status */}
                    <div
                      className={`rounded-full w-8 h-8 ${
                        el.status === "NOT_STARTED"
                          ? color[0]
                          : el.status === "IN_PROGRESS"
                          ? color[1]
                          : color[2]
                      }`}
                    ></div>
                  </div>
                </div>
                {/* progress */}
                <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
                  <StatusTask
                    taskId={el?.taskId}
                    workSpaceById={workSpaceById}
                  />
                  {/* date */}
                  <p className="flex gap-3 text-light-steel-blue text-sm flex items-center gap-3 p-2">
                    <Clock size={22} />
                    {el.endDate
                      ? new Date(el.endDate).toLocaleDateString("en-US", {
                          weekday: "long", // Full day of the week
                          year: "numeric",
                          month: "long", // Full month name
                          day: "numeric",
                        })
                      : "Mar 23, 2025"}
                  </p>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
