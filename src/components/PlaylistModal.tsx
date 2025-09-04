import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Star } from 'lucide-react';

interface Playlist {
  title: string;
  url: string;
  recommended?: boolean;
}

interface PlaylistModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  playlists: Playlist[];
  type: 'detailed' | 'oneshot' | 'workshop';
}

export const PlaylistModal = ({ isOpen, onClose, title, playlists, type }: PlaylistModalProps) => {
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/playlist\?list=)([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const getThumbnailUrl = (url: string) => {
    const videoId = getYouTubeId(url);
    if (!videoId) return '/placeholder.svg';
    
    if (url.includes('playlist')) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const typeLabel = {
    detailed: 'Detailed Playlists',
    oneshot: 'One Shot Videos',
    workshop: 'Workshop Videos'
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            {title} - {typeLabel[type]}
          </DialogTitle>
          <DialogDescription>
            Click on any video to watch on YouTube
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {playlists.map((playlist, index) => (
            <Card 
              key={index}
              className="p-4 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open(playlist.url, '_blank')}
            >
              <div className="relative">
                <img
                  src={getThumbnailUrl(playlist.url)}
                  alt={playlist.title}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
                {playlist.recommended && (
                  <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium">
                    <Star className="h-3 w-3" />
                    Best
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Play className="h-12 w-12 text-white" fill="white" />
                </div>
              </div>
              
              <h3 className="font-medium text-sm leading-tight mb-2">
                {playlist.title}
              </h3>
              
              <Button 
                size="sm" 
                className="w-full"
                variant="outline"
              >
                <Play className="h-3 w-3 mr-2" />
                Watch on YouTube
              </Button>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};