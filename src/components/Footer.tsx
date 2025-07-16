import { Smartphone, Download, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import zfLogo from '@/assets/zf-logo.png';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="zf-logo.png" 
                  alt="zetrow Logo" 
                  className="h-8 w-8"
                />
                <span className="text-2xl font-bold text-primary">zetrow</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Transforming the way businesses and people achieve their zero-waste goals.
              </p>
              
              {/* App Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a 
                  href="#" 
                  className="bg-foreground text-background px-4 py-3 rounded-lg flex items-center space-x-3 hover:bg-foreground/90 transition-colors group"
                >
                  <div className="w-8 h-8 bg-background text-foreground rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="bg-foreground text-background px-4 py-3 rounded-lg flex items-center space-x-3 hover:bg-foreground/90 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 via-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Download className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Company</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li>
                  <span className="text-muted-foreground">Careers</span>
                  <p className="text-xs text-muted-gray mt-1">Not hiring currently</p>
                </li>
              </ul>
            </div>

            {/* Services & Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Products</h3>
              <ul className="space-y-3 mb-6">
                <li><a href="#business" className="text-muted-foreground hover:text-foreground transition-colors">For Business</a></li>
                <li><a href="#brands-retailers" className="text-muted-foreground hover:text-foreground transition-colors">For Brands & Retailers</a></li>
                <li><a href="#suppliers" className="text-muted-foreground hover:text-foreground transition-colors">For Suppliers</a></li>
                <li><a href="#individuals" className="text-muted-foreground hover:text-foreground transition-colors">For Individuals</a></li>
                <li><a href="#zero-waste" className="text-muted-foreground hover:text-foreground transition-colors">Zero-Waste Champions Program</a></li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:info@zetrow.com" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    info@zetrow.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground text-sm">
                    123 Green Street<br />
                    Eco City, EC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 zetrow. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/cancellation-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;