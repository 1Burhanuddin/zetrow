const HowItStartedSection = () => {
  return (
    <section className="py-8 lg:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center pb-4 border-b-2">
            How it started?
          </h2>

          {/* Content */}
          <div className="space-y-8 text-center">
            <div className="space-y-6 text-muted-foreground  text-lg">
              <p>
                zetrow was created to educate and empower people 
              </p>
              
              <p>
                But when we dug deeper into the issue, we found the 
                problem is much larger than just putting things in the 
                right bin.
              </p>
              
              <p>
                In the digital age, where data is the currency, there is 
                a gap in information that could help the world 
                transition to a circular economy. This is the societal 
                model that will ensure nothing is wasted. zetrow is the 
                digital platform on a mission to make it happen.
              </p>
            </div>

            {/* Get in Touch Button */}
            <div className="pt-8">
              <a 
                href="#/contact" 
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
            </div>

            {/* Video content */}
            {/* <div className="mt-12 bg-gradient-card rounded-2xl p-8 border border-border">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Founder's Story</h3>
                  <p className="text-muted-foreground text-sm">Watch how zetrow started and our vision for a sustainable future</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItStartedSection;