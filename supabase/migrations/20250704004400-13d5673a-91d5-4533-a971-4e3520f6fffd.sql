-- Create admin roles table
CREATE TABLE IF NOT EXISTS public.admin_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT UNIQUE NOT NULL,
  user_phone TEXT,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_by TEXT DEFAULT 'system'
);

-- Enable RLS
ALTER TABLE public.admin_roles ENABLE ROW LEVEL SECURITY;

-- Create policies for admin roles
CREATE POLICY "Admins can read all admin roles"
ON public.admin_roles
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.admin_roles ar
    WHERE ar.user_email = auth.jwt() ->> 'email'
  )
);

CREATE POLICY "System can insert admin roles"
ON public.admin_roles
FOR INSERT
WITH CHECK (true);

-- Insert the admin user
INSERT INTO public.admin_roles (user_email, user_phone, role)
VALUES ('priyalkumar06@gmail.com', '8957221543', 'super_admin')
ON CONFLICT (user_email) DO NOTHING;