import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VisionMission from '@/components/VisionMission';
import StatsSection from '@/components/StatsSection';
import ProductHighlights from '@/components/ProductHighlights';
import AuthorizedDistributors from '@/components/AuthorizedDistributors';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VisionMission />
        <StatsSection />
        <ProductHighlights />
        <AuthorizedDistributors />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
