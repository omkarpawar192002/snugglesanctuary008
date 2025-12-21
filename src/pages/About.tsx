import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Award, Target, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  { name: "Dr. Sarah Mitchell", role: "Founder & Director", emoji: "👩‍⚕️" },
  { name: "James Rodriguez", role: "Head of Rescue Operations", emoji: "👨‍🔬" },
  { name: "Emily Chen", role: "Adoption Coordinator", emoji: "👩‍💼" },
  { name: "Michael Brown", role: "Veterinary Lead", emoji: "👨‍⚕️" },
];

const values = [
  { icon: Heart, title: "Compassion", description: "Every animal deserves love and care" },
  { icon: Users, title: "Community", description: "Together we can make a difference" },
  { icon: Award, title: "Excellence", description: "Best practices in animal welfare" },
  { icon: Target, title: "Impact", description: "Measurable positive outcomes" },
];

const About = () => {
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
                Our Story
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-gradient-warm">Snuggle Sanctuary</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded in 2020, Snuggle Sanctuary has been dedicated to rescuing, rehabilitating, and rehoming animals in need. We believe every animal deserves a second chance at happiness.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-4">
                  Our Mission
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Creating a World Where Every Pet Has a Loving Home
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We work tirelessly to provide shelter, medical care, and love to homeless animals while connecting them with caring families. Our comprehensive approach includes rescue operations, rehabilitation programs, and community education.
                </p>
                <ul className="space-y-3">
                  {["Rescue animals in distress", "Provide medical care and rehabilitation", "Find loving forever homes", "Educate the community"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-warm rounded-3xl p-12 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-8xl mb-4">🐾</div>
                  <p className="font-heading text-2xl font-bold">2,500+ Lives Changed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our Core <span className="text-gradient-warm">Values</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="text-gradient-warm">Team</span>
              </h2>
              <p className="text-muted-foreground">Dedicated professionals committed to animal welfare</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={member.name} className="bg-background rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-6xl mb-4">{member.emoji}</div>
                  <h3 className="font-heading font-bold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Join Our Mission
            </h2>
            <p className="text-primary-foreground/90 text-xl mb-8 max-w-2xl mx-auto">
              Whether you adopt, volunteer, or donate, your support helps us save more lives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Volunteer With Us
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Make a Donation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
