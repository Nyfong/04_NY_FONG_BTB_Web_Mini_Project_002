"use client";

import { usePathname } from "next/navigation";

export default function PathChecker({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return children(isLoginPage);
}
