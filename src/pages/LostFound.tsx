import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Camera, MapPin, Calendar, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { useState } from "react";

const lostPets = [
  { id: 1, name: "Max", type: "Golden Retriever", status: "Lost", location: "Central Park", date: "Dec 18, 2025", image: "🐕" },
  { id: 2, name: "Whiskers", type: "Tabby Cat", status: "Lost", location: "Oak Street", date: "Dec 17, 2025", image: "🐱" },
  { id: 3, name: "Buddy", type: "Beagle Mix", status: "Found", location: "River Trail", date: "Dec 16, 2025", image: "🐶" },
];

const LostFound = () => {
  const [activeTab, setActiveTab] = useState<"lost" | "found">("lost");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-paw-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-6">
                <Search className="w-4 h-4 inline mr-2" />
                AI-Powered Matching
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Lost & <span className="text-gradient-warm">Found</span> Pets
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Use our AI-powered system to report lost pets or found animals. We match photos and descriptions to reunite families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  <Camera className="w-5 h-5" />
                  Report Lost Pet
                </Button>
                <Button variant="nature" size="xl">
                  <Sparkles className="w-5 h-5" />
                  Report Found Pet
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Feature */}
        <section className="py-12 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <div className="w-20 h-20 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-primary-foreground">
                <h3 className="font-heading text-2xl font-bold mb-2">AI-Powered Pet Matching</h3>
                <p className="text-primary-foreground/80 max-w-lg">
                  Upload a photo and our AI compares it with reported pets, matching features like breed, color, and markings.
                </p>
              </div>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Try AI Match
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActiveTab("lost")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "lost"
                    ? "bg-accent text-accent-foreground shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Lost Pets
              </button>
              <button
                onClick={() => setActiveTab("found")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "found"
                    ? "bg-success text-success-foreground shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Found Pets
              </button>
            </div>
          </div>
        </section>

        {/* Listings */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lostPets.map((pet, index) => (
                <div
                  key={pet.id}
                  className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-48 flex items-center justify-center ${pet.status === "Lost" ? "bg-accent/10" : "bg-success/10"}`}>
                    <span className="text-8xl">{pet.image}</span>
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
                      pet.status === "Lost" ? "bg-accent text-accent-foreground" : "bg-success text-success-foreground"
                    }`}>
                      {pet.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-2">{pet.name}</h3>
                    <p className="text-muted-foreground mb-4">{pet.type}</p>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Last seen: {pet.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {pet.date}
                      </div>
                    </div>
                    <Button variant={pet.status === "Lost" ? "hero" : "nature"} className="w-full">
                      {pet.status === "Lost" ? "I Found This Pet" : "This is My Pet"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-warm">1,200+</span> Pets Reunited
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Our AI matching system has helped reunite over a thousand lost pets with their families.
            </p>
            <Button variant="outline" size="lg">
              View Success Stories
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LostFound;
