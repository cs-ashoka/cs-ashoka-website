import React from 'react';
import { poppins } from "@/utils/fonts";
import Image, { StaticImageData } from "next/image";

interface leftMember {
    imgl: StaticImageData; 
    personl: string; 
    batchl: string; 
}

const LeftMember: React.FC<leftMember> = ({ imgl, personl, batchl }) => {
    return (
        <div>
            <div className={`opacity-[.35] px-2`}>
                <Image src={imgl} 
                alt="Member photo"
                className="object-cover mt-2 w-[137px] md:w-[195px] h-[200px] md:h-[285px] ml-4"/>
            </div>
            <div className={`${poppins.className} text-primary font-bold text-[15px] bg-background md:text-2xl ml-[120px] -mt-[70px] md:-mt-24 absolute`}style={{color: '#D6D6D6'}}>
                {personl}
            </div>
            <div className={`${poppins.className} text-primary font-bold text-[15px] md:text-2xl ml-[120px] md:-mt-[70px] -mt-[55px] absolute`}>
                {batchl}
        </div>
        </div>
    );
};

export default LeftMember; 