"use server";

import { error } from "console";
import { signIn } from "../../auth";
import { redirect } from "next/navigation";
import { signUpService } from "../service/auth-service";

export const signUpAction = async (_, formData) => {
  const username = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  if (!password && !email && !username) {
    return {
      error: "password is required",
      errorEmail: "email is required",
      errorName: "username is required",
    };
  }
  const res = await signUpService(username, email, password);
  return res;
};
