import Link from "next/link"; 
import React from 'react';

interface meetTheTeam {
    type: string; 
    href: string;
}

const MeetTheTeam: React.FC<meetTheTeam> = ({ type, href }) => {
    return (
        <Link href={href} className={`box-content mx-auto h-24 w-36 md:h-36 md:w-40 md:p-5 flex justify-center items-center bg-box rounded-[25px] md:rounded-lg`} style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}> {type}
        </Link>
    );
};

export default MeetTheTeam;


