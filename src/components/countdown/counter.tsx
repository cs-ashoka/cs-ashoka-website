"use client";

// components/Countdown.tsx
import React, { useEffect, useState } from 'react';
import { bayon } from "@/utils/fonts";

interface CountdownProps {
  label: string;
  value: number;
}

const CountdownCard: React.FC<CountdownProps> = ({ label, value }) => {
  return (
    <div className="inline-block h-20 md:h-32 w-20 md:w-36 bg-gray rounded-md text-white text-center">
      <div className={`w-full h-3 bg-primary`}></div>
      <div className={`${bayon.className} text-white-500 text-4xl md:text-6xl mt-1 md:mt-4`}>{value}</div>
      <div className={`${bayon.className} md:mt-1 text-sm md:text-xl font-bold mb-2`}>{label}</div>
    </div>
  );
};

const Countdown: React.FC = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Your countdown logic goes here to update the 'time' state
    const interval = setInterval(() => {
      // Example countdown logic (replace with your actual logic)
      setTime((prevTime) => ({
        hours: prevTime.hours + 1,
        minutes: prevTime.minutes + 1,
        seconds: prevTime.seconds + 1,
      }));
    }, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Ensure the effect runs only once on mount

  return (
    <div className="grid grid-flow-col gap-6 mx-auto mt-[1vh] md:mt-[0vh]">
      <CountdownCard label="Days" value={time.hours} />
      <CountdownCard label="Hours" value={time.minutes} />
      <CountdownCard label="Minutes" value={time.seconds} />
    </div>
  );
};

export default Countdown;