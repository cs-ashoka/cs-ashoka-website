import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function compsec(){
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
        <Resource img="" resource="COMPUTER SECURITY" info={<>
          <p> To start with Computer Security, it&apos;s a good idea to start with foundational concepts such as <br></br><br></br>
          1. <span className="font-bold"> Networking: </span> Understanding how data is transferred over networks. Networks serve as the foundation for modern computing interfaces and understanding how they work is essential to understanding how to secure these networks. A good way to get started is by looking at the book <a href="https://www.ucg.ac.me/skladiste/blog_44233/objava_64433/fajlovi/Computer%20Networking%20_%20A%20Top%20Down%20Approach,%207th,%20converted.pdf" className="text-secondary underline"> &&quot;Computer Networking: A Top Down Approach&quot;</a> by James Kurose and Keith Ross. 
           </p>
           <br></br>
           <p>
            2. <span className="font-bold"> Cyber Security principles: </span> Cyber security, next, helps you recognize vulnerabilities, assess risks, and deploy safeguards. &quot;Cybersecurity Essentials&quot; by Charles J. Brooks and Christopher Grow is a pretty easy to read book for getting started. If you&apos;d rather try something more hands-on, OWASP is a non profit organization that talks about improving security for web applications, and is working to improve software security in general. Their <a href="https://owasp.org"> website</a> is quite a nice resource. 
            <br></br><br></br>
            &nbsp; (a.) <span className="font-bold"> Cryptography: </span> Cryptography is a popular aspect of Cyber security, that involves turning plaintext (readable data) into ciphertext (encoded, unintelligible data) using algorithms and keys, which are referred to as cryptographic algorithms and keys, to maintain confidentiality, and authenticity of information. For example, when you checkout popular pages (subreddits) on Reddit, such as r/AITA, a lot of cryptography goes behind ensuring that the content&apos;s not been tampered with since its submission, protecting the user&apos;s anonymity, establishing a link between the author and their submission to ensure credibility of user submissions, etcetera! 
            <br></br>
            &nbsp; If you&apos;d like to delve more into Cryptography, there are some great courses offered by Stanford for beginners: <a href ="https://www.coursera.org/learn/crypto" className="text-secondary underline">Cryptography 1</a>, <a href="https://www.coursera.org/learn/crypto2" className="text-secondary underline">Cryptography 2</a>
            <br></br><br></br>
            &nbsp; (b.) Since Security is rapidly evolving, it&apos;s quite important to keep up with what&apos;s happening in the field and follow along. If you&apos;d like to do so, here&apos;s a <a href="https://www.schneier.com/crypto-gram/"> pretty nice newsletter</a> called Crypto-Gram, that taks about emerging threats, new developments, and current events in Cryptography. 
           <br></br>
           </p>
         </>}
         />
      </div>
      </main>
        </>
    )
}