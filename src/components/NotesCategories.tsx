import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Code, Trophy, FileText } from 'lucide-react';

const NotesCategories = () => {
  const categories = [
    {
      id: 'btech',
      title: 'Complete B.Tech Notes',
      description: 'Comprehensive notes for all 8 semesters',
      icon: <GraduationCap className="h-6 w-6" />,
      semesters: ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester', '5th Semester', '6th Semester', '7th Semester', '8th Semester'],
      color: 'bg-blue-500'
    },
    {
      id: 'bba',
      title: 'BBA Notes',
      description: 'Business Administration study materials',
      icon: <BookOpen className="h-6 w-6" />,
      semesters: [],
      color: 'bg-green-500'
    },
    {
      id: 'dsa-cpp',
      title: 'DSA in C++',
      description: 'Data Structures and Algorithms in C++',
      icon: <Code className="h-6 w-6" />,
      semesters: [],
      color: 'bg-purple-500'
    },
    {
      id: 'dsa-java',
      title: 'DSA in Java',
      description: 'Data Structures and Algorithms in Java',
      icon: <Code className="h-6 w-6" />,
      semesters: [],
      color: 'bg-orange-500'
    },
    {
      id: 'gate',
      title: 'GATE Notes',
      description: 'Graduate Aptitude Test preparation',
      icon: <Trophy className="h-6 w-6" />,
      semesters: [],
      color: 'bg-red-500'
    },
    {
      id: 'jee',
      title: 'JEE Notes',
      description: 'Joint Entrance Examination materials',
      icon: <Trophy className="h-6 w-6" />,
      semesters: [],
      color: 'bg-indigo-500'
    },
    {
      id: 'web-dev',
      title: 'Web Development Notes',
      description: 'Frontend and Backend development',
      icon: <FileText className="h-6 w-6" />,
      semesters: [],
      color: 'bg-teal-500'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card 
              className="feature-card h-full cursor-pointer transition-all duration-300"
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            >
              <CardHeader>
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center text-white mb-4`}>
                  {category.icon}
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{category.id === 'btech' ? 'Available' : 'Coming Soon'}</Badge>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (category.id === 'btech') {
                        window.location.href = '/first-semester-notes';
                      }
                    }}
                  >
                    View Notes
                  </Button>
                </div>
                
                {selectedCategory === category.id && category.semesters.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t"
                  >
                    <h4 className="font-medium mb-2">Semesters:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.semesters.map((semester) => (
                        <Badge key={semester} variant="outline" className="text-xs">
                          {semester}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NotesCategories;