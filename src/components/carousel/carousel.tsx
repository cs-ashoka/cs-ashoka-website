"use client"

import { ThemeProvider, Carousel } from "@material-tailwind/react";
import Image from "next/image";

interface GalleryProps {
  imageList: string[];
  type: "image" | "video"
}

export function GalleryWithCarousel({ imageList, type }: GalleryProps) {
  return (
    <Carousel loop={true} autoplay={true} className="mx-auto w-4/5 md:w-3/5 rounded-xl">
      {imageList.map((imageUrl, index) => (
       type[index] === "image" ? (<img
          key={index}
          src={imageUrl}
          alt={`image ${index+1}`}
          // fill={true}
          className="w-full h-full object-contain object-center"
        />
      ): (<video 
        key={index}
        src={imageUrl}
        autoPlay
        loop
        muted
        controls
        className="w-full h-full object-contain object-center"/>
        )))}
    </Carousel>
  );
}