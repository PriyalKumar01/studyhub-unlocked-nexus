import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotesUpload from "./pages/NotesUpload";
import ViewNotes from "./pages/ViewNotes";
import ResumeBuilder from "./pages/ResumeBuilder";
import Opportunities from "./pages/Opportunities";
import About from "./pages/About";
import LearningPlatforms from "./pages/LearningPlatforms";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";
import AuthModal from "./components/AuthModal";
import { ThemeProvider } from "./providers/ThemeProvider";

const queryClient = new QueryClient();

const App = () => {
  const { isSignedIn } = useUser();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  useEffect(() => {
    // Remove default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'default';
    };
  }, []);

  useEffect(() => {
    // Show auth modal for new visitors after 3 seconds
    if (!isSignedIn) {
      const timer = setTimeout(() => {
        setShowAuthModal(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSignedIn]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="college-study-hub-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CustomCursor />
          <WhatsAppButton />
          <AuthModal 
            isOpen={showAuthModal} 
            onClose={() => setShowAuthModal(false)}
            mode={authMode}
            setMode={setAuthMode}
          />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/upload-notes" element={<NotesUpload />} />
              <Route path="/view-notes" element={<ViewNotes />} />
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/learning-platforms" element={<LearningPlatforms />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
