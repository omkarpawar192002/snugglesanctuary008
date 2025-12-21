import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star, Clock, Stethoscope, Shield, Calendar, ArrowRight } from "lucide-react";

const clinics = [
  {
    id: 1,
    name: "Downtown Pet Care",
    address: "123 Main Street, Downtown",
    phone: "+1 (555) 123-4567",
    rating: 4.9,
    reviews: 234,
    hours: "Mon-Sat: 8AM-8PM",
    services: ["Checkups", "Vaccinations", "Surgery", "Emergency"],
    image: "🏥",
  },
  {
    id: 2,
    name: "East Side Animal Hospital",
    address: "456 Oak Avenue, East Side",
    phone: "+1 (555) 234-5678",
    rating: 4.8,
    reviews: 189,
    hours: "Mon-Fri: 9AM-6PM",
    services: ["Checkups", "Dental", "X-Ray", "Lab Tests"],
    image: "🏨",
  },
  {
    id: 3,
    name: "North Veterinary Clinic",
    address: "789 Pine Road, North District",
    phone: "+1 (555) 345-6789",
    rating: 4.7,
    reviews: 156,
    hours: "24/7 Emergency",
    services: ["Emergency", "ICU", "Surgery", "Specialists"],
    image: "🚑",
  },
  {
    id: 4,
    name: "Sunrise Pet Wellness",
    address: "321 Sunrise Blvd, West End",
    phone: "+1 (555) 456-7890",
    rating: 4.9,
    reviews: 312,
    hours: "Mon-Sun: 7AM-10PM",
    services: ["Wellness", "Nutrition", "Grooming", "Training"],
    image: "🌅",
  },
];

const Clinic = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-paw-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                <Stethoscope className="w-4 h-4 inline mr-2" />
                Trusted Partners
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Find <span className="text-gradient-warm">Veterinary</span> Clinics
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect with our network of trusted veterinary partners for quality pet healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  <MapPin className="w-5 h-5" />
                  Find Nearest Clinic
                </Button>
                <Button variant="outline" size="xl">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Clinics List */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {clinics.map((clinic, index) => (
                <div
                  key={clinic.id}
                  className="bg-background rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-4xl shrink-0">
                        {clinic.image}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-heading font-bold text-xl group-hover:text-primary transition-colors">
                            {clinic.name}
                          </h3>
                          <div className="flex items-center gap-1 bg-warning/10 px-2 py-1 rounded-full">
                            <Star className="w-4 h-4 text-warning fill-warning" />
                            <span className="text-sm font-semibold">{clinic.rating}</span>
                            <span className="text-xs text-muted-foreground">({clinic.reviews})</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {clinic.address}
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            {clinic.phone}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {clinic.hours}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {clinic.services.map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        <Button variant="hero" className="w-full">
                          Book Appointment
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Verified & <span className="text-gradient-warm">Trusted</span> Partners
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              All clinics in our network are licensed, inspected, and committed to providing the best care for your pets.
            </p>
            <Button variant="outline" size="lg">
              Learn About Our Standards
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clinic;
