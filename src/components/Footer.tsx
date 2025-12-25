import { Heart, PawPrint, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();

  const footerLinks = {
    services: [
      { label: "Pet Adoption", href: "/adoption" },
      { label: "Animal Rescue", href: "/rescue" },
      { label: "Vet Clinics", href: "/clinic" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Mission", href: "/about" },
      { label: "Volunteer", href: "/about" },
      { label: "Donate", href: "/about" },
      { label: "Contact", href: "/about" },
    ],
    resources: [
      { label: "Blog", href: "/blogs" },
      { label: "Pet Care Tips", href: "/blogs" },
      { label: "FAQs", href: "/about" },
      { label: "Success Stories", href: "/blogs" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "Youtube" },
  ];

  const handleSocialClick = (platform: string) => {
    toast({
      title: `Opening ${platform}`,
      description: `Redirecting to our ${platform} page...`,
    });
  };

  const handleContactClick = (type: string, value: string) => {
    if (type === "phone") {
      window.location.href = `tel:${value.replace(/[^0-9+]/g, '')}`;
    } else if (type === "email") {
      window.location.href = `mailto:${value}`;
    } else if (type === "address") {
      window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`, '_blank');
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-warm" />
      <div className="absolute top-20 right-10 opacity-5">
        <PawPrint className="w-64 h-64" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-5">
        <Heart className="w-48 h-48" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <PawPrint className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl">Snuggle</span>
                <span className="font-heading text-sm text-primary -mt-1">Sanctuary</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Providing a safe haven for homeless and rescued animals, helping them find loving forever homes since 2020.
            </p>
            <div className="space-y-3">
              <button 
                onClick={() => handleContactClick("address", "123 Pet Street, Animal City, AC 12345")}
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors group cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="group-hover:underline">123 Pet Street, Animal City, AC 12345</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button 
                onClick={() => handleContactClick("phone", "+1 (555) 123-4567")}
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors group cursor-pointer"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="group-hover:underline">+1 (555) 123-4567</span>
              </button>
              <button 
                onClick={() => handleContactClick("email", "hello@snugglesanctuary.com")}
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors group cursor-pointer"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="group-hover:underline">hello@snugglesanctuary.com</span>
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Snuggle Sanctuary. All rights reserved. Made with{" "}
            <Heart className="w-4 h-4 inline text-accent" /> for animals.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick(social.label)}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
