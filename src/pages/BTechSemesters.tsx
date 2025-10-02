import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import thirdSemImg from "@/assets/3rd-sem-thumbnail.jpg";
import fourthSemImg from "@/assets/4th-sem-thumbnail.jpg";

const BTechSemesters = () => {
  const navigate = useNavigate();
  const { year } = useParams<{ year: string }>();

  const semestersByYear: Record<string, any[]> = {
    "second-year": [
      {
        name: "3rd Semester",
        description: "Core branch subjects and practical applications",
        available: true,
        route: "/btech-notes/second-year/semester-3",
        thumbnail: thirdSemImg,
        branches: ["CSE/IT", "ME", "CE", "CHE", "ET", "EE", "BE", "LFT"],
      },
      {
        name: "4th Semester",
        description: "Advanced core subjects with lab work",
        available: true,
        route: "/btech-notes/second-year/semester-4",
        thumbnail: fourthSemImg,
        branches: ["CSE/IT", "ME", "CE", "CHE", "ET", "EE", "BE", "LFT"],
      },
    ],
    "third-year": [
      {
        name: "5th Semester",
        description: "Specialization courses and electives",
        available: false,
        route: "/btech-notes/third-year/semester-5",
        thumbnail: thirdSemImg,
        branches: ["CSE/IT", "ME", "CE", "CHE", "ET", "EE", "BE", "LFT"],
      },
      {
        name: "6th Semester",
        description: "Advanced specialization and project work",
        available: false,
        route: "/btech-notes/third-year/semester-6",
        thumbnail: fourthSemImg,
        branches: ["CSE/IT", "ME", "CE", "CHE", "ET", "EE", "BE", "LFT"],
      },
    ],
    "fourth-year": [
      {
        name: "7th Semester",
        description: "Final year electives and major project",
        available: false,
        route: "/btech-notes/fourth-year/semester-7",
        thumbnail: thirdSemImg,
        branches: ["CSE/IT", "ME", "CE", "CHE", "ET", "EE", "BE", "LFT"],
      },
      {
        name: "8th Semester",
        description: "Project completion and placement preparation",
        available: false,
        route: "/btech-notes/fourth-year/semester-8",
        thumbnail: fourthSemImg,
        branches: ["CSE/IT", "ME", "CE", "CHE", "ET", "EE", "BE", "LFT"],
      },
    ],
  };

  const semesters = semestersByYear[year || ""] || [];
  const yearName = year?.replace("-", " ")?.replace(/\b\w/g, (l) => l.toUpperCase());

  const handleSemesterClick = (semester: any) => {
    if (semester.available) {
      navigate(semester.route);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="outline"
          onClick={() => navigate("/btech-notes")}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Years
        </Button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {yearName} B.Tech Notes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your semester to access branch-specific study materials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {semesters.map((semester, index) => (
            <motion.div
              key={semester.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                className={`feature-card h-full ${
                  semester.available ? "cursor-pointer" : "opacity-60"
                } transition-all duration-300`}
                onClick={() => handleSemesterClick(semester)}
              >
                <CardHeader>
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={semester.thumbnail}
                      alt={semester.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant={semester.available ? "default" : "secondary"}>
                      {semester.available ? "Available" : "Coming Soon"}
                    </Badge>
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{semester.name}</CardTitle>
                  <CardDescription className="text-base mb-4">
                    {semester.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {semester.branches.slice(0, 4).map((branch) => (
                      <Badge key={branch} variant="outline" className="text-xs">
                        {branch}
                      </Badge>
                    ))}
                    {semester.branches.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{semester.branches.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {semester.available ? (
                    <Button className="w-full btn-hero">
                      Select Branch
                    </Button>
                  ) : (
                    <Button className="w-full" variant="secondary" disabled>
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BTechSemesters;
