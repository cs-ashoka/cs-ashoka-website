import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function programming(){
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
        <Resource img={""} resource="GETTING STARTED" info={
          <>
          <p>
            Getting started with Programming is exciting! It's also important to know why exactly you want to learn how to program. Yes, everyone says "you should know how to code" but programming is more than that. Programming teaches you how to break a problem into pieces and tackle it in steps. 
            <br></br><br></br>
            When you&apos;re coding, you&apos;d often come across various small functions that you want to perform with the code, which get increasingly harder as you actually realize the steps that go into making them. For example, something as simple as a mouseclick requires multiple lines of back end programming! 
            <br></br> <br></br>
            This isn&apos;t to scare you away from programming though. It's easy enough to get started with on your own, and learn as you go. The first step, would be picking out a programming language. There are a couple popular ones, let's delve into why you'd pick what. 
            <br></br><br></br>
            &nbsp; (a.) <span className="font-bold"> Python:</span> Let's start with the elephant (python?) in the room. Python is super helpful for writing scripts to automate tasks, visualizing data, and developing custom tools. Automation of tasks could include something as simple as sending an email! There are various softwares out there that do that for you, but it's so much more handier to have a script that you can fully customize to fit YOUR needs. 
            <br></br>
            Python's also used for visualizing data plots using various libraries such as MatPlotLib which is a great start to getting into Programming for Data Science. 
            <br></br><br></br>
            (b.) <span className="font-bold"> JavaScript:</span> No, this is not the same as Java. We'll get to that in a second. JavaScript is popularly used for web development, i.e. adding interactive features to your websites. Suppose you have a personal blog, JS would let you add features like a search bar, interactive maps, and so much more! Popular JS frameworks and libraries that streamline the development process include React.js, AngularJS, Vue.js, etc. 
            <br></br>
            If you use web content management systems like WordPress, JS would help you add more customization to that as well. For example, if you have an online store, you could add product sliders, or customize the checkout process. 
            <br></br> <br></br>
            (c.) <span className="font-bold">Java:</span> Java is like a Swiss Army knife (and is NOT JavaScript) for making computer programs. It's used to build all sorts of applications: from mobile apps to video games. This is because Java programs can be run on any platform that supports Java, without changing the source code much. This is because Java programs are translated into bytecode and aren't directly translated to machine code. After this, they can be run on any machine that supports JVM (Java Virtual Machine) without having to recompile or rewrite it. 
            <br></br>
            Some languages like C, C++ were developed before bytecode and compile directly to machine code instead. Others, like Python, C#, were influened by Java to compile to bytecode. However, a Python interpreter may not always be consistent as Python has many implementations (to help with adaptability). This is not to say that one language is better than the other, but rather that they have different use cases depending on the needs of the time they were built during. 
          </p>
          <p>
          <br></br>
            After this, it's important to set up your environment i.e. download the software tools required to work with your chosen language. Then you can move on to learning the basics, practicing small programs through LeetCode or CodeAcademy, etc to reinforce what you've learned. After this, you can choose to work on projects to get more comfortable with the languages! You also don't need to have a very specific goal in mind when you start learning, you can build it as you discover more. We have independent resources for the languages listed under our Resources section, feel free to check them out! 
          </p>
          
          </>
        } />
      </div>
      </main>
        </>
    )
}