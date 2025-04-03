
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import DarkModeToggle from './DarkModeToggle';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-primary">
          DevPortfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <DarkModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-2">
          <DarkModeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="ml-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg">
          <nav className="container mx-auto px-4 py-6">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="block py-2 text-foreground/80 hover:text-primary transition-colors text-lg"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
