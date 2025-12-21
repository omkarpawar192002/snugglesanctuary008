import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useFavorites } from "@/hooks/useFavorites";
import { Heart, Trash2, PawPrint, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { user, loading: authLoading } = useAuth();
  const { favorites, loading: favLoading, removeFavorite } = useFavorites();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  if (authLoading || favLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

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
                <Heart className="w-4 h-4 inline mr-2 fill-current" />
                Your Saved Pets
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                My <span className="text-gradient-warm">Favorites</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Keep track of all the pets you're interested in adopting.
              </p>
            </div>
          </div>
        </section>

        {/* Favorites Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {favorites.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <PawPrint className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">No favorites yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start browsing our adorable pets and save the ones you love!
                </p>
                <Link to="/adoption">
                  <Button variant="hero" size="lg">
                    Browse Pets
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favorites.map((fav) => (
                  <div
                    key={fav.id}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 group"
                  >
                    <div className="aspect-square relative overflow-hidden bg-muted">
                      {fav.pet_image ? (
                        <img
                          src={fav.pet_image}
                          alt={fav.pet_name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <PawPrint className="w-16 h-16 text-muted-foreground" />
                        </div>
                      )}
                      <button
                        onClick={() => removeFavorite(fav.pet_id)}
                        className="absolute top-3 right-3 p-2 bg-destructive/90 rounded-full text-destructive-foreground hover:bg-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-bold text-lg">{fav.pet_name}</h3>
                      {fav.pet_type && (
                        <p className="text-sm text-muted-foreground capitalize">{fav.pet_type}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">
                        Saved on {new Date(fav.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
