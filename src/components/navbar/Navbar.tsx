import { HomeNavItem, NavItem } from "./NavItem";

export function Navbar() {
  return (
    <nav
      className={`bg-transparent pt-[4vh] pb-[6vh] px-4 sm:px-8 md:px-12 lg:px-16`}
    >
      <ul
        className={`flex items-center justify-around md:justify-end gap-x-4 sm:gap-x-8 md:gap-x-12`}
      >
        <HomeNavItem />
        <NavItem href="/about">About</NavItem>
        <NavItem href="/events">Events</NavItem>
        <NavItem href="/resources">Resources</NavItem>
      </ul>
    </nav>
  );
}
