import React from "react";
import Image from "next/image";
import Background from "../../../../public/img/aboutbg.png";
import Resource from "@/components/cards/resource";

export default function mathforcs(){
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
        <Resource img={""} resource="Math for CS" info={<>
        <p>
        If you&apos;re a CS major at Ashoka, some math courses (Discrete Math, Linear Algebra, Calculus, Probability & Statistics, etc) are already in your curriculum. 
        <br></br>
        <br></br>
        To build on those, or look into more Math for CS, you can go <a href="https://ocw.mit.edu/search/?d=Mathematics&l=Undergraduate"> here.</a> 
        This is a link to MIT&apos;s OpenCourseWare (OCW) which is a free web-based publication of virtually all MIT course content. Some courses include lecture videos, while others include practice problem sets, previous exams, etcetera. It&apos;s a brilliant resource to systematically expand your knowledge. 
        <br></br>
        <br></br>
        This is a link to MIT&apos;s OpenCourseWare (OCW) which is a free web-based publication of virtually all MIT course content. Some courses include lecture videos, while others include practice problem sets, previous exams, etcetera. It&apos;s a brilliant resource to systematically expand your knowledge. 
        <br></br>
        <br></br>
        1. <span className="font-bold"> For Computer Graphics & Computer Vision: </span> Geometry i.e. Coordinate systems (cartesian, polar coordinates, homogeneous coordinates, transformations of objects in 2D and 3D space), geometric primitives (points, lines, bezier curves and splines, surfaces (polygons, etc)), transformations (linear transformations, affine transformations (shearing, reflections) to position and resize objects), projections, rasterization, mesh representations, collision detection, spatial data structures (octrees, kd-trees, etc). 
        <br></br>
        <br></br>
        2. <span className="font-bold"> Cryptography & Security: </span> Number theory (modular arithmetic, modular inverse, etc), Group theory (cyclic groups, generators, group operations), Ring theory (rings, fields), ECC (elliptic curve cryptography), Entropy, Cryptographic protocols (different techniques of key exchanges, encryption, decryption, etc). It&apos;s a good idea to look into the math department&apos;s Algebra-I, Elliptic Curves and Cryptography, Algebra-II courses for this. 
        <br></br>
        <br></br>
        3. <span className="font-bold"> Networking and Distributed Systems: </span> Graph Theory i.e. Undirected, Directed, and Weighted graphs, algos (shortest path, minimum spanning trees), etc. 
          </p></>} />
      </div>
      </main>
        </>
    )
}