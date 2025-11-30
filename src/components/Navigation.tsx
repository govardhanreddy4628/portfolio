import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeCustomizer from "./ThemeCustomizer";
import profileImage from "@/assets/profile-image.jpg";
//import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import ProfileDropdown from "./profile-dropdown";
import Resume from "../assets/GovardhanReddy_js_resume2.pdf";
import portfolio_logo from "@/assets/portfolio_logo4.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const imageSource = "https://res.cloudinary.com/dqr4xoj7b/image/upload/v1763099272/Picsart_24-09-12_20-25-55-815_encjd8.jpg"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 
  ${isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-background/40 backdrop-blur-sm"
        }`}
    >

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <img src={portfolio_logo} className="w-12 h-8" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Govardhan
            </span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className=" transition-colors"
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <ThemeCustomizer />

            <ProfileDropdown
              imageSrc={imageSource ? imageSource : profileImage}
              onProfileClick={() => scrollToSection("#about")}
              onResumeClick={() => {
                const link = document.createElement("a");
                link.href = Resume;
                link.download = "Resume.pdf";
                link.click();
              }}
            />
          </div>

          {/* Mobile Menu and Theme Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeCustomizer />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="
      md:hidden py-4 border-t border-border animate-slide-up 
      bg-background shadow-xl 
      relative z-[9998]
    "
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start hover:text-primary transition-colors"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navigation;
