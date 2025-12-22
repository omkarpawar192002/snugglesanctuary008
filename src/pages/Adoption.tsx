import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedPets from "@/components/FeaturedPets";
import { Button } from "@/components/ui/button";
import { Search, Filter, Heart, X, SlidersHorizontal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const filters = {
  species: ["All", "Dogs", "Cats", "Birds", "Rabbits", "Others"],
  age: ["Any Age", "Puppy/Kitten", "Young", "Adult", "Senior"],
  size: ["Any Size", "Small", "Medium", "Large"],
  gender: ["Any Gender", "Male", "Female"],
};

const Adoption = () => {
  const [selectedSpecies, setSelectedSpecies] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState({
    age: "Any Age",
    size: "Any Size",
    gender: "Any Gender",
  });
  const [visibleCount, setVisibleCount] = useState(6);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Searching...",
        description: `Finding pets matching "${searchQuery}"`,
      });
    }
  };

  const handleApplyFilters = () => {
    setFilterDialogOpen(false);
    toast({
      title: "Filters Applied",
      description: "Showing pets that match your criteria.",
    });
  };

  const handleResetFilters = () => {
    setAdvancedFilters({
      age: "Any Age",
      size: "Any Size",
      gender: "Any Gender",
    });
    setSelectedSpecies("All");
    setSearchQuery("");
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
    toast({
      title: "Loading more pets...",
      description: "Fetching additional furry friends!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-paw-pattern opacity-20" />
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/30 rounded-full blur-[80px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-5 py-2.5 bg-primary/10 text-primary text-sm font-bold rounded-full mb-6 shadow-soft">
                <Heart className="w-4 h-4 inline mr-2" />
                Find Your Perfect Match
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Adopt a <span className="text-gradient-warm">Furry Friend</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Every pet deserves a loving home. Browse our available animals and find your new companion.
              </p>
              
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name or breed..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary shadow-soft transition-shadow"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <Button 
                  type="button"
                  variant="hero" 
                  size="lg" 
                  className="gap-2 shadow-medium"
                  onClick={() => setFilterDialogOpen(true)}
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Species Filter Tabs */}
        <section className="py-8 bg-card border-b border-border sticky top-16 md:top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.species.map((species) => (
                <button
                  key={species}
                  onClick={() => setSelectedSpecies(species)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedSpecies === species
                      ? "bg-primary text-primary-foreground shadow-medium scale-105"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-102"
                  }`}
                >
                  {species}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pets List */}
        <FeaturedPets searchQuery={searchQuery} selectedSpecies={selectedSpecies} />

        {/* Load More */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              onClick={handleLoadMore}
            >
              Load More Pets
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
              Showing 6 of 24 available pets
            </p>
          </div>
        </section>
      </main>
      <Footer />

      {/* Advanced Filters Dialog */}
      <Dialog open={filterDialogOpen} onOpenChange={setFilterDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl flex items-center gap-2">
              <SlidersHorizontal className="w-6 h-6 text-primary" />
              Filter Pets
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label>Age</Label>
              <Select
                value={advancedFilters.age}
                onValueChange={(value) => setAdvancedFilters({ ...advancedFilters, age: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {filters.age.map((age) => (
                    <SelectItem key={age} value={age}>{age}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Size</Label>
              <Select
                value={advancedFilters.size}
                onValueChange={(value) => setAdvancedFilters({ ...advancedFilters, size: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {filters.size.map((size) => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Gender</Label>
              <Select
                value={advancedFilters.gender}
                onValueChange={(value) => setAdvancedFilters({ ...advancedFilters, gender: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {filters.gender.map((gender) => (
                    <SelectItem key={gender} value={gender}>{gender}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleResetFilters}
            >
              Reset All
            </Button>
            <Button 
              variant="hero" 
              className="flex-1"
              onClick={handleApplyFilters}
            >
              Apply Filters
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Adoption;
