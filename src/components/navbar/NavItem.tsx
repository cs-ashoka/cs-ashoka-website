"use client";

import cn from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const match = pathname === href;

  return (
    <li
      className={cn(
        `hover:text-primary font-extralight mt-2 md:mt-0 text-shadow-hover transition-all duration-150 text-center text-base sm:text-[17px] lg:text-lg`,
        match && `text-primary font-medium mt-2 md:mt-0`
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
    <><li
      className={cn(
        `invisible opacity-0 bg-secondary  font-extralight px-4 lg:mr-auto rounded-full text-shadow-hover transition-all duration-150 text-center text-base sm:text-[17px] lg:text-lg`,
        !match && `visible opacity-100`
      )}
    >
      <Link href="/">Home</Link>
    </li></>
  );
}
