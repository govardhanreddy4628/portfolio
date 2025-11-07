import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app"
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard with data visualization and reporting features",
      tech: ["React", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com/yourusername/social-dashboard",
      demo: "https://social-dashboard-demo.vercel.app"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://task-manager-demo.vercel.app"
    },
    {
      title: "Weather Forecast App",
      description: "Modern weather application with location-based forecasts and interactive maps",
      tech: ["React", "TypeScript", "Weather API", "Tailwind"],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://weather-app-demo.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my skills and experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary transition-all hover:shadow-[var(--shadow-glow)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" asChild className="group/btn">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="group/btn">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
