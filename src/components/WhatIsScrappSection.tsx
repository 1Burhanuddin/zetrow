import whatIsScrappIllustration from '@/assets/what-is-scrapp-illustration.png';

const WhatIsScrappSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              What is<br />
              <span className="text-primary">Scrapp?</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Scrapp develops smart waste programs for businesses, brands & 
                retailers aiming to transition to zero waste. Through a 
                comprehensive suite of digital tools, Scrapp is committed to educating 
                and empowering a world-wide community to embrace a circular 
                economy.
              </p>
              
              <p>
                Scrapp's data-driven approach offers a robust platform that guides 
                individuals, businesses, brands and retailers in proper disposal practices, 
                supporting the vision of a more sustainable future.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img 
              src={whatIsScrappIllustration} 
              alt="Waste management illustration" 
              className="w-full max-w-md lg:max-w-lg animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsScrappSection;