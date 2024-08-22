import Image from "next/image";
import { bayon } from "@/utils/fonts";
import Background from "../../../public/img/aboutbg.png";
import Instagram from "../../../public/contact/instalogo.png";
import Email from "../../../public/contact/emaillogo.png";
import Twitter from "../../../public/contact/twitterlogo.png";
import React from 'react';
import { poppins } from "@/utils/fonts";
import Socials from "@/components/socials";

export default function manifesto(){
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
            <div className="flex flex-col items-center">
                <p className={`${bayon.className} text-center font-bold text-7xl mt-6 mb-8`}>
                    ASHOKA STARTER PACK
                </p>
            </div> 
            <div className="flex items-center justify-center text-3xl underline text-primary">
            <iframe src="/ashoka-starter-pack.pdf" className="h-[60vh] w-[100vh] rounded-lg object-cover object-center p-4"/>
            </div>
        </main>
    </>
    );
    }