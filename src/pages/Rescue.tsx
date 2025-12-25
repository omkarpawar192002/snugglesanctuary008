import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, MapPin, Mail, Clock, Heart, Shield, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const rescuers = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Large Animals & Farm Rescue",
    phone: "+91 98765 43210",
    email: "priya.sharma@petrescue.in",
    location: "Koregaon Park, Pune",
    available: "24/7 Emergency",
    avatar: "👩‍⚕️",
  },
  {
    id: 2,
    name: "Rahul Deshmukh",
    specialty: "Wildlife & Exotic Animals",
    phone: "+91 87654 32109",
    email: "rahul.deshmukh@petrescue.in",
    location: "Kothrud, Pune",
    available: "Mon-Sat, 6AM-10PM",
    avatar: "👨‍🔧",
  },
  {
    id: 3,
    name: "Anjali Kulkarni",
    specialty: "Cats & Small Pets",
    phone: "+91 76543 21098",
    email: "anjali.kulkarni@petrescue.in",
    location: "Viman Nagar, Pune",
    available: "Daily, 8AM-8PM",
    avatar: "👩‍⚕️",
  },
  {
    id: 4,
    name: "Vikram Patil",
    specialty: "Dogs & K9 Rescue",
    phone: "+91 65432 10987",
    email: "vikram.patil@petrescue.in",
    location: "Shivaji Nagar, Pune",
    available: "24/7 Emergency",
    avatar: "🧔",
  },
  {
    id: 5,
    name: "Dr. Sneha Joshi",
    specialty: "Birds & Avian Rescue",
    phone: "+91 54321 09876",
    email: "sneha.joshi@petrescue.in",
    location: "Aundh, Pune",
    available: "Mon-Fri, 9AM-6PM",
    avatar: "👩‍🔬",
  },
  {
    id: 6,
    name: "Amit Bhosale",
    specialty: "Marine & Aquatic Animals",
    phone: "+91 43210 98765",
    email: "amit.bhosale@petrescue.in",
    location: "Hadapsar, Pune",
    available: "Daily, 7AM-9PM",
    avatar: "🧑‍🦱",
  },
];

const Rescue = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Emergency Banner */}
        <section className="bg-destructive text-destructive-foreground py-4">
          <div className="container mx-auto px-4 flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 animate-bounce-gentle" />
            <span className="font-semibold">Emergency Hotline: +91 20 2612 3456</span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-paw-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                <Shield className="w-4 h-4 inline mr-2" />
                Verified Rescuers
              </span>
              <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Contact Our <span className="text-gradient-warm">Rescue Team</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Our trained rescuers are ready to help animals in need. Reach out directly for immediate assistance.
              </p>
            </div>

            {/* Rescuers Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {rescuers.map((rescuer) => (
                <Card key={rescuer.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                  <CardContent className="p-6">
                    {/* Avatar & Name */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                        {rescuer.avatar}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg">{rescuer.name}</h3>
                        <p className="text-sm text-primary font-medium">{rescuer.specialty}</p>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-3 mb-5">
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <a href={`tel:${rescuer.phone}`} className="hover:text-primary transition-colors">
                          {rescuer.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <a href={`mailto:${rescuer.email}`} className="hover:text-primary transition-colors truncate">
                          {rescuer.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{rescuer.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className={rescuer.available.includes("24/7") ? "text-success font-medium" : "text-muted-foreground"}>
                          {rescuer.available}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <a href={`tel:${rescuer.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
              <div>
                <div className="font-heading text-3xl font-bold text-gradient-warm">24/7</div>
                <div className="text-muted-foreground text-sm">Available</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-gradient-warm">15 min</div>
                <div className="text-muted-foreground text-sm">Avg Response</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-gradient-warm">500+</div>
                <div className="text-muted-foreground text-sm">Rescues</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rescue;
