import { Smartphone, Download, Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import zfLogo from '@/assets/zf-logo.png';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src="/uploads/zetrow-logo.png"
                  alt="zetrow Logo"
                  className="h-8 w-8"
                />
                <span className="text-2xl font-bold text-primary">Zetrow</span>
              </div>
              <p className=" mb-6 max-w-md">
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
                    <div className="text-xs ">Download on the</div>
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
                    <div className="text-xs ">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/zetrow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/zetrownow?igsh=MWZ3ZXhpbnNveXV6Yw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1Au83JLM7z/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="">
              <h3 className="text-lg font-semibold mb-4 text-primary">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about-us" className=" hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/contact" className=" hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/careers" className=" hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link to="/faq" className=" hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Services & Contact */}
            <div>
              {/* <h3 className="text-lg font-semibold mb-4 text-primary">Products</h3>
              <ul className="space-y-3 mb-6">
                <li><a href="#business" className=" hover:text-foreground transition-colors">For Business</a></li>
                <li><a href="#brands-retailers" className=" hover:text-foreground transition-colors">For Brands & Retailers</a></li>
                <li><a href="#suppliers" className=" hover:text-foreground transition-colors">For Suppliers</a></li>
                <li><a href="#individuals" className=" hover:text-foreground transition-colors">For Individuals</a></li>
                <li><a href="#zero-waste" className=" hover:text-foreground transition-colors">Zero-Waste Champions Program</a></li>
              </ul> */}

              <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:zetrowservices@gmail.com" className=" hover:text-foreground transition-colors text-sm">
                    zetrowservices@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+919082698271" className="hover:text-foreground transition-colors text-sm">
                    +91 90826 98271
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+917021825796" className="hover:text-foreground transition-colors text-sm">
                    +91 70218 25796
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className=" text-sm">
                    SHOP NO 09 OM CHS LTD C WING RADHA GRAM SANTACRUZ,<br />
                    OPP NEHRU ROAD SANTACRUZ EAST,<br />
                    MUMBAI, MAHARASHTRA, INDIA 400055
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className=" text-sm">
              © 2025 Zetrow. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy-policy" className=" hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className=" hover:text-foreground transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/cancellation-policy" className=" hover:text-foreground transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>

          {/* Delete Account Link - Centered */}
          <div className="flex justify-center mt-4 pt-4 border-t border-border">
            <Link to="/delete-account" className="text-red-600 hover:text-red-700 transition-colors text-sm font-medium">
              Delete Account
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;