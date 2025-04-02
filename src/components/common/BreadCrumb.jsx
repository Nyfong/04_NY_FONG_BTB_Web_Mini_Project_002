import React from "react";
import Link from "next/link";
export default function BreadCrumb({ workSpaceById }) {
  return (
    <>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex w-full flex-wrap items-center rounded-md bg-slate-50 px-4 py-2">
          <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <Link href="/todo">todo</Link>
            <span className="pointer-events-none mx-2 text-slate-800">/</span>
          </li>
          <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <Link href="" className="font-bold">
              {workSpaceById?.workspaceName}
            </Link>
          </li>
        </ol>
      </nav>
    </>
  );
}
