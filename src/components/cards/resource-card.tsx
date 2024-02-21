import { poppins, bayon } from "@/utils/fonts";
import React from 'react';

interface resourceCardDetails {
    resource: string;
    descrp: string;
    link: string;
}

const ResourceCard: React.FC<resourceCardDetails> = ({ resource, descrp, link}) => {
    return (
        <div className={`w-full mx-auto h-full bg-[#D9D9D9] rounded-[40px] mt-4`}>
            <div className="flex m-4 grid md:grid-cols-5 grid-cols-3">
            <div className={`w-16 h-16 bg-secondary rounded-full`}>
            </div>
            <div className={`${poppins.className} md:text-2xl text-secondary font-bold flex items-center justify-left ml-[2vh] text-[14px] md:col-span-4 col-span-2`}>
                {resource}
            </div>
            </div>
            <div className="m-4 text-black text-sm md:text-[15px]">
                {descrp}
            </div>
            <div className="m-4">
                <a className={`text-white text-sm rounded-full font-extralight bg-primary w-max drop-shadow-[2px_3px_3px_rgba(0,0,0,0.3)] px-5 p-1`} href = {link}>Read More</a>
            </div>
        </div>
    );
};

export default ResourceCard;