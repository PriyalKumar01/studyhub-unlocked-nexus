-- Update notes table to include description column if not exists
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'notes' AND column_name = 'description') THEN
        ALTER TABLE public.notes ADD COLUMN description TEXT;
    END IF;
END $$;

-- Create storage bucket for notes files if not exists
INSERT INTO storage.buckets (id, name, public) 
VALUES ('notes-files', 'notes-files', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policies for notes files
CREATE POLICY "Users can upload their own notes files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'notes-files' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view notes files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'notes-files');

CREATE POLICY "Users can update their own notes files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'notes-files' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own notes files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'notes-files' AND auth.uid()::text = (storage.foldername(name))[1]);