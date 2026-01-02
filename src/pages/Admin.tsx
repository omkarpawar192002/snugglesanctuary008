import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useAdmin } from '@/hooks/useAdmin';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Heart, Users, Mail, Clock, CheckCircle, XCircle, AlertCircle, Shield, Calendar } from 'lucide-react';

interface AdoptionRequest {
  id: string;
  pet_name: string;
  pet_image: string | null;
  applicant_name: string;
  applicant_email: string;
  applicant_phone: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

interface VolunteerRequest {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string | null;
  availability: string | null;
  status: string;
  created_at: string;
}

interface Subscription {
  id: string;
  email: string;
  status: string;
  created_at: string;
}

interface ClinicAppointment {
  id: string;
  clinic_name: string;
  patient_name: string;
  email: string | null;
  phone: string;
  appointment_date: string;
  appointment_time: string;
  reason: string | null;
  status: string;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdmin();
  const { toast } = useToast();

  const [adoptionRequests, setAdoptionRequests] = useState<AdoptionRequest[]>([]);
  const [volunteerRequests, setVolunteerRequests] = useState<VolunteerRequest[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [clinicAppointments, setClinicAppointments] = useState<ClinicAppointment[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!adminLoading && !isAdmin && user) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access the admin panel.",
        variant: "destructive"
      });
      navigate('/');
    }
  }, [isAdmin, adminLoading, user, navigate, toast]);

  useEffect(() => {
    if (isAdmin) {
      fetchAllData();

      // Set up realtime subscriptions
      const adoptionChannel = supabase
        .channel('admin-adoptions')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'adoption_requests' }, (payload) => {
          console.log('Adoption change:', payload);
          if (payload.eventType === 'INSERT') {
            setAdoptionRequests(prev => [payload.new as AdoptionRequest, ...prev]);
            toast({ title: "New Adoption Request", description: `${(payload.new as AdoptionRequest).applicant_name} submitted an application` });
          } else if (payload.eventType === 'UPDATE') {
            setAdoptionRequests(prev => prev.map(r => r.id === payload.new.id ? payload.new as AdoptionRequest : r));
          } else if (payload.eventType === 'DELETE') {
            setAdoptionRequests(prev => prev.filter(r => r.id !== payload.old.id));
          }
        })
        .subscribe();

      const volunteerChannel = supabase
        .channel('admin-volunteers')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'volunteer_requests' }, (payload) => {
          console.log('Volunteer change:', payload);
          if (payload.eventType === 'INSERT') {
            setVolunteerRequests(prev => [payload.new as VolunteerRequest, ...prev]);
            toast({ title: "New Volunteer Application", description: `${(payload.new as VolunteerRequest).name} wants to volunteer` });
          } else if (payload.eventType === 'UPDATE') {
            setVolunteerRequests(prev => prev.map(r => r.id === payload.new.id ? payload.new as VolunteerRequest : r));
          } else if (payload.eventType === 'DELETE') {
            setVolunteerRequests(prev => prev.filter(r => r.id !== payload.old.id));
          }
        })
        .subscribe();

      const subscriptionChannel = supabase
        .channel('admin-subscriptions')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'newsletter_subscriptions' }, (payload) => {
          console.log('Subscription change:', payload);
          if (payload.eventType === 'INSERT') {
            setSubscriptions(prev => [payload.new as Subscription, ...prev]);
            toast({ title: "New Subscriber", description: `${(payload.new as Subscription).email} subscribed` });
          } else if (payload.eventType === 'UPDATE') {
            setSubscriptions(prev => prev.map(s => s.id === payload.new.id ? payload.new as Subscription : s));
          } else if (payload.eventType === 'DELETE') {
            setSubscriptions(prev => prev.filter(s => s.id !== payload.old.id));
          }
        })
        .subscribe();

      const appointmentChannel = supabase
        .channel('admin-appointments')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'clinic_appointments' }, (payload) => {
          console.log('Appointment change:', payload);
          if (payload.eventType === 'INSERT') {
            setClinicAppointments(prev => [payload.new as ClinicAppointment, ...prev]);
            toast({ title: "New Appointment", description: `${(payload.new as ClinicAppointment).patient_name} booked an appointment` });
          } else if (payload.eventType === 'UPDATE') {
            setClinicAppointments(prev => prev.map(a => a.id === payload.new.id ? payload.new as ClinicAppointment : a));
          } else if (payload.eventType === 'DELETE') {
            setClinicAppointments(prev => prev.filter(a => a.id !== payload.old.id));
          }
        })
        .subscribe();

      return () => {
        supabase.removeChannel(adoptionChannel);
        supabase.removeChannel(volunteerChannel);
        supabase.removeChannel(subscriptionChannel);
        supabase.removeChannel(appointmentChannel);
      };
    }
  }, [isAdmin, toast]);

  const fetchAllData = async () => {
    setLoadingData(true);
    try {
      const [adoptionRes, volunteerRes, subscriptionRes, appointmentsRes] = await Promise.all([
        supabase.from('adoption_requests').select('*').order('created_at', { ascending: false }),
        supabase.from('volunteer_requests').select('*').order('created_at', { ascending: false }),
        supabase.from('newsletter_subscriptions').select('*').order('created_at', { ascending: false }),
        supabase.from('clinic_appointments').select('*').order('created_at', { ascending: false })
      ]);

      console.log('Adoption requests:', adoptionRes);
      console.log('Volunteer requests:', volunteerRes);
      console.log('Subscriptions:', subscriptionRes);
      console.log('Appointments:', appointmentsRes);

      if (adoptionRes.error) {
        console.error('Error fetching adoption requests:', adoptionRes.error);
        toast({ title: "Error", description: "Failed to fetch adoption requests", variant: "destructive" });
      } else {
        setAdoptionRequests(adoptionRes.data || []);
      }

      if (volunteerRes.error) {
        console.error('Error fetching volunteer requests:', volunteerRes.error);
      } else {
        setVolunteerRequests(volunteerRes.data || []);
      }

      if (subscriptionRes.error) {
        console.error('Error fetching subscriptions:', subscriptionRes.error);
      } else {
        setSubscriptions(subscriptionRes.data || []);
      }

      if (appointmentsRes.error) {
        console.error('Error fetching appointments:', appointmentsRes.error);
      } else {
        setClinicAppointments(appointmentsRes.data || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({ title: "Error", description: "Failed to fetch data", variant: "destructive" });
    } finally {
      setLoadingData(false);
    }
  };

  const updateAdoptionStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('adoption_requests')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to update status", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Adoption request status updated" });
      fetchAllData();
    }
  };

  const updateVolunteerStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('volunteer_requests')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to update status", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Volunteer request status updated" });
      fetchAllData();
    }
  };

  const updateAppointmentStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('clinic_appointments')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to update status", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Appointment status updated" });
      fetchAllData();
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-warning/20 text-warning-foreground"><Clock className="w-3 h-3 mr-1" /> Pending</Badge>;
      case 'approved':
        return <Badge variant="secondary" className="bg-success/20 text-success"><CheckCircle className="w-3 h-3 mr-1" /> Approved</Badge>;
      case 'rejected':
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" /> Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (authLoading || adminLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-heading font-bold text-foreground">Admin Dashboard</h1>
          </div>
          <p className="text-lg text-muted-foreground">Manage adoption requests, volunteer applications, and newsletter subscriptions.</p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{adoptionRequests.length}</p>
                  <p className="text-sm text-muted-foreground">Adoptions</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-success/20">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-success/10">
                  <Users className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{volunteerRequests.length}</p>
                  <p className="text-sm text-muted-foreground">Volunteers</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-warning/20">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-warning/10">
                  <Calendar className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{clinicAppointments.length}</p>
                  <p className="text-sm text-muted-foreground">Appointments</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-info/20">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-info/10">
                  <Mail className="w-6 h-6 text-info" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{subscriptions.length}</p>
                  <p className="text-sm text-muted-foreground">Subscribers</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="adoptions" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="adoptions" className="flex items-center gap-2">
                <Heart className="w-4 h-4" /> Adoptions
              </TabsTrigger>
              <TabsTrigger value="volunteers" className="flex items-center gap-2">
                <Users className="w-4 h-4" /> Volunteers
              </TabsTrigger>
              <TabsTrigger value="appointments" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Appointments
              </TabsTrigger>
              <TabsTrigger value="subscriptions" className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> Subscribers
              </TabsTrigger>
            </TabsList>

            {/* Adoption Requests Tab */}
            <TabsContent value="adoptions">
              <Card>
                <CardHeader>
                  <CardTitle>Adoption Requests</CardTitle>
                  <CardDescription>Review and manage pet adoption applications</CardDescription>
                </CardHeader>
                <CardContent>
                  {loadingData ? (
                    <div className="text-center py-8">Loading...</div>
                  ) : adoptionRequests.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <Heart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No adoption requests yet</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {adoptionRequests.map((request) => (
                        <Card key={request.id} className="bg-muted/30">
                          <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row gap-4">
                              {request.pet_image && (
                                <img 
                                  src={request.pet_image} 
                                  alt={request.pet_name}
                                  className="w-20 h-20 object-cover rounded-lg"
                                />
                              )}
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="font-semibold text-foreground">Pet: {request.pet_name}</h3>
                                  {getStatusBadge(request.status)}
                                </div>
                                <p className="text-sm text-muted-foreground">Applicant: {request.applicant_name}</p>
                                <p className="text-sm text-muted-foreground">Email: {request.applicant_email}</p>
                                {request.applicant_phone && (
                                  <p className="text-sm text-muted-foreground">Phone: {request.applicant_phone}</p>
                                )}
                                {request.message && (
                                  <p className="text-sm text-muted-foreground mt-2">Message: {request.message}</p>
                                )}
                                <p className="text-xs text-muted-foreground mt-2">
                                  Submitted: {new Date(request.created_at).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="flex items-start">
                                <Select 
                                  value={request.status} 
                                  onValueChange={(value) => updateAdoptionStatus(request.id, value)}
                                >
                                  <SelectTrigger className="w-32">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="approved">Approved</SelectItem>
                                    <SelectItem value="rejected">Rejected</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Volunteer Requests Tab */}
            <TabsContent value="volunteers">
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Requests</CardTitle>
                  <CardDescription>Review volunteer applications</CardDescription>
                </CardHeader>
                <CardContent>
                  {loadingData ? (
                    <div className="text-center py-8">Loading...</div>
                  ) : volunteerRequests.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No volunteer requests yet</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {volunteerRequests.map((request) => (
                        <Card key={request.id} className="bg-muted/30">
                          <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row gap-4 justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="font-semibold text-foreground">{request.name}</h3>
                                  {getStatusBadge(request.status)}
                                </div>
                                <p className="text-sm text-muted-foreground">Email: {request.email}</p>
                                {request.phone && (
                                  <p className="text-sm text-muted-foreground">Phone: {request.phone}</p>
                                )}
                                {request.availability && (
                                  <p className="text-sm text-muted-foreground">Availability: {request.availability}</p>
                                )}
                                {request.message && (
                                  <p className="text-sm text-muted-foreground mt-2">Message: {request.message}</p>
                                )}
                                <p className="text-xs text-muted-foreground mt-2">
                                  Submitted: {new Date(request.created_at).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="flex items-start">
                                <Select 
                                  value={request.status} 
                                  onValueChange={(value) => updateVolunteerStatus(request.id, value)}
                                >
                                  <SelectTrigger className="w-32">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="approved">Approved</SelectItem>
                                    <SelectItem value="rejected">Rejected</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Clinic Appointments Tab */}
            <TabsContent value="appointments">
              <Card>
                <CardHeader>
                  <CardTitle>Clinic Appointments</CardTitle>
                  <CardDescription>Manage veterinary clinic appointment bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  {loadingData ? (
                    <div className="text-center py-8">Loading...</div>
                  ) : clinicAppointments.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No clinic appointments yet</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {clinicAppointments.map((appointment) => (
                        <Card key={appointment.id} className="bg-muted/30">
                          <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row gap-4 justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="font-semibold text-foreground">{appointment.patient_name}</h3>
                                  {getStatusBadge(appointment.status)}
                                </div>
                                <p className="text-sm text-muted-foreground">Clinic: {appointment.clinic_name}</p>
                                <p className="text-sm text-muted-foreground">
                                  Date: {new Date(appointment.appointment_date).toLocaleDateString()} at {appointment.appointment_time}
                                </p>
                                <p className="text-sm text-muted-foreground">Phone: {appointment.phone}</p>
                                {appointment.email && (
                                  <p className="text-sm text-muted-foreground">Email: {appointment.email}</p>
                                )}
                                {appointment.reason && (
                                  <p className="text-sm text-muted-foreground mt-2">Reason: {appointment.reason}</p>
                                )}
                                <p className="text-xs text-muted-foreground mt-2">
                                  Booked: {new Date(appointment.created_at).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="flex items-start">
                                <Select 
                                  value={appointment.status} 
                                  onValueChange={(value) => updateAppointmentStatus(appointment.id, value)}
                                >
                                  <SelectTrigger className="w-32">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="confirmed">Confirmed</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Subscriptions Tab */}
            <TabsContent value="subscriptions">
              <Card>
                <CardHeader>
                  <CardTitle>Newsletter Subscriptions</CardTitle>
                  <CardDescription>View all newsletter subscribers</CardDescription>
                </CardHeader>
                <CardContent>
                  {loadingData ? (
                    <div className="text-center py-8">Loading...</div>
                  ) : subscriptions.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No subscriptions yet</p>
                    </div>
                  ) : (
                    <div className="grid gap-3">
                      {subscriptions.map((sub) => (
                        <div 
                          key={sub.id} 
                          className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary" />
                            <span className="text-foreground">{sub.email}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge variant={sub.status === 'active' ? 'default' : 'secondary'}>
                              {sub.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {new Date(sub.created_at).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
