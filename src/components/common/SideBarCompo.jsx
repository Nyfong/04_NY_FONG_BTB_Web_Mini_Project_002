import React from "react";
import Logo from "../logo";
import { DialogCloseButton, DialogDemo } from "../popup/Dialog";
import { SheetDemo } from "../workspace/setting-select";
import Link from "next/link";

export default function SideBarCompo({ data }) {
  const listWorkSpace = [...data];
  return (
    <div>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh)] w-full  p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Logo />
        </div>

        <div className="grid grid-cols-1 p-2 h-full ">
          {/* loop */}
          <div className="h-[300px] rounded-lg overflow-hidden shadow-md flex flex-col gap-5 ">
            {/* details */}
            <div className="flex items-center justify-between px-4">
              <p>my task</p>
              <DialogDemo />
            </div>
            <div className="scrollbar-hidden h-full overflow-y-scroll">
              <nav className="flex flex-col gap-1 text-xs  font-sans text-base font-normal  text-gray-700 ">
                {listWorkSpace.map((el) => (
                  <div className="grid grid-cols-6" key={el?.workspaceId}>
                    <Link
                      href={`/todo/${el.workspaceId}`}
                      className="col-span-5 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
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
                            d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                            clipRule="evenodd"
                          />
                        </svg>
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
          <div className="flex pb-2 items-end">
            <div
              role="button"
              tabIndex={0}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
