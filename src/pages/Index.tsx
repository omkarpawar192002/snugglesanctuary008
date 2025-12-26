import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FeaturedPets from "@/components/FeaturedPets";
import StatsCounter from "@/components/StatsCounter";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <StatsCounter />
        <HowItWorks />
        <FeaturedPets />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
