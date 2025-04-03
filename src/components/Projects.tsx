
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveLink?: string;
  repoLink?: string;
}

const projectsData: ProjectProps[] = [
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
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather application that displays current conditions and forecasts based on location, with data visualization.",
    tags: ["JavaScript", "Chart.js", "Weather API", "CSS"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website showcasing projects and skills with dark/light mode toggle.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "#",
    repoLink: "#"
  }
];

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card transition-all hover:shadow-md hover:shadow-primary/10 hover:border-primary/30">
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
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-4">{project.description}</p>
        
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
      </div>
    </div>
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
          Here are some of my recent projects. Each one was an opportunity to learn 
          new technologies and solve interesting problems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
