import React from "react";
import Link from "next/link";
export default function BreadCrumb({ workSpaceById, location }) {
  return (
    <>
      <nav aria-label="breadcrumb" className="w-max ">
        <ol className="flex w-full flex-wrap items-center rounded-md bg-slate-50 py-2 ">
          <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <Link href="/todo" className="text-lg  text-gray-400">
              {location}
            </Link>
            <span className="pointer-events-none mx-2 text-slate-800">
              {" "}
              &gt;{" "}
            </span>
          </li>
          <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <Link href="" className="font-bold text-lg text-blue-400 ">
              {workSpaceById?.workspaceName}
            </Link>
          </li>
        </ol>
      </nav>
    </>
  );
}
