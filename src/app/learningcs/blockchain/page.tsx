import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function blockchain(){
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
        <Resource img ="" resource="BLOCKCHAIN" info={
          <p> CSSoc conducted a blockchain workshop which you can refer to <a href ="https://drive.google.com/file/d/1uavUwlbfDsxem_Cc31c3SgKgffRYSnXh/view?usp=drivesdk" className="text-secondary underline"> here</a> to get started with blockchain. </p>}/>
      </div>
      </main>
        </>
    )
}