// Hero02_Blob.jsx
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useState,useEffect } from "react";
import profileImage from "@/assets/profilePicWithoutBackground2.png";
import { Button } from "./ui/button";

export default function Hero2(){
  const titles=["Frontend Developer","MERN Stack Developer","UI Stylist"];
  const [i,setI]=useState(0); const [fade,setFade]=useState(true);
  useEffect(()=>{const t=setInterval(()=>{setFade(false);setTimeout(()=>{setI(p=> (p+1)%titles.length);setFade(true);},400);},2800);return()=>clearInterval(t);},[]);
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 relative overflow-hidden">
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-between z-10">
        <div className="max-w-xl space-y-6">
          <p className="text-primary text-2xl">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold">Govardhan <span className="text-primary">Reddy</span></h1>
          <h2 className={`text-3xl font-bold ${fade?"opacity-100":"opacity-0"} transition-opacity`}>{titles[i]}</h2>
          <p className="text-lg text-muted-foreground">Developer crafting beautiful, performant web experiences.</p>
          <div className="flex gap-4"><Button size="lg" variant="outline" asChild><a href="#projects">Work</a></Button><Button size="lg" variant="outline" asChild><a href="#contact">Contact</a></Button></div>
        </div>

        <div className="relative w-72 h-72 md:w-[360px] md:h-[360px]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-400/20 to-yellow-300/20 blur-3xl rounded-full animate-blob"></div>
          <img src={profileImage} alt="profile" className="relative w-full h-full object-cover rounded-[60%_40%_70%_30%/_40%_70%_30%_60%] shadow-2xl border-4 border-primary/40 animate-blob-img"/>
        </div>
      </div>

      <style>{`
        @keyframes blob { 0%{border-radius:60% 40% 70% 30%/40% 70% 30% 60%}33%{border-radius:35% 65% 55% 45%/60% 35% 70% 40%}66%{border-radius:55% 45% 40% 60%/45% 75% 40% 55%}100%{border-radius:60% 40% 70% 30%/40% 70% 30% 60%} }
        .animate-blob{animation:blob 6s ease-in-out infinite}
        .animate-blob-img{animation:blob 6s ease-in-out infinite;animation-delay:.3s}
      `}</style>
    </section>
  );
}







 <div className="relative w-80 h-80 md:w-[380px] md:h-[380px]">
          <div className="absolute -inset-6 rounded-[50%] bg-gradient-to-br from-indigo-500/30 to-pink-400/20 blur-3xl transform rotate-6"></div>
          <div className="absolute -inset-14 rounded-[45%] bg-gradient-to-br from-purple-400/30 to-blue-300/20 blur-2xl"></div>
          <div className="relative w-full h-full overflow-hidden rounded-[50%] border border-white/10 shadow-2xl">
            <img src={profileImage} alt="p" className="w-full h-full object-cover"/>
          </div>
        </div>









// Hero06_IrregularPolygon.jsx
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useState,useEffect } from "react";
import profileImage from "@/assets/profilePicWithoutBackground2.png";
import { Button } from "./ui/button";

export default function Hero06(){
  const titles=["Frontend Developer","MERN Stack Developer","UI Stylist"]; const [i,setI]=useState(0); const [fade,setFade]=useState(true);
  useEffect(()=>{const t=setInterval(()=>{setFade(false);setTimeout(()=>{setI(p=> (p+1)%titles.length);setFade(true);},400);},2800);return()=>clearInterval(t);},[]);
  return(
    <section className="min-h-screen flex items-center px-6 pt-24 relative">
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-between z-10">
        <div className="max-w-xl space-y-6"><p className="text-primary text-2xl">Hello, I'm</p><h1 className="text-5xl md:text-7xl font-bold">Govardhan <span className="text-primary">Reddy</span></h1><h2 className={`text-3xl font-bold ${fade?"opacity-100":"opacity-0"} transition-opacity`}>{titles[i]}</h2><p className="text-lg text-muted-foreground">Developer crafting modern web experiences.</p></div>

        <div className="relative w-72 h-80 md:w-[360px] md:h-[420px]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-teal-400/20 blur-xl rounded-xl" />
          <div className="relative w-full h-full overflow-hidden shadow-2xl clip-irregular border border-white/10">
            <img src={profileImage} alt="p" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>

      <style>{`.clip-irregular{clip-path: polygon(30% 0,70% 10%,100% 30%,85% 65%,60% 90%,30% 100%,10% 65%,0% 30%);}`}</style>
    </section>
  );
}



// Hero12_Diamond.jsx
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useState,useEffect } from "react";
import profileImage from "@/assets/profilePicWithoutBackground2.png";
import { Button } from "./ui/button";

export default function Hero12(){
  const titles=["Frontend Developer","MERN Stack Developer","UI Stylist"]; const [i,setI]=useState(0); const [fade,setFade]=useState(true);
  useEffect(()=>{const t=setInterval(()=>{setFade(false);setTimeout(()=>{setI(p=> (p+1)%titles.length);setFade(true);},400);},2800);return()=>clearInterval(t);},[]);
  return(
    <section className="min-h-screen flex items-center px-6 pt-24 relative">
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-between z-10">
        <div className="max-w-xl space-y-6"><p className="text-primary text-2xl">Hello, I'm</p><h1 className="text-5xl md:text-7xl font-bold">Govardhan <span className="text-primary">Reddy</span></h1><h2 className={`text-3xl font-bold ${fade?"opacity-100":"opacity-0"} transition-opacity`}>{titles[i]}</h2><p className="text-lg text-muted-foreground">Developer crafting modern web experiences.</p></div>

        <div className="relative w-64 h-64 md:w-[340px] md:h-[340px]">
          <div className="absolute inset-0 transform rotate-45 scale-110 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 blur-xl"></div>
          <div className="relative w-full h-full overflow-hidden clip-diamond shadow-2xl">
            <img src={profileImage} alt="p" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
      <style>{`.clip-diamond{clip-path: polygon(50% 0%,100% 50%,50% 100%,0% 50%);}`}</style>
    </section>
  );
}




// Hero18_NeonBlob.jsx
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useState,useEffect } from "react";
import profileImage from "@/assets/profilePicWithoutBackground2.png";
import { Button } from "./ui/button";

export default function Hero18(){
  const titles=["Frontend Developer","MERN Stack Developer","UI Stylist"]; const [i,setI]=useState(0); const [fade,setFade]=useState(true);
  useEffect(()=>{const t=setInterval(()=>{setFade(false);setTimeout(()=>{setI(p=> (p+1)%titles.length);setFade(true);},400);},2800);return()=>clearInterval(t);},[]);
  return(
    <section className="min-h-screen flex items-center px-6 pt-24 relative overflow-hidden">
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-between z-10">
        <div className="max-w-xl space-y-6"><p className="text-primary text-2xl">Hello, I'm</p><h1 className="text-5xl md:text-7xl font-bold">Govardhan <span className="text-primary">Reddy</span></h1><h2 className={`text-3xl font-bold ${fade?"opacity-100":"opacity-0"} transition-opacity`}>{titles[i]}</h2><p className="text-lg text-muted-foreground">Developer crafting modern web experiences.</p></div>

        <div className="relative w-72 h-72 md:w-[360px] md:h-[360px] group">
          <div className="absolute inset-0 rounded-full border-4 border-primary/50 filter blur-sm opacity-60"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.25)]">
            <img src={profileImage} alt="p" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
}



// Hero22_InkSplash.jsx
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useState,useEffect } from "react";
import profileImage from "@/assets/profilePicWithoutBackground2.png";
import { Button } from "./ui/button";

export default function Hero22(){
  const titles=["Frontend Developer","MERN Stack Developer","UI Stylist"]; const [i,setI]=useState(0); const [fade,setFade]=useState(true);
  useEffect(()=>{const t=setInterval(()=>{setFade(false);setTimeout(()=>{setI(p=> (p+1)%titles.length);setFade(true);},400);},2800);return()=>clearInterval(t);},[]);
  return(
    <section className="min-h-screen flex items-center px-6 pt-24 relative overflow-hidden">
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-between z-10">
        <div className="max-w-xl space-y-6"><p className="text-primary text-2xl">Hello, I'm</p><h1 className="text-5xl md:text-7xl font-bold">Govardhan <span className="text-primary">Reddy</span></h1><h2 className={`text-3xl font-bold ${fade?"opacity-100":"opacity-0"} transition-opacity`}>{titles[i]}</h2><p className="text-lg text-muted-foreground">Developer crafting modern web experiences.</p></div>

        <div className="relative w-72 h-80 md:w-[360px] md:h-[420px]">
          <svg viewBox="0 0 400 480" className="w-full h-full">
            <path d="M200 0 C260 30 320 60 350 120 C380 180 330 240 300 300 C270 360 220 420 160 430 C100 440 40 380 10 320 C-20 260 20 200 50 160 C80 120 140 60 200 0Z" fill="rgba(124,58,237,0.18)"/>
            <g clipPath="url(#c)"></g>
            <defs><clipPath id="c"><path d="M200 0 C260 30 320 60 350 120 C380 180 330 240 300 300 C270 360 220 420 160 430 C100 440 40 380 10 320 C-20 260 20 200 50 160 C80 120 140 60 200 0Z"/></clipPath></defs>
            <g clipPath="url(#c)"><image href={profileImage} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"/></g>
          </svg>
        </div>
      </div>
    </section>
  );
}





// Hero28_TechRing.jsx
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useState,useEffect } from "react";
import profileImage from "@/assets/profilePicWithoutBackground2.png";
import { Button } from "./ui/button";

export default function Hero28(){
  const titles=["Frontend Developer","MERN Stack Developer","UI Stylist"]; const [i,setI]=useState(0); const [fade,setFade]=useState(true);
  useEffect(()=>{const t=setInterval(()=>{setFade(false);setTimeout(()=>{setI(p=> (p+1)%titles.length);setFade(true);},400);},2800);return()=>clearInterval(t);},[]);
  return(
    <section className="min-h-screen flex items-center px-6 pt-24 relative overflow-hidden">
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-between z-10">
        <div className="max-w-xl space-y-6"><p className="text-primary text-2xl">Hello, I'm</p><h1 className="text-5xl md:text-7xl font-bold">Govardhan <span className="text-primary">Reddy</span></h1><h2 className={`text-3xl font-bold ${fade?"opacity-100":"opacity-0"} transition-opacity`}>{titles[i]}</h2><p className="text-lg text-muted-foreground">Developer crafting modern web experiences.</p></div>

        <div className="relative w-72 h-72 md:w-[360px] md:h-[360px]">
          <svg viewBox="0 0 200 200" className="w-full h-full absolute inset-0">
            <circle cx="100" cy="100" r="88" stroke="rgba(99,102,241,0.18)" strokeWidth="6" fill="transparent"/>
            <circle cx="100" cy="100" r="62" stroke="rgba(99,102,241,0.08)" strokeWidth="4" fill="transparent"/>
          </svg>
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border border-primary/10">
            <img src={profileImage} alt="p" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
}


