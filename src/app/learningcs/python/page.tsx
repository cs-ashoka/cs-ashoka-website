import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function python(){
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
        <Resource img ="" resource="PYTHON" info={<>
        <p>
          Python is a programming language that has relatively simple syntax, and is quite useful. 
          <br></br><br></br>
          It&apos;s a good idea to start with a basic tutorial on how the language works. <a href="https://youtu.be/kqtD5dpn9C8?si=SMVDhmRpmKIoAdcC" className="text-secondary underline"> Programming with Mosh</a> offers a beginner friendly and super helpful tutorial for getting started. 
          <br></br><br></br>
          After this, Microsoft has various Python modules that are a great way to get into doing more! <a href="https://learn.microsoft.com/en-us/training/paths/beginner-python/" className="text-secondary underline"> Here&apos;s one!</a> You can look into more <a href="https://learn.microsoft.com/en-us/training/browse/?terms=python" className="text-secondary underline"> here</a>.
          <br></br><br></br>
          Or, you can also refer to the workshop conducted by the Computer Science Society (by 2024 President, Aryan Nath) which goes over install and basics. Here&apos;s the link [COMING SOON]. 
        </p>
        </>}/>
      </div>
      </main>
        </>
    )
}