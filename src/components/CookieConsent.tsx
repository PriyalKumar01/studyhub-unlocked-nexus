import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Cookie, X } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
    // Here you can enable your tracking/analytics
    console.log('Cookies accepted - Analytics enabled');
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowConsent(false);
    // Here you can disable tracking/analytics
    console.log('Cookies rejected - Analytics disabled');
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md"
        >
          <Card className="border shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Cookie className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2">We use cookies</h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. 
                    By clicking "Accept", you consent to our use of cookies.
                  </p>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={handleAccept}
                      className="text-xs px-3 py-1 h-7"
                    >
                      Accept
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleReject}
                      className="text-xs px-3 py-1 h-7"
                    >
                      Reject
                    </Button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleReject}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;