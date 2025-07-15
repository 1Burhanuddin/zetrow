const HowItStartedSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            How it started?
          </h2>

          {/* Content */}
          <div className="space-y-8 text-center">
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Scrapp was created to educate and empower people 
                to live more correctly.
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
                model that will ensure nothing is wasted. Scrapp is the 
                digital platform on a mission to make it happen.
              </p>
            </div>

            {/* Get in Touch Button */}
            <div className="pt-8">
              <a 
                href="#contact" 
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
            </div>

            {/* Placeholder for video/image */}
            <div className="mt-12 bg-gradient-card rounded-2xl p-8 border border-border">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  [Founder Video/Image Placeholder]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItStartedSection;