import React from "react"
import { NavItem } from "./NavItem"
import { poppins } from "@/utils/fonts";

const OpenMenu: React.FC = () => {
    return(
        <div className="z-50 flex items-end justify-end bg-opacity-50">
        <div className="absolute top-0 right-0 w-64 bg-secondary h-full"> 
        <div className={`${poppins.className} m-4`}>
            <ul>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/events">Events</NavItem>
            <NavItem href="/resources">Resources</NavItem>
            <NavItem href="/manifesto">Our Manifesto</NavItem>
            </ul>
        </div>
        </div>
        </div>
    );
}; 

export default OpenMenu; 