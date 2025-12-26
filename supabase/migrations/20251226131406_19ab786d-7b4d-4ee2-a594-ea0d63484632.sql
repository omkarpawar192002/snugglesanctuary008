-- Create clinic_appointments table
CREATE TABLE public.clinic_appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  clinic_name TEXT NOT NULL,
  patient_name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  reason TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.clinic_appointments ENABLE ROW LEVEL SECURITY;

-- Anyone can create appointments (for non-logged in users too)
CREATE POLICY "Anyone can create appointments"
ON public.clinic_appointments
FOR INSERT
WITH CHECK (true);

-- Users can view their own appointments, admins can view all
CREATE POLICY "Users can view own appointments"
ON public.clinic_appointments
FOR SELECT
USING ((auth.uid() = user_id) OR has_role(auth.uid(), 'admin'::app_role));

-- Admins can update appointments
CREATE POLICY "Admins can update appointments"
ON public.clinic_appointments
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_clinic_appointments_updated_at
BEFORE UPDATE ON public.clinic_appointments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();