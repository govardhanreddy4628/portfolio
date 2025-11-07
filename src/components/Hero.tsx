import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useState } from "react";
import profileImage from "@/assets/profile-image.jpg";
import { Button } from "./ui/button";

const Hero = () => {
  const [showImage, setShowImage] = useState(false);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card"></div>
      
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <p className="text-primary text-2xl font-semibold tracking-wide mr-2">Hello, I'm</p>
              <div 
                className="relative flex items-center gap-2 cursor-pointer"
                onMouseEnter={() => setShowImage(true)}
                onMouseLeave={() => setShowImage(false)}
              >
                <div className="w-9 h-9 rounded-full border-2 border-primary/40 cursor-pointer hover:border-primary transition-all overflow-hidden">
                  <img 
                    src={profileImage? profileImage : "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png"} 
                    alt="John Doe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-foreground font-semibold text-base">Govardhan Reddy Shanigaram</p>
                  <p className="text-muted-foreground text-sm">govardhanreddy4628@gmail.com</p>
                </div>
                {showImage && (
                  <div className="absolute top-full left-1/4 -translate-x-1/2 mt-4 z-[100] animate-fade-in pointer-events-none">
                    <div className="bg-card border-2 border-primary/40 rounded-xl p-2 shadow-[var(--shadow-glow)]">
                      <img 
                        src={profileImage} 
                        alt="John Doe Profile" 
                        className="w-56 h-56 rounded-lg object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              MERN Stack Developer
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full-stack developer specializing in building exceptional digital experiences with modern web technologies
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" variant="outline" className="group hover:shadow-[var(--shadow-glow)] transition-all" asChild>
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <a href="#contact">
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" className="group hover:shadow-[var(--shadow-glow)] transition-all" asChild>
              <a href="/resume.pdf" download className="text-gray-100">
                Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>

            {/* <Button 
              size="lg" 
              variant="outline" 
              className="group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all" 
              asChild
            >
              <a href="/resume.pdf" download>
                Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button> */}
          </div>
          
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
