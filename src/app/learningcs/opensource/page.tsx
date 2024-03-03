import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function opensource(){
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
      <div className="mb-4">
        <Resource img="img/resources/opensource.jpg" resource="OPEN SOURCE" info={
        <>
          <p className="font-bold">
            What is open source?
          </p>
          <p> 
          <br></br>
            Open source quite literally means open + source. A project where the source code is openly available for everyone to see and work with. It&apos;s highly regarded in the general population as it&apos;s a great way to collaborate, and improve projects/software together. It also promotes transparency, as you can see exactly what a software you&apos;re using is doing. Linux, Mozilla Firefox, WordPress&apos; content management system are some examples of popular open source softwares. 
          </p>
          <p className="font-bold"> 
          <br></br>
            Why should I contribute? 
          </p>
          <p>
          <br></br>
            By contributing to open source, you make a positive impact on the software industry: by helping make (hopefully) better software. 
          <br></br>
            It&apos;s also a great way to learn as you can work on projects that experienced devs have already worked on, and network with the community by collaborating on projects together. 
          </p>
          <p className="font-bold">
          <br></br>
            How to contribute to open source? 
          </p>
          <p>
            <br></br>
            Find a project, and dive in! It&apos;s that simple. It&apos;s a good idea to start with projects that are marked Good First Issues. Good First Issues are tasks within open source projects that are specifically made for starting out. They&apos;re typically straightforward, and require minimal prior knowledge of the project&apos;s codebase. They&apos;re great for getting acquainted with the workflow and community dynamics. You can check out some <a href="https://goodfirstissues.com/" className="text-secondary underline"> here</a> or look at some specifically on GitHub <a href="https://github.com/topics/good-first-issue" className="text-secondary underline"> here</a>. For more on what Github is, you can refer to this video 
            <br></br> <br></br>
            <iframe src="https://drive.google.com/file/d/1cp0yPyXCkgx_S8TjK0C88d_5y20jxk91/preview" className="h-[460px] w-full" /> 
            <br></br>
            or get started <a href="https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account" className="text-secondary underline"> here</a>
            . You can also contribute to Ashoka specific projects <a href="https://github.com/orgs/Autumn-of-Code-Ashoka/repositories" className="text-secondary underline">
              here
            </a>.
            Pick a project, then navigate to the “Issues” tab to see open issues. Some issues will also be tagged “good first issue.” 
          </p>
          </>
        } />
      </div>
      </main>
        </>
    )
}