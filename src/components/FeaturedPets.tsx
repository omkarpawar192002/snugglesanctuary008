import { Heart, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pets = [
  {
    id: 1,
    name: "Luna",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Female",
    location: "Downtown Shelter",
    image: "🐕",
    personality: ["Friendly", "Playful", "Good with kids"],
    color: "bg-primary/10",
  },
  {
    id: 2,
    name: "Mochi",
    breed: "Persian Cat",
    age: "1 year",
    gender: "Male",
    location: "East Side Center",
    image: "🐱",
    personality: ["Calm", "Cuddly", "Indoor"],
    color: "bg-accent/10",
  },
  {
    id: 3,
    name: "Buddy",
    breed: "Labrador Mix",
    age: "3 years",
    gender: "Male",
    location: "North Shelter",
    image: "🐶",
    personality: ["Loyal", "Trained", "Active"],
    color: "bg-success/10",
  },
  {
    id: 4,
    name: "Whiskers",
    breed: "Tabby Cat",
    age: "8 months",
    gender: "Female",
    location: "Downtown Shelter",
    image: "😺",
    personality: ["Curious", "Independent", "Quiet"],
    color: "bg-secondary",
  },
  {
    id: 5,
    name: "Max",
    breed: "German Shepherd",
    age: "4 years",
    gender: "Male",
    location: "West Campus",
    image: "🦮",
    personality: ["Protective", "Smart", "Trained"],
    color: "bg-warning/10",
  },
  {
    id: 6,
    name: "Bella",
    breed: "Siamese Cat",
    age: "2 years",
    gender: "Female",
    location: "East Side Center",
    image: "😸",
    personality: ["Vocal", "Affectionate", "Social"],
    color: "bg-primary/10",
  },
];

const FeaturedPets = () => {
  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Ready for Adoption
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meet Our <span className="text-gradient-warm">Adorable</span> Friends
            </h2>
            <p className="text-muted-foreground text-lg">
              These lovely pets are waiting for someone special to take them home.
            </p>
          </div>
          <Button variant="outline" size="lg">
            View All Pets
          </Button>
        </div>

        {/* Pets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map((pet, index) => (
            <div
              key={pet.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className={cn("relative h-56 flex items-center justify-center", pet.color)}>
                <span className="text-8xl group-hover:scale-110 transition-transform duration-500">{pet.image}</span>
                
                {/* Favorite button */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:bg-accent hover:text-accent-foreground transition-all duration-300 group/btn">
                  <Heart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                </button>

                {/* Gender badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full text-sm font-medium">
                  {pet.gender}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                      {pet.name}
                    </h3>
                    <p className="text-muted-foreground">{pet.breed}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {pet.age}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  {pet.location}
                </div>

                {/* Personality tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pet.personality.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                <Button variant="hero" className="w-full">
                  <Heart className="w-4 h-4" />
                  Adopt {pet.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
