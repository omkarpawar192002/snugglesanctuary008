-- Create rescue_requests table
CREATE TABLE public.rescue_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  reporter_name TEXT NOT NULL,
  reporter_email TEXT NOT NULL,
  reporter_phone TEXT,
  emergency_type TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.rescue_requests ENABLE ROW LEVEL SECURITY;

-- Anyone can create rescue requests (emergency - no login required)
CREATE POLICY "Anyone can create rescue requests"
ON public.rescue_requests
FOR INSERT
WITH CHECK (true);

-- Users can view their own requests, admins can view all
CREATE POLICY "Users can view own rescue requests"
ON public.rescue_requests
FOR SELECT
USING (
  (auth.uid() = user_id) OR 
  has_role(auth.uid(), 'admin'::app_role)
);

-- Admins can update rescue requests
CREATE POLICY "Admins can update rescue requests"
ON public.rescue_requests
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_rescue_requests_updated_at
BEFORE UPDATE ON public.rescue_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();