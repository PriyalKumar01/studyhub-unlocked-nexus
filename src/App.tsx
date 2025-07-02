import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotesUpload from "./pages/NotesUpload";
import ViewNotes from "./pages/ViewNotes";
import ResumeBuilder from "./pages/ResumeBuilder";
import Opportunities from "./pages/Opportunities";
import About from "./pages/About";
import LearningPlatforms from "./pages/LearningPlatforms";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Remove default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CustomCursor />
        <WhatsAppButton />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
