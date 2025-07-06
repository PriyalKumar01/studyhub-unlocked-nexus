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
import BTechNotes from "./pages/BTechNotes";
import FirstSemesterNotes from "./pages/FirstSemesterNotes";
import SecondSemesterNotes from "./pages/SecondSemesterNotes";
import ThirdSemesterNotes from "./pages/ThirdSemesterNotes";
import DSANotes from "./pages/DSANotes";
import CodingStudyMaterial from "./pages/CodingStudyMaterial";
import WebDevelopmentNotes from "./pages/WebDevelopmentNotes";
import OpportunityUpload from "./pages/OpportunityUpload";
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";
import AuthModal from "./components/AuthModal";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";
import CookieConsent from "./components/CookieConsent";
import { ThemeProvider } from "./providers/ThemeProvider";

const queryClient = new QueryClient();

const App = () => {
  const { isSignedIn } = useUser();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isLoading, setIsLoading] = useState(true);

  // Cursor effect removed as requested

  useEffect(() => {
    // Show loading spinner for 2 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    // Show auth modal for new visitors after 3 seconds
    if (!isSignedIn && !isLoading) {
      const timer = setTimeout(() => {
        setShowAuthModal(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSignedIn, isLoading]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="college-study-hub-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <WhatsAppButton />
          <ScrollToTop />
          <CookieConsent />
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
              <Route path="/btech-notes" element={<BTechNotes />} />
              <Route path="/first-semester-notes" element={<FirstSemesterNotes />} />
              <Route path="/second-semester-notes" element={<SecondSemesterNotes />} />
              <Route path="/third-semester-notes" element={<ThirdSemesterNotes />} />
              <Route path="/dsa-notes" element={<DSANotes />} />
              <Route path="/coding-study-material" element={<CodingStudyMaterial />} />
              <Route path="/web-development-notes" element={<WebDevelopmentNotes />} />
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/upload-opportunity" element={<OpportunityUpload />} />
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
