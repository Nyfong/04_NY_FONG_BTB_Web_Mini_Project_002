import { revalidatePath } from "next/cache";
const { auth } = require("../../auth");
import { BASE_API_URL } from "../constants/base-url";
//get
export async function getWorkSpace() {
  const session = await auth();

  const req = await fetch(
    `${BASE_API_URL}/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
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
//post

export async function postWorkSpace(workspaceName) {
  const session = await auth();
  //console.log("woooo", workspaceName);
  const req = await fetch(`${BASE_API_URL}/workspace`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.payload.token}`,
    },
    body: JSON.stringify({
      workspaceName: workspaceName,
    }),
  });
  const res = await req.json();
  //console.log("res============", res);
  revalidatePath(`/todo`);
  return res.payload;
}

//by id

export async function getWorkSpaceById(workSpaceId) {
  const session = await auth();

  const req = await fetch(`${BASE_API_URL}/workspace/${workSpaceId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.payload.token}`,
    },
  });
  const res = await req.json();
  return res.payload;
}

//put
export async function editWorkSpaceById(workspaceName, workSpaceId) {
  try {
    // Retrieve the session and ensure the token exists
    const session = await auth();
    if (!session?.payload?.token) {
      throw new Error("Authentication token is missing.");
    }

    // Make the PUT request to update the workspace
    const response = await fetch(`${BASE_API_URL}/workspace/${workSpaceId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.payload.token}`,
      },
      body: JSON.stringify({
        workspaceName: workspaceName,
      }),
    });

    // Check if the response status is OK (2xx)
    if (!response.ok) {
      const errorData = await response.json(); // Parse error details if available
      throw new Error(
        `Failed to update workspace: ${
          errorData.message || response.statusText
        }`
      );
    }

    // Parse and return the response payload
    const res = await response.json();
    if (!res.payload) {
      throw new Error("Response payload is missing.");
    }
    revalidatePath(`/todo`);
    return res.payload;
  } catch (error) {
    // Log the error and rethrow it for further handling
    console.error("Error updating workspace:", error.message);
    throw error; // Rethrow to allow the caller to handle the error
  }
}

//patch

//url http://96.9.81.187:8080/api/v1/workspace/558ddd2a-121d-4db0-b758-b7f42a87f077/favorite?favorite=true
export async function patchWorkSpaceById(workSpaceId, isFavorite) {
  const session = await auth();
  const req = await fetch(
    `${BASE_API_URL}/workspace/${workSpaceId}/favorite?favorite=${isFavorite}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${session?.payload.token}`,
      },
    }
  );
  const res = await req.json();

  // Revalidate the path where tasks are displayed
  revalidatePath(`/todo`);
  return res.payload;
}
