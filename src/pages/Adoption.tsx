import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedPets from "@/components/FeaturedPets";
import { Button } from "@/components/ui/button";
import { Search, Filter, Heart } from "lucide-react";
import { useState } from "react";

const filters = {
  species: ["All", "Dogs", "Cats", "Birds", "Rabbits", "Others"],
  age: ["Any Age", "Puppy/Kitten", "Young", "Adult", "Senior"],
  size: ["Any Size", "Small", "Medium", "Large"],
};

const Adoption = () => {
  const [selectedSpecies, setSelectedSpecies] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-paw-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                <Heart className="w-4 h-4 inline mr-2" />
                Find Your Perfect Match
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Adopt a <span className="text-gradient-warm">Furry Friend</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Every pet deserves a loving home. Browse our available animals and find your new companion.
              </p>
              
              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name or breed..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary shadow-soft"
                  />
                </div>
                <Button variant="hero" size="lg" className="gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.species.map((species) => (
                <button
                  key={species}
                  onClick={() => setSelectedSpecies(species)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedSpecies === species
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {species}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pets List */}
        <FeaturedPets />

        {/* Load More */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <Button variant="outline" size="lg">
              Load More Pets
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Adoption;
