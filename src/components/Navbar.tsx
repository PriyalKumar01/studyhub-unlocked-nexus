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
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group ${
                      isActive(item.href)
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    } ${item.animated ? 'animate-pulse' : ''}`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive(item.href) 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full'
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
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/opportunity-upload">Upload Opportunity</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut} className="text-red-600">
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" className="btn-hero">
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 border-primary/20">
                <DropdownMenuItem asChild>
                  <Link to="/auth?mode=signup" className="cursor-pointer">
                    Sign Up
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/auth?mode=login" className="cursor-pointer">
                    Login
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  } ${item.animated ? 'animate-pulse' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-primary/20 space-y-2">
                <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-full justify-start">
                  {theme === 'dark' ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
                
                {user ? (
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground px-2 py-1">
                      Welcome, {user.email?.split('@')[0]}
                    </div>
                    <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Dashboard
                      </Button>
                    </Link>
                    <Link to="/opportunity-upload" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Upload Opportunity
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" onClick={() => { signOut(); setIsOpen(false); }} className="w-full justify-start text-red-600">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link to="/auth?mode=signup" onClick={() => setIsOpen(false)}>
                      <Button className="w-full btn-hero">Sign Up</Button>
                    </Link>
                    <Link to="/auth?mode=login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;