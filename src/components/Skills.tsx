import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Next.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Authentication", "JWT"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "Database Design"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "AWS", "Vercel", "Netlify"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover:border-primary transition-all animate-slide-up hover:shadow-[var(--shadow-glow)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
