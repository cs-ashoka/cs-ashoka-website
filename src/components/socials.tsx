import React from 'react';
import Image, { StaticImageData } from "next/image";

interface socialsDef {
    logo: StaticImageData; 
    href: string; 
}

const socials: React.FC<socialsDef> = ({ logo, href }) => {
    return (
        <a href= {href}>
            <Image src={logo} 
            alt="Logo" 
            className={`object-contain h-12 w-12`}/>
        </a>
    );
};


export default socials; 