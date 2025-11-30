import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "@/assets/profile-image.jpg";
import { Button } from "./ui/button";


const Hero = () => {
  const [showImage, setShowImage] = useState(false);

  const imageSource = "https://res.cloudinary.com/dqr4xoj7b/image/upload/v1763099272/Picsart_24-09-12_20-25-55-815_encjd8.jpg"

  // Animated title state
  const titles = ["Frontend Developer", "MERN Stack Developer"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setFade(true); // fade in new text
      }, 500); // fade duration
    }, 3000); // switch every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow- pt-20 md:pt-0">
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
                <div className="flex items-center flex-base group">
                <p className="text-foreground font-semibold text-5xl">G</p>
                <div className="w-8 h-8 rounded-full border-4 mt-1 border-foreground cursor-pointer group-hover:border-primary transition-all overflow-hidden">
                  <img
                    src={imageSource ? imageSource : profileImage}
                    alt="Govadhan Reddy Profile Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground font-semibold text-5xl">vardhan reddy</p>
                </div>
                {showImage && (
                  <div className="absolute top-full left-1/4 -translate-x-1/2 mt-4 z-[100] animate-fade-in pointer-events-none">
                    <div className="bg-card border-2 border-primary/40 rounded-xl p-2 shadow-[var(--shadow-glow)]">
                      <img
                        src={imageSource ? imageSource : profileImage}
                        alt="John Doe Profile"
                        className="w-56 h-56 rounded-lg object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Animated Title */}
            <h1
              className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
                }`}
            >
              {titles[index]}
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
              <a href="/resume" className="text-gray-100">
                Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>

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
