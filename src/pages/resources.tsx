import { bayon } from "@/utils/fonts";
import Image from "next/image";
import HeroImage from "../../public/img/hero.png";
import React from "react";
import { useState, useEffect } from "react";
import "./resources.css";

import Link from "next/link";

import mag from "../../public/img/magnifier.png";
import { link } from "fs";


function Button({name, link}) {


  return (
    <Link className="link" href={link}>
      <div className="resources-button">
        {name}
      </div>
    </Link>
  )
}

export default function Resources() {
    const [isMobile, setIsMobile] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(1);

    function handleWindowSizeChange() {
        setIsMobile(window.innerWidth <= 800);
      }
      useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
        };
      }, []);


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

    return (
        <div className="resources">
            <div className="background-text" style={{ opacity: scrollOpacity }}>
                RESOURCES
            </div>
            <main className="resources-main-content">
            <div className="resources-header">
              <p className="red-text">What resources does CS Soc have for you?</p>
              <img className="magnifier" src={mag.src}></img>
            </div>
            <div className="resources-buttons">
              <Button name={"CS Helpdesk"} link={"/helpdesk"}/>
              <Button name={"Internships"} link={"/internships"}/>
            </div>
            </main>
        </div>
    )
}