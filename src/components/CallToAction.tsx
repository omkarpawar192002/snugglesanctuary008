import { useState } from "react";
import { Heart, ArrowRight, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
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

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [volunteerDialogOpen, setVolunteerDialogOpen] = useState(false);
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
    experience: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the family! 🐾",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setVolunteerDialogOpen(false);
    setVolunteerData({ name: "", email: "", phone: "", availability: "", experience: "" });
    
    toast({
      title: "Application Received! 🎉",
      description: "Thank you for wanting to volunteer! We'll contact you soon.",
    });
  };

  return (
    <>
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
              <Link to="/adoption">
                <Button 
                  size="xl" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-medium group w-full sm:w-auto"
                >
                  <Heart className="w-5 h-5" />
                  Adopt a Pet
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                size="xl" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={() => setVolunteerDialogOpen(true)}
              >
                <Users className="w-5 h-5" />
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
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
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

      {/* Volunteer Application Dialog */}
      <Dialog open={volunteerDialogOpen} onOpenChange={setVolunteerDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Become a Volunteer
            </DialogTitle>
            <DialogDescription>
              Join our team of dedicated volunteers and help make a difference in the lives of animals in need.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleVolunteerSubmit} className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vol-name">Full Name</Label>
                <Input
                  id="vol-name"
                  value={volunteerData.name}
                  onChange={(e) => setVolunteerData({ ...volunteerData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vol-phone">Phone Number</Label>
                <Input
                  id="vol-phone"
                  type="tel"
                  value={volunteerData.phone}
                  onChange={(e) => setVolunteerData({ ...volunteerData, phone: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="vol-email">Email</Label>
              <Input
                id="vol-email"
                type="email"
                value={volunteerData.email}
                onChange={(e) => setVolunteerData({ ...volunteerData, email: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="vol-availability">Availability</Label>
              <Input
                id="vol-availability"
                value={volunteerData.availability}
                onChange={(e) => setVolunteerData({ ...volunteerData, availability: e.target.value })}
                placeholder="e.g., Weekends, Evenings, 10 hours/week"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="vol-experience">Tell us about yourself</Label>
              <Textarea
                id="vol-experience"
                value={volunteerData.experience}
                onChange={(e) => setVolunteerData({ ...volunteerData, experience: e.target.value })}
                placeholder="Share your experience with animals, why you want to volunteer, and any relevant skills..."
                rows={4}
                required
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={() => setVolunteerDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="hero" 
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CallToAction;
