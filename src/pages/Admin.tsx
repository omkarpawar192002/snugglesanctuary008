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
import { Heart, Users, Mail, Clock, CheckCircle, XCircle, AlertCircle, Shield } from 'lucide-react';

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

const Admin = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdmin();
  const { toast } = useToast();

  const [adoptionRequests, setAdoptionRequests] = useState<AdoptionRequest[]>([]);
  const [volunteerRequests, setVolunteerRequests] = useState<VolunteerRequest[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
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
    }
  }, [isAdmin]);

  const fetchAllData = async () => {
    setLoadingData(true);
    try {
      const [adoptionRes, volunteerRes, subscriptionRes] = await Promise.all([
        supabase.from('adoption_requests').select('*').order('created_at', { ascending: false }),
        supabase.from('volunteer_requests').select('*').order('created_at', { ascending: false }),
        supabase.from('newsletter_subscriptions').select('*').order('created_at', { ascending: false })
      ]);

      if (adoptionRes.data) setAdoptionRequests(adoptionRes.data);
      if (volunteerRes.data) setVolunteerRequests(volunteerRes.data);
      if (subscriptionRes.data) setSubscriptions(subscriptionRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{adoptionRequests.length}</p>
                  <p className="text-sm text-muted-foreground">Adoption Requests</p>
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
                  <p className="text-sm text-muted-foreground">Volunteer Requests</p>
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
                  <p className="text-sm text-muted-foreground">Subscriptions</p>
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
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="adoptions" className="flex items-center gap-2">
                <Heart className="w-4 h-4" /> Adoptions
              </TabsTrigger>
              <TabsTrigger value="volunteers" className="flex items-center gap-2">
                <Users className="w-4 h-4" /> Volunteers
              </TabsTrigger>
              <TabsTrigger value="subscriptions" className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> Subscriptions
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
