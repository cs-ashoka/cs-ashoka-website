import Image from "next/image";
import { bayon, IM, poppins} from "@/utils/fonts";
import Background from "../../../public/img/aboutbg.png"; 
import React from 'react';

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
                <p className={`${bayon.className} text-center font-bold text-7xl mt-2 mb-2`}>
                    NEWSLETTER
                    </p>
                    <p className={`${bayon.className} text-center font-bold italic text-7xl`}> 2023-24
                        </p>
                        <p className={`${IM.className} text-center font-bold text-2xl`}> 
                            Presidents: Aryan Nath & Roshni Agarwal
                        </p>
            </div> 
            <div className="flex items-center justify-center text-3xl underline text-primary">
            <iframe src="/newsletter_23-24.pdf" className="h-[100vh] w-[100vh] rounded-lg object-cover object-center p-4"/>
            </div>
        </main>
    </>
    );
    }