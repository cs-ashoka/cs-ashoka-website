import { bayon } from "@/utils/fonts";
import React from "react";
import { useState, useEffect } from "react";
import "./internships_info.css";


const info = {
    "Morgan Stanley Technology Analyst Program": {
      "Eligibility": "Final year",
      "Deadline": "",
      "City": "Mumbai",
      "Filter": "Industry"
    },
    "Machine Learning Internship": {
      "Eligibility": "1. are available for the work from home job/internship\n2. can start the work from home job/internship between 13th Oct'23 and 17th Nov'23\n3. are available for duration of 6 months\n4. have relevant skills and interests",
      "Deadline": "27 Oct' 23",
      "City": "Remote",
      "Filter": "Industry"
    },
    "AI Internship": {
      "Eligibility": "1. are available for full time (in-office) internship\n2. can start the internship between 12th Oct'23 and 16th Nov'23\n3. are available for duration of 6 months\n4. are from or open to relocate to Gurgaon and neighboring cities\n5. have relevant skills and interests",
      "Deadline": "26 Oct' 23",
      "City": "Remote",
      "Filter": "Industry"
    },
    "General Adversarial Networks Intern at Across the Globe": {
      "Eligibility": "1. Skills needed: Computer Vision, Deep Learning, Machine Learning, Neural Networks \n 2. Are available for the work from home job/internship\n3. Can start the work from home job/internship between 11th Oct'23 and 15th Nov'23\n4. are available for duration of 6 months",
      "Deadline": "25 Oct '23",
      "City": "Remote",
      "Filter": "Industry"
    },
    "https://internshala.com/internship/detail/software-development-internship-in-pune-mumbai-at-syncious-systems-private-limited1697447197": {
      "Eligibility": "1. are available for full time (in-office) internship\n2. can start the internship between 16th Oct'23 and 20th Nov'23\n3. are available for duration of 6 months\n4. are from or open to relocate to Pune, Mumbai and neighboring cities\n5. have relevant skills and interests",
      "Deadline": "30 october '23",
      "City": "Gurgaon",
      "Filter": "Industry"
    },
    "https://uceap.universityofcalifornia.edu/programs/new-delhi-summer": {
      "Eligibility": "Min 2.5 CGPA Year So,Jr,Sr",
      "Deadline": "",
      "City": "New Delhi",
      "Filter": "Industry"
    },
    "iOS Testing Intern at Across the Globe": {
      "Eligibility": "1. Skills required: Database testing, GUI testing, iOS, Manual Testing, Software Testing\n2. Are available for the work from home job/internship\n\n2. Can start the work from home job/internship between 14th Oct'23 and 18th Nov'23\n\n3. Are available for duration of 6 months",
      "Deadline": "28th Oct '23",
      "City": "Remote",
      "Filter": "Industry"
    },
    "https://in.indeed.com/q-computer-science-internships-jobs.html?vjk=afda438cd6eda86f": {
      "Eligibility": "Bachelors",
      "Deadline": "",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Node.js Development Intern at Across the Globe": {
      "Eligibility": "1. Skills required: JavaScript. MongoDB, MySQL, Node.js\n2. Available for the work from home job/internship\n\n3. Can start the work from home job/internship between 11th Oct'23 and 15th Nov'23\n\n4. Available for duration of 6 months",
      "Deadline": "",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Artificial Neural Networks Intern at Duke and Clyde Innovation Centre": {
      "Eligibility": "1. Skills required: C++, Python, Machine Learning, Deep Learning, NLP, Neural Networks, Unreal Engine\n2. Available for the work from home job/internship\n3. Can start the work from home job/internship between 17th Oct'23 and 21st Nov'23\n\n4. Available for duration of 6 months",
      "Deadline": "31 Oct '23",
      "City": "Remote",
      "Filter": "Industry"
    },
    "NLP/Deep Learning Intern at Anonimo": {
      "Eligibility": "1. Skills required: Deep Learning, NLP, Python\n2. Are available for the work from home job/internship\n3. Can start the work from home job/internship between 17th Oct'23 and 21st Nov'23\n4. Are available for duration of 3 months",
      "Deadline": "31 Oct '23",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Data Science Intern at Letsintern.in": {
      "Eligibility": "1. Fluent in English\n2. Desire to do web development",
      "Deadline": "Not given",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Backend Development at StreamMoney": {
      "Eligibility": "1. Skills required: Node.js\n2. Are available for the work from home job/internship\n 3. Can start the work from home job/internship between 5th Oct'23 and 9th Nov'23\n 4. Are available for duration of 2 months",
      "Deadline": "Ongoing",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Junior Cybersecurity Specialist at TalentKompass": {
      "Eligibility": "1. Basic understanding of cybersecurity principles and practices\n2. Familiarity with network protocols, firewalls, and security technologies\n3. Excellent written and verbal communication skills in English\n4. Ability to work independently and as part of a team\n5. Strong analytical and problem-solving skills\n6. Knowledge of various operating systems, including Windows, Linux, and macOS\n7. Experience with cybersecurity tools, such as Wireshark or Metasploit, is a plus\n8. Familiarity with programming languages, such as Python, is a plus",
      "Deadline": "Ongoing",
      "City": "Remote",
      "Filter": "Industry"
    },
    "FullStack Dvl Intern": {
      "Eligibility": "1. are available for the work from home job/internship\n2. can start the work from home job/internship between 18th Oct'23 and 22nd Nov'23\n3. are available for duration of 3 months\n4. have relevant skills and interests",
      "Deadline": "1 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Machine Learning Internship Velozity": {
      "Eligibility": "1. Experiment with the different algorithms on machine learning/deep learning about the use cases considered\n2. Consider an algorithm and take a deeper look at their parameter\n3. Take part in product development based on the needs",
      "Deadline": "31st October 2023",
      "City": "Chennai",
      "Filter": "Industry"
    },
    "Software Intern (Frontend)": {
      "Eligibility": "Currently pursuing a Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
      "Deadline": "",
      "City": "Hybrid Delhi NCR",
      "Filter": "Industry"
    },
    "AI and Machine Learning Intern Liamliang Digital Avenue private limited": {
      "Eligibility": "Bachelors or Masters in computer science, engineering, data science, applied mathematics, or equivalent. (must graduate)",
      "Deadline": "",
      "City": "Delhi NCR",
      "Filter": "Industry"
    },
    "Unity Game Developer Intern - job post Dhanadhipati Technologies LLP": {
      "Eligibility": "Enrolled in or recently graduated from a relevant degree program (Computer Science, Game Development, Interactive Media, etc.).",
      "Deadline": "",
      "City": "Remote",
      "Filter": "Industry"
    },
    "https://geeksgod.com/summer-internships-2023-by-commscope/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic": {
      "Eligibility": "Actively pursuing a bachelor’s (upcoming juniors & seniors) or master’s or Ph.D",
      "Deadline": "",
      "City": "Noida",
      "Filter": "Industry"
    },
    "Deloitte A&A -Data Scientist - AI POD5": {
      "Eligibility": "Undergraduate degree in a quantitative field (computer science, engineering, mathematics, physics, machine learning, statistics)",
      "Deadline": "",
      "City": "Banglore",
      "Filter": "Industry"
    },
    "Intern Web Developer - job post kaleidoskop": {
      "Eligibility": "Enrolled in or recently completed a relevant degree program (e.g., Computer Science, Web Development, Software Engineering, etc.).",
      "Deadline": "",
      "City": "Delhi/remote",
      "Filter": "Industry"
    },
    "Deep Learning Intern - job post Constems-AI": {
      "Eligibility": "Currently pursuing or recently completed a degree in Computer Science,",
      "Deadline": "",
      "City": "Noida",
      "Filter": "Industry"
    },
    "Internship Program - job post Outshine Solutions": {
      "Eligibility": "High Educational Grades\nSoftware design & development, SAAS, SEO, Hosting or customer support experience\nExcellent written and spoken English\nExcellent Analytical abilities,\nIncredible eye for detailing",
      "Deadline": "",
      "City": "Noida",
      "Filter": "Industry"
    },
    "Frontend Development at Hooman Digital LLP": {
      "Eligibility": "1. Skills required: Animation, CSS, JavaScript, ReactJS, TypeScript\n2. Can start the work from home job/internship between 22nd Oct'23 and 26th Nov'23\n3. Are available for duration of 2 months",
      "Deadline": "5 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Machine Learning at Truefy": {
      "Eligibility": "1. Skills required: Computer Vision, Deep Learning, Machine Learning, NLP, Python, Selenium\n2. Can start the work from home job/internship between 21st Oct'23 and 25th Nov'23\n3. Are available for duration of 6 months",
      "Deadline": "5 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "SaaS Web Development at Zylu Business Solutions": {
      "Eligibility": "1. Skills required: CSS, HTML, Digital Marketing, Responsive Design, UI/UX Design, WordPress\n2. Can start the work from home job/internship between 21st Oct'23 and 25th Nov'23\n3. Are available for duration of 3 months",
      "Deadline": "4 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Web Development at Eduminatti": {
      "Eligibility": "1. Skills required: Spoken and Written English Proficiency\n2. Can start the work from home job/internship between 21st Oct'23 and 25th Nov'23\n3. Are available for duration of 2 months",
      "Deadline": "4 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Shopify and Web Development at AltaSierra": {
      "Eligibility": "1. Skills required: Spoken and Written English Proficiency, HTML, CSS\n2. Can start the work from home job/internship between 21st Oct'23 and 25th Nov'23\n3. Are available for duration of 2 months",
      "Deadline": "4 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Webflow and Web Development at AltaSierra": {
      "Eligibility": "1. Skills required: Spoken and Written English Proficiency, HTML, CSS, Webflow\n2. Can start the work from home job/internship between 21st Oct'23 and 25th Nov'23\n3. Are available for duration of 2 months",
      "Deadline": "4 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "AI Work at JMedia Corporation": {
      "Eligibility": "1. Skills required: Deep Learning, Machine Learning, NLP, Neural Networks\n2. Can work from 10:30 am - 10:00 am Indian Standard Time (as the company is based outside of India & their local work timings are 12:00 am - 11:30 pm Central Standard Time)\n3. Can start the work from home job/internship between 22nd Oct'23 and 26th Nov'23\n4. Are available for duration of 6 months",
      "Deadline": "5 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Software Development at TechWhoop": {
      "Eligibility": "1. Skills required: CSS, HTML, JavaScript, MySQL, Next.js, Node.js, Python, ReactJS\n2. Can start the work from home job/internship between 20th Oct'23 and 24th Nov'23\n3. Are available for duration of 1 month",
      "Deadline": "3 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Game Development at Plattr Labs": {
      "Eligibility": "1. Skills required: Blender 3D, Unity, Unity Engine, C#\n2. Can start the work from home job/internship between 19th Oct'23 and 23rd Nov'23\n3. Are available for duration of 6 months",
      "Deadline": "2 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Machine Learning at Velozity Global Solutions": {
      "Eligibility": "1. Skills required: Machine Learning, Deep Learning, Power BI, NLP, Data Science, Tableau, SAS Programming, SQL for Data Analytics, Clinical Trial Analysis and Reporting\n2. Can start the work from home job/internship between 19th Oct'23 and 23rd Nov'23\n3. Are available for duration of 2 months",
      "Deadline": "2 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Software Development at Velozity Global Solutions": {
      "Eligibility": "1. Skills required: Java, JavaScript, MySQL\n2.  Can start the work from home job/internship between 19th Oct'23 and 23rd Nov'23\n3. Are available for duration of 3 months",
      "Deadline": "2 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Artificial Intelligence and Machine Learning at Renub Research": {
      "Eligibility": "1. Skills required: Machine Learning, Deep Learning, Power BI, NLP, Data Science, Tableau, SAS Programming, SQL for Data Analytics, Clinical Trial Analysis and Reporting, AWS\n2. Can start the work from home job/internship between 18th Oct'23 and 22nd Nov'23\n3. Are available for duration of 3 months",
      "Deadline": "1 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Data Annotation at KoiReader Technologies": {
      "Eligibility": "1. Skills required: Computer Vision, Image Processing\n2. Can start the work from home job/internship between 18th Oct'23 and 22nd Nov'23\n3. Are available for duration of 3 months",
      "Deadline": "1 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "Machine Learning, Deep Learning and AI at Hooman Digital LLP": {
      "Eligibility": "1. Skills required: AWS, APIs, Deep Learning, Docker, Flask, Machine Learning, NLP\n2. Can start the work from home job/internship between 17th Oct'23 and 21st Nov'23\n3. Are available for duration of 2 months",
      "Deadline": "1 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    },
    "React Native (Android/iOS) at Linked List Technologies LLP": {
      "Eligibility": "1. Skills required: MongoDB, Next.js, Node.js, ReactJS, ReactNative",
      "Deadline": "1 Nov 2023",
      "City": "Remote",
      "Filter": "Industry"
    }
  };

  function shortenString(inputString, maxLength) {
    if (inputString.length <= maxLength) {
      return inputString;
    } else {
      return inputString.substring(0, maxLength - 3) + '...';
    }
  }
  
  function Card({name, eligibility, deadline, city}) {

    var f_name = name;
    var f_eligibility = eligibility;
    var max = 50;

    name = shortenString(name, max);
    eligibility = shortenString(eligibility, max+40);
    if (deadline.length == 0) {
        deadline = "N/A"
    }
    const [showFName, setShowFName] = useState(false);
    const [showFEl, setShowFEl] = useState(false);

    function CardInfo({text}) {

        return (
            <div className="card-info">
                {text}
            </div>
        )
    }
    

    return (
        <div className="internships-card">
            <div className="card-title" style={{"cursor": "pointer"}} onMouseEnter={() => setShowFName(true)} onMouseLeave={() => setShowFName(false)}>
                Employer: {name}
                {showFName && <CardInfo text={f_name}/>}
            </div>
            <div className="card-subtitle" style={{"cursor": "pointer"}} onMouseEnter={() => setShowFEl(true)} onMouseLeave={() => setShowFEl(false)}>
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
export default function Internships_Info() {

    const [isMobile, setIsMobile] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(1);

    function handleWindowSizeChange() {
        setIsMobile(window.innerWidth <= 500);
      }
      
      useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
        };
      }, []);

      useEffect(()=> {
        handleWindowSizeChange();
      }, [])
    
    const keys = Object.keys(info);
    var rows = []
    for (var i = 0; i< keys.length; i++) {
        if (!isMobile) {
            var row = [];
        row.push(<Card name={keys[i]} eligibility={info[keys[i]]["Eligibility"]} deadline={info[keys[i]]["Deadline"]} city={info[keys[i]]["City"]} />);
        if (i < keys.length-1) {
            i = i+1;
            row.push(<Card name={keys[i]} eligibility={info[keys[i]]["Eligibility"]} deadline={info[keys[i]]["Deadline"]} city={info[keys[i]]["City"]} />);
        }

        rows.push(
            <div className="internships-row">
                {row}
            </div>
        )
        } else {
            rows.push(<Card name={keys[i]} eligibility={info[keys[i]]["Eligibility"]} deadline={info[keys[i]]["Deadline"]} city={info[keys[i]]["City"]} />);
        }
    }

    return (
        <div className="internships-info">
            <h1 className="internships_info_title">
            INTERNSHIPS
            </h1>
            {rows}
        </div>
    )
}
