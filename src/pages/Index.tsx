import Header from '@/components/Header';
import WhatIsScrappSection from '@/components/WhatIsScrapp';
import HowItStartedSection from '@/components/HowItStarted';
import MeetTheTeamSection from '@/components/Team';
import FloatingActions from '@/components/FloatingActions';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
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
