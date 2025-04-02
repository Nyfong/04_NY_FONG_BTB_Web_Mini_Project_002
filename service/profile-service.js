import { auth } from "../auth";
import { BASE_API_URL } from "../constants/base-url";
export async function getCurrentUser() {
  const session = await auth();

  const req = await fetch(`${BASE_API_URL}/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.payload.token}`,
    },
  });
  const res = await req.json();
  console.log("---------------------------------------", res);
  return res.payload;
}
