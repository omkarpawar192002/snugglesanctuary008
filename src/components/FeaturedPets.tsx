import { useState } from "react";
import { Heart, MapPin, Calendar, ArrowRight, X, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/useFavorites";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Import pet images
import goldenRetriever from "@/assets/pets/golden-retriever.jpg";
import persianCat from "@/assets/pets/persian-cat.jpg";
import labradorMix from "@/assets/pets/labrador-mix.jpg";
import tabbyCat from "@/assets/pets/tabby-cat.jpg";
import germanShepherd from "@/assets/pets/german-shepherd.jpg";
import siameseCat from "@/assets/pets/siamese-cat.jpg";

export const pets = [
  {
    id: "pet-1",
    name: "Luna",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Female",
    location: "Downtown Shelter",
    image: goldenRetriever,
    type: "dog",
    personality: ["Friendly", "Playful", "Good with kids"],
    description: "Luna is an energetic and affectionate Golden Retriever who loves playing fetch and going on long walks. She's great with children and other pets.",
  },
  {
    id: "pet-2",
    name: "Mochi",
    breed: "Persian Cat",
    age: "1 year",
    gender: "Male",
    location: "East Side Center",
    image: persianCat,
    type: "cat",
    personality: ["Calm", "Cuddly", "Indoor"],
    description: "Mochi is a gentle Persian cat who enjoys lounging in sunny spots and getting brushed. He's perfect for a quiet home.",
  },
  {
    id: "pet-3",
    name: "Buddy",
    breed: "Labrador Mix",
    age: "3 years",
    gender: "Male",
    location: "North Shelter",
    image: labradorMix,
    type: "dog",
    personality: ["Loyal", "Trained", "Active"],
    description: "Buddy is a well-trained and loyal companion who excels at outdoor activities. He knows basic commands and loves water.",
  },
  {
    id: "pet-4",
    name: "Whiskers",
    breed: "Tabby Cat",
    age: "8 months",
    gender: "Female",
    location: "Downtown Shelter",
    image: tabbyCat,
    type: "cat",
    personality: ["Curious", "Independent", "Quiet"],
    description: "Whiskers is a curious kitten who loves exploring. She's independent but enjoys cuddle time in the evenings.",
  },
  {
    id: "pet-5",
    name: "Max",
    breed: "German Shepherd",
    age: "4 years",
    gender: "Male",
    location: "West Campus",
    image: germanShepherd,
    type: "dog",
    personality: ["Protective", "Smart", "Trained"],
    description: "Max is an intelligent and protective German Shepherd. He's well-trained and would be great for an active family.",
  },
  {
    id: "pet-6",
    name: "Bella",
    breed: "Siamese Cat",
    age: "2 years",
    gender: "Female",
    location: "East Side Center",
    image: siameseCat,
    type: "cat",
    personality: ["Vocal", "Affectionate", "Social"],
    description: "Bella is a talkative Siamese who loves attention. She gets along well with other cats and enjoys interactive toys.",
  },
];

export type Pet = typeof pets[0];

interface FeaturedPetsProps {
  searchQuery?: string;
  selectedSpecies?: string;
}

const FeaturedPets = ({ searchQuery = "", selectedSpecies = "All" }: FeaturedPetsProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [adoptDialogOpen, setAdoptDialogOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    reason: "",
  });

  // Filter pets based on search and species
  const filteredPets = pets.filter((pet) => {
    const matchesSearch = searchQuery === "" || 
      pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecies = selectedSpecies === "All" || 
      (selectedSpecies === "Dogs" && pet.type === "dog") ||
      (selectedSpecies === "Cats" && pet.type === "cat");
    
    return matchesSearch && matchesSpecies;
  });

  const handleFavoriteClick = async (pet: Pet) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to save your favorite pets.",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    if (isFavorite(pet.id)) {
      await removeFavorite(pet.id);
      toast({
        title: "Removed from favorites",
        description: `${pet.name} has been removed from your favorites.`,
      });
    } else {
      await addFavorite({
        id: pet.id,
        name: pet.name,
        image: pet.image,
        type: pet.type,
      });
      toast({
        title: "Added to favorites! 💕",
        description: `${pet.name} has been added to your favorites.`,
      });
    }
  };

  const handleAdoptClick = (pet: Pet) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to submit an adoption application.",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }
    setSelectedPet(pet);
    setApplicationData({
      ...applicationData,
      email: user.email || "",
      name: user.user_metadata?.full_name || "",
    });
    setAdoptDialogOpen(true);
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !selectedPet) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("adoption_requests").insert({
        user_id: user.id,
        pet_id: selectedPet.id,
        pet_name: selectedPet.name,
        pet_image: selectedPet.image,
        applicant_name: applicationData.name,
        applicant_email: applicationData.email,
        applicant_phone: applicationData.phone,
        message: `Address: ${applicationData.address}\n\nReason: ${applicationData.reason}`,
        status: "pending",
      });

      if (error) throw error;

      setAdoptDialogOpen(false);
      setApplicationData({ name: "", email: "", phone: "", address: "", reason: "" });
      
      toast({
        title: "Application Submitted! 🎉",
        description: `Your adoption application for ${selectedPet?.name} has been received. We'll contact you within 24-48 hours.`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-secondary/30 rounded-full blur-[80px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="inline-block px-5 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full mb-5 shadow-soft">
                Ready for Adoption
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
                Meet Our <span className="text-gradient-warm">Adorable</span> Friends
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                These lovely pets are waiting for someone special to take them home. Each one has a unique personality and lots of love to give.
              </p>
            </div>
            <Link to="/adoption">
              <Button variant="outline" size="lg" className="group border-2">
                View All Pets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Pets Grid */}
          {filteredPets.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🐾</div>
              <h3 className="font-heading text-2xl font-bold mb-2">No pets found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPets.map((pet, index) => {
                const favorited = isFavorite(pet.id);
                return (
                  <div
                    key={pet.id}
                    className="group bg-card rounded-3xl overflow-hidden shadow-card pet-card-hover animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={pet.image} 
                        alt={`${pet.name} - ${pet.breed}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Favorite button */}
                      <button
                        onClick={() => handleFavoriteClick(pet)}
                        className={cn(
                          "absolute top-4 right-4 w-11 h-11 backdrop-blur-md rounded-full flex items-center justify-center shadow-medium transition-all duration-300 group/btn",
                          favorited
                            ? "bg-primary text-primary-foreground scale-110"
                            : "bg-card/90 hover:bg-primary hover:text-primary-foreground hover:scale-110"
                        )}
                      >
                        <Heart className={cn("w-5 h-5 transition-transform group-hover/btn:scale-110", favorited && "fill-current")} />
                      </button>

                      {/* Gender badge */}
                      <div className="absolute bottom-4 left-4 px-4 py-1.5 bg-card/90 backdrop-blur-md rounded-full text-sm font-semibold shadow-soft">
                        {pet.gender}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                            {pet.name}
                          </h3>
                          <p className="text-muted-foreground font-medium">{pet.breed}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          {pet.age}
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-5">
                        <MapPin className="w-4 h-4 text-primary" />
                        {pet.location}
                      </div>

                      {/* Personality tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {pet.personality.map((trait) => (
                          <span
                            key={trait}
                            className="px-3 py-1.5 bg-gradient-pet text-foreground rounded-full text-xs font-semibold border border-primary/10"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>

                      <Button 
                        variant="hero" 
                        className="w-full group/btn shadow-soft hover:shadow-medium"
                        onClick={() => handleAdoptClick(pet)}
                      >
                        <Heart className="w-4 h-4" />
                        Adopt {pet.name}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Adoption Application Dialog */}
      <Dialog open={adoptDialogOpen} onOpenChange={setAdoptDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Adopt {selectedPet?.name}
            </DialogTitle>
            <DialogDescription>
              Fill out this application to start the adoption process. We'll review your application and contact you within 24-48 hours.
            </DialogDescription>
          </DialogHeader>
          
          {selectedPet && (
            <div className="flex items-center gap-4 p-4 bg-muted rounded-xl mb-4">
              <img 
                src={selectedPet.image} 
                alt={selectedPet.name} 
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div>
                <h4 className="font-heading font-bold">{selectedPet.name}</h4>
                <p className="text-sm text-muted-foreground">{selectedPet.breed} • {selectedPet.age}</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmitApplication} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={applicationData.name}
                  onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={applicationData.phone}
                  onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={applicationData.email}
                onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Home Address</Label>
              <Input
                id="address"
                value={applicationData.address}
                onChange={(e) => setApplicationData({ ...applicationData, address: e.target.value })}
                placeholder="Street, City, State, ZIP"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reason">Why do you want to adopt {selectedPet?.name}?</Label>
              <Textarea
                id="reason"
                value={applicationData.reason}
                onChange={(e) => setApplicationData({ ...applicationData, reason: e.target.value })}
                placeholder="Tell us about your home, experience with pets, and why you'd be a great match..."
                rows={4}
                required
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={() => setAdoptDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="hero" 
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeaturedPets;
