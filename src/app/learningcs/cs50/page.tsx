import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function cs50(){
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
        <Resource img="" resource="CS for CS Majors" info="Coming Soon" />
      </div>
      </main>
        </>
    )
}