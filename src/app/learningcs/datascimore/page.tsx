import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function datascimore(){
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
        <Resource img = "" resource="DATA SCIENCE" info={<>
          <p>
            Data science uses algorithms to extract insights from structured or unstructured data. These insights then help predict future services, make informed decisions with the data, optimize operations, etcetera.
            <br></br>
            <br></br>
            Various programming languages are used to extract these insights (R, Python, SQL, etc). Some basic resources to get started with learning these:
            <br></br>
            <br></br>
            1. <span className="font-bold"> R: </span> freeCodeCamp is a non-profit that has some great resources for learning programming. Their <a href="https://youtu.be/_V8eKsto3Ug?si=lE0qn60wk-IzS6BP" className="text-secondary underline"> R tutorial</a> is short and pretty helpful. 
            <br></br>
            <br></br>
            2. <span className="font-bold"> Jupyter Notebook: </span> Jupyter Notebook (the name comes from Julia, Python, and R which are the languages it initially supported) is an open-source web app that supports multiple languages and allows you to execute code in small cells as compared to just one big file, making experimentation a lot easier. It&apos;s also great for collaboration. Its <a href="https://docs.jupyter.org/en/latest/" className="text-secondary underline"> documentation</a> talks more about what Jupyter is and here&apos;s a quick <a href="https://www.geeksforgeeks.org/how-to-use-jupyter-notebook-an-ultimate-guide/" className="text-secondary underline"> tutorial</a> to get started with Jupyter. 
            <br></br>
            <br></br>
            3. <span className="font-bold"> Python: </span> It&apos;s a good idea to start with Python basics before getting into Python for Data Science specifically, just to get the hang of how the programming language&apos;s syntax looks and works. You can look more into it here. After that, here&apos;s a good tutorial to get started with <a href ="https://youtu.be/7eh4d6sabA0" className="text-secondary underline"> Python for Data Science</a> After that, it&apos;s a good idea to practice with some project ideas, as you learn the best by doing! Here&apos;s some <a href="https://www.datacamp.com/blog/60-python-projects-for-all-levels-expertise" className="text-secondary underline"> ideas</a> you can look into. If you&apos;d rather read more about it/ read parallel to working on the project: here&apos;s <a href="https://jakevdp.github.io/PythonDataScienceHandbook/" className="text-secondary underline"> recommendation.</a> 
          </p>
          </>
        } />
      </div>
      </main>
        </>
    )
}