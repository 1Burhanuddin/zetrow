import whatIsScrappIllustration from '@/assets/what-is-scrapp-illustration.png';
const WhatIsZetrowSection = () => {
  return (
    <section className="pt-24 pb-16 lg:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center ">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 ">
            <div className="space-y-6 ">
              <div className="flex items-center space-x-4">
                <img 
                  src="/uploads/zetrow-logo-bg-white.jpeg" 
                  alt="Zetrow Logo" 
                  className="h-16 w-auto"
                />
                <div>
                  <h1 className="text-4xl font-extrabold text-gray-900">
                    <span className="text-primary">Zetrow</span> 
                  </h1>
                  <p className="text-lg text-gray-600 mt-1">Smart Recycling, Made Simple</p>
                </div>
              </div>
              
              <div className="prose prose-lg  max-w-2xl">
                <p>
                  Zetrow develops smart waste programs for businesses, brands & 
                  retailers aiming to transition to zero waste. Through a 
                  comprehensive suite of digital tools, Zetrow is committed to 
                  educating and empowering a worldwide community to embrace a 
                  circular economy.
                </p>
                <p>
                  Zetrow's data-driven approach offers a robust platform that guides individuals, businesses, brands and retailers in proper disposal practices, supporting the vision of a more sustainable future.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <img 
              src="uploads/hero-2.jpeg"
              alt="Waste management illustration" 
              className="h-full w-full  rounded-xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsZetrowSection;