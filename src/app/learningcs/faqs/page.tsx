import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function faqs(){
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
        <Resource img = "" resource="FAQs" info={
            <div>
                <p className="font-bold"> QUESTION: I don&apos;t have any prior CS knowledge. Should I reconsider CS?
                    </p>
                <p className="indent-4">
                    Not at all! It&apos;s more common for students to enter University with no prior experience in Computer Science than you think. It&apos;s perfectly fine and the introductory classes are geared towards helping you learn the basics of CS. There are many students who started from scratch at Ashoka and are now doing great! 
                </p> <br></br>
                <p className="font-bold"> QUESTION: What is an ISM? How is it different from a regular course? </p>
                <p className="indent-4"> An ISM refers to an Independent Study Module. It allows you to delve into research alongside a faculty mentor on a specific agenda. It&apos;s a really good resource to explore research you&apos;re interested in. <br></br><br></br>
                
                For Computer Science, as of Spring 2024, students are allowed to count two ISMs towards their major degrees. After that, it doesn&apos;t count towards your degree anymore but you can partake in as many ISMs as you&apos;d like. Don&apos;t be afraid to reach out to a Professor! </p>
                <br></br>
                <p className="font-bold"> QUESTION: I&apos;m struggling with my CS courses. What can I do? </p>
            <p className="indent-4">
            Your first resource should be reaching out to your Teaching Assistant - don&apos;t be afraid to go for Office Hours! Even if you think you&apos;re asking a doubt “too late,” don&apos;t worry - it&apos;s never too late and chances are, your TAs will always be more than happy to help (only during their official Office Hours though, please don&apos;t approach them for course related queries randomly on Campus, they have Office Hours and Email channels for this)!  <br></br> <br></br>
            Your next source would be contacting the Teaching Fellow, if there&apos;s one for the course. You can also always book Office Hours with the Professor. 

            The nice thing about Computer Science, however, is that there&apos;s a lot of resources available online.
             If you don&apos;t understand a concept presented in the lecture even after going through the slides and textbook, try Googling/ looking it up on YouTube. Stack Overflow is also particularly helpful. This will help you find answers faster than waiting for Office Hours every week. </p>
            <br></br> 
            <p className="font-bold"> QUESTION: What can I do with my summers/ winter holidays? </p>

<p className="indent-4"> It&apos;s always a good idea to look into learning new skills during the holidays. Pick a topic that seems interesting to you (we have a lot of resources for different topics: check them out <a href="/learningcs" className="text-secondary underline"> here</a>), and try to learn its basics and more. It&apos;ll help you develop a problem solving attitude, and let you explore a wider breadth of information rather than waiting for courses to cover it. <br></br><br></br>

Other than that, students also try to pursue Internship or Research Opportunities/ projects in order to explore different career paths in a more hands-on way, and to earn experience in the fields they&apos;re interested in. You can check out some Internship or Research Opportunities <a href="/internships" className="text-secondary underline"> here.</a> </p> </div>}/>
</div>
      </main>
        </>
    )
}