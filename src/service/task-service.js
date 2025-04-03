"use server";
import { BASE_API_URL } from "../constants/base-url";
import { auth } from "../../auth";
//http://96.9.81.187:8080/api/v1/tasks/workspace/558ddd2a-121d-4db0-b758-b7f42a87f077?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC
export async function getAlltask(workSpaceId) {
  const session = await auth();
  const req = await fetch(
    `${BASE_API_URL}/tasks/workspace/${workSpaceId}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.payload.token}`,
      },
    }
  );
  const res = await req.json();
  return res.payload;
}

export async function postTask(
  workspaceId,
  taskTitle,
  taskDetails,
  tag,
  endDate
) {
  const session = await auth();
  const req = await fetch(`${BASE_API_URL}/task/workspace/${workspaceId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session?.payload.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      taskTitle,
      taskDetails,
      tag,
      endDate,
    }),
  });
  const res = await req.json();
  return res.payload;
}
