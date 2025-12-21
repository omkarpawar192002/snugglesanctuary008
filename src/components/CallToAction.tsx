import { Heart, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the family! 🐾",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-paw-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-foreground/20 rounded-full mb-8 animate-bounce-gentle">
            <Heart className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Make a <br className="hidden sm:block" />
            Difference Today?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join thousands of animal lovers who are changing lives. Adopt, volunteer, or donate - every action counts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-medium group">
              <Heart className="w-5 h-5" />
              Adopt a Pet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Become a Volunteer
            </Button>
          </div>

          {/* Newsletter */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-primary-foreground" />
              <span className="font-semibold text-primary-foreground">Stay Updated</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Get adoption alerts, pet care tips, and heartwarming stories delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <Button type="submit" size="lg" className="bg-foreground text-primary-foreground hover:bg-foreground/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
