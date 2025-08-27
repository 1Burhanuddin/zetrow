const WhyChooseUsSection = () => (
  <section id="why-us" className="py-8 bg-white scroll-mt-20 " style={{ scrollMarginTop: '80px' }}>
    <div className="container mx-auto px-4 bg-primary p-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-6 pb-4 border-b-2">Why Us</h2>
        
      </div>
      <div className="grid lg:grid-cols-2 gap-12 mb-16 ">
        <div className="space-y-8">
          {/* Trust */}
          <div className="rounded-lg h-40 shadow-lg p-8 bg-white flex">
            <div className="w-20 h-20 bg-green-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-700">
                Trained & Verified Pickup Staff with Swapeco Smart Weighing Scale
              </p>
            </div>
          </div>
          {/* Convenience */}
          <div className="rounded-lg h-40 shadow-lg p-8 bg-white flex">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
              <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-semibold mb-2">Convenience</h3>
              <p className="text-gray-700">
                Doorstep pickup at user's convenient date & time.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          {/* Best Rates */}
          <div className="bg-white h-40 rounded-lg shadow-lg p-8 flex">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
              <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-semibold mb-2">Best Rates</h3>
              <p className="text-gray-700">
                We provide the best value for your scrap from our network of Recyclers. 
              </p>
            </div>
          </div>
          {/* Eco-friendly */}
          <div className="bg-white h-40 rounded-lg shadow-lg p-8 flex">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
              <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636A9 9 0 015.636 18.364M15 9v2a4 4 0 01-4 4H7m6 0v2a4 4 0 01-4 4H7" />
              </svg>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-semibold mb-2">Eco-friendly</h3>
              <p className="text-gray-700">
                We ensure responsible recycling of your scrap items.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
