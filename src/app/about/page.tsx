import Image from "next/image";
import { bayon } from "@/utils/fonts";
import { poppins } from "@/utils/fonts";
import Instagram from "../../../public/contact/instalogo.png";
import Email from "../../../public/contact/emaillogo.png";
import Twitter from "../../../public/contact/twitterlogo.png";
import MeetTheTeam from '@/components/team/box';
import Socials from "@/components/socials";
import ToExpand from "@/components/about/aboutus";
import React from "react";

export default function about(){
    return(
        <>
        <main className={`w-full overflow-hidden`}>
            
            <ToExpand />
            <div className={`flex flex-col items-center justify-center`}>
            <hr className="border-1 mt-8 w-1/2"></hr>                    
            <div className={`w-full mt-8 mb-8`}>
            <p className={`${bayon.className} text-primary text-4xl text-center`}>
                MEET OUR TEAM
            </p>
            </div>
            <div className={`${bayon.className} text-center text-2xl md:text-3xl grid grid-cols-2 md:grid-cols-6 gap-6 border-1 border-black max-w-7xl`} style={{textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                <span className="">
                <MeetTheTeam type = "CORE" href= 'about/core'/>
                </span>
                <MeetTheTeam type = "SOCIAL MEDIA AND MARKETING" href="about" />
                <MeetTheTeam type = "OUTREACH AND LOGISTICS" href = "about" />
                <MeetTheTeam type = "EVENTS" href = "about" />
                <MeetTheTeam type = "FINANCE" href = "about" />
                <MeetTheTeam type = "DEV VERTICAL" href="about" />
                </div>
                </div>
        </main>
        </>
    );
}