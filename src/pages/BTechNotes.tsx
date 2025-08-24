import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
  

const BTechNotes = () => {
  const navigate = useNavigate();

  const semesters = [
    {
      id: 1,
      name: '1st Semester',
      description: 'Foundation courses and basic engineering subjects',
      available: true,
      route: '/first-semester-notes'
    },
    {
      id: 2,
      name: '2nd Semester',
      description: 'Advanced foundation and core engineering subjects',
      available: true,
      route: '/second-semester-notes'
    },
    {
      id: 3,
      name: '3rd Semester',
      description: 'Core engineering and specialization introduction',
      available: true,
      route: '/third-semester-notes'
    },
    {
      id: 4,
      name: '4th Semester',
      description: 'Advanced core subjects and practical applications',
      available: true,
      route: '/fourth-semester-notes'
    },
    {
      id: 5,
      name: '5th Semester',
      description: 'Specialization subjects and advanced topics',
      available: false,
      route: '/fifth-semester-notes'
    },
    {
      id: 6,
      name: '6th Semester',
      description: 'Advanced specialization and project work',
      available: false,
      route: '/sixth-semester-notes'
    },
    {
      id: 7,
      name: '7th Semester',
      description: 'Industry-oriented subjects and major project',
      available: false,
      route: '/seventh-semester-notes'
    },
    {
      id: 8,
      name: '8th Semester',
      description: 'Final semester with thesis and advanced electives',
      available: false,
      route: '/eighth-semester-notes'
    }
  ];

  const handleSemesterClick = (semester: any) => {
    if (semester.available) {
      navigate(semester.route);
    }
  };

  return (
    
      <div className="min-h-screen bg-gradient-hero">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              onClick={() => navigate('/view-notes')}
              variant="outline"
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Notes
            </Button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  B.Tech Notes 🎓
                </h1>
                <p className="text-muted-foreground text-lg">
                  Select your semester to access comprehensive study materials
                </p>
              </div>
            </div>
          </motion.div>

          {/* Semesters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {semesters.map((semester, index) => (
              <motion.div
                key={semester.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: semester.available ? 1.02 : 1 }}
              >
                <Card 
                  className={`feature-card h-full transition-all duration-300 ${
                    semester.available 
                      ? 'cursor-pointer hover:shadow-lg' 
                      : 'opacity-60 cursor-not-allowed'
                  }`}
                  onClick={() => handleSemesterClick(semester)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {semester.id}
                      </div>
                      <Badge variant={semester.available ? "default" : "secondary"}>
                        {semester.available ? 'Available' : 'Coming Soon'}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{semester.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {semester.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span>Study Materials</span>
                      </div>
                      <Button 
                        variant={semester.available ? "default" : "outline"} 
                        size="sm"
                        disabled={!semester.available}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSemesterClick(semester);
                        }}
                      >
                        {semester.available ? 'View Notes' : 'Coming Soon'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 p-6 bg-muted/50 rounded-lg border"
          >
            <h3 className="text-lg font-semibold mb-2">📚 About B.Tech Notes</h3>
            <p className="text-muted-foreground">
              Our comprehensive B.Tech notes collection covers all 8 semesters with quality study materials 
              contributed by students and faculty. Each semester includes subject-wise notes, practical files, 
              and important resources to help you excel in your engineering journey.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">✅ 1st-4th Semester Available</Badge>
              <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-300">⏳ More Semesters Coming Soon</Badge>
              <Badge variant="outline">📝 Student Contributions</Badge>
              <Badge variant="outline">🔍 Easy Search & Filter</Badge>
            </div>
          </motion.div>
        </div>
      </div>
    
  );
};

export default BTechNotes;
