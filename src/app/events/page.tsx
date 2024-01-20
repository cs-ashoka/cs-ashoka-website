// src/pages/about.js
import React from 'react';
import { bayon } from "@/utils/fonts";
import Image from "next/image";
import HeroImage from "../../../public/img/hero.png";
import Countdown from "../../components/countdown/counter";
import EventCard from '@/components/cards/event-card';

const EventsPage = () => {
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
      <div className={`w-full mx-auto grid grid-rows-2 grid-flow-col`}>
        <div className={`w-full mx-auto mt-[4vh] md:mt-[7vh]`}>
            <p
            className={`${bayon.className} text-white text-5xl md:text-7xl font-bold text-center`}
            >
            GITHUB WORKSHOP IN:
            </p>
        </div>
        <Countdown />
      </div>
      <div className={`w-full max-md:text-center md:ml-32 mt-8`}>
        <p className={`${bayon.className} text-primary text-4xl`}>
            RECENT EVENTS:
        </p>
      </div>
      <div className={`mx-auto w-4/5 grid grid-cols-2 md:grid-cols-5 mt-4 gap-8`}>
        <EventCard imgSrc='' name='Event Name' link=''/>
        <EventCard imgSrc='' name='Event Name' link=''/>
        <EventCard imgSrc='' name='Event Name' link=''/>
        <EventCard imgSrc='' name='Event Name' link=''/>
        <EventCard imgSrc='' name='Event Name' link=''/>
      </div>
    </main>
  );
};

export default EventsPage;
