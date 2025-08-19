import Header from '@/components/Header';
import WhatIsZetrowSection from '@/components/WhatIsZetrow';
import HowItStartedSection from '@/components/HowItStarted';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyChooseUsSection from '@/components/WhyUs';
import MeetTheTeamSection from '@/components/Team';
import FloatingActions from '@/components/FloatingActions';
import Footer from '@/components/Footer';



const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      
      <main>

        <WhatIsZetrowSection />
        <HowItStartedSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <MeetTheTeamSection />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};

export default Index;
