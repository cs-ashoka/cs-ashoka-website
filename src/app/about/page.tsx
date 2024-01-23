import Image from "next/image";
import { bayon } from "@/utils/fonts";
import Background from "../../../public/img/aboutbg.png";
import Search from "../../../public/img/search.png";
import MeetTheTeam from '@/components/team/box';
export default function about(){
    return (
        <>
        <main className={`flex w-full overflow-hidden`}>
            <div className="-z-10 bottom-0 absolute w-full h-full overflow-hidden">
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
            <div className={`w-full mx-auto flex flex-col items-center justify-center p-4`}>
                    <div className={`rounded-[30px] bg-secondary md:w-3/5 p-2 content flex grow`}>
                    <p className={`font-extralight drop-shadow-[2px_3px_3px_rgba(0,0,0,0.3)] flex items-center`}
                    >
                        What is the Computer Science Society? And what does it do?
                    </p> 
                    <Image
                        src ={Search} 
                        alt="Search Icon"
                        quality={100}
                        className="ml-auto"
                        />
                    </div>
                    <p className={`mt-6 p-4 rounded-[30px] font-extralight bg-tertiary drop-shadow-[2px_3px_3px_rgba(0,0,0,0.3)] md:w-3/5`} style={{ color: 'black'}}>
                    An academic society that aims to create opportunities and resources through a host of activities. We were founded in 2016 and this will be our 7th year of being a functioning, fulfilling, and fun society! 
                    </p>
                    <hr className="border-1 mt-8 w-1/2"></hr>
                <div className={`w-full mt-8 mb-8`}>
                    <p className={`${bayon.className} text-primary text-4xl text-center`}>
                        MEET OUR TEAM
                    </p>
                </div>
                <div className={`${bayon.className} text-center text-3xl flex items-center text-tertiary grid gap-8 grid-cols-2 md:grid-cols-5`}>
                    <MeetTheTeam type = "CORE" href= 'about/core'/>
                    <MeetTheTeam type = "SOCIAL MEDIA AND MARKETING" href="about/marketing" />
                    <MeetTheTeam type = "OUTREACH AND LOGISTICS" href = "about/outreachlogs" />
                    <MeetTheTeam type = "EVENTS" href = "about/events" />
                    <MeetTheTeam type = "FINANCE" href = "about/finance" />
                </div>
            </div>
        </main></>
    );
};
