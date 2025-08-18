import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCompanyDropdown = () => setIsCompanyDropdownOpen(!isCompanyDropdownOpen);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/uploads/d560b72a-99ba-4751-b35c-9286ac2c4f7d.png" 
              alt="zetrow Logo" 
              className="h-8 w-8"
            />
            <span className={`text-xl font-bold transition-colors ${
              isActive('/') ? 'text-primary' : 'text-primary'
            }`}>
              zetrow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-primary font-semibold border-b-2 border-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/why-us" 
              className={`transition-colors ${
                isActive('/why-us') 
                  ? 'text-primary font-semibold border-b-2 border-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Why Us
            </Link>
            
            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={toggleCompanyDropdown}
                className={`flex items-center space-x-1 transition-colors ${
                  isActive('/about-us') || isActive('/contact') || isActive('/careers')
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCompanyDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-background border border-border rounded-lg shadow-medium z-50">
                  <div className="py-2">
                    <Link 
                      to="/about-us" 
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive('/about-us')
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-foreground hover:bg-muted hover:text-primary'
                      }`}
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/contact" 
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive('/contact')
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-foreground hover:bg-muted hover:text-primary'
                      }`}
                    >
                      Contact
                    </Link>
                    <div className="border-t border-border my-1"></div>
                    <Link 
                      to="/careers" 
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive('/careers')
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-foreground hover:bg-muted hover:text-primary'
                      }`}
                    >
                      Careers
                    </Link>
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
            className="lg:hidden md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors ${
                  isActive('/') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/why-us" 
                className={`transition-colors ${
                  isActive('/why-us') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Why Us
              </Link>
              <Link 
                to="/about-us" 
                className={`transition-colors ${
                  isActive('/about-us') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${
                  isActive('/contact') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Contact
              </Link>
              <Link 
                to="/careers" 
                className={`transition-colors ${
                  isActive('/careers') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Careers
              </Link>
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
