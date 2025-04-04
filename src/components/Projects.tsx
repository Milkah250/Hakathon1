
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveLink?: string;
  repoLink?: string;
  detailedDescription?: string;
}

const projectsData: ProjectProps[] = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website built with React, Tailwind CSS and shadcn/ui components. Features dark/light mode toggle and showcases projects and skills.",
    tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    liveLink: "#",
    repoLink: "#",
    image: "/lovable-uploads/3179d109-0f13-4ca2-88c7-cc33f9fb4426.png"
  },
  {
    title: "Ajira Digital Program Certification",
    description: "Successfully completed the Ajira Digital Training and Five Weeks Mentorship Program in Virtual Assistance Training.",
    tags: ["Virtual Assistance", "Digital Skills", "Government Program"],
    image: "/lovable-uploads/0892dccd-6777-4747-8413-388cac024117.png",
    detailedDescription: "This certificate showcases my successful completion of the Ajira Digital Program's Virtual Assistance Training conducted by the Ministry of Labour & Social Protection from January 27th to 31st, 2025. The program included five weeks of mentorship and covered essential virtual assistance skills. The training was officially recognized by the Kenyan government, with the course running from February 14, 2025 to February 15, 2025."
  },
  {
    title: "Content Writing Certification",
    description: "Successfully completed the Ajira Digital Training in Content Writing with five weeks of practical mentorship.",
    tags: ["Content Writing", "Digital Skills", "Professional Certification"],
    image: "/lovable-uploads/3d5a35a6-2b58-4f44-a5a8-0c8077ac8459.png",
    detailedDescription: "This certificate represents my achievement in completing the Content Writing Training offered by the Ajira Digital Program under the Ministry of Labour & Social Protection from January 27th to 31st, 2025. The comprehensive program included five weeks of hands-on mentorship in content creation strategies and techniques. The course ran from February 13, 2025 to February 14, 2025 and is officially certified with the code TR28092914022025."
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment processing integration.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality, user roles, and real-time updates.",
    tags: ["TypeScript", "React", "Redux", "Firebase"],
    liveLink: "#",
    repoLink: "#"
  }
];

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover:shadow-primary/10 hover:border-primary/30 h-full flex flex-col">
      <div className="h-48 bg-muted flex items-center justify-center">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-4xl font-bold text-foreground/10">{project.title.substring(0, 2)}</div>
        )}
      </div>
      
      <CardContent className="flex-grow p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-4">{project.description}</p>
        
        {project.detailedDescription && (
          <div className="mb-4 mt-4 border-t pt-3 border-primary/10">
            <p className="text-sm text-foreground/70">{project.detailedDescription}</p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      {(project.liveLink || project.repoLink) && (
        <CardFooter className="p-5 pt-0">
          <div className="flex gap-4">
            {project.liveLink && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.repoLink && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects and certifications. Each one represents a milestone in my professional journey and skill development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button asChild>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
