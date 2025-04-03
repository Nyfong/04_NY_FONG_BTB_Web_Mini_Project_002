import TodoPage from "@/components/todo/TodoPage";
import React from "react";
import { getAlltask } from "../../../../service/task-service";
import { getWorkSpaceById } from "../../../../service/workspace-service";
export default async function DynamicWorkSpace({ params }) {
  const id = await params.id;
  //console.log("))))))))))))))))))))", id);
  const workSpaceById = await getWorkSpaceById(id);
  const tasks = await getAlltask(id);
  return (
    <div>
      {/* <div> {id}</div> */}
      <TodoPage tasks={tasks} workSpaceById={workSpaceById} />
    </div>
  );
}
