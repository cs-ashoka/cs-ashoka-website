import { poppins } from "@/utils/fonts";
import React from 'react';
import Link from "next/link";
import Image from "next/image";

interface eventCardDetails {
    imgSrc: string;
    name: string;
    link: string;
}

const EventCard: React.FC<eventCardDetails> = ({ imgSrc, name, link}) => {
    return (
        <div className={`w-full h-52 bg-gray rounded-lg`}>
            <div className={`mx-auto w-4/5 mt-4 bg-black rounded-lg`}>
                <img src={imgSrc}></img>
            </div>
            <div className={`text-center m-2 mb-0`}>
                <p className={`${poppins.className} text-md text-white font-semibold`}>{name}</p>
            </div>           
            <div className={`text-center`}>
                <Link className={`text-secondary text-sm`} href={link}>Read More</Link>
            </div>
        </div>
    );
};

export default EventCard;