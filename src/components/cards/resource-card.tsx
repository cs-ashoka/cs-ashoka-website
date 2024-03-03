import { poppins, bayon } from "@/utils/fonts";
import React from 'react';

interface resourceCardDetails {
    img: string;
    resource: string;
    descrp: string;
    link: string;
}


const ResourceCard: React.FC<resourceCardDetails> = ({ img, resource, descrp, link}) => {
    return (
        <div className="container bg-[#D9D9D9] w-full h-full rounded-[30px] md:rounded-[40px] mt-4 p-1 md:p-0 mx-auto">
            <div className="md:grid md:grid-cols-4">
            <div className={`m-3 w-[7vh] h-[7vh] md:w-[12vh] md:h-[12vh] bg-secondary rounded-full `}> 
            <div className="w-[100%] h-[100%]" style={{backgroundImage:`${img}`, backgroundSize:"cover", backgroundPosition:'center', borderRadius:'100%' }}></div>
            </div>
            <div className={`${poppins.className} md:col-span-3 md:text-2xl text-[14px] text-secondary flex items-center font-bold m-4`}>
                {resource}
            </div>
            </div>
            <div className="mx-4 text-black text-sm md:text-[15px]">
                {descrp}
            </div>
            <div className="mx-2 md:mx-4 mt-4 w-[80%]">
            <a className={`text-white text-sm rounded-full font-extralight bg-primary md:w-max drop-shadow-[2px_3px_3px_rgba(0,0,0,0.3)] px-5`} href = {link}>Read More</a>
            </div>
        </div>
    );
};

export default ResourceCard;