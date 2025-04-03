
const About = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-4">
                Hello! I'm John, a passionate software developer with a 
                background in computer science and a love for creating elegant solutions to complex problems.
              </p>
              <p className="mb-4">
                My journey in tech began at <span className="highlight">University of Technology</span>, 
                where I earned my degree in Computer Science. Since then, I've worked with various 
                technologies and frameworks, constantly expanding my skillset and staying updated with 
                industry trends.
              </p>
              <p className="mb-4">
                Currently, I'm working at <span className="highlight">Tech Innovations Inc.</span> where I 
                focus on developing performant web applications with modern tools like React, TypeScript, 
                and Node.js. I'm particularly interested in user experience, accessibility, and building 
                systems that are both powerful and intuitive.
              </p>
              <p>
                When I'm not coding, you'll find me hiking, reading science fiction, or experimenting 
                with new cooking recipes. I believe that diverse experiences fuel creativity and 
                problem-solving abilities.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary/40 to-primary/20"></div>
              <div className="absolute inset-2 rounded-lg bg-background flex items-center justify-center overflow-hidden">
                <div className="text-6xl font-bold text-primary/10">About</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
