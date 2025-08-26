import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MeetTheTeamSection from '@/components/Team';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-8">
        <div className="min-h-screen bg-white">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-2">
              <h1 className="text-5xl font-bold mb-6 border-b-2 p-2">
                About <span className="text-primary">Zetrow</span>
              </h1>
              <p className="text-xl  max-w-3xl mx-auto">
                Pioneering sustainable waste management solutions for a cleaner, greener future.
              </p>
            </div>

            {/* Our Story */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h2 className="text-3xl font-bold text-left mb-8 ">Our Story</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg mb-6">
                    Founded in 2025, Zetrow was born from a simple yet powerful vision: to make sustainable 
                    waste management accessible to everyone. What started as a small startup has 
                    grown into a leading force in environmental technology.
                  </p>
                  <p className="text-lg mb-6">
                    Our founders, environmental engineers with decades of combined experience, recognized that 
                    traditional waste management systems were inefficient and environmentally harmful. They set 
                    out to create a solution that would not only solve these problems but also make businesses 
                    more profitable through sustainable practices.
                  </p>
                  <p className="text-lg text-gray-700">
                    Zetrow helps cut operational costs, reduce their environmental footprint, 
                    and embrace sustainable growth. Our innovations have diverted tens of thousands 
                    of tons of waste from landfills, reduced greenhouse gas emissions, and saved 
                  
                  </p>
                </div>
                <div className="bg-gradient-primary text-primary-foreground rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold">0+</div>
                      <div className="text-sm">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">0+</div>
                      <div className="text-sm">Tons of Waste Diverted</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">0%</div>
                      <div className="text-sm">Average Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {Meet the Team section} */}
            <MeetTheTeamSection />

            {/* Our Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability First</h3>
                <p className="text-gray-600">
                  Every decision we make is guided by our commitment to environmental sustainability. 
                  We believe that business success and environmental responsibility go hand in hand.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation Driven</h3>
                <p className="text-gray-600">
                  We constantly push the boundaries of what's possible in waste management technology. 
                  Our R&D team works tirelessly to develop cutting-edge solutions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Focused</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We listen, learn, and adapt our 
                  solutions to meet their unique needs and challenges.
                </p>
              </div>
            </div>

            {/* Leadership Team */}
            {/* <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                    MK
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Maaz Nasimuddin Khan</h3>
                  <p className="text-gray-600 mb-2">Founder</p>
                  <p className="text-sm text-gray-500">
                    0+ years in environmental engineering. Former senior engineer at leading waste management companies.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                    FK
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Farhan Nihal Khan</h3>
                  <p className="text-gray-600 mb-2">Founder</p>
                  <p className="text-sm text-gray-500">
                    Technology expert with expertise in IoT and AI. Previously led development teams at major tech companies.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                    MK
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Abusaad Atikullah Khan</h3>
                  <p className="text-gray-600 mb-2">Co-Founder</p>
                  <p className="text-sm text-gray-500">
                    Operations specialist with 0+ years experience in logistics and supply chain management.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs; 