const { METHODS } = require("http");
const { headers } = require("next/headers");
const { auth } = require("../auth");

export async function getWorkSpace() {
  const session = await auth();

  const req = await fetch(
    "http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.payload.token}`,
      },
    }
  );
  const res = await req.json();
  //const res = await req.json();
  return res.payload;
}
