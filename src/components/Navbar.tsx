import { useState } from 'react';
import { Menu, X, Moon, Sun, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/providers/ThemeProvider';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { href: '/', label: 'Home', category: 'main' },
    { href: '/dashboard', label: 'Dashboard', category: 'main' },
    { href: '/notes', label: 'Notes', category: 'academic', animated: true },
    { href: '/opportunities', label: 'Opportunities', category: 'academic', animated: true },
    { href: '/cgpa-calculator', label: 'CGPA', category: 'tools' },
    { href: '/useful-ai-tools', label: 'AI Tools', category: 'tools' },
    { href: '/about', label: 'About', category: 'main' }
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f3b6ce00-a0ff-4b44-bbdb-ab5640339741.png" 
              alt="College Study Hub" 
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => {
              const needsSeparator = index > 0 && navItems[index - 1].category !== item.category;
              return (
                <div key={item.href} className="flex items-center">
                  {needsSeparator && (
                    <div className="w-px h-5 bg-border/60 mx-4 animate-fade-in" />
                  )}
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group ${
                      isActive(item.href)
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    } ${item.animated ? 'bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 border border-primary/10 hover:border-primary/20 shadow-sm rounded-lg' : ''}`}
                  >
                    <span className="relative z-10 font-semibold">{item.label}</span>
                    <div 
                      className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                        isActive(item.href) 
                          ? 'w-3/4' 
                          : 'w-0 group-hover:w-3/4'
                      }`} 
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-primary/20">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-background/95">
              {navItems.map((item, index) => (
                <div key={item.href} className="relative">
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors border ${
                      isActive(item.href)
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'text-foreground hover:bg-accent hover:text-accent-foreground border-transparent hover:border-border/50'
                    } ${item.animated ? 'bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 border-primary/20 hover:border-primary/30 shadow-sm' : ''}`}
                  >
                    <span className={item.animated ? 'font-semibold' : ''}>{item.label}</span>
                  </Link>
                  
                  {index < navItems.length - 1 && (
                    <div className="mx-3 mt-2 h-px bg-border/30" />
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-4 border-t border-primary/20 space-y-2">
                <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-full justify-start">
                  {theme === 'dark' ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;