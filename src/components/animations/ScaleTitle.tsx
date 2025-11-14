// ScaleTitle.tsx
import React, { useState, useEffect } from "react";

const ScaleTitle: React.FC = () => {
  const titles = ["Frontend Developer", "MERN Stack Developer"];
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setScale(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-primary transition-transform duration-500 ${scale ? "scale-100" : "scale-75"}`}>
      {titles[index]}
    </h1>
  );
};

export default ScaleTitle;
