import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+918957221543';
    const message = 'Hi Priyal, I need help regarding College Study Hub.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div 
        className="relative flex items-center cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleWhatsAppClick}
      >
        {/* Text that slides out */}
        <div 
          className={`
            absolute right-20 bg-white dark:bg-gray-800 
            text-gray-800 dark:text-white px-4 py-3 rounded-full 
            shadow-lg border whitespace-nowrap font-medium
            transition-all duration-500 ease-in-out
            ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}
          `}
        >
          Contact Us
        </div>
        
        {/* WhatsApp Button */}
        <button
          className="
            w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] 
            text-white shadow-lg flex items-center justify-center
            transition-all duration-300 hover:scale-110
            relative overflow-hidden
          "
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-8 w-8 relative z-10" />
          
          {/* Ripple effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
