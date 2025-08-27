import Header from '@/components/Header';
import WhatIsZetrowSection from '@/components/WhatIsZetrow';
import HowItStartedSection from '@/components/HowItStarted';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyChooseUsSection from '@/components/WhyUs';
import Categories from '@/components/Categories';
import FloatingActions from '@/components/FloatingActions';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      
      <main>
        <WhatIsZetrowSection />
        <HowItStartedSection />
        <Categories />
        <WhyChooseUsSection />
        <HowItWorksSection />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};

export default Index;
