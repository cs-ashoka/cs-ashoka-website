import { poppins, bayon } from "@/utils/fonts";
import React, { ReactNode } from 'react';

interface resourceDetails {
    img: string;
    resource: string;
    info: ReactNode;
}

const Resource: React.FC<resourceDetails> = ({ img, resource, info }) => {
    return (<>
        <div className={`flex items-center justify-center mx-auto`}>
            <div className="md:h-32 md:w-32 h-20 w-20 rounded-full bg-secondary">
                <div className="w-[100%] h-[100%]" style={{backgroundImage: `url(${img})`, backgroundSize:"cover", backgroundPosition:'center', borderRadius:'100%' }}></div> 
            </div>
            <div className="md:ml-12 ml-5 text-primary text-5xl md:text-7xl font-bold">
                {resource}
            </div>
        </div>
        <div className="content-center md:grid md:grid-cols-5">
        <div className={`${poppins.className} object-center mx-11 md:col-start-2 md:col-span-3 text-black text-justify bg-[#D9D9D9] py-5 px-10 rounded-2xl mt-8`}>
            {info}
        </div>
        </div>
        </>
    );
};

export default Resource;