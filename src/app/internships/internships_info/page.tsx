'use client';

import React from "react";
import { useState, useEffect, useCallback } from "react";
import "./internships_info.css";


interface info  {
  [key: string]: {
    Eligibility: string;
    Deadline: string;
    City: string;
    Filter: string;
    Link: string;
  };
};
const info = {
  "Summer 2024 Research Internship Opportunities Abroad":{
    "Eligibility":"Depends on the program",
    "Deadline":"Depends on the program",
    "City":"Abroad, depends on the program",
    "Filter":"Research",
    "Link":"https://www.linkedin.com/pulse/calendar-summer-2024-research-internship-abroad-ronak-lamba/"
  },
  "Data Science Intern":{
    "Eligibility": "1. Pursuing the final year of college or a Bachelor's degree in Computer Science, Mathematics, Statistics, or other analytical fields is mandatory.\n2. Previous Internship experience or work experience in applying Machine Learning, Statistics, text-mining, fintech analysis, information retrieval, information extraction, AI, deep learning, etc.\n3.Strong in-depth knowledge in different areas of data mining as well as reasonable programming and design skills to manipulate Big Data and build prototypes that work on massive datasets.\n4.Programming knowledge: Hands-on experience in python.\n5.Practical knowledge of ml tools - Panda, RNNs, Scikit-Learn.",
    "Deadline": "Rolling Applications",
    "City": "Bangalore or Remote",
    "Filter": "Industry",
    "Link": "https://wellfound.com/jobs/2724869-data-science-intern"
  },
    "Machine Learning Internship": {
      "Eligibility": "1. are available for the work from home job/internship\n2. can start the work from home job/internship between 13th Oct'23 and 17th Nov'23\n3. are available for duration of 6 months\n4. have relevant skills and interests",
      "Deadline": "27 Oct' 23",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""

    },
    "AI Internship": {
      "Eligibility": "1. are available for full time (in-office) internship\n2. can start the internship between 12th Oct'23 and 16th Nov'23\n3. are available for duration of 6 months\n4. are from or open to relocate to Gurgaon and neighboring cities\n5. have relevant skills and interests",
      "Deadline": "26 Oct' 23",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "General Adversarial Networks Intern at Across the Globe": {
      "Eligibility": "1. Skills needed: Computer Vision, Deep Learning, Machine Learning, Neural Networks \n 2. Are available for the work from home job/internship\n3. Can start the work from home job/internship between 11th Oct'23 and 15th Nov'23\n4. are available for duration of 6 months",
      "Deadline": "25 Oct '23",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "https://internshala.com/internship/detail/software-development-internship-in-pune-mumbai-at-syncious-systems-private-limited1697447197": {
      "Eligibility": "1. are available for full time (in-office) internship\n2. can start the internship between 16th Oct'23 and 20th Nov'23\n3. are available for duration of 6 months\n4. are from or open to relocate to Pune, Mumbai and neighboring cities\n5. have relevant skills and interests",
      "Deadline": "30 october '23",
      "City": "Gurgaon",
      "Filter": "Industry",
      "Link": ""
    },
    "iOS Testing Intern at Across the Globe": {
      "Eligibility": "1. Skills required: Database testing, GUI testing, iOS, Manual Testing, Software Testing\n2. Are available for the work from home job/internship\n\n2. Can start the work from home job/internship between 14th Oct'23 and 18th Nov'23\n\n3. Are available for duration of 6 months",
      "Deadline": "28th Oct '23",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Artificial Neural Networks Intern at Duke and Clyde Innovation Centre": {
      "Eligibility": "1. Skills required: C++, Python, Machine Learning, Deep Learning, NLP, Neural Networks, Unreal Engine\n2. Available for the work from home job/internship\n3. Can start the work from home job/internship between 17th Oct'23 and 21st Nov'23\n\n4. Available for duration of 6 months",
      "Deadline": "31 Oct '23",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "NLP/Deep Learning Intern at Anonimo": {
      "Eligibility": "1. Skills required: Deep Learning, NLP, Python\n2. Are available for the work from home job/internship\n3. Can start the work from home job/internship between 17th Oct'23 and 21st Nov'23\n4. Are available for duration of 3 months",
      "Deadline": "31 Oct '23",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "FullStack Dvl Intern": {
      "Eligibility": "1. are available for the work from home job/internship\n2. can start the work from home job/internship between 18th Oct'23 and 22nd Nov'23\n3. are available for duration of 3 months\n4. have relevant skills and interests",
      "Deadline": "1 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Machine Learning Internship Velozity": {
      "Eligibility": "1. Experiment with the different algorithms on machine learning/deep learning about the use cases considered\n2. Consider an algorithm and take a deeper look at their parameter\n3. Take part in product development based on the needs",
      "Deadline": "31st October 2023",
      "City": "Chennai",
      "Filter": "Industry",
      "Link": ""
    },
    "Frontend Development at Hooman Digital LLP": {
      "Eligibility": "1. Skills required: Animation, CSS, JavaScript, ReactJS, TypeScript\n2. Can start the work from home job/internship between 22nd Oct'23 and 26th Nov'23\n3. Are available for duration of 2 months",
      "Deadline": "5 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Machine Learning at Truefy": {
      "Eligibility": "1. Skills required: Computer Vision, Deep Learning, Machine Learning, NLP, Python, Selenium\n2. Can start the work from home job/internship between 21st Oct'23 and 25th Nov'23\n3. Are available for duration of 6 months",
      "Deadline": "5 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "SaaS Web Development at Zylu Business Solutions": {
      "Eligibility": "1. Skills required: CSS, HTML, Digital Marketing, Responsive Design, UI/UX Design, WordPress\n2. Can start the work from home job/internship between 21st Oct'23 and 25th Nov'23\n3. Are available for duration of 3 months",
      "Deadline": "4 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Web Development at Eduminatti": {
      "Eligibility": "1. Skills required: Spoken and Written English Proficiency\n2. Can start the work from home job/internship between 21st Oct'23 and 25th Nov'23\n3. Are available for duration of 2 months",
      "Deadline": "4 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Shopify and Web Development at AltaSierra": {
      "Eligibility": "1. Skills required: Spoken and Written English Proficiency, HTML, CSS\n2. Can start the work from home job/internship between 21st Oct'23 and 25th Nov'23\n3. Are available for duration of 2 months",
      "Deadline": "4 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Webflow and Web Development at AltaSierra": {
      "Eligibility": "1. Skills required: Spoken and Written English Proficiency, HTML, CSS, Webflow\n2. Can start the work from home job/internship between 21st Oct'23 and 25th Nov'23\n3. Are available for duration of 2 months",
      "Deadline": "4 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "AI Work at JMedia Corporation": {
      "Eligibility": "1. Skills required: Deep Learning, Machine Learning, NLP, Neural Networks\n2. Can work from 10:30 am - 10:00 am Indian Standard Time (as the company is based outside of India & their local work timings are 12:00 am - 11:30 pm Central Standard Time)\n3. Can start the work from home job/internship between 22nd Oct'23 and 26th Nov'23\n4. Are available for duration of 6 months",
      "Deadline": "5 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Software Development at TechWhoop": {
      "Eligibility": "1. Skills required: CSS, HTML, JavaScript, MySQL, Next.js, Node.js, Python, ReactJS\n2. Can start the work from home job/internship between 20th Oct'23 and 24th Nov'23\n3. Are available for duration of 1 month",
      "Deadline": "3 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Game Development at Plattr Labs": {
      "Eligibility": "1. Skills required: Blender 3D, Unity, Unity Engine, C#\n2. Can start the work from home job/internship between 19th Oct'23 and 23rd Nov'23\n3. Are available for duration of 6 months",
      "Deadline": "2 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Machine Learning at Velozity Global Solutions": {
      "Eligibility": "1. Skills required: Machine Learning, Deep Learning, Power BI, NLP, Data Science, Tableau, SAS Programming, SQL for Data Analytics, Clinical Trial Analysis and Reporting\n2. Can start the work from home job/internship between 19th Oct'23 and 23rd Nov'23\n3. Are available for duration of 2 months",
      "Deadline": "2 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Software Development at Velozity Global Solutions": {
      "Eligibility": "1. Skills required: Java, JavaScript, MySQL\n2.  Can start the work from home job/internship between 19th Oct'23 and 23rd Nov'23\n3. Are available for duration of 3 months",
      "Deadline": "2 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Artificial Intelligence and Machine Learning at Renub Research": {
      "Eligibility": "1. Skills required: Machine Learning, Deep Learning, Power BI, NLP, Data Science, Tableau, SAS Programming, SQL for Data Analytics, Clinical Trial Analysis and Reporting, AWS\n2. Can start the work from home job/internship between 18th Oct'23 and 22nd Nov'23\n3. Are available for duration of 3 months",
      "Deadline": "1 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Data Annotation at KoiReader Technologies": {
      "Eligibility": "1. Skills required: Computer Vision, Image Processing\n2. Can start the work from home job/internship between 18th Oct'23 and 22nd Nov'23\n3. Are available for duration of 3 months",
      "Deadline": "1 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "Machine Learning, Deep Learning and AI at Hooman Digital LLP": {
      "Eligibility": "1. Skills required: AWS, APIs, Deep Learning, Docker, Flask, Machine Learning, NLP\n2. Can start the work from home job/internship between 17th Oct'23 and 21st Nov'23\n3. Are available for duration of 2 months",
      "Deadline": "1 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    },
    "React Native (Android/iOS) at Linked List Technologies LLP": {
      "Eligibility": "1. Skills required: MongoDB, Next.js, Node.js, ReactJS, ReactNative",
      "Deadline": "1 Nov 2023",
      "City": "Remote",
      "Filter": "Industry",
      "Link": ""
    }
  };

  function shortenString(inputString: string, maxLength: number): string {
    if (inputString.length <= maxLength) {
      return inputString;
    } else {
      return inputString.substring(0, maxLength - 3) + '...';
    }
  }
  

  interface CardProps {
    name: string;
    eligibility: string;
    deadline: string;
    city: string;
    link: string;
    isMobile: boolean;
  }
  
  interface CardInfoProps {
    text: string;
  }

 
  function Card({name, eligibility, deadline, city, link, isMobile}: CardProps) {

    var f_name = name;
    var f_eligibility = eligibility;
    var max = isMobile ? 15 : 50;

    name = shortenString(name, max);
    eligibility = shortenString(eligibility, max+40);
    if (deadline.length == 0) {
        deadline = "N/A"
    }
    const [showFName, setShowFName] = useState(false);
    const [showFEl, setShowFEl] = useState(false);
    const [zindex, setZindex] = useState("1");

    function CardInfo({text}: CardInfoProps) {

        return (
            <div className="card-info" style={isMobile ? {"minWidth" : "0px"} : {}}>
                {text}
            </div>
        )
    }
    
    function mouseChange(fn: any, fn_val: boolean, index: string) {
      fn(fn_val);
      setZindex(index);
    }
    function loadLink(){
      if (link){
        window.open(link);
      }
    }
    return (
        <div className="internships-card" style={isMobile ? {"width": "80%", "height": "auto"} : {"zIndex": zindex}} onClick={loadLink}>
            <div className="card-title" style={{"cursor": "pointer", "zIndex":"1"}} onMouseEnter={() => mouseChange(setShowFName, true, "99")} onMouseLeave={() => mouseChange(setShowFName, false, "1")}>
                Position: {name}
                {showFName && <CardInfo text={f_name}/>}
            </div>
            <div className="card-subtitle" style={{"cursor": "pointer"}} onMouseEnter={() => mouseChange(setShowFEl, true, "99")} onMouseLeave={() => mouseChange(setShowFEl, false, "1")}>
                Eligibility: {eligibility}
                {showFEl && <CardInfo text={f_eligibility}/>}
            </div>
            <p className="card-subtitle">
                Deadline: {deadline}
            </p>
            <p className="card-subtitle">
                City: {city}
            </p>

        </div>
    )
  }
  const useMediaQuery = (width:number) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e:any) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };

export default function Internships_Info() {

    const [isMobile, setIsMobile] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(1);

    var m = useMediaQuery(768);
    useEffect(()=> {
      setIsMobile(m);
    }, [m])
    
    const keys = Object.keys(info);
    var rows = []
    for (var i = 0; i< keys.length; i++) {
      var key = keys[i];
        if (!isMobile) {
            var row = [];
        row.push(<Card isMobile={false} name={keys[i]} eligibility={(info as info)[key]["Eligibility"]} deadline={(info as info)[key]["Deadline"]} city={(info as info)[key]["City"]} link={(info as info) [key] ["Link"]} />);
        if (i < keys.length-1) {
            i = i+1;
            key = keys[i]
            row.push(<Card isMobile={false} name={key} eligibility={(info as info)[key]["Eligibility"]} deadline={(info as info)[key]["Deadline"]} city={(info as info)[key]["City"]} link={(info as info)[key]["Link"]} />);
        }

        rows.push(
            <div className="internships-row">
                {row}
            </div>
        )
        } else {
            rows.push(<Card isMobile={true} name={keys[i]} eligibility={(info as info)[key]["Eligibility"]} deadline={(info as info)[key]["Deadline"]} city={(info as info)[key]["City"]} link={(info as info)[key]["Link"]} />);
        }
    }

    if (!isMobile) {
      return (
        <div className="internships-info">
            <h1 className="internships_info_title">
            INTERNSHIPS
            </h1>
            {rows}
        </div>
    )
    } else {
      return (
        <div className="internships-info-m">
          <h1 className="internships_info_title">
            INTERNSHIPS
          </h1>
          {rows}
        </div>
      )
    }
}
