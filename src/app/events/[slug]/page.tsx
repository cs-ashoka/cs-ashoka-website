import React from "react";
import { bayon } from "@/utils/fonts";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import HeroImage from "../../../../public/img/hero.png";

const EventsPost = () => {
    return (
      <main className={`w-full h-fit max-md:mt-[4vh] overflow-x-hidden`}>
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
        <div className={`absolute ml-1/5`}>/</div>
        <div className={`md:w-3/5 mx-auto grid grid-rows-2`}>
            <div className={`bg-white px-10 py-3 rounded-2xl w-full mx-auto mt-[4vh] md:mt-[4vh]`}>
                <p
                className={`${bayon.className} text-primary text-7xl md:text-8xl font-bold text-center`}
                >
                EVENT NAME
                </p>
                <p className={`${poppins.className} text-black md:text-4md font-bold text-center`}>
                    Author and Date
                </p>
            </div>
            <div className={`bg-white py-5 px-10 rounded-2xl max-md:text-center mt-8`}>
                <p className={`${poppins.className} text-black md:text-4md text-center`}>
                    Author and Date
                </p>
            </div>
        </div>
      </main>
    );
  };

export default EventsPost;