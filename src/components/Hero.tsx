import { Heart, ArrowRight, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroPets from "@/assets/hero-pets.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-paw-pattern opacity-20" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/40 rounded-full blur-[80px]" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[60px]" />
      
      {/* Floating paw prints */}
      <div className="absolute top-32 left-[10%] animate-float opacity-15">
        <svg className="w-14 h-14 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </div>
      <div className="absolute top-48 right-[15%] animate-float-delayed opacity-12">
        <svg className="w-20 h-20 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </div>
      <div className="absolute bottom-40 left-[20%] animate-float opacity-8">
        <Heart className="w-24 h-24 text-accent/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full mb-8 animate-fade-in shadow-soft">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wide">Making tails wag since 2020</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              A Small Click,
              <br />
              <span className="text-gradient-warm">A Big Difference</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Welcome to <span className="font-bold text-primary">Snuggle Sanctuary</span>, where we provide a safe haven for homeless and rescued animals, helping them find loving forever homes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/adoption">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto shadow-medium hover:shadow-glow">
                  <Heart className="w-5 h-5" />
                  Adopt a Friend
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/rescue">
                <Button variant="outline" size="xl" className="w-full sm:w-auto border-2 hover:bg-secondary">
                  <Shield className="w-5 h-5" />
                  Report Rescue
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-gradient-warm">2,500+</div>
                <div className="text-muted-foreground text-sm font-medium mt-1">Pets Adopted</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-gradient-warm">500+</div>
                <div className="text-muted-foreground text-sm font-medium mt-1">Pets Rescued</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-gradient-warm">100+</div>
                <div className="text-muted-foreground text-sm font-medium mt-1">Partner Clinics</div>
              </div>
            </div>
          </div>

          {/* Hero Image Area */}
          <div className="order-1 lg:order-2 relative animate-fade-in-right">
            <div className="relative max-w-lg mx-auto">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-warm rounded-[3rem] opacity-20 blur-3xl animate-pulse-soft" />
              
              {/* Main image container */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-hover">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent z-10" />
                <img 
                  src={heroPets} 
                  alt="Happy dog and cat together in a sunny garden" 
                  className="w-full aspect-square object-cover"
                />
                
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="glass-effect rounded-2xl p-4">
                    <p className="font-heading font-bold text-lg text-foreground">Every Pet Deserves Love</p>
                    <p className="text-muted-foreground text-sm">Find your perfect companion today</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-6 top-1/4 glass-effect rounded-2xl p-4 shadow-card animate-float z-30">
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

              <div className="absolute -right-6 bottom-1/3 glass-effect rounded-2xl p-4 shadow-card animate-float-delayed z-30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Pet Rescued!</div>
                    <div className="text-xs text-muted-foreground">Buddy is safe</div>
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
