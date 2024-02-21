import Image from "next/image";
import { bayon } from "@/utils/fonts";
import Background from "../../../public/img/aboutbg.png";
import React from 'react';
import Manifesto from "../../../public/manifesto.pdf";

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
                    OUR MANIFESTO
                </p>
            </div> 
            <div className="flex items-center justify-center text-3xl underline text-primary">
                <a href="https://drive.google.com/file/d/1Vi3GYfJEE11jW4DODKaEPGNBVTSumehV/view?usp=sharing">Download Manifesto</a>
            </div>
        </main>
    </>
    );
    }