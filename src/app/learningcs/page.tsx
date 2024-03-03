"use client"

import React from "react";
import { bayon } from "@/utils/fonts";
import ResourceCard from "@/components/cards/resource-card";
import "./learningcs.css"
import { info } from "./search/page"; 
import Image from "next/image";
import SearchBar from "../../../public/img/searchbar.png";
import { useState } from "react";

export default function LearningCS() {
  const [search, setSearch] = useState('');
  console.log(search);
    return (
      <main className="">
        <div className="flex grid grid-cols-2">
        <p className={`${bayon.className} mt-10 ml-20 text-white text-6xl md:text-7xl`}>
          LEARNING CS
        </p>
      <form className="flex items-center justify-center" >
        <input
          type="text"
          placeholder="Search"
          className="rounded-[50px] w-3/4 border-2 border-primary bg-tertiary p-1 cursor-pointer text-black" 
          style={{caretColor: "black"}} 
          onChange={(e) => setSearch(e.target.value)}/>
          <Image 
            src={SearchBar}
            alt="Search bar icon"
            quality={100}
            className="-ml-8" />
          </form>
      </div>
      <div className={`mt-4 mb-10 mx-auto grid grid-cols-2 gap-6 md:grid-cols-3 px-20`}>
      {info.filter((item) => {
        return search.toLowerCase() === '' ? item : item.resource.toLowerCase().includes(search)
      }).map((item) => (
        <div key = {item.id}>
        <ResourceCard img= {item.img} resource={item.resource} descrp={item.description} link={item.link}/>
        </div>
      ))}
      </div>
      </main>
    )
};
/**
        <ResourceCard img= ""resource="Non cis males in Tech" descrp="Learn more about organizations that support non cis males in tech" link="./learningcs/noncismalesintech"/>
        <ResourceCard img= "" resource="Daily Tech" descrp="Keep up with the tech world around you." link="./learningcs/dailytech"/>
        <ResourceCard img= "" resource="Competitive Programming" descrp="Get into competitive programming" link="./learningcs/competitiveprogramming"/>
        <ResourceCard img= "" resource="VS Code Extensions" descrp="Useful and fun VS Code Extensions" link="./learningcs/vscextensions"/>
        <ResourceCard img= "" resource="History of Tech" descrp="Discover more about how we landed where we are today with tech" link="./learningcs/historyoftech"/>
        <ResourceCard img= "" resource="Comp Comps" descrp="Learn more about annual CS events, hackathons, CTFs, etc" link="./learningcs/compcomps"/> 
        <ResourceCard img= "" resource="Figma Plug-ins" descrp="Useful figma plug ins" link="./learningcs/figmaplugins"/>
        <ResourceCard img= "" resource="Hardware" descrp="Get into Hardware" link="./learningcs/hardware"/>
        <ResourceCard img= "" resource="Machine Learning" descrp="Get started with machine learning, large language models, neural networks, etc" link="./learningcs/ml"/>
        <ResourceCard img= "" resource="Figma" descrp="Get started with figma, and designing." link="./learningcs/figma"/>
        <ResourceCard resource="Animation" descrp="Get started with animation" link="./learningcs/animation"/>  
        <ResourceCard resource="Navigating CS Research" descrp="How to navigate CS Research at Ashoka, Tips for ISMs, etc" link="./learningcs/navigatingresearch"/>
        <ResourceCard resource="A/V Editing" descrp="Learn more about audio and video editing" link="./learningcs/avediting"/>
        <ResourceCard resource="App Development" descrp="Get into building apps, responsive apps, accessible apps" link="./learningcs/appdev"/>
        <ResourceCard img= ""resource="CS Theory" descrp="Dive deeper into CS theory, computer architecture & organization." link="./learningcs/comptheory"/>
        <ResourceCard img= "" resource="Game Development" descrp="Learn more about how to get into developing games" link="./learningcs/gamedev"/>
        <ResourceCard img= "" resource="Getting started with CS as a Concept" descrp="Step One of starting with Computer Science" link="./learningcs/cs50"/>
 */