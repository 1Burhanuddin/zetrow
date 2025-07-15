import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatIsScrappSection from '@/components/WhatIsScrappSection';
import HowItStartedSection from '@/components/HowItStartedSection';
import MeetTheTeamSection from '@/components/MeetTheTeamSection';
import FloatingActions from '@/components/FloatingActions';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatIsScrappSection />
        <HowItStartedSection />
        <MeetTheTeamSection />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};

export default Index;
