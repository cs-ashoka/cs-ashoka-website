"use client"
import { bayon } from "@/utils/fonts";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import HeroImage from "../../public/img/hero.png";
import TypeWriter from 'react-ts-typewriter';


export default function Home() {
  return (
    <main className={`flex w-full overflow-hidden`}>
      <div className="-z-10 bottom-0 absolute w-full h-[86.5vh] overflow-hidden">
        <span className="block w-full h-full relative overflow-hidden">
          <Image
            src={HeroImage}
            priority
            placeholder="blur"
            alt="Person coding"
            fill={true}
            quality={100}
            className="object-cover object-bottom w-full h-full"
          />
        </span>
      </div>
      <div className={`px-5 pl-[12vw] mt-[4vh] md:mt-[11vh]`}>
        <p
          className={`${bayon.className} text-primary text-7xl md:text-8xl font-bold text-shadow mb-0`}
        >
        <TypeWriter text="CS SOCIETY" loop={false} speed={200} cursor={true}/>
        </p>
        <p
        style={{ color: '#D6D6D6' }} className={`${poppins.className} absolute -mt-3 md:ml-72 ml-48 text-xl text-right`} 
        >
        At Ashoka
        </p>
        <p
          className={`mt-4 my-2 mb-[3px] px-6 rounded-full font-extralight bg-secondary w-max drop-shadow-[2px_3px_3px_rgba(0,0,0,0.3)]`}
        >
          Read More
        </p>
      </div>
    </main>
  );
}