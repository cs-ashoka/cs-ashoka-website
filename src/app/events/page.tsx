// src/pages/about.js
import React from 'react';
import { bayon } from "@/utils/fonts";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import HeroImage from "../../../public/img/aboutbg.png";
import Countdown from "../../components/countdown/counter";
import EventCard from '@/components/cards/event-card';
import { getSortedPostsData } from '@/lib/event-posts';
import { MasonryGridGallery } from "@/components/carousel/carousel";


const EventsPage = () => {
  const eventPosts = getSortedPostsData();
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
            className="object-cover object-bottom w-full h-full" />
        </span>
      </div>
      <div className={`w-full mx-auto grid grid-rows-2 grid-flow-col`}>
        <div className={`w-full mx-auto mt-[4vh] md:mt-[7vh]`}>
          <p
            className={`${bayon.className} text-white text-5xl md:text-7xl font-bold text-center`}
          >
            UPCOMING EVENT:
          </p>
          <p className={`${poppins.className} md:mb-2 mb-1 md:-mt-2 -mt-1 text-white text-center font-medium`} style={{ fontStyle: 'italic' }}>
            
          </p>
        </div>
        <Countdown />
      </div>
      <div className={`w-full ml-10 md:ml-32 mt-20 md:mt-8`}>
        <p className={`${bayon.className} text-primary text-4xl`}>
          RECENT EVENTS:
        </p>
      </div>
      <div className={`mx-auto w-5/6 md:w-4/5 grid grid-cols-2 mb-10 md:mb-0 md:grid-cols-5 mt-4 gap-8`}>
        {eventPosts.map(event => (
          <EventCard key={event.slug} imgSrc={`/img/events/${event.slug}.png`} name={event.title} link={`/events/${event.slug}`} />
        ))}
      </div>
      <div className={`w-full ml-10 md:ml-32 mt-20 md:mt-8`}>
      <p className={`${bayon.className} text-primary text-4xl`}>
          HIGHLIGHTS:
        </p>
      </div>
      <div className={`mx-auto w-5/6 md:w-4/5 mb-10 md:mb-0 mt-4`}>
      <MasonryGridGallery />
      </div>
    </main>
  );
};

export default EventsPage;
