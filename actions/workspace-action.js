"use server";

import { postWorkSpace } from "../service/workspace-service";

export const workSpaceAction = async (_, formData) => {
  const workspaceName = formData.get("workspacename");

  console.log("-------------- workspace", workspaceName);
  if (!workspaceName) {
    return {
      error: "workspace is required",
    };
  }

  await postWorkSpace(workspaceName);
};
