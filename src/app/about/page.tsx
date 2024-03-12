import Image from "next/image";
import { bayon } from "@/utils/fonts";
import { poppins } from "@/utils/fonts";
import Instagram from "../../../public/contact/instalogo.png";
import Email from "../../../public/contact/emaillogo.png";
import Twitter from "../../../public/contact/twitterlogo.png";
import Background from "../../../public/img/aboutbg.png";
import MeetTheTeam from '@/components/team/box';
import Socials from "@/components/socials";
import ToExpand from "@/components/about/aboutus";
import React from "react";

export default function about(){
    return(
        <>
        <main className={`w-full overflow-hidden`}>
            <div className="-z-10 bottom-0 absolute w-full h-[87vh] overflow-hidden">
                <span className="block w-full h-full relative overflow-hidden">
                    <Image
                        src={Background}
                        priority
                        placeholder="blur"
                        alt="Hexagons background"
                        quality={100}
                        fill = {true}
                        className="object-cover w-full h-full"
                        />
                </span>
            </div>
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
                <MeetTheTeam type = "SOCIAL MEDIA AND MARKETING" href="about/marketing" />
                <MeetTheTeam type = "OUTREACH AND LOGISTICS" href = "about/outreachlogs" />
                <MeetTheTeam type = "EVENTS" href = "about/events" />
                <MeetTheTeam type = "FINANCE" href = "about/finance" />
                <MeetTheTeam type = "DEV VERTICAL" href="about/dev" />
                </div>
                <footer className={`mt-8 rounded-t-[30px] md:rounded-t-[20px] p-4 px-[40px] md:px-[60px] bg-primary mt-4`}>
                <p className={`${poppins.className} text-center line-height-[45px] text-xl mb-2 text-tertiary`}>Contact Us</p>
                <div className={`flex items-center gap-2 -mb-2 md:-mb-0 md:gap-x-4 gap-x-8`}>
                    <Socials logo={Instagram} href="https://www.instagram.com/cs.ashoka/" />
                    <Socials logo={Twitter} href="https://twitter.com/cs_ashoka" />
                    <Socials logo={Email} href="mailto:cs.society@ashoka.edu.in" />
                    </div>
                </footer>
                </div>
        </main>
        </>
    );
}