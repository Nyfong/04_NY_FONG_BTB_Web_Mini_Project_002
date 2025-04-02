"use server";

import { editWorkSpaceById, postWorkSpace } from "../service/workspace-service";

export const workSpaceAction = async (_, formData) => {
  const workspaceName = formData.get("workspacename");

  //console.log("-------------- workspace", workspaceName);
  if (!workspaceName) {
    return {
      error: "workspace is required",
    };
  }

  await postWorkSpace(workspaceName);
};

export const EditWorkSpaceAction = async (formData) => {
  const workspaceName = formData.get("name");
  const workspaceId = formData.get("workspaceId");
  console.log("Workspace ID:", workspaceId);
  if (!workspaceName) {
    return {
      error: "workspace is required",
    };
  }

  await editWorkSpaceById(workspaceName, workspaceId);
};
