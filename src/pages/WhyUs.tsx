import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WhyUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="min-h-screen bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Why Choose Zetrow?
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes us the leading choice for sustainable waste management solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold">Proven Track Record</h3>
                  </div>
                  <p className="text-gray-700">
                    With over 0 years of experience and 0 satisfied clients, we've established ourselves as 
                    a trusted partner in waste management solutions. Our success stories speak for themselves.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold">Innovative Technology</h3>
                  </div>
                  <p className="text-gray-700">
                    Our cutting-edge platform uses AI and IoT to optimize waste collection routes, reduce costs, 
                    and improve efficiency. Real-time monitoring ensures transparency and accountability.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold">Environmental Commitment</h3>
                  </div>
                  <p className="text-gray-700">
                    We're not just a business - we're environmental stewards. Every solution we provide is 
                    designed to minimize environmental impact and promote sustainable practices.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold">Cost-Effective Solutions</h3>
                  </div>
                  <p className="text-gray-700">
                    Our smart waste management solutions help businesses reduce operational costs by up to 40%. 
                    Efficient routing and optimized collection schedules mean significant savings.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold">24/7 Support</h3>
                  </div>
                  <p className="text-gray-700">
                    Our dedicated support team is available round the clock to assist you with any questions 
                    or issues. We believe in building long-term relationships with our clients.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold">Comprehensive Analytics</h3>
                  </div>
                  <p className="text-gray-700">
                    Get detailed insights into your waste management operations with our advanced analytics dashboard. 
                    Track progress, identify trends, and make data-driven decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg shadow-lg p-8 text-primary text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6">
                Join hundreds of businesses that have already transformed their waste management with Zetrow.
              </p>
              <a 
                href="#/contact" 
                className="inline-block bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhyUs; 