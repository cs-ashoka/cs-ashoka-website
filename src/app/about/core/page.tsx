import { bayon } from "@/utils/fonts";
import aryannath from "../../../../public/team/aryannath.png";
import roshni from "../../../../public/team/roshni.png";
import bhumika from "../../../../public/team/bhumika.png";
import rajat from "../../../../public/team/rajat.png";
import LeftMember from "@/components/team/left";
import RightMember from "@/components/team/right";

export default function Core(){
    return (
        <main>
            <p className={`${bayon.className} text-primary text-6xl md:text-7xl font-bold text-shadow text-center`}>
                CORE
            </p>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 mx-auto`}>
              <div className={`grid grid-cols-5 md:grid-cols-6`}>
                  <div className={`hidden md:flex`}>
                    <p></p>
                  </div>
                  <div>
                    <p className={`vertical-text -ml-2 md:-ml-0 font-bold text-[81px] md:text-[101px]`} style={{color: '#333533'}}>
                      PRESIDENTS
                    </p>
                  </div>
                  <div className="place-items-start col-span-4 grid grid-rows-10 gap-6 md:h-[290px]">
                    <LeftMember imgl={roshni} personl = "Roshni Agarwal" batchl = "UG 25" />
                    <RightMember imgr={aryannath} personr = "Aryan Nath" batchr = "UG 25" />    
                  </div>
                  </div>
              <div className={`grid grid-cols-5`}>
                <div>
                  <p className={`-ml-2 md:-ml-0 vertical-text font-bold text-[81px] md:text-[101px]`} style={{color: '#333533'}}>
                    ADVISORS
                  </p>
                </div>
                <div className={`place-items-start col-span-4 grid grid-rows-10 gap-6`}>
                  <LeftMember imgl={bhumika} personl = "Bhumika Mittal" batchl = "UG 24" />
                  <RightMember imgr={rajat} personr = "Rajat Varma" batchr = "UG 24" /> 
                </div>
              </div>
              </div>
        </main>
    )
}