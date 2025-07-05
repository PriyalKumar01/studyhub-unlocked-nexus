-- Create storage bucket for opportunity images
INSERT INTO storage.buckets (id, name, public) VALUES ('opportunity-images', 'opportunity-images', true);

-- Create policies for opportunity images bucket
CREATE POLICY "Anyone can view opportunity images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'opportunity-images');

CREATE POLICY "Admins can upload opportunity images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'opportunity-images' AND
  EXISTS (
    SELECT 1 FROM admin_roles 
    WHERE user_email = (auth.jwt() ->> 'email'::text)
  )
);

CREATE POLICY "Admins can update opportunity images" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'opportunity-images' AND
  EXISTS (
    SELECT 1 FROM admin_roles 
    WHERE user_email = (auth.jwt() ->> 'email'::text)
  )
);

-- Add image_url and deadline columns to opportunities table
ALTER TABLE opportunities 
ADD COLUMN image_url TEXT,
ADD COLUMN deadline DATE;