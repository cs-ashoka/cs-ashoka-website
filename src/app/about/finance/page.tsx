import { bayon } from "@/utils/fonts";
import natashasobti from "../../../../public/team/natashasobti.jpeg";
import anuravsingh from "../../../../public/team/anuravsingh.jpeg";
import arnavgoyal from "../../../../public/team/arnavgoyal.jpg";
import fiona from "../../../../public/team/fiona.jpeg";
import shraddhakrishnaswami from "../../../../public/team/shraddhakrishnaswami.png";
import umangchauhan from "../../../../public/team/umangchauhan.png";
import LeftMember from "@/components/team/left";
import RightMember from "@/components/team/right";
import LeftMemberForMobile from "@/components/team/leftformobile";


export default function Finance(){
  return (
      <main>
          <p className={`${bayon.className} text-primary text-6xl md:text-7xl font-bold text-shadow text-center`}>
              FINANCE
          </p>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 mx-auto`}>
            <div className={`grid grid-cols-5 md:grid-cols-6`}>
                <div className={`hidden md:flex`}>
                  <p></p>
                </div>
                <div>
                  <p className={`vertical-text -ml-2 md:-ml-0 font-bold text-[81px] md:text-[101px]`} style={{color: '#333533'}}>
                    HOD
                  </p>
                </div>
                <div className="place-items-start col-span-4 grid grid-rows-10 gap-6 md:h-[290px]">
                <LeftMember imgl={natashasobti} personl = "Natasha Sobti" batchl = "UG 25" />
                </div>
                </div>
            <div className={`grid grid-cols-5`}>
              <div>
                <p className={`-ml-2 md:-ml-0 vertical-text font-bold text-[81px] md:text-[101px]`} style={{color: '#333533'}}>
                  TEAM
                </p>
              </div>
              <div className={`place-items-start col-span-4 grid grid-rows-10 gap-6`}>
                  <LeftMember imgl={anuravsingh} personl = "Anurav Singh" batchl = "UG 25" />
                  <RightMember imgr={arnavgoyal} personr = "Arnav Goyal" batchr = "UG 27" /> 
                  <LeftMemberForMobile imgl={fiona} personl = "Fiona Arora" batchl = "UG 24" />
                  {/* <RightMember imgr={shraddhakrishnaswami} personr = "Shraddha Krishnaswami" batchr = "UG 27" />  */}
                  <LeftMemberForMobile imgl={umangchauhan} personl = "Umang Chauhan" batchl = "UG 27" />
              </div>
            </div>
            </div>
      </main>
  )
}