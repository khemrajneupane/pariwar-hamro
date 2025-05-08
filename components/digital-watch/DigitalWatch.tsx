"use client"; // Mark as Client Component

import React, { useState, useEffect } from "react";

const DigitalWatch: React.FC = () => {
  // Initialize with null and update after mount
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial time only on client side
    setTime(new Date());

    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date: Date | null): string => {
    if (!date) return "--:--:--"; // Placeholder during SSR
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return <div>{formatTime(time)}</div>;
};

export default DigitalWatch;
