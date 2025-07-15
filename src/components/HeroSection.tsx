import { Smartphone, Download } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Sustainable waste management" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-bg/90 via-primary/80 to-secondary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
            Transform Your Waste Into
            <span className="block text-app-highlight">
              Valuable Resources
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Join thousands of businesses making a positive environmental impact while earning the best rates for their recyclable materials.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              🌱 Eco-Friendly
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              💰 Best Rates
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              🚚 Convenient Pickup
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              🔒 Trusted Platform
            </span>
          </div>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="#" 
              className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center space-x-3 font-medium transition-all duration-300 hover:scale-105 hover:shadow-strong w-full sm:w-auto justify-center"
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-black" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>
            
            <a 
              href="#" 
              className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center space-x-3 font-medium transition-all duration-300 hover:scale-105 hover:shadow-strong w-full sm:w-auto justify-center"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 via-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Download className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          {/* Stats or Additional Info */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.8s'}}>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-app-highlight">10K+</div>
              <div className="text-sm text-white/80">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-app-highlight">500+</div>
              <div className="text-sm text-white/80">Partner Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-app-highlight">95%</div>
              <div className="text-sm text-white/80">Recycling Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-app-highlight">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-1 h-8 bg-white/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;