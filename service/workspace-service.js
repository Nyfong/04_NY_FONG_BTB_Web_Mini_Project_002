const { METHODS } = require("http");
const { headers } = require("next/headers");
const { auth } = require("../auth");
import { BASE_API_URL } from "../constants/base-url";
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
  console.log("res============", res);
  return res.payload;
}
