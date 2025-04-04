import {
  postTask,
  deleteTask,
  patchTask,
  editTask,
} from "@/service/task-service";

export const taskAction = async (formData) => {
  const taskTitle = formData.get("taskTitle");
  const taskDetails = formData.get("taskDetails");
  const tag = formData.get("tag");
  // const status = formData.get("status");
  const endDate = formData.get("endDate");
  const workspaceId = formData.get("workspaceId");
  // console.log(
  //   "****************",
  //   taskTitle,
  //   taskDetails,
  //   tag,
  //   endDate,
  //   workspaceId
  // );

  await postTask(workspaceId, taskTitle, taskDetails, tag, endDate);
};

//DELETE task

export const deleteTaskAction = async (formData) => {
  const taskId = formData.get("taskId");
  const workspaceId = formData.get("workspaceId");
  await deleteTask(workspaceId, taskId);
};

// PATCH task

export const patchTaskAction = async (taskId, workspaceId, status) => {
  // const taskId = formData.get("taskId");
  // const workspaceId = formData.get("workspaceId");
  // const status = formData.get("status");
  console.log("**88888888888***********", taskId, workspaceId, status);
  await patchTask(workspaceId, taskId, status);
};

export const editTaskAction = async (formData) => {
  const taskTitle = formData.get("taskTitle");
  const taskDetails = formData.get("taskDetails");
  const tag = formData.get("tag");
  // const status = formData.get("status");
  const endDate = formData.get("endDate");
  const taskId = formData.get("taskId");
  const workspaceId = formData.get("workspaceId");
  console.log(
    "****************",
    taskTitle,
    taskDetails,
    tag,
    endDate,
    workspaceId
  );

  await editTask(workspaceId, taskId, taskTitle, taskDetails, tag, endDate);
};
