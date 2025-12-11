import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DirectionEditsSection from "@/components/DirectionEditsSection";
import ClientWorksSection from "@/components/ClientWorksSection";
import PersonalChannelSection from "@/components/PersonalChannelSection";
import TrailerCutsSection from "@/components/TrailerCutsSection";
import FloatingDock from "@/components/FloatingDock";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <DirectionEditsSection />
      <ClientWorksSection />
      <PersonalChannelSection />
      <TrailerCutsSection />
      <ContactSection />
      <FloatingDock />
    </div>
  );
};

export default Index;
