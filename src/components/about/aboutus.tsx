import ToExpand from '../about/toexpand';
import AlrExpand from '../about/alrexpand';
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import Search from "../../../public/img/search.png";
import Image from 'next/image';

interface questionText {
    ques: string; 
}

const Question: React.FC<questionText> = ({ques}) => {
    return (
        <div className={`rounded-[30px] bg-secondary p-2 flex items-center mb-4`}>
                <span className={`mr-12`}>
                    <p className={`font-extralight drop-shadow-[2px_3px_3px_rgba(0,0,0,0.3)] ml-2`}>
                        {ques}
                    </p>
                </span>
                <Image src={Search}
                alt = "Search Icon"
                quality={100}
                className="ml-auto"/>
            </div>
    );
};

interface answerText {
    ans: React.ReactNode;
}

const Answer: React.FC<answerText> = ({ans}) => {
    return(    
    <p className={`mt-6 mb-8 p-4 rounded-[30px] font-extralight bg-tertiary drop-shadow-[2px_3px_3px_rgba(0,0,0,0.3)]`} style={{ color: 'black'}}>
    {ans}
    </p>
    );
};



const Queries: React.FC = () => {
  return (
    <HydrationProvider>
    <div className={`mt-4 p-4 md:p-0 flex flex-col items-center`}>
    <Client><AlrExpand title={<Question ques="What is the Computer Science Society? And What does it do?"/>} content={<Answer ans={
        <p> <span className="text-primary font-bold">The Computer Science Society </span> is an academic society that aims to create opportunities and resources through a host of activities. We were founded in 2016 and this will be our 7th year of being a functioning, fulfilling, and fun society!</p>} />} className="md:w-3/5"/>
      <ToExpand title={<Question ques="What are the benefits of joining the Computer Science Society?"/>} content={<Answer ans={
        <p> Networking Opportunities: Engage with fellow enthusiasts in the field; collaborate on projects, share ideas, and connect as part of a community. <br /> <br/>
        Skill Development: Enhance your coding and technical skills while contributing to event planning, workshops, and hackathons. Get the chance to make a tangible impact in CS from the ground up. <br /> <br/>
        Exclusive access to Society Events: Enjoy member-exclusive access to workshops, meetings, and more. Also join in on fun events like game nights, coding opps, and discussions! <br /><br/>
        External Reach: Interact with other CS communities nationwide. Gain valuable industry insights through interactions with professionals in the field. <br />
            </p>}/>} className="md:w-3/5"/>
      <ToExpand title={<Question ques="When will inductions for the Computer Science Society open?"/>} content={<Answer ans={
        <p>We&apos;re glad you&apos;re interested in joining us. <br/> Inductions for our <span className="font-bold"> Dev Vertical </span> open <span className="italic">soon! </span> More details are in your Ashoka inbox.</p>}/>} className="md:w-3/5" /></Client>
    </div>
    </HydrationProvider>
  );
};

export default Queries;
