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
  const calculateTimeLeft = () => {
    const targetDate = '2024-02-01T12:00:00';
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeDifference = targetTime - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      // The target date has passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  });

  return (
    <div className="grid grid-flow-col gap-6 mx-auto mt-[1vh] md:mt-[0vh]">
      <CountdownCard label="Days" value={timeLeft.days} />
      <CountdownCard label="Hours" value={timeLeft.hours} />
      <CountdownCard label="Minutes" value={timeLeft.minutes} />
    </div>
  );
};

export default Countdown;