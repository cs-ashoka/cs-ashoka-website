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
            <div className={`opacity-35`}>
                <Image src={imgl} 
                alt="Member photo"
                className="object-contain w-full h-[230px] md:h-[290px] ml-2 md:-ml-12"/>
            </div>
            <div className={`${poppins.className} text-primary font-bold text-[13px] md:text-2xl ml-28 -mt-14 md:-mt-24`}style={{color: '#D6D6D6'}}>
                {personl}
            </div>
            <div className={`${poppins.className} text-primary font-bold text-[13px] md:text-2xl ml-28 -mt-2 absolute`}>
                {batchl}
        </div>
        </div>
    );
};

export default LeftMember; 