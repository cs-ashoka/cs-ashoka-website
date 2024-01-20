

import { bayon } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import "./internships.css";
import Link from "next/link";
import Internship_IMG from "../../public/img/internship.png"

export default function Internships() {


    return (
        <div className="internships">
            <div className="title-container">
            <h1 className="internships-title">SIGN UP FOR YOUR INTERNSHIP TODAY!</h1>
            </div>
            <div className="interships-decorations-container">
                <img className="internships-img" src={Internship_IMG.src}></img>
                <Link className="link" href={"/internships_info"}>
                <div className="internships-button">
                    Get Started
                </div>
                </Link>
            </div>
        </div>
    )
}