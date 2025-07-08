import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [typewriterText, setTypewriterText] = useState('');
  const [isPulsing, setIsPulsing] = useState(false);
  const fullText = 'Need Help?';

  const handleWhatsAppClick = () => {
    const phoneNumber = '+918957221543';
    const message = 'Hi Priyal, I need help regarding College Study Hub.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    // Typewriter effect
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTypewriterText('');
          currentIndex = 0;
          const newInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
              setTypewriterText(fullText.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(newInterval);
            }
          }, 100);
        }, 3000);
      }
    }, 100);

    // Pulse effect
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 6000);

    return () => {
      clearInterval(typeInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <div className="fixed right-6 bottom-6 z-50 flex items-center gap-3">
      {/* Typewriter Text */}
      <div 
        className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-full shadow-lg border transition-all duration-500 ${
          typewriterText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
      >
        <span className="text-sm font-medium">
          {typewriterText}
          <span className="animate-pulse">|</span>
        </span>
      </div>
      
      {/* WhatsApp Button */}
      <div className={`relative transition-all duration-500 ${isPulsing ? 'animate-pulse scale-110' : ''}`}>
        <Button
          onClick={handleWhatsAppClick}
          className={`w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center p-0 group`}
          title="Need Help? WhatsApp us!"
        >
          <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
        </Button>
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping" />
      </div>
    </div>
  );
};

export default WhatsAppButton;