'use client';

import Image from "next/image";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import "./resources.css";
import { Navbar } from "@/components/navbar/Navbar";


import Link from "next/link";

import mag from "../../../public/img/magnifier.png";
import { link } from "fs";

interface bProps {
  name: string;
  link: string;
  isMobile:boolean;
}

function Button({name, link, isMobile}: bProps) {


  return (
    <Link className="link" href={link}>
      <div className="resources-button" style={isMobile ? {"width" : "90vw", "height" : "100px", "borderRadius": "35px", "fontSize": "24px", "fontWeight":"600"} : {}}>
        {name}
      </div>
    </Link>
  )
}

const useMediaQuery = (width:number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e:any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

export default function Resources() {
    const [isMobile, setIsMobile] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(1);

    var m = useMediaQuery(768);
    useEffect(()=> {
      setIsMobile(m);
    }, [m])

      useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY || window.pageYOffset;
          const newOpacity = Math.max(0.4, 1 - scrollY / 500);
          const clampedOpacity = Math.min(1, Math.max(0, newOpacity));
          setScrollOpacity(clampedOpacity);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);




    if (!isMobile || !m) {
      return (
        <div className="resources">
            <div className="background-text" style={{ opacity: scrollOpacity }}>
                RESOURCES
            </div>
            <main className="resources-main-content">
            <div className="resources-header">
              <p className="red-text">What resources does CS Soc have for you?</p>
              <Image className="magnifier" src={mag} alt="Magnifier"/>
            </div>
            <div className="resources-buttons">
              <Button name={"CS Helpdesk"} link={"/helpdesk"} isMobile={isMobile}/>
              <Button name={"Internships"} link={"/internships"} isMobile={isMobile}/>
            </div>
            </main>
        </div>
    )
    } else {
      return (
        <div className="resources" style={{"height": "auto"}}>
          <div className="background-text-m">
            RESOURCES
          </div>
          <main className="resources-main-content-m">
            <div className="resources-header-m">
              <p className="red-text">What resources does CS Soc have for you?</p>
              <Image className="magnifier" src={mag} alt="Magnifier"></Image>
            </div>
            <Button name={"Helpdesk"} link={"/helpdesk"} isMobile={isMobile}/>
            <Button name={"Internships"} link={"/internships/internships_info"} isMobile={isMobile}/>
          </main>
        </div>
      )
    }
}