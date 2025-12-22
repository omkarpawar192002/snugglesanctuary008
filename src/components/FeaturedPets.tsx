import { Heart, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/useFavorites";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

// Import pet images
import goldenRetriever from "@/assets/pets/golden-retriever.jpg";
import persianCat from "@/assets/pets/persian-cat.jpg";
import labradorMix from "@/assets/pets/labrador-mix.jpg";
import tabbyCat from "@/assets/pets/tabby-cat.jpg";
import germanShepherd from "@/assets/pets/german-shepherd.jpg";
import siameseCat from "@/assets/pets/siamese-cat.jpg";

const pets = [
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
  },
];

const FeaturedPets = () => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { user } = useAuth();

  const handleFavoriteClick = async (pet: typeof pets[0]) => {
    if (isFavorite(pet.id)) {
      await removeFavorite(pet.id);
    } else {
      await addFavorite({
        id: pet.id,
        name: pet.name,
        image: pet.image,
        type: pet.type,
      });
    }
  };

  return (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet, index) => {
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

                  <Button variant="hero" className="w-full group/btn shadow-soft hover:shadow-medium">
                    <Heart className="w-4 h-4" />
                    Adopt {pet.name}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
