'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavItem({ path, href, children }: { path: string; href: string; children: React.ReactNode }) {
  const color = path === href ? 'text-primary' : 'text-text';
  const underline = path === href ? 'link-underline-selected' : '';
  const font = path === href ? 'font-light' : 'font-extralight';

  return (
    <li className={`${color} ${font} link-underline ${underline} duration-150 text-center text-[2vh] sm:text-[2.25vh] lg:text-[2.45vh]`}>
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default function NavBar() {
  const path = usePathname();

  return (
    <div className={`bg-transparent pt-[4vh] pb-[6vh] px-4 sm:px-8 md:px-12 lg:px-16`}>
      <ul className={`flex items-center justify-center sm:justify-end gap-x-8 sm:gap-x-12`}>
        <NavItem path={path} href='/'>
          Home
        </NavItem>
        <NavItem path={path} href='/about'>
          About
        </NavItem>
        <NavItem path={path} href='/events'>
          Events
        </NavItem>
        <NavItem path={path} href='/resources'>
          Resources
        </NavItem>
      </ul>
    </div>
  );
}
