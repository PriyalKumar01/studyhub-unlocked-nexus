import { useUser } from '@clerk/clerk-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useDownloadTracking = () => {
  const { user } = useUser();
  const { toast } = useToast();

  const trackDownload = async (
    noteTitle: string,
    noteUrl: string,
    semester?: string,
    subject?: string
  ) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to access notes",
        variant: "destructive",
      });
      return false;
    }

    try {
      const { error } = await supabase
        .from('note_downloads')
        .insert({
          user_id: user.id,
          user_email: user.emailAddresses[0]?.emailAddress || '',
          user_name: user.fullName || '',
          note_title: noteTitle,
          note_url: noteUrl,
          semester,
          subject,
          ip_address: 'unknown', // Browser doesn't provide access to IP
          user_agent: navigator.userAgent,
        });

      if (error) {
        console.error('Error tracking download:', error);
        return true; // Allow download even if tracking fails
      }

      return true;
    } catch (error) {
      console.error('Error tracking download:', error);
      return true; // Allow download even if tracking fails
    }
  };

  return { trackDownload };
};