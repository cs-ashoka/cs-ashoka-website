"use client"

import { ThemeProvider, Carousel } from "@material-tailwind/react";
import Image from "next/image";

interface GalleryProps {
  imageList: string[];
}

export function GalleryWithCarousel({ imageList }: GalleryProps) {
  return (
    <Carousel loop={true} autoplay={true} className="mx-auto w-3/5 rounded-xl">
      {imageList.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`image ${index+1}`}
          // fill={true}
          className="h-full w-full object-contain object-center"
        />
      ))}
    </Carousel>
  );
}