// FadeTitle.tsx
import React, { useState, useEffect } from "react";

const FadeTitle: React.FC = () => {
  const titles = ["Frontend Developer", "MERN Stack Developer"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-primary transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
      {titles[index]}
    </h1>
  );
};

export default FadeTitle;
