import Index from "./pages/Index";
import About from "./pages/About";
import BTechYears from "./pages/BTechYears";
import FirstYearNotes from "./pages/FirstYearNotes";
import BTechSemesters from "./pages/BTechSemesters";
import BTechBranches from "./pages/BTechBranches";
import NotesCategories from "./pages/NotesCategories";
import CGPACalculator from "./pages/CGPACalculator";
import CodingStudyMaterial from "./pages/CodingStudyMaterial";
import DSANotes from "./pages/DSANotes";
import Dashboard from "./pages/Dashboard";
import FirstSemesterNotes from "./pages/FirstSemesterNotes";
import SecondSemesterNotes from "./pages/SecondSemesterNotes";
import ThirdSemesterNotes from "./pages/ThirdSemesterNotes";
import FourthSemesterNotes from "./pages/FourthSemesterNotes";
import LearningPlatforms from "./pages/LearningPlatforms";
import NotFound from "./pages/NotFound";
import Opportunities from "./pages/Opportunities";
import OpportunityUpload from "./pages/OpportunityUpload";
import PlacementPreparation from "./pages/PlacementPreparation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import UsefulAITools from "./pages/UsefulAITools";
import ViewNotes from "./pages/ViewNotes";
import WebDevelopmentNotes from "./pages/WebDevelopmentNotes";
import NotesContributors from "./pages/NotesContributors";

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
    page: <BTechYears />,
  },
  {
    to: "/btech-notes/first-year",
    page: <FirstYearNotes />,
  },
  {
    to: "/btech-notes/:year",
    page: <BTechSemesters />,
  },
  {
    to: "/btech-notes/:year/:semester",
    page: <BTechBranches />,
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
    to: "/first-semester",
    page: <FirstSemesterNotes />,
  },
  {
    to: "/second-semester",
    page: <SecondSemesterNotes />,
  },
  {
    to: "/third-semester",
    page: <ThirdSemesterNotes />,
  },
  {
    to: "/fourth-semester",
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
    to: "/placement-preparation",
    page: <PlacementPreparation />,
  },
  {
    to: "/privacy-policy",
    page: <PrivacyPolicy />,
  },
  {
    to: "/terms-of-service",
    page: <TermsOfService />,
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
    to: "/notes-contributors",
    page: <NotesContributors />,
  },
  {
    to: "*",
    page: <NotFound />,
  },
];
