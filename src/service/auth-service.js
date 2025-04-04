import { redirect } from "next/navigation";
import { BASE_API_URL } from "../constants/base-url";
export const loginService = async ({ email, password }) => {
  const res = await fetch(`${BASE_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await res.json();
  if (!data) {
    redirect("/login");
  }
  return data;
};

//http://96.9.81.187:8080/api/v1/auth/register

export const signUpService = async ({ username, email, password }) => {
  const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });
  const data = await res.json();
  console.log("999999999999", data);
  if (data?.status === "CREATED") {
    redirect("/login");
  }
  if (data?.status === "BAD_REQUEST") {
    redirect("/register");
  }

  return data;
};
