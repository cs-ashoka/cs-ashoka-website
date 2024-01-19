import { bayon } from "@/utils/fonts";
import Image from "next/image";
import HeroImage from "../../public/img/hero.png";
import React from "react";
import { useState, useEffect } from "react";
import "./resources.css";


export default function Resources() {
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <div className="resources">
            <p className="background-text">
                RESOURCES
            </p>
        </div>
    )
}