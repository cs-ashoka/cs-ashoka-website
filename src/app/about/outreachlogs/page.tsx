import { bayon } from "@/utils/fonts";
import himangi from "../../../../public/team/himangi.png";
import malvikachoraria from "../../../../public/team/malvikachoraria.png";
import amanali from "../../../../public/team/amanali.jpeg";
import ananyabasotia from "../../../../public/team/ananyabasotia.jpeg";
import bhoomikaagrawal from "../../../../public/team/bhoomikaagrawal.jpg";
import hrishitlath from "../../../../public/team/hrishitlath.jpg";
import karthiksridhar from "../../../../public/team/karthiksridhar.jpeg";
import mihikagrover from "../../../../public/team/mihikagrover.jpg";
import roshanpathak from "../../../../public/team/roshanpathak.jpg";
import rushilgupta from "../../../../public/team/rushilgupta.jpeg";
import vanshbothra from "../../../../public/team/vanshbothra.jpg";
import LeftMember from "@/components/team/left";
import RightMember from "@/components/team/right";

export default function Outreachlogs(){
  return (
      <main>
          <p className={`${bayon.className} text-primary text-6xl md:text-7xl font-bold text-shadow text-center`}>
              OUTREACH & LOGISTICS
          </p>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 mx-auto`}>
            <div className={`grid grid-cols-5 md:grid-cols-6`}>
                <div className={`hidden md:flex`}>
                  <p></p>
                </div>
                <div>
                  <p className={`vertical-text -ml-2 md:-ml-0 font-bold text-[81px] md:text-[101px]`} style={{color: '#333533'}}>
                    HODs
                  </p>
                </div>
                <div className="place-items-start col-span-4 grid grid-rows-9 gap-6 md:h-[290px]">
                <LeftMember imgl={himangi} personl = "Himangi Parekh" batchl = "UG 25" />
                <RightMember imgr={malvikachoraria} personr = "Malvika Choraria" batchr = "UG 25" />    
                </div>
                </div>
            <div className={`grid grid-cols-5`}>
              <div>
                <p className={`-ml-2 md:-ml-0 vertical-text font-bold text-[81px] md:text-[101px]`} style={{color: '#333533'}}>
                  TEAM
                </p>
              </div>
              <div className={`place-items-start col-span-4 grid grid-rows-9 gap-6`}>
                  <LeftMember imgl={amanali} personl = "Aman Ali" batchl = "UG 24" />
                  <RightMember imgr={ananyabasotia} personr = "Ananya Basotia" batchr = "UG 25" /> 
                  <LeftMember imgl={bhoomikaagrawal} personl = "Bhoomika Agrawal" batchl = "UG 27" />
                  <RightMember imgr={hrishitlath} personr = "Hrishit Lath" batchr = "UG 25" /> 
                  <LeftMember imgl={karthiksridhar} personl = "Karthik Sridhar" batchl = "UG 24" />
                  <RightMember imgr={mihikagrover} personr = "Mihika Grover" batchr = "UG 27" /> 
                  <LeftMember imgl={roshanpathak} personl = "Roshan Pathak" batchl = "UG 25" />
                  <RightMember imgr={rushilgupta} personr = "Rushil Gupta" batchr = "UG 27" /> 
                  <LeftMember imgl={vanshbothra} personl = "Vansh Bothra" batchl = "UG 25" />
              </div>
            </div>
            </div>
      </main>
  )
}