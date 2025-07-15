import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyUsSection from '@/components/WhyUsSection';
import FloatingActions from '@/components/FloatingActions';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyUsSection />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};

export default Index;
