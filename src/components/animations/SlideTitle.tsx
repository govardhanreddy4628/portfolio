// SlideTitle.tsx
import React, { useState, useEffect } from "react";

const SlideTitle: React.FC = () => {
  const titles = ["Frontend Developer", "MERN Stack Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="overflow-hidden h-12 text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-primary">
      <span
        className="block transition-transform duration-500"
        style={{ transform: `translateY(-${index * 100}%)` }}
      >
        {titles.map((title) => (
          <span key={title} className="block h-12">{title}</span>
        ))}
      </span>
    </h1>
  );
};

export default SlideTitle;
