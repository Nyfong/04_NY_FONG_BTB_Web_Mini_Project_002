"use server";

import { error } from "console";
import { signIn } from "../auth";
import { redirect } from "next/navigation";

export const loginAction = async (_, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  if (!password && !email) {
    return {
      error: "Password is required",
      errorEmail: "Email is required",
    };
  }
  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  redirect("/todo");
};
