import { Link, useLocation } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, SignInButton, useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { BookOpen, Menu, X, Shield, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (user) {
      checkAdminAccess();
    }
  }, [user]);

  const checkAdminAccess = async () => {
    try {
      const { data, error } = await supabase
        .from('admin_roles')
        .select('*')
        .eq('user_email', user?.emailAddresses[0]?.emailAddress)
        .single();

      if (error && error.code !== 'PGRST116') {
        return;
      }

      if (data) {
        setIsAdmin(true);
      }
    } catch (error) {
      console.error('Error checking admin access:', error);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const baseNavItems = [
    { href: '/', label: 'Home', icon: null },
    { href: '/dashboard', label: 'Dashboard', icon: null },
    { href: '/view-notes', label: 'Notes', icon: null },
    { href: '/opportunities', label: 'Opportunities', icon: null },
    { href: '/resume-builder', label: 'Resume', icon: null },
    { href: '/cgpa-calculator', label: 'CGPA', icon: null },
    { href: '/useful-ai-tools', label: 'AI Tools', icon: <Sparkles className="h-4 w-4" />  },
    { href: '/about', label: 'About', icon: null },
  ];

  const navItems = isAdmin 
    ? [...baseNavItems, { href: '/admin', label: 'Admin', icon: <Shield className="h-4 w-4" /> }]
    : baseNavItems;

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f3b6ce00-a0ff-4b44-bbdb-ab5640339741.png"  
              alt="College Study Hub" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-sm'
                } ${item.href === '/admin' ? 'bg-gradient-primary text-white hover:opacity-80 shadow-lg' : ''}`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <SignedOut>
              <SignInButton>
                <Button variant="outline" size="sm">Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-foreground hover:bg-accent"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border"
            >
              <div className="py-2 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-2 ${
                      isActive(item.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                    } ${item.href === '/admin' ? 'bg-gradient-primary text-white hover:opacity-80' : ''}`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;