"use client"
import { HomeNavItem, NavItem } from "./NavItem";
import React, { useState, useEffect, useRef, use } from "react";
import { poppins } from "@/utils/fonts";
import { IoClose } from 'react-icons/io5';

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
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!open)
  }; 

const OpenMenu: React.FC = () => {
  const CloseMenu: React.FC = () => {
      return(
      <IoClose className="absolute right-5 top-5 cursor-pointer" size={28} />
      )
  }
  return(
      <div className="z-50 flex items-end justify-end bg-opacity-50">
      <div className="absolute top-0 right-0 w-1/2 bg-secondary transition-transform ease-in-out h-full"> 
      <div className={`${poppins.className} m-4`}>
      <button onClick={toggleMenu}> <CloseMenu /> </button>
          <ul>
          <NavItem href="/about" onClick={toggleMenu}>About</NavItem>
          <NavItem href="/events" onClick={toggleMenu}>Events</NavItem>
          <NavItem href="/resources" onClick={toggleMenu}>Resources</NavItem>
          <NavItem href="/manifesto" onClick={toggleMenu}>Our Manifesto</NavItem>
          </ul>
      </div>
      </div>
      </div>
  );
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
