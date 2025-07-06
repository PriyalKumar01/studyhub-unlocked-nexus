import { useState, useEffect } from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'signin' | 'signup';
  setMode: (mode: 'signin' | 'signup') => void;
}

const AuthModal = ({ isOpen, onClose, mode, setMode }: AuthModalProps) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>
              {mode === 'signin' ? 'Welcome Back!' : 'Join College Study Hub'}
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription>
            {mode === 'signin' 
              ? 'Sign in to access your study materials and continue your learning journey.' 
              : 'Create your account to access thousands of study notes and connect with fellow students.'
            }
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          {mode === 'signup' && (
            <div className="mb-6 p-4 bg-muted/50 rounded-lg border">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms" 
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                />
                <div className="space-y-1 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I understand and agree to the{' '}
                    <a 
                      href={`${window.location.origin}/terms-of-service.html`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary underline hover:no-underline"
                    >
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a 
                      href={`${window.location.origin}/privacy-policy.html`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary underline hover:no-underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                  <p className="text-xs text-muted-foreground">
                    By checking this box, you confirm that you have read and understand our terms regarding educational use, content sharing restrictions, and admin approval process.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {mode === 'signin' ? (
            <SignIn
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none border-0 bg-transparent",
                }
              }}
            />
          ) : (
            <div className={agreedToTerms ? 'opacity-100' : 'opacity-50 pointer-events-none'}>
              <SignUp
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none border-0 bg-transparent",
                  }
                }}
              />
            </div>
          )}
          <div className="mt-4 text-center">
            <Button 
              variant="link" 
              onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
            >
              {mode === 'signin' ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;