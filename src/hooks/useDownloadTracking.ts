import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useDownloadTracking = () => {
  const { user } = useAuth();
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
      // Get user profile for additional info
      const { data: profile } = await supabase
        .from('profiles')
        .select('first_name, last_name')
        .eq('user_id', user.id)
        .single();

      const { error } = await supabase
        .from('note_downloads')
        .insert({
          user_id: user.id,
          user_email: user.email || '',
          user_name: profile ? `${profile.first_name} ${profile.last_name}`.trim() : '',
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