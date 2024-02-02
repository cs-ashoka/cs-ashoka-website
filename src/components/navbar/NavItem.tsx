"use client";

import cn from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useEffect } from "react";

export function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const match = pathname === href;

  function changeBGColor(color: string) {
    const element = document.querySelector<HTMLElement>(".background-div");
    if (element) {
      element.style.backgroundColor = color;
    }

  }
  

  // needed to change bg color. no other place that is anyways accessing pathname
  useEffect(()=> {
    if (pathname === "/resources") {
      console.log("correct page")
      changeBGColor("#d6d6d6");
    } else if (pathname === "/internships/internships_info") {
      changeBGColor("#333533");
    } 
    else {
      changeBGColor("rgb(32 32 32 / var(--tw-bg-opacity))");
    }
  }, [pathname])

  return (
    <li
      className={cn(
        `hover:text-primary font-extralight text-shadow-hover transition-all duration-150 text-center text-base sm:text-[17px] lg:text-lg`,
        match && `text-primary font-medium`
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}

export function HomeNavItem() {
  const pathname = usePathname();

  const match = pathname === "/";

  return (
    <li
      className={cn(
        `invisible opacity-0 bg-secondary  font-extralight px-4 lg:mr-auto rounded-full text-shadow-hover transition-all duration-150 text-center text-base sm:text-[17px] lg:text-lg`,
        !match && `visible opacity-100`
      )}
    >
      <Link href="/">Home</Link>
    </li>
  );
}
