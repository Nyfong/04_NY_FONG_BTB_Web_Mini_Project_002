import TodoPage from "@/components/todo/TodoPage";
import React from "react";
import { getAlltask } from "../../../../../service/task-service";
export default async function DynamicWorkSpace({ params }) {
  const id = await params.id;
  const tasks = await getAlltask(id);
  console.log("tasksssss-------------", tasks);
  console.log(id);
  return (
    <>
      <div>todo {id}</div>

      <TodoPage tasks={tasks} />
    </>
  );
}
