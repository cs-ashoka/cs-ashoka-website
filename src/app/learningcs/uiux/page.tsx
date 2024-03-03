import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function uiux(){
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
        <Resource img={""} resource="UI/ UX Design" info={
          <>
          <p>
            Some great courses to get started with UI/ UX Design include:</p>
            <br></br>
          <p>
            <a href="https://www.coursera.org/learn/user-experience-design" className="text-secondary underline"> Introduction to User Experience Design</a> from Coursera
          <br></br>
          <a href="https://www.uxdesigninstitute.com/courses/free-ux-design-course/?utm_source=blog&utm_medium=top_free_ux_courses&utm_campaign=free_teaser" className="text-secondary underline"> Introduction to UX Design</a> from UX Design Institute
          <br></br>
          <a href="https://www.udacity.com/course/product-design--ud509" className="text-secondary underline"> Product Design</a> from Udacity
          <br></br>
          <a href="https://www.codecademy.com/learn/intro-to-ui-ux" className="text-secondary underline"> Introduction to UI and UX Design</a> from Code Academy
          <br></br>
          <a href="https://www.futurelearn.com/courses/digital-skills-user-experience?source=post_page-----21b81dcd51b--------------------------------" className="text-secondary underline"> Digital Skills: User Experience </a>
          </p>
            </>
        } />
      </div>
      </main>
        </>
    )
}