import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const ThirdSemesterFTNotes = () => {
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
         { title: 'Unit 1 C.F & PI Notes', url: 'https://drive.google.com/uc?export=download&id=1_OfjdkVBUxb6352LJcCSqv_nKrjz4uSU' },
  { title: 'Unit 2 Notes', url: 'https://drive.google.com/uc?export=download&id=1_OSlf-B7K9TFC1LgA6yZDUH2sQL-RTy0' },
  { title: 'Unit 3 Notes', url: 'https://drive.google.com/uc?export=download&id=1_PtU2rwcwDjGnrBwBpTtSeohDrbvxDBa' },
  { title: 'Mid Sem 2 Last Minute Revision', url: 'https://drive.google.com/uc?export=download&id=1oGU5M62XSyErVp3qP4CrEj1v0t5FQqej' },
  { title: 'Best Maths Chapter 1 & 2 Notes', url: 'https://drive.google.com/uc?export=download&id=1_JfBOvZp84amQj6Mo7-KtwrARm1kTHUr' },
  { title: 'Formula Sheet Unit 1', url: 'https://drive.google.com/uc?export=download&id=1T6PERNwiIdoA0Vm2EGyIVwp9TlrG7IrX' }
 ]
    },
    {
      id: 'em',
      name: 'E&M',
      fullName: 'Economics & Management',
      description: 'Business economics and management principles',
      notes: [
       { title: 'Business Economics Book', url: 'https://drive.google.com/uc?export=download&id=1XD2CnTGa8tpUzqLPlzzDnc1-P60wdAJO' },
        { title: 'E&M Unit 1 (Part-1) Notes', url: 'https://drive.google.com/uc?export=download&id=1UI4YbkhC7bbb7DpMtNgnciPCFV_c7FaL' },
        { title: 'E&M Unit 1 (Part 2) Notes', url: 'https://drive.google.com/uc?export=download&id=1UObid3Prm9I_JVbxPqaPSukSmQ8qyCV6' },
        { title: 'Unit 1 (Elasticity Notes)', url: 'https://drive.google.com/uc?export=download&id=1U8GWR590L9kRgbe5_fZ6t-myuUoXmqn8' },
        { title: 'Complete Unit 2 Notes', url: 'https://drive.google.com/uc?export=download&id=1UOd_TOHZeOayp-W0NeKdmnv2mXr7-or-' },
        { title: 'Unit 3 (Part-1) Notes', url: 'https://drive.google.com/uc?export=download&id=1UPKMYKBS5k96DWeB2xyVy1ix9gUBnF_o' },
        { title: 'Unit 3 (Part-2) Notes', url: 'https://drive.google.com/uc?export=download&id=1U_rmk9aE-Ge6cxrPqIBbNovw9kwXm56M' },
        { title: 'E&M Handwritten Notes', url: 'https://drive.google.com/uc?export=download&id=1XANMyirw8Bb8Ks4m-R9jOtJ-0CncP5mQ' },
        { title: 'Full Last Min. Revision Notes', url: 'https://drive.google.com/uc?export=download&id=1Tv4l6-DNZygMKa-7AP73LvBki4L3QQcI' }
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
            3rd Semester - FT Notes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Food Technology - Comprehensive study materials and resources
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

export default ThirdSemesterFTNotes;
