import React from "react";
import Logo from "../logo";
import { getWorkSpace } from "../../service/workspace-service";
import SideBarCompo from "./SideBarCompo";
export default async function Sidebar() {
  const data = await getWorkSpace();
  return (
    <>
      <SideBarCompo data={data} />
    </>
  );
}
