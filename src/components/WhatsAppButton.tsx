import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPulsing, setIsPulsing] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+918957221543';
    const message = 'Hi! I need help with College Study Hub.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-6 bottom-6 z-40">
      <div className={`relative transition-all duration-500 ${isPulsing ? 'animate-bounce' : ''}`}>
        <Button
          onClick={handleWhatsAppClick}
          className={`w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center p-0 ${isPulsing ? 'animate-pulse' : ''}`}
          title="Need Help? WhatsApp us!"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <div className={`absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap transition-all duration-300 ${isPulsing ? 'animate-pulse scale-110' : 'scale-100'}`}>
          Need Help!
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;