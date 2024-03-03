import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function webdev(){
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
        <Resource img={""} resource="WEB DEVELOPMENT" info={<>
          <p>
            In web development, there are two main areas: front end and back end. 
            <br></br><br></br>
            1. Front End: This is what users see and interact with directly. It&apos;s like the facade of a building. Front end development involves using HTML, CSS, and JavaScript to create the layout, design, and interactivity of a website or web application. Front end developers focus on ensuring a seamless and visually appealing user experience across different devices and browsers.
            <br></br><br></br>
            2. Back End: This is like the infrastructure behind the scenes, powering everything. Back end development involves working with server-side languages (such as Python, Ruby, PHP, or Node.js) and databases to manage data, handle user authentication, and perform other server-side tasks. Back end developers build and maintain the server, databases, and application logic that enable the front end to function properly. So for example, when you click a button, the back end handles the &quot;click&quot; action and leads the user to the next step after the click (another link, a different page, a google form, etc). 
          <br></br><br></br>
          Front End Resources: 
          <br></br>
          <a href="https://internetingishard.netlify.app/html-and-css/" className="text-secondary underline"> HTML and CSS are great basics</a> to get started with front end web dev. 
          <br></br><br></br>
          Back End Resources: <br></br>
          <a href="https://youtu.be/W6NZfCO5SIk?si=1dnZ1lkH3KDSwDUB" className="text-secondary underline"> Learn Javascript</a> with this 1 hour long tutorial that starts from scratch and assumes no prior experience. This YouTube Channel in general is a great resource for basic tutorials!  
          <br></br>
          <a href="https://eloquentjavascript.net/" className="text-secondary underline">This book</a> is widely regarded (written by Marijn Haverbeke) as a very useful tool for looking at JS Syntax, ranging from basic to intermediate usage of the language. 
          <br></br>
          React is a very popular JS library for building websites. It breaks down all of its code into components and is very easy to comprehend. 
          <a href="https://youtu.be/SqcY0GlETPk?si=VTmNhU-w9gLVSNk7" className="text-secondary underline"> This React tutorial, </a> also from the same YouTuber, teaches you React from scratch. 
          <br></br><br></br></p>
          <p className="font-bold"> Extra resources: </p>
          <p>
          <br></br>
          A comprehensive guide on how to start with web development: 
          <br></br>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/" className="text-secondary underline">Learn Web dev </a> <br></br>
          <a href="Getting_started_with_the_web/CSS_basics" className="text-secondary underline"> Docs on CSS Basics </a>
          <br></br>
           <a href="https://codepip.com/games/grid-garden/" className="text-secondary underline"> A game </a> to better acquaint yourself with CSS
          Tailwind CSS: Tailwind CSS allows you to directly compose classes in your HTML markup, allowing you to speed up the development process, as compared to writing CSS from scratch. 
          <br></br>
          Some great resources for Tailwind: 
          <a href="https://youtu.be/mr15Xzb1Ook?si=-nOvtU61AY8qtLsg " className="text-secondary underline">Tailwind in 100 seconds</a>
          <br></br>
          After the 100 seconds, <a href="https://tailwindcss.com/docs/utility-first" className="text-secondary underline">Tailwind documentation</a> is a very good resource and is easy to navigate: 
          It&apos;s a good idea to try and build a front end project (doesn&apos;t need to be super big) and see what sort of features you want in it and try and find Tailwind utility classes for the same. It introduces you to problem solving for front end coding and also lets you discover Tailwind hands-on.
          </p></>
        } />
      </div>
      </main>
        </>
    )
}