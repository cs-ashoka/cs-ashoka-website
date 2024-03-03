import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function ml(){
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
      <div>
        <Resource img = "" resource="MACHINE LEARNING" info={
          <p>
             This is a small section of a very popular beginners level course on Machine Learning by Andrew Ng: <a href = "https://www.youtube.com/watch?v=NhZXRzH2y-E&list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI&index=41" className="underline text-secondary"> Link </a>
          </p>
        }/>
      </div>
      </main>
        </>
    )
}