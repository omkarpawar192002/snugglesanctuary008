import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Star, Clock, Stethoscope, Shield, Calendar, ArrowRight, CheckCircle, Loader2, User, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const clinics = [
  {
    id: 1,
    name: "Pawsome Pet Care",
    address: "Lane 5, Koregaon Park, Pune",
    phone: "+91 20 2612 3456",
    rating: 4.9,
    reviews: 234,
    hours: "Mon-Sat: 8AM-8PM",
    services: ["Checkups", "Vaccinations", "Surgery", "Emergency"],
    image: "🏥",
  },
  {
    id: 2,
    name: "Kothrud Animal Hospital",
    address: "Paud Road, Kothrud, Pune",
    phone: "+91 20 2543 6789",
    rating: 4.8,
    reviews: 189,
    hours: "Mon-Fri: 9AM-6PM",
    services: ["Checkups", "Dental", "X-Ray", "Lab Tests"],
    image: "🏨",
  },
  {
    id: 3,
    name: "Viman Nagar Pet Clinic",
    address: "Phoenix Mall Road, Viman Nagar, Pune",
    phone: "+91 20 2668 9012",
    rating: 4.7,
    reviews: 156,
    hours: "24/7 Emergency",
    services: ["Emergency", "ICU", "Surgery", "Specialists"],
    image: "🚑",
  },
  {
    id: 4,
    name: "Aundh Veterinary Center",
    address: "DP Road, Aundh, Pune",
    phone: "+91 20 2588 3456",
    rating: 4.9,
    reviews: 312,
    hours: "Mon-Sun: 7AM-10PM",
    services: ["Wellness", "Nutrition", "Grooming", "Training"],
    image: "🌅",
  },
];

const Clinic = () => {
  const { toast } = useToast();
  const [selectedClinic, setSelectedClinic] = useState<typeof clinics[0] | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleBookAppointment = (clinic: typeof clinics[0]) => {
    setSelectedClinic(clinic);
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
    toast({
      title: "Appointment Booked!",
      description: `Your appointment at ${selectedClinic?.name} is confirmed.`,
    });
  };

  const resetForm = () => {
    setSelectedClinic(null);
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", date: "", time: "", reason: "" });
  };

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
                Trusted Partners in Pune
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Find <span className="text-gradient-warm">Veterinary</span> Clinics
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect with our network of trusted veterinary partners in Pune for quality pet healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Modal */}
        {selectedClinic && (
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto bg-card rounded-3xl p-8 shadow-medium">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-success" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold mb-4">Appointment Confirmed!</h2>
                    <p className="text-muted-foreground mb-2">
                      Your appointment at <strong>{selectedClinic.name}</strong>
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {formData.date} at {formData.time}
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      You will receive a confirmation call at {formData.phone}
                    </p>
                    <Button onClick={resetForm}>Book Another Appointment</Button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="font-heading text-2xl font-bold">Book Appointment</h2>
                        <p className="text-primary font-medium">{selectedClinic.name}</p>
                      </div>
                      <Button variant="ghost" onClick={resetForm}>Cancel</Button>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-medium mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Your Name *
                          </label>
                          <Input
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="block font-medium mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Phone *
                          </label>
                          <Input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-medium mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email (Optional)
                        </label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-medium mb-2">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Preferred Date *
                          </label>
                          <Input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                        <div>
                          <label className="block font-medium mb-2">
                            <Clock className="w-4 h-4 inline mr-2" />
                            Preferred Time *
                          </label>
                          <Input
                            type="time"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-medium mb-2">Reason for Visit</label>
                        <Textarea
                          placeholder="Describe your pet's condition or reason for visit..."
                          value={formData.reason}
                          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                          rows={3}
                        />
                      </div>

                      <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
                        {loading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Calendar className="w-5 h-5" />
                        )}
                        Confirm Appointment
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

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
                        <Button 
                          variant="hero" 
                          className="w-full"
                          onClick={() => handleBookAppointment(clinic)}
                        >
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
              All clinics in our network are licensed, inspected, and committed to providing the best care for your pets in Pune.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clinic;
