import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Heart, Mail, Calendar, Users } from "lucide-react";

interface Stats {
  adoptions: number;
  subscriptions: number;
  appointments: number;
  volunteers: number;
}

const StatsCounter = () => {
  const [stats, setStats] = useState<Stats>({
    adoptions: 0,
    subscriptions: 0,
    appointments: 0,
    volunteers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [adoptions, subscriptions, appointments, volunteers] = await Promise.all([
          supabase.from("adoption_requests").select("id", { count: "exact", head: true }),
          supabase.from("newsletter_subscriptions").select("id", { count: "exact", head: true }),
          supabase.from("clinic_appointments").select("id", { count: "exact", head: true }),
          supabase.from("volunteer_requests").select("id", { count: "exact", head: true }),
        ]);

        setStats({
          adoptions: adoptions.count || 0,
          subscriptions: subscriptions.count || 0,
          appointments: appointments.count || 0,
          volunteers: volunteers.count || 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statItems = [
    {
      label: "Adoption Requests",
      value: stats.adoptions,
      icon: Heart,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      label: "Newsletter Subscribers",
      value: stats.subscriptions,
      icon: Mail,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Clinic Appointments",
      value: stats.appointments,
      icon: Calendar,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      label: "Volunteer Applications",
      value: stats.volunteers,
      icon: Users,
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
  ];

  if (loading) {
    return (
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-background rounded-2xl p-6 animate-pulse">
                <div className="w-12 h-12 bg-muted rounded-xl mb-4" />
                <div className="h-8 bg-muted rounded mb-2 w-16" />
                <div className="h-4 bg-muted rounded w-24" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-warm">Community</span> Impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how many people have joined our mission to help animals find loving homes.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statItems.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-background rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
