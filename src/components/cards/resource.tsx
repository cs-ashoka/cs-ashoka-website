import { poppins, bayon } from "@/utils/fonts";
import React, { ReactNode } from 'react';

interface resourceDetails {
    resource: string;
    info: ReactNode;
}

const Resource: React.FC<resourceDetails> = ({ resource, info }) => {
    return (<>
        <div className={`flex items-center justify-center`}>
            <div className="md:h-32 md:w-32 h-20 w-20 rounded-full bg-secondary">
            </div>
            <div className="md:ml-12 ml-8 text-primary text-6xl md:text-7xl font-bold">
                {resource}
            </div>
        </div>
        <div className="content-center grid grid-cols-5">
        <div className={`${poppins.className} col-start-2 col-span-3 text-black text-justify bg-[#D9D9D9] py-5 px-10 rounded-2xl mt-8`}>
            {info}
        </div>
        </div>
        </>
    );
};

export default Resource;