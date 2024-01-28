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
            <div className={`opacity-[.35]`}>
                <Image src={imgr} 
                alt='Member image'
                className={`object-cover mt-2 w-[137px] md:w-[195px] h-[200px] md:h-[285px] ml-36`} />
            </div>
            <div className={`${poppins.className} absolute text-primary font-bold text-[15px] md:text-2xl bg-background -mt-[36px] md:-mt-[59px] ml-24`}style={{color: '#D6D6D6'}}>
                {personr}
            </div>
            <div className={`${poppins.className} text-primary font-bold text-[15px] md:text-2xl -mt-[21px] md:-mt-[36px] ml-24 absolute`}>
                {batchr}
            </div>
        </div>
    );
};

export default RightMember; 