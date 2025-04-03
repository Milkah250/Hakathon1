
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-primary font-medium">Hello, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              John Doe
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground/70">
              I build things for the web.
            </h2>
            <p className="text-lg text-foreground/60 max-w-lg">
              I'm a software developer specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I'm focused on building accessible, 
              user-friendly applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                <div className="text-9xl font-bold text-primary/20">JD</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
