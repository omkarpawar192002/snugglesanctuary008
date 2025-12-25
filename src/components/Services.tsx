import { Heart, Stethoscope, Users, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Heart,
    title: "Pet Adoption",
    description: "Find your perfect furry companion from our shelter of rescued pets waiting for loving homes.",
    href: "/adoption",
    color: "bg-primary/10 text-primary",
    accent: "group-hover:bg-primary",
  },
  {
    icon: Shield,
    title: "Animal Rescue",
    description: "Report animals in distress. Our rescue team responds quickly to save lives 24/7.",
    href: "/rescue",
    color: "bg-success/10 text-success",
    accent: "group-hover:bg-success",
  },
  {
    icon: Stethoscope,
    title: "Vet Clinics",
    description: "Access to trusted veterinary partners for checkups, vaccinations, and emergency care.",
    href: "/clinic",
    color: "bg-secondary-foreground/10 text-secondary-foreground",
    accent: "group-hover:bg-secondary-foreground",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join our community of animal lovers, share stories, and make a difference together.",
    href: "/blogs",
    color: "bg-primary/10 text-primary",
    accent: "group-hover:bg-primary",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-card relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything Your Pet <span className="text-gradient-warm">Needs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From adoption to rescue, we provide comprehensive services to ensure every animal finds happiness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.href}
                className="group relative bg-background rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
                    service.color,
                    service.accent
                  )}>
                    <Icon className="w-8 h-8 group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center text-primary font-semibold">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
