import whatIsScrappIllustration from '@/assets/what-is-scrapp-illustration.png';

const WhatIsScrappSection = () => {
  return (
    <section className="pt-20 pb-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
          {/* Text Content */}
          <div className="lg:pr-8">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 lg:mb-8 text-left">
              What is<br />
              <span className="text-primary">Scrapp?</span>
            </h2>
            
            <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed text-left">
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
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img 
              src={whatIsScrappIllustration} 
              alt="Waste management illustration" 
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsScrappSection;