"use client"

import { ThemeProvider, Carousel } from "@material-tailwind/react";

export function MasonryGridGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-[280px] w-[300px] rounded-lg object-cover object-center  md:hover:object-cover hover:object-contain"
            src="/img/events/notion_4.jpeg"
          />
        </div>
        <div>
        <img
            className="h-[480px] w-[300px] rounded-lg object-center object-cover md:hover:object-cover hover:object-contain"
            src="/img/events/gather_2.png"
          />
        </div>
        <div>
        <img
            className="h-[280px] w-[300px] rounded-lg object-center object-cover md:hover:object-cover hover:object-contain"
            src="/img/events/acadsocsfair_3.jpg"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
        <img
            className="h-[480px] w-[300px] rounded-lg object-center object-cover md:hover:object-cover hover:object-contain"
            src="/img/events/aoc_14.jpg"
          />
        </div>
        <div>
        <img
            className="h-[280px] w-[300px] rounded-lg object-center object-cover md:hover:object-cover hover:object-contain"
            src="/img/events/blockchain_2.jpg"
          />
        </div>
        <div>
        <img
            className="h-[280px] w-[300px] rounded-lg object-center object-contain md:object-cover md:hover:object-cover hover:object-contain"
            src="/img/events/blockchain_1.jpg"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
        <img
            className="h-[280px] w-[300px] rounded-lg object-center object-cover md:hover:object-cover hover:object-contain"
            src="/img/events/acadsocsfair_2.jpg"
          />
        </div>
        <div>
        <img
            className="h-[280px] w-[300px] rounded-lg object-center object-contain md:hover:object-cover md:object-cover hover:object-contain"
            src="/img/events/pmclub_1.jpg"
          />
        </div>
        <div>
        <img
            className="h-[480px] w-[300px] rounded-lg object-center object-cover md:hover:object-cover hover:object-contain"
            src="/img/events/researchshowcase_3.png"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
        <img
            className="h-[480px] w-[300px] rounded-lg object-center object-cover md:hover:object-cover hover:object-contain"
            src="/img/events/bash_1.jpg"
          />
        </div>
        <div>
        <img
            className="h-[480px] w-[300px] rounded-lg object-center object-cover md:hover:object-cover hover:object-contain"
            src="/img/events/aoc_12.jpg"
          />
        </div>
      </div>
    </div>
  );
}