import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "@/assets/profilePicWithoutBackground2.png";
import { Button } from "./ui/button";

const Hero2 = () => {
    const titles = ["Frontend Developer", "MERN Stack Developer"];
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [showImage, setShowImage] = useState(false);

    const imageSource =
        "https://res.cloudinary.com/dqr4xoj7b/image/upload/v1763099272/Picsart_24-09-12_20-25-55-815_encjd8.jpg";

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % titles.length);
                setFade(true);
            }, 400);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center relative px-6 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 blur-3xl opacity-70" />

            {/* FLOATING PARTICLES */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* MAIN LAYOUT */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-16 md:gap-10 relative z-10">

                {/* ------------ LEFT SECTION (More Width) ------------ */}
                <div className="flex-[1.3] text-center md:text-left space-y-8">

                    <div className="space-y-4">

                        {/* Name Row */}
                        <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                            <p className="text-primary text-2xl font-semibold tracking-wide">Hello, I'm</p>

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
                                            alt="Govardhan Reddy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <p className="text-foreground font-semibold text-5xl">vardhan reddy</p>
                                </div>

                                {/* Hover image popup */}
                                {showImage && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-[100] animate-fade-in pointer-events-none">
                                        <div className="bg-card border-2 border-primary/40 rounded-xl p-2 shadow-[var(--shadow-glow)]">
                                            <img
                                                src={imageSource ? imageSource : profileImage}
                                                alt="Govardhan"
                                                className="w-56 h-56 rounded-lg object-cover"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Animated Title (No Wrap) */}
                        <h1
                            className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent transition-opacity duration-500 whitespace-nowrap ${
                                fade ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            {titles[index]}
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                            Full-stack developer specializing in building exceptional digital experiences with modern web technologies.
                        </p>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
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

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4 justify-center md:justify-start pt-8">
                        <a className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all" href="https://github.com" target="_blank">
                            <Github className="h-5 w-5" />
                        </a>
                        <a className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all" href="https://linkedin.com" target="_blank">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all" href="mailto:email@example.com">
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* ------------ RIGHT SECTION (Smaller Width) ------------ */}
                <div className="flex-[0.7] flex justify-center md:justify-end">
                    <div className="relative w-72 h-80 md:w-[360px] md:h-[420px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 blur-xl rounded-xl" />

                        <div className="relative w-full h-full clip-polygon overflow-hidden shadow-2xl border border-primary/30">
                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Scroll Arrow */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown className="h-6 w-6 text-primary" />
            </div>

            {/* CSS */}
            <style>{`
                .clip-polygon {
                    clip-path: polygon(
                        25% 0%, 75% 0%,
                        100% 25%, 100% 75%,
                        75% 100%, 25% 100%,
                        0% 75%, 0% 25%
                    );
                }

                @keyframes float {
                    0% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
                    50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
                    100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
                }

                .animate-float { animation: float 5s infinite ease-in-out; }
            `}</style>

        </section>
    );
};

export default Hero2;
