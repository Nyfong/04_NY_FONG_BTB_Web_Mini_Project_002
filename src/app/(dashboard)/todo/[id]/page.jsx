import TodoPage from "@/components/todo/TodoPage";
import React from "react";
import { getAlltask } from "../../../../service/task-service";
import { getWorkSpaceById } from "../../../../service/workspace-service";
export default async function DynamicWorkSpace({ params, searchParams }) {
  const id = await params.id;
  const { q, title } = await searchParams;
  console.log("the id", q);

  //console.log("))))))))))))))))))))", id);
  const workSpaceById = await getWorkSpaceById(id);
  const tasks = await getAlltask(id);
  return (
    <div>
      {/* <div> {id}</div> */}
      <TodoPage tasks={tasks} workSpaceById={workSpaceById} location={q} />
    </div>
  );
}
