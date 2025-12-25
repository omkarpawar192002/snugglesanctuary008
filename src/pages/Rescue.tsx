import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, AlertTriangle, Shield, Heart, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const emergencyTypes = [
  { value: "injured", emoji: "🤕", title: "Injured Animal" },
  { value: "trapped", emoji: "⛓️", title: "Trapped/Stuck" },
  { value: "heat", emoji: "🥵", title: "Heat Distress" },
  { value: "stray", emoji: "🐕", title: "Stray/Abandoned" },
  { value: "abuse", emoji: "😢", title: "Abuse/Neglect" },
  { value: "disaster", emoji: "🌊", title: "Natural Disaster" },
];

const Rescue = () => {
  const { toast } = useToast();
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    description: "",
  });

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/rescue`,
        },
      });
      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Sign in failed",
        description: error.message,
        variant: "destructive",
      });
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedType) {
      toast({
        title: "Select emergency type",
        description: "Please select what type of emergency this is",
        variant: "destructive",
      });
      return;
    }

    if (!formData.location) {
      toast({
        title: "Location required",
        description: "Please enter the location of the animal",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("rescue_requests").insert({
        user_id: user?.id || null,
        reporter_name: formData.name || (user?.user_metadata?.full_name) || "Anonymous",
        reporter_email: formData.email || user?.email || "not-provided@anonymous.com",
        reporter_phone: formData.phone || null,
        emergency_type: selectedType,
        location: formData.location,
        description: formData.description || null,
      });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Report submitted!",
        description: "Our rescue team will respond as soon as possible.",
      });
    } catch (error: any) {
      toast({
        title: "Submission failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 min-h-[80vh] flex items-center justify-center">
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <h1 className="font-heading text-3xl font-bold mb-4">Report Submitted!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for reporting. Our rescue team has been notified and will respond as quickly as possible.
            </p>
            <Button onClick={() => {
              setSubmitted(false);
              setSelectedType("");
              setFormData({ name: "", email: "", phone: "", location: "", description: "" });
            }}>
              Submit Another Report
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Emergency Banner */}
        <section className="bg-destructive text-destructive-foreground py-4">
          <div className="container mx-auto px-4 flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 animate-bounce-gentle" />
            <span className="font-semibold">Emergency Hotline: +1 (555) 911-PETS</span>
          </div>
        </section>

        {/* Simple Form Section */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-paw-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                  <Shield className="w-4 h-4 inline mr-2" />
                  Quick Rescue Report
                </span>
                <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Report an Animal in <span className="text-gradient-warm">Distress</span>
                </h1>
                <p className="text-muted-foreground">
                  Fill this simple form and our rescue team will respond quickly
                </p>
              </div>

              {/* Google Sign In Option */}
              <div className="bg-card rounded-2xl p-6 shadow-soft mb-6">
                {user ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{user.user_metadata?.full_name || user.email}</p>
                        <p className="text-sm text-muted-foreground">Signed in with Google</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={signOut}>
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">Sign in to track your reports</p>
                    <Button 
                      variant="outline" 
                      onClick={handleGoogleSignIn}
                      disabled={googleLoading}
                      className="gap-2"
                    >
                      {googleLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      )}
                      Continue with Google
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">Or continue without signing in</p>
                  </div>
                )}
              </div>

              {/* Rescue Form */}
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 shadow-soft space-y-6">
                {/* Emergency Type Selection */}
                <div>
                  <label className="block font-semibold mb-3">What's the emergency? *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {emergencyTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setSelectedType(type.value)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          selectedType === type.value
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="text-3xl mb-2">{type.emoji}</div>
                        <div className="text-sm font-medium">{type.title}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block font-semibold mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Location *
                  </label>
                  <Input
                    placeholder="Enter address or landmark"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>

                {/* Contact Info - Only show if not signed in */}
                {!user && (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2">Your Name</label>
                      <Input
                        placeholder="Optional"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Phone</label>
                      <Input
                        type="tel"
                        placeholder="For updates"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {/* Description */}
                <div>
                  <label className="block font-semibold mb-2">Additional Details</label>
                  <Textarea
                    placeholder="Describe the animal's condition (optional)"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <AlertTriangle className="w-5 h-5" />
                  )}
                  Submit Rescue Report
                </Button>
              </form>
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