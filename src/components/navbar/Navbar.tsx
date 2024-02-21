"use client"
import { HomeNavItem, NavItem } from "./NavItem";
import React, { useState, useEffect, useRef, use } from "react";
import OpenMenu from "./openmenu";

const Hamburger: React.FC = () => {
  return(
    <div className="space-y-1">
    <span className="block w-8 h-0.5 bg-white"></span>
    <span className="block w-8 h-0.5 bg-white"></span>
    <span className="block w-8 h-0.5 bg-white"></span>
  </div>
  )
}


export function Navbar(){
  const [open, setOpen] = useState(false);

  let menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handleClick = (e: MouseEvent) => {
      if(!menuRef.current?.contains(e.target as Node)){
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
  });

  const toggleMenu = () => {
    setOpen(!open)
  }; 

  return(
    <>
    <nav className={`bg-transparent pt-[4vh] pb-[6vh] px-4 sm:px-8 md:px-12 lg:px-16`}>
    <ul
        className={`hidden md:flex items-center justify-around md:justify-end gap-x-4 sm:gap-x-8 md:gap-x-12`}
      >
        <HomeNavItem />
        <NavItem href="/about">About</NavItem>
        <NavItem href="/events">Events</NavItem>
        <NavItem href="/resources">Resources</NavItem>
        <NavItem href="/manifesto">Our Manifesto</NavItem>
      </ul>
      <div className="md:hidden">
      <div className="flex justify-start absolute">
      <ul>
      <HomeNavItem />
      </ul>
      </div>
      <div className="flex justify-end" ref={menuRef}>
      <button
        className=""
        onClick={toggleMenu}
      >
        <Hamburger />
        </button>
        {open && (<OpenMenu/>)}
        </div>
      </div>
      </nav></>
  );
};
