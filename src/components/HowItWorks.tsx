import { Search, Heart, Home, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Browse & Search",
    description: "Explore our available pets or search for specific breeds. Filter by age, size, and personality.",
    color: "bg-primary",
  },
  {
    icon: Heart,
    step: "02",
    title: "Meet & Connect",
    description: "Schedule a visit to meet your potential companion. Our staff will help you find the perfect match.",
    color: "bg-accent",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Apply & Verify",
    description: "Complete our simple adoption application. We ensure pets go to loving, prepared homes.",
    color: "bg-success",
  },
  {
    icon: Home,
    step: "04",
    title: "Welcome Home",
    description: "Bring your new family member home! We provide ongoing support for a smooth transition.",
    color: "bg-secondary-foreground",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How <span className="text-gradient-warm">Adoption</span> Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined adoption process ensures every pet finds the perfect home.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success -translate-y-1/2 z-0 rounded-full opacity-20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative group animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 relative z-10">
                    {/* Step number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-muted rounded-xl flex items-center justify-center font-heading font-bold text-muted-foreground shadow-soft">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow (hidden on mobile and last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-8 h-8 bg-card rounded-full items-center justify-center shadow-soft">
                      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
