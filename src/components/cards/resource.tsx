import { poppins, bayon } from "@/utils/fonts";
import React, { ReactNode } from 'react';

interface resourceDetails {
    img: string;
    resource: string;
    info: ReactNode;
}

const Resource: React.FC<resourceDetails> = ({ img, resource, info }) => {
    return (<>
        <div className={`md:flex md:items-center md:justify-center mx-auto`}>
            <div className="md:h-32 md:w-32 ml-4 w-20 mb-6 mt-6 h-20 rounded-[40px] bg-secondary">
                <div className="w-[100%] h-[100%]" style={{backgroundImage: `url(${img})`, backgroundSize:"cover", backgroundPosition:'center', borderRadius:'100%' }}></div> 
            </div>
            <div className="md:ml-12 ml-4 text-primary text-5xl md:text-7xl font-bold">
                {resource}
            </div>
        </div>
        <div className="content-center md:grid md:grid-cols-5">
        <div className={`${poppins.className} object-center mx-6 md:mx-11 md:col-span-4 text-black text-justify bg-[#D9D9D9] py-5 px-6 md:px-10 rounded-2xl mt-8`}>
            {info}
        </div>
        </div>
        </>
    );
};

export default Resource;