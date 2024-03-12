import { bayon } from "@/utils/fonts";
import LeftMember from "@/components/team/left";
import RightMember from "@/components/team/right";
import LeftMemberForMobile from "@/components/team/leftformobile";

export default function Events(){
  return (
      <main>
          <p className={`${bayon.className} text-primary text-6xl md:text-7xl font-bold text-shadow text-center`}>
              DEV VERTICAL
          </p>
          <p className="mt-6 md:mt-0 ml-10 md:ml-28 italic ml-4 font-bold text-[41px] md:text-[101px]" style={{color: '#333533'}}> 
            COMING SOON! 
          </p>
      </main>
  )
}