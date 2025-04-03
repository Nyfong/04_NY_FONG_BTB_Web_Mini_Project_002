import React from "react";
import Logo from "../logo";
import { DialogCloseButton, DialogDemo } from "../popup/Dialog";
import { SheetDemo } from "../workspace/setting-select";
import Link from "next/link";
import { signOut } from "../../../auth";

const WORKSPACE_COLORS = [
  "bg-blue-400",
  "bg-green-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-yellow-400",
  "bg-indigo-400",
  "bg-teal-400",
  "bg-orange-400",
  "bg-red-400",
];
export default function SideBarCompo({ data }) {
  const listWorkSpace = [...data];

  // Get consistent color based on workspace ID
  const getWorkspaceColor = (workspaceId) => {
    const hash = workspaceId
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return WORKSPACE_COLORS[hash % WORKSPACE_COLORS.length];
  };
  return (
    <div>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh)] w-full  p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Logo />
        </div>
        <div className="grid grid-cols-1 p-2 h-full ">
          {/* loop */}
          <div className="h-[300px] rounded-lg overflow-hidden shadow-md flex flex-col gap-5 ">
            {/* details post task*/}
            <div className="flex items-center justify-between px-4">
              <p>my workspace</p>
              <DialogDemo />
            </div>
            <div className="scrollbar-hidden h-full overflow-y-scroll">
              <nav className="flex flex-col gap-1 text-xs  font-sans text-base font-normal  text-gray-700 ">
                {listWorkSpace.map((el) => (
                  <div className="grid grid-cols-6" key={el?.workspaceId}>
                    <Link
                      href={`/todo/${el.workspaceId}/?q=workspace`}
                      className="col-span-5 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                    >
                      <div className="grid place-items-center mr-4">
                        <div className="flex items-center mr-3">
                          <span
                            className={`${getWorkspaceColor(
                              el.workspaceId
                            )} h-2.5 w-2.5 rounded-full`}
                          ></span>
                        </div>
                      </div>
                      {el.workspaceName}
                    </Link>
                    {/* setting */}
                    <div className="flex items-center justify-end">
                      <SheetDemo deleteId={el.workspaceId} item={el} />
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* logout */}
          <div className="flex items-end">
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <div className="flex pb-2 items-end">
                <button
                  type="submit"
                  tabIndex={0}
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-500 hover:bg-opacity-80 focus:bg-red-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-white focus:text-blue-900 active:text-white outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Log Out
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
