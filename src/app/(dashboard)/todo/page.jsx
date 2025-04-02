import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import CardComponent from "@/components/card";
import BreadCrumbProfile from "@/components/header/BreadCrumbProfile";
import man from "../../../../public/man.png";
import Image from "next/image";
export default async function todoPage() {
  const session = await auth();
  console.log("sessin auth ", session);
  // // console.log("This is session in todo", session);
  // if (session?.status == "BAD_REQUEST") {
  //   redirect("/login");
  // }
  // if (!session?.payload.token) {
  //   redirect("/login");
  // }

  return (
    <>
      <section className="p-2 overflow-hidden h-screen px-0 py-[40px]">
        <div className=" flex flex-col gap-5 h-full justify-center ">
          <Image src={man} className="h-full w-full object-cover" alt="man" />
          <p className="flex justify-center">
            welcome, you can start the tasks
          </p>
        </div>
      </section>
    </>
  );
}
