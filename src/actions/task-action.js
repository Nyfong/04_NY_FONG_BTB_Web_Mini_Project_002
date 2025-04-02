import { postTask } from "@/service/task-service";

export const workSpaceAction = async (formData) => {
  const taskTitle = formData.get("taskTitle");
  const taskDetails = formData.get("taskDetails");
  const tag = formData.get("tag");
  const status = formData.get("status");
  const endDate = formData.get("endDate");
  const workspaceId = formData.get("workspaceId");

  //console.log("-------------- workspace", workspaceName);
  if (!workspaceName) {
    return {
      error: "workspace is required",
    };
  }

  await postTask(workspaceId, taskTitle, taskDetails, tag, status, endDate);
};
