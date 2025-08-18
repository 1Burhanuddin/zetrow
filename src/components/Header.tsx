import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { handleSectionNav } from '@/hooks/useScrollToHash';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileActive, setMobileActive] = useState<string | null>(null);
const [desktopActive, setDesktopActive] = useState<string | null>(null);

  // Track which section is visible
  const activeSection = useScrollSpy(['what-is-zetrow', 'how-it-started', 'why-choose-us', 'meet-the-team'], 80);

  useEffect(() => {
  if (
    (mobileActive === 'whyus' && activeSection !== 'why-us') ||
    (mobileActive === 'home' && activeSection !== 'what-is-zetrow' && activeSection !== 'how-it-started')
  ) {
    setMobileActive(null);
  }
  if (
    (desktopActive === 'whyus' && activeSection !== 'why-us') ||
    (desktopActive === 'home' && activeSection !== 'what-is-zetrow' && activeSection !== 'how-it-started')
  ) {
    setDesktopActive(null);
  }
}, [activeSection]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setMobileActive(null);
  };
  const toggleCompanyDropdown = () => setIsCompanyDropdownOpen(!isCompanyDropdownOpen);

  const isActive = (link: 'home' | 'whyus') => {
    if (location.pathname !== '/') return false;
    if (link === 'home') {
      return !activeSection || activeSection === 'what-is-zetrow' || activeSection === 'how-it-started';
    }
    if (link === 'whyus') {
      return activeSection === 'why-choose-us';
    }
    return false;
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
            <span className={`text-xl font-bold transition-colors text-primary`}>
              zetrow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                (desktopActive === 'home' || (isActive('home') && desktopActive !== 'whyus'))
                  ? 'text-primary font-semibold border-b-2 border-primary'
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setDesktopActive('home')}
            >
              Home
            </Link>
            <button 
              type="button"
              onClick={() => {
                setDesktopActive('whyus');
                handleSectionNav(navigate, 'why-us');
              }}
              className={`transition-colors bg-transparent border-0 px-0 ${
                desktopActive === 'whyus' || isActive('whyus')
                  ? 'text-primary font-semibold'
                  : 'text-foreground hover:text-primary'
              }`}
              style={{ cursor: 'pointer' }}
            >
              Why Us
            </button>
            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={toggleCompanyDropdown}
                className={`flex items-center space-x-1 transition-colors ${
                  location.pathname === '/about-us' || location.pathname === '/contact' || location.pathname === '/careers'
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
                        location.pathname === '/about-us'
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-foreground hover:bg-muted hover:text-primary'
                      }`}
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/contact" 
                      className={`block px-4 py-2 text-sm transition-colors ${
                        location.pathname === '/contact'
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
                        location.pathname === '/careers'
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
          <div className="fixed inset-x-0 z-50 bg-background/95 animate-fade-in flex items-center justify-center">
            <nav className="flex flex-col items-start justify-start bg-white gap-4 space-y-6 w-full h-full p-6 rounded-xl">
              <Link 
                to="/" 
                className={`transition-colors ${
                  (mobileActive === 'home' || (isActive('home') && mobileActive !== 'whyus'))
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => {
                  setMobileActive('home');
                  if (mobileActive !== 'home') toggleMenu();
                }}
              >
                Home
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileActive('whyus');
                  handleSectionNav(navigate, 'why-us');
                  toggleMenu();
                }}
                className={`transition-colors bg-transparent border-0 outline-none px-0 ${
                  mobileActive === 'whyus' || isActive('whyus')
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
                style={{ cursor: 'pointer' }}
              >
                Why Us
              </button>
              <Link 
                to="/about-us" 
                className={`transition-colors ${
                  location.pathname === '/about-us'
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${
                  location.pathname === '/contact'
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Contact
              </Link>
              <Link 
                to="/careers" 
                className={`transition-colors ${
                  location.pathname === '/careers'
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Careers
              </Link>
              <a href="#download" className="bg-gradient-primary w-full text-primary-foreground px-6 py-3 rounded-lg font-medium text-center hover:shadow-medium transition-all duration-300">
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
