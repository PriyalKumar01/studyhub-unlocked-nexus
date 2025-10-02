import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const ThirdSemesterOTNotes = () => {
  const navigate = useNavigate();
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);

  const toggleSubjectExpansion = (subjectId: string) => {
    setExpandedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const subjects = [
    {
      id: 'math2',
      name: 'Math-II',
      fullName: 'Engineering Mathematics-II',
      description: 'Advanced engineering mathematics concepts',
      notes: [
        { title: 'Math-II Complete Notes', url: 'https://drive.google.com/file/d/14iSP9qfSLLvqzPQxTGvPUPVt5f4Gxsae/view?usp=drivesdk' },
        { title: 'Math-II Unit 1 Handwritten Notes', url: 'https://drive.google.com/file/d/1vIpIw_LqSVlCSmvFiVs1_0-v7CZoMIWV/view?usp=drivesdk' },
        { title: 'Math-II Unit 2-3 Notes', url: 'https://drive.google.com/file/d/1N8h_IY46YPtXz0YqmBhJ-BbVuGwWjqjE/view?usp=drivesdk' },
        { title: 'Math-II Unit 4-5 Notes', url: 'https://drive.google.com/file/d/12Nv3sAy2LWgqQKBYxSCUFBCjW5BqiUgG/view?usp=drivesdk' }
      ]
    },
    {
      id: 'em',
      name: 'E&M',
      fullName: 'Economics & Management',
      description: 'Business economics and management principles',
      notes: [
        { title: 'E&M Complete Notes', url: 'https://drive.google.com/file/d/1i2r3ij0wSs4p0LN3qjWVLHt6x4k7cBAL/view?usp=drivesdk' },
        { title: 'Economics Unit 1-2 Notes', url: 'https://drive.google.com/file/d/1f7KQBRz5cP5O0xJlL9xNdXVjG2s8gNPR/view?usp=drivesdk' },
        { title: 'Management Unit 3-4 Notes', url: 'https://drive.google.com/file/d/1e8LRCTa6dQ6P1yKmM0zOeYWkH3t9hOQS/view?usp=drivesdk' },
        { title: 'E&M Reference Book', url: 'https://drive.google.com/file/d/1d9MSETb7eR7Q2zLnN1aOfZXlI4u0iP@T/view?usp=drivesdk' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Button
          variant="ghost"
          onClick={() => navigate('/btech-notes/second-year/semester-3')}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Branches
        </Button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            3rd Semester - OT Notes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oil Technology - Comprehensive study materials and resources
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="feature-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{subject.name}</CardTitle>
                      </div>
                      <CardDescription className="text-base mb-1">
                        {subject.fullName}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground">
                        {subject.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSubjectExpansion(subject.id)}
                      className="ml-4"
                    >
                      {expandedSubjects.includes(subject.id) ? (
                        <ChevronDown className="h-5 w-5" />
                      ) : (
                        <ChevronRight className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </CardHeader>

                {expandedSubjects.includes(subject.id) && (
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Study Notes
                      </h3>
                      <div className="grid gap-2">
                        {subject.notes.map((note: any, idx: number) => (
                          <a
                            key={idx}
                            href={note.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                          >
                            <span className="text-sm font-medium">{note.title}</span>
                            <Download className="h-4 w-4 text-primary" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSemesterOTNotes;
