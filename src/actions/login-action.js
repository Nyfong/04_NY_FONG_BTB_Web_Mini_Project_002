"use server";

import { error } from "console";
import { signIn } from "../../auth";
import { redirect } from "next/navigation";
import { loginService } from "../service/auth-service";

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

  const res = await loginService({ email, password });
  if (res?.status != "OK") {
    return res;
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (e) {
    redirect("/login");
  }

  redirect("/todo");
};
