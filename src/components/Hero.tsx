import { Heart, Search, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-paw-pattern opacity-30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/30 rounded-full blur-3xl" />
      
      {/* Floating paw prints */}
      <div className="absolute top-32 left-[10%] animate-float opacity-20">
        <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </div>
      <div className="absolute top-48 right-[15%] animate-float-delayed opacity-15">
        <svg className="w-16 h-16 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </div>
      <div className="absolute bottom-32 left-[20%] animate-float opacity-10">
        <Heart className="w-20 h-20 text-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Making tails wag since 2020</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              A Small Click,
              <br />
              <span className="text-gradient-warm">A Big Difference</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Welcome to <span className="font-bold text-primary">Snuggle Sanctuary</span>, where we provide a safe haven for homeless and rescued animals, helping them find loving forever homes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" className="group">
                <Heart className="w-5 h-5" />
                Adopt a Friend
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                <Search className="w-5 h-5" />
                Find Lost Pets
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <div className="font-heading text-3xl md:text-4xl font-black text-primary">2,500+</div>
                <div className="text-muted-foreground text-sm">Pets Adopted</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-heading text-3xl md:text-4xl font-black text-primary">500+</div>
                <div className="text-muted-foreground text-sm">Pets Rescued</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-heading text-3xl md:text-4xl font-black text-primary">100+</div>
                <div className="text-muted-foreground text-sm">Partner Clinics</div>
              </div>
            </div>
          </div>

          {/* Hero Image Area */}
          <div className="order-1 lg:order-2 relative animate-fade-in-right">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main circular image container */}
              <div className="absolute inset-0 bg-gradient-warm rounded-full opacity-20 animate-pulse-soft" />
              <div className="absolute inset-4 bg-card rounded-full shadow-glow overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-warm rounded-full flex items-center justify-center animate-bounce-gentle">
                      <svg className="w-16 h-16 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    </div>
                    <p className="font-heading font-bold text-2xl text-foreground">Every Pet Deserves Love</p>
                    <p className="text-muted-foreground mt-2">Find your perfect companion today</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-4 top-1/4 bg-card rounded-2xl p-4 shadow-medium animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">New Match!</div>
                    <div className="text-xs text-muted-foreground">Luna found a home</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-card rounded-2xl p-4 shadow-medium animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Pet Found!</div>
                    <div className="text-xs text-muted-foreground">Buddy reunited</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--card))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
