import { DollarSign, Clock, Shield, Leaf } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: "Best Rates",
    description: "Get the highest market prices for your recyclable materials with transparent pricing and instant quotes.",
    color: "text-accent-yellow",
    bgColor: "bg-accent-yellow/10"
  },
  {
    icon: Clock,
    title: "Convenience",
    description: "Schedule pickups at your convenience with our flexible timing and reliable service team.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Verified and certified processes ensure secure transactions and proper handling of your materials.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Leaf,
    title: "Eco-friendly",
    description: "Contribute to a sustainable future while reducing your environmental footprint through proper recycling.",
    color: "text-green-bg",
    bgColor: "bg-green-bg/10"
  }
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose 
            <span className="text-primary"> Scrapp</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing waste management with technology, transparency, and a commitment to sustainability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-6 w-0 h-0.5 bg-gradient-primary rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Sustainable Journey?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already making a positive impact on the environment while earning great returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#download" 
                className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </a>
              <a 
                href="#contact" 
                className="border border-primary text-primary px-8 py-4 rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;