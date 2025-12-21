import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, AlertTriangle, Clock, Shield, Heart, ArrowRight } from "lucide-react";

const emergencyTypes = [
  { emoji: "🤕", title: "Injured Animal", description: "Report an animal that needs immediate medical attention" },
  { emoji: "⛓️", title: "Trapped/Stuck", description: "Animal trapped in dangerous location or situation" },
  { emoji: "🥵", title: "Heat Distress", description: "Animal left in hot car or suffering from heat" },
  { emoji: "🐕", title: "Stray/Abandoned", description: "Homeless animal needing shelter and care" },
  { emoji: "😢", title: "Abuse/Neglect", description: "Report suspected animal cruelty or neglect" },
  { emoji: "🌊", title: "Natural Disaster", description: "Animal affected by floods, fires, or storms" },
];

const Rescue = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Emergency Banner */}
        <section className="bg-destructive text-destructive-foreground py-4">
          <div className="container mx-auto px-4 flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 animate-bounce-gentle" />
            <span className="font-semibold">Emergency Hotline: +1 (555) 911-PETS</span>
          </div>
        </section>

        {/* Hero */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-paw-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-6">
                <Shield className="w-4 h-4 inline mr-2" />
                Animal Rescue Services
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Report an Animal in <span className="text-gradient-warm">Distress</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our rescue team is available 24/7 to respond to animals in need. Every report matters.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="xl">
                  <AlertTriangle className="w-5 h-5" />
                  Report Emergency
                </Button>
                <Button variant="outline" size="xl">
                  <Phone className="w-5 h-5" />
                  Call Rescue Team
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Types */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                What Type of <span className="text-gradient-warm">Emergency?</span>
              </h2>
              <p className="text-muted-foreground">Select the situation that best describes the animal's condition</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencyTypes.map((type, index) => (
                <button
                  key={type.title}
                  className="bg-background rounded-2xl p-6 text-left shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{type.emoji}</div>
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                  <div className="flex items-center text-primary mt-4 font-semibold text-sm">
                    Report Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Response Times */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Rapid Response, <span className="text-gradient-warm">Every Time</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Our trained rescue team is equipped to handle any situation. We prioritize calls based on urgency and dispatch the nearest available unit.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Critical Emergency: 15-30 mins</h4>
                      <p className="text-muted-foreground text-sm">Life-threatening situations get immediate priority</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-warning" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Urgent: 1-2 hours</h4>
                      <p className="text-muted-foreground text-sm">Non-life-threatening but needs prompt attention</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Standard: Same day</h4>
                      <p className="text-muted-foreground text-sm">Animal is safe but needs rescue assistance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-warm rounded-3xl p-12 text-center text-primary-foreground">
                <div className="text-8xl mb-4">🚑</div>
                <h3 className="font-heading text-2xl font-bold mb-2">500+ Rescues This Year</h3>
                <p className="text-primary-foreground/80">Our team has saved hundreds of lives</p>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer */}
        <section className="py-20 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <Heart className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Join Our Rescue Team
            </h2>
            <p className="text-primary-foreground/90 text-xl mb-8 max-w-2xl mx-auto">
              Become a volunteer rescuer and help save animal lives in your community.
            </p>
            <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Apply to Volunteer
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rescue;
