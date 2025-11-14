// TypewriterTitle.tsx
import React, { useState, useEffect } from "react";

const TypewriterTitle: React.FC = () => {
  const titles = ["Frontend Developer", "MERN Stack Developer"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (typing) {
        setText(titles[index].slice(0, i + 1));
        i++;
        if (i === titles[index].length) setTyping(false);
      } else {
        setText(titles[index].slice(0, i - 1));
        i--;
        if (i === 0) {
          setTyping(true);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [index, typing]);

  return <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-primary bg-transparent">{text}</h1>;
};

export default TypewriterTitle;
