import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Expert",
      description: "Creating responsive, accessible interfaces with React and modern CSS"
    },
    {
      icon: Database,
      title: "Backend Pro",
      description: "Building scalable APIs with Node.js, Express, and MongoDB"
    },
    {
      icon: Globe,
      title: "Full-Stack",
      description: "End-to-end development from database to deployment"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4 animate-slide-up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate full-stack developer with expertise in the MERN stack. I love building 
              modern web applications that solve real-world problems and deliver exceptional user experiences.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              With a strong foundation in both frontend and backend technologies, I create seamless, 
              performant applications from concept to deployment. I'm always learning and staying updated 
              with the latest web development trends and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-slide-up">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:border-primary transition-all hover:shadow-[var(--shadow-glow)] group"
              >
                <item.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
