import Index from "./pages/Index";
import About from "./pages/About";
import BTechNotes from "./pages/BTechNotes";
import NotesCategories from "./pages/NotesCategories";
import CGPACalculator from "./pages/CGPACalculator";
import CodingStudyMaterial from "./pages/CodingStudyMaterial";
import DSANotes from "./pages/DSANotes";
import Dashboard from "./pages/Dashboard";
import FirstSemesterNotes from "./pages/FirstSemesterNotes";
import FourthSemesterNotes from "./pages/FourthSemesterNotes";
import LearningPlatforms from "./pages/LearningPlatforms";
import NotFound from "./pages/NotFound";
import Opportunities from "./pages/Opportunities";
import OpportunityUpload from "./pages/OpportunityUpload";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SecondSemesterNotes from "./pages/SecondSemesterNotes";
import TermsOfService from "./pages/TermsOfService";
import ThirdSemesterNotes from "./pages/ThirdSemesterNotes";
import UsefulAITools from "./pages/UsefulAITools";
import ViewNotes from "./pages/ViewNotes";
import WebDevelopmentNotes from "./pages/WebDevelopmentNotes";

export const navItems = [
  {
    to: "/",
    page: <Index />,
  },
  {
    to: "/about",
    page: <About />,
  },
  {
    to: "/btech-notes",
    page: <BTechNotes />,
  },
  {
    to: "/notes",
    page: <NotesCategories />,
  },
  {
    to: "/cgpa-calculator",
    page: <CGPACalculator />,
  },
  {
    to: "/coding-study-material",
    page: <CodingStudyMaterial />,
  },
  {
    to: "/dsa-notes",
    page: <DSANotes />,
  },
  {
    to: "/dashboard",
    page: <Dashboard />,
  },
  {
    to: "/first-semester-notes",
    page: <FirstSemesterNotes />,
  },
  {
    to: "/fourth-semester-notes",
    page: <FourthSemesterNotes />,
  },
  {
    to: "/learning-platforms",
    page: <LearningPlatforms />,
  },
  {
    to: "/opportunities",
    page: <Opportunities />,
  },
  {
    to: "/opportunity-upload",
    page: <OpportunityUpload />,
  },
  {
    to: "/privacy-policy",
    page: <PrivacyPolicy />,
  },
  {
    to: "/second-semester-notes",
    page: <SecondSemesterNotes />,
  },
  {
    to: "/terms-of-service",
    page: <TermsOfService />,
  },
  {
    to: "/third-semester-notes",
    page: <ThirdSemesterNotes />,
  },
  {
    to: "/useful-ai-tools",
    page: <UsefulAITools />,
  },
  {
    to: "/view-notes/:noteType",
    page: <ViewNotes />,
  },
  {
    to: "/web-development-notes",
    page: <WebDevelopmentNotes />,
  },
  {
    to: "*",
    page: <NotFound />,
  },
];