import { bayon } from "@/utils/fonts";
import kahaan from "../../../../public/team/kahaan.png";
import ayushkishor from "../../../../public/team/ayushkishor.jpeg";
import manyagarg from "../../../../public/team/manyagarg.jpg";
import karnavpopat from "../../../../public/team/karnavpopat.png";
import maaherbhagwagar from "../../../../public/team/maaherbhagwagar.png";
import mihiraggarwal from "../../../../public/team/mihiraggarwal.jpg";
import shivanshverma from "../../../../public/team/shivanshverma.jpg";
import suyogjoshi from "../../../../public/team/suyogjoshi.jpeg";
import tanmayjalan from "../../../../public/team/tanmayjalan.jpg";
import zivbaretto from "../../../../public/team/zivbaretto.jpeg";
import LeftMember from "@/components/team/left";
import RightMember from "@/components/team/right";
import LeftMemberForMobile from "@/components/team/ismobile";

export default function Events(){
  return (
      <main>
          <p className={`${bayon.className} text-primary text-6xl md:text-7xl font-bold text-shadow text-center`}>
              EVENTS
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
                <LeftMember imgl={kahaan} personl = "Kahaan Shah" batchl = "UG 24" />
                </div>
                </div>
            <div className={`grid grid-cols-5`}>
              <div>
                <p className={`-ml-2 md:-ml-0 vertical-text font-bold text-[81px] md:text-[101px]`} style={{color: '#333533'}}>
                  TEAM
                </p>
              </div>
              <div className={`place-items-start col-span-4 grid grid-rows-10 gap-6`}>
                  <LeftMember imgl={ayushkishor} personl = "Ayush Kishor" batchl = "UG 25" />
                  <RightMember imgr={karnavpopat} personr = "Karnav Popat" batchr = "UG 24" /> 
                  <LeftMemberForMobile imgl={maaherbhagwagar} personl = "Maaher Bhagwagar" batchl = "UG 27" />
                  <RightMember imgr={manyagarg} personr = "Manya Garg" batchr = "UG 25" /> 
                  <LeftMemberForMobile imgl={mihiraggarwal} personl = "Mihir Aggarwal" batchl = "UG 25" />
                  <RightMember imgr={shivanshverma} personr = "Shivansh Verma" batchr = "UG 27" /> 
                  <LeftMemberForMobile imgl={suyogjoshi} personl = "Suyog Joshi" batchl = "UG 24" />
                  <RightMember imgr={tanmayjalan} personr = "Tanmay Jalan" batchr = "UG 25" /> 
                  <LeftMemberForMobile imgl={zivbaretto} personl = "Ziv Baretto" batchl = "UG 25" />
              </div>
            </div>
            </div>
      </main>
  )
}