import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCompanyDropdown = () => setIsCompanyDropdownOpen(!isCompanyDropdownOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d560b72a-99ba-4751-b35c-9286ac2c4f7d.png" 
              alt="zetrow Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-primary">zetrow</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#why-us" className="text-foreground hover:text-primary transition-colors">
              Why Us
            </a>
            
            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={toggleCompanyDropdown}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
              >
                <span>Company</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCompanyDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-background border border-border rounded-lg shadow-medium z-50">
                  <div className="py-2">
                    <a href="#about" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">
                      About Us
                    </a>
                    <a href="#contact" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">
                      Contact
                    </a>
                    <div className="border-t border-border my-1"></div>
                    <div className="px-4 py-2 text-sm">
                      <span className="text-muted-foreground">Careers</span>
                      <p className="text-xs text-muted-gray mt-1">Not hiring currently</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#download" className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:shadow-medium transition-all duration-300 hover:scale-105">
              Download App
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#why-us" className="text-foreground hover:text-primary transition-colors">
                Why Us
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="border-t border-border pt-4">
                <span className="text-muted-foreground text-sm">Careers</span>
                <p className="text-xs text-muted-gray mt-1">Not hiring currently</p>
              </div>
              <a href="#download" className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-center hover:shadow-medium transition-all duration-300">
                Download App
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;