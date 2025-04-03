
interface SkillProps {
  name: string;
  level: number; // 0-100
  icon?: string;
}

const skillsData: SkillProps[] = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "Tailwind CSS", level: 85 },
  { name: "GraphQL", level: 75 },
  { name: "SQL", level: 70 },
  { name: "Git", level: 85 },
  { name: "Docker", level: 65 },
  { name: "AWS", level: 60 },
  { name: "Testing", level: 75 }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((skill, index) => (
            <div 
              key={skill.name}
              className="p-4 rounded-lg border border-border bg-card"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-sm text-foreground/70">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Other Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js', 'Express', 'MongoDB', 'Redux', 'Jest', 'Cypress', 'Figma', 'SASS', 'Webpack', 'GitHub Actions'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 rounded-full bg-secondary text-foreground/80 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
