import React from 'react';
import { poppins } from "@/utils/fonts";
import { bayon } from "@/utils/fonts"; 
import Image, { StaticImageData } from "next/image";

interface rightMember {
    imgr: StaticImageData; 
    personr: string; 
    batchr: string; 
}

const RightMember: React.FC<rightMember> = ({ imgr, personr, batchr }) => {
    return (
        <div>
            <div className={`opacity-35`}>
                <Image src={imgr} 
                alt='Member image'
                className={`object-contain h-[230px] md:h-[280px] ml-8 md:ml-28 mt-4`} />
            </div>
            <div className={`${poppins.className} absolute text-primary font-bold text-[13px] md:text-2xl absolute -mt-9 md:-mt-12 ml-12`}style={{color: '#D6D6D6'}}>
                {personr}
            </div>
            <div className={`${poppins.className} absolute text-primary font-bold text-[13px] md:text-2xl -mt-6 ml-12 absolute`}>
                {batchr}
            </div>
        </div>
    );
};

export default RightMember; 