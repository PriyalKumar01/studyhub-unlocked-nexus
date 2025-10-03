import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const BBANotes = () => {
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
      id: 'em',
      name: 'E&M',
      fullName: 'Economics & Management',
      description: 'Business economics and management principles',
      notes: [
        { title: 'Business Economics Book', url: 'https://drive.google.com/file/d/1XD2CnTGa8tpUzqLPlzzDnc1-P60wdAJO/view?usp=drive_link' },
        { title: 'E&M Unit 1 (Part-1) Notes', url: 'https://drive.google.com/file/d/1UI4YbkhC7bbb7DpMtNgnciPCFV_c7FaL/view?usp=drive_link' },
        { title: 'E&M Unit 1 (Part 2) Notes', url: 'https://drive.google.com/file/d/1UObid3Prm9I_JVbxPqaPSukSmQ8qyCV6/view?usp=drive_link' },
        { title: 'Unit 1 (Elasticity Notes)', url: 'https://drive.google.com/file/d/1U8GWR590L9kRgbe5_fZ6t-myuUoXmqn8/view?usp=drive_link' },
        { title: 'Complete Unit 2 Notes', url: 'https://drive.google.com/file/d/1UOd_TOHZeOayp-W0NeKdmnv2mXr7-or-/view?usp=drive_link' },
        { title: 'Unit 3 (Part-1) Notes', url: 'https://drive.google.com/file/d/1UPKMYKBS5k96DWeB2xyVy1ix9gUBnF_o/view?usp=drive_link' },
        { title: 'Unit 3 (Part-2) Notes', url: 'https://drive.google.com/file/d/1U_rmk9aE-Ge6cxrPqIBbNovw9kwXm56M/view?usp=drive_link' },
        { title: 'E&M Handwritten Notes', url: 'https://drive.google.com/file/d/1XANMyirw8Bb8Ks4m-R9jOtJ-0CncP5mQ/view?usp=drive_link' },
        { title: 'Full Last Min. Revision Notes', url: 'https://drive.google.com/file/d/1Tv4l6-DNZygMKa-7AP73LvBki4L3QQcI/view?usp=drive_link' }
      ]
    },
    {
      id: 'fa',
      name: 'Financial Accounting',
      fullName: 'Financial Accounting',
      description: 'Principles and practices of accounting',
      notes: [
        { title: 'Unit-1 Notes', url: 'https://drive.google.com/uc?export=download&id=1EA5gKb4RwXJMqy1M9PmNrqqHefCln6L3' },
        { title: 'Unit-2 Notes', url: 'https://drive.google.com/uc?export=download&id=1DPvXTzFwopVuDBCl3V4vTB-X8QnwOVB-' },
        { title: 'Normal Distribution Notes', url: 'https://drive.google.com/uc?export=download&id=14JC6zEI5r1laIR0MQZT9w7-bRXac7qCy' }
      ]
    },
    {
      id: 'pom',
      name: 'Principles of Management',
      fullName: 'Principles of Management',
      description: 'Fundamental management concepts and practices',
      notes: [
        { title: 'Concept & Definition of Management', url: 'https://drive.google.com/uc?export=download&id=1ezrP5fk_2rh2NjbweI6qs9JFa3XplZMH' },
        { title: 'Principles of Management', url: 'https://drive.google.com/uc?export=download&id=13YKzgPOmWxlwAlQNT1L3Aez66OmvntSX' }
      ]
    },
    {
      id: 'itm',
      name: 'IT in Management',
      fullName: 'Information Technology in Management',
      description: 'Application of IT in business management',
      notes: [
        { title: 'Unit-1 Full Notes', url: 'https://drive.google.com/uc?export=download&id=1aRcSfppNYSjYH9BwGjqOORSTFrueWxBc' },
        { title: 'Unit-4 Part-1 Notes', url: 'https://drive.google.com/uc?export=download&id=17yx1tH3FE2bXp0Aq9-z4wCOyXtCzTMoh' },
        { title: 'Unit-4 Part-2 Notes', url: 'https://drive.google.com/uc?export=download&id=1jsD77T9K75mQ_vZ_WIY7qMs6eBYHoSLJ' },
        { title: 'Ms Word (File, Folder, Window)', url: 'https://drive.google.com/uc?export=download&id=16OuKsOaN9ZR3q5tNbh_VstT_pJ5FR5Xu' },
        { title: 'Unit-2 Types of OS Notes', url: 'https://drive.google.com/uc?export=download&id=1OqT3XBqf6P05jgAJSM6hGZZvniIy-9bS' }
      ]
    },
    {
      id: 'ic',
      name: 'Indian Constitution',
      fullName: 'Indian Constitution',
      description: 'Constitutional framework and governance',
      notes: [
        { title: 'Unit-1 Preamble PDF', url: 'https://drive.google.com/uc?export=download&id=1e2zbkhTSLRzaR_WyJrpStQ4yA4DrVqfa' },
        { title: 'Unit-2 Notes', url: 'https://drive.google.com/uc?export=download&id=1praW_irxDoN--7CNsG_ZGM2ymgNUCUTt' },
        { title: 'Unit-4 Notes', url: 'https://drive.google.com/uc?export=download&id=1TmjNFBsL4FneJFKpvzDM6jyp12NzPV-A' },
        { title: 'Keshavanand Bharti Case PDF', url: 'https://drive.google.com/uc?export=download&id=1oYSTGRVg5Yr3d40s-JGBG6rBg_YWbbTB' }
      ]
    },
    {
      id: 'bc',
      name: 'Business Communication',
      fullName: 'Business Communication',
      description: 'Effective communication skills for business',
      notes: [
        { title: 'Unit-2 Sample Business Letter PDF', url: 'https://drive.google.com/uc?export=download&id=1Y4BC0ijoUl9ZyHElbxBOjAydqkeHjKpw' },
        { title: 'Unit-2 Resume Templates PDF', url: 'https://drive.google.com/uc?export=download&id=1nyL84z6M-l_f-mxhRnmMlUtwRUqWEIag' },
        { title: 'Unit-1 Notes', url: 'https://drive.google.com/uc?export=download&id=1WI-eXtUiW-rqj25KXPChkKbjDscNwUtA' },
        { title: 'Unit-2 Notes', url: 'https://drive.google.com/uc?export=download&id=1oIjxOmyD6jwDTneOaa_sEX7o7M8GqSgO' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="outline"
          onClick={() => navigate('/notes')}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Notes
        </Button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            BBA Notes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bachelor of Business Administration - Comprehensive study materials
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

export default BBANotes;
