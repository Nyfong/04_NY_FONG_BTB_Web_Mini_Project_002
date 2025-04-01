import { redirect } from "next/navigation";

export const loginService = async ({ email, password }) => {
  const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/login`, {
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
  if (!data) {
    redirect("/login");
  }
  return data;
};
