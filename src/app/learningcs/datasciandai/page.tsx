import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function datasci(){
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
        <Resource img = "" resource="DATA SCIENCE" info={
          <>
          <p>
            Some Great Courses to get started with Data Science include: 
            <br></br>
            <a href="https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python?index=product&queryID=833887e8f8c60382065b446dca65bb76&position=6&linked_from=autocomplete&c=autocomplete" className="text-secondary underline"> Introduction to AI with Python</a>  by CS50 
            <br></br>
            <a href="https://www.edx.org/learn/data-science/harvard-university-introduction-to-data-science-with-python?index=product&queryID=8b26f226cc806c391366371deff1c8c5&position=6&linked_from=autocomplete&c=autocomplete" className="text-secondary underline">Introduction to Data Science with Python</a> by HarvardX 
            <br></br>
            <a href="https://www.coursera.org/learn/process-mining" className="text-secondary underline"> Process Mining: Data Science in Action </a> from Coursera 
          </p>
          </>
        } />
      </div>
      </main>
        </>
    )
}