import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/common/Sidebar";

export default async function todoPage() {
  const session = await auth();
  console.log("This is session in todo", session);
  if (session?.status == "BAD_REQUEST") {
    redirect("/login");
  }
  if (!session?.payload.token) {
    console.log("hello");
    redirect("/login");
  }
  return (
    <>
      <section className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">2</div>
      </section>
    </>
  );
}
