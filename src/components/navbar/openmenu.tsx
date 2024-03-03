import React from "react"
import { NavItem } from "./NavItem"
import { poppins } from "@/utils/fonts";
import { IoClose } from 'react-icons/io5';

const OpenMenu: React.FC = () => {
    const CloseMenu: React.FC = () => {
        return(
        <IoClose className="absolute right-4 cursor-pointer" size={24} />
        )
    }
    return(
        <div className="z-50 flex items-end justify-end bg-opacity-50">
        <div className="absolute top-0 right-0 w-1/2 bg-secondary transition-transform ease-in-out h-full overflow-y-auto"> 
        <div className={`${poppins.className} m-4`}>
            <CloseMenu />
            <ul className="p-4">
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