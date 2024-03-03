import { bayon } from "@/utils/fonts";
import diyatripathi from "../../../../public/team/diyatripathi.png";
import ananyagirish from "../../../../public/team/ananyagirish.png";
import adityadogra from "../../../../public/team/adityadogra.jpg";
import anaghabhavsar from "../../../../public/team/anaghabhavsar.jpeg";
import anamahmed from "../../../../public/team/anamahmed.jpeg";
import aryikamehrotra from "../../../../public/team/aryikamehrotra.jpeg";
import eeshajaswami from "../../../../public/team/eeshajaswami.png";
import hrishita from "../../../../public/team/hrishitaghosh.jpg";
import sanjanashenai from "../../../../public/team/sanjanashenai.jpeg";
import LeftMember from "@/components/team/left";
import RightMember from "@/components/team/right";
import LeftMemberForMobile from "@/components/team/ismobile";

export default function Marketing(){
  return (
      <main>
          <p className={`${bayon.className} text-primary text-6xl md:text-7xl font-bold text-shadow text-center`}>
              SOCIAL MEDIA & MARKETING
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
                <div className="place-items-start col-span-4 grid grid-rows-7 gap-6 md:h-[290px]">
                <LeftMember imgl={diyatripathi} personl = "Diya Tripathi" batchl = "UG 25" />
                <RightMember imgr={ananyagirish} personr = "Ananya Raj Girish" batchr = "UG 25" />    
                </div>
                </div>
            <div className={`grid grid-cols-5`}>
              <div>
                <p className={`-ml-2 md:-ml-0 vertical-text font-bold text-[81px] md:text-[101px]`} style={{color: '#333533'}}>
                  TEAM
                </p>
              </div>
              <div className={`place-items-start col-span-4 grid grid-rows-7 gap-6`}>
              <LeftMember imgl={adityadogra} personl = "Aditya Dogra" batchl = "UG 25" />
                  <RightMember imgr={anaghabhavsar} personr = "Anagha Bhavsar" batchr = "UG 25" />
                  <LeftMemberForMobile imgl={anamahmed} personl = "Anam Ahmed" batchl = "UG 27" />
                  <RightMember imgr={aryikamehrotra} personr = "Aryika Mehrotra" batchr = "UG 24" /> 
                  <LeftMemberForMobile imgl={eeshajaswami} personl = "Eeshaja Swami" batchl = "UG 27" />
                  <RightMember imgr={hrishita} personr = "Hrishita Ghosh" batchr = "UG 25" /> 
                  <LeftMemberForMobile imgl={sanjanashenai} personl = "Sanjana Shenai" batchl = "UG 27" />
              </div>
            </div>
            </div>
      </main>
  )
}
