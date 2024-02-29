import React, { useState, useRef, useEffect } from "react";

const CountDown = () => {
  const [countdownDay, setCountdownDay] = useState("00");
  const [countdownHour, setCountdownHour] = useState("00");
  const [countdownMinute, setCountdownMinute] = useState("00");
  const [countdownSecond, setCountdownSecond] = useState("00");

  let interval = useRef();

  const setTimer = () => {
    const countDownDate = new Date("April 08,2024 00:00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setCountdownDay(days);
        setCountdownHour(hours);
        setCountdownMinute(minutes);
        setCountdownSecond(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    setTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="w-fit flex flex-row justify-between items-stretch gap-1 p-2 sm:p-4 md:text-4xl text-[#333] md:mr-8 sm:mt-12 mt-4">
      <div className="p-1 sm:p-4 bg-black/70 text-white font-bold sm:font-normal sm:text-3xl rounded font-mono flex items-end">
        {countdownDay} <span className="text-[.7rem] sm:text-2xl">days</span>
      </div>
      :
      <div className="p-1 sm:p-4 bg-black/70 text-white font-bold sm:font-normal sm:text-3xl rounded font-mono flex items-end">
        {countdownHour} <span className="text-[.7rem] sm:text-2xl">Hrs</span>
      </div>
      :
      <div className="p-1 sm:p-4 bg-black/70 text-white font-bold sm:font-normal sm:text-3xl rounded font-mono flex items-end">
        {countdownMinute} <span className="text-[.7rem] sm:text-2xl">Mins</span>
      </div>
      :
      <div className="p-1 sm:p-4 bg-black/70 text-white font-bold sm:font-normal sm:text-3xl rounded font-mono flex items-end">
        {countdownSecond} <span className="text-[.7rem] sm:text-2xl">Secs</span>
      </div>
    </div>
  );
};

export default CountDown;
