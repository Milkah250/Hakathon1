
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-primary">
              DevPortfolio
            </a>
          </div>
          
          <div className="text-sm text-foreground/60">
            &copy; {currentYear} John Doe. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
