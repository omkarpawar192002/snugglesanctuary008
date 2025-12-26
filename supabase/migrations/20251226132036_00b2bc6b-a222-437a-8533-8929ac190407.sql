-- Enable realtime for admin tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.adoption_requests;
ALTER PUBLICATION supabase_realtime ADD TABLE public.volunteer_requests;
ALTER PUBLICATION supabase_realtime ADD TABLE public.newsletter_subscriptions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.clinic_appointments;