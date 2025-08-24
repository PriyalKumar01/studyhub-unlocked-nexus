-- Create table to track note downloads
CREATE TABLE IF NOT EXISTS public.note_downloads (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email text NOT NULL,
  user_name text,
  note_title text NOT NULL,
  note_url text NOT NULL,
  semester text,
  subject text,
  download_timestamp timestamp with time zone NOT NULL DEFAULT now(),
  ip_address text,
  user_agent text
);

-- Enable RLS
ALTER TABLE public.note_downloads ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can insert their own downloads"
ON public.note_downloads
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own downloads"
ON public.note_downloads
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all downloads"
ON public.note_downloads
FOR SELECT
USING (EXISTS (
  SELECT 1 FROM admin_roles 
  WHERE user_email = (auth.jwt() ->> 'email'::text)
));