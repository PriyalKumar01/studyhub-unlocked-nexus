import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ArrowLeft, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const ThirdSemesterETNotes = () => {
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
      id: 'eca',
      name: 'ECA',
      fullName: 'Electronic Circuit Analysis',
      description: 'Analysis and design of electronic circuits',
      notes: [
        { title: 'ECA Book', url: 'https://drive.google.com/file/d/1ei7KX3yS6TCUcC2Lkya5zVVLYD99ZvF5/view?usp=drivesdk' }
      ]
    },
    {
      id: 'de',
      name: 'DE',
      fullName: 'Digital Electronics',
      description: 'Digital circuits and logic design',
      notes: [
        { title: 'Digital Circuit Book PDF', url: 'https://drive.google.com/file/d/1M7-WFp832omjfPALcua0haNhY8-SBgv6/view?usp=drivesdk' },
        { title: 'Digital Design Book', url: 'https://drive.google.com/file/d/1ws89s_RjCm6ze8z2K1jknxTkZtgZTCgF/view?usp=drivesdk' },
        { title: 'Digital Electronics Quantum PDF (Best)', url: 'https://drive.google.com/file/d/1ksW_xMibmzUZRFScn3NenGzYYc2yxNS0/view?usp=drivesdk' },
        { title: 'Semiconductor Material PDF', url: 'https://drive.google.com/file/d/1P1X9JiJzdGg7FbEL3arfw4uTVISMcvbs/view?usp=drivesdk' },
        { title: 'MOS Logic Family', url: 'https://drive.google.com/file/d/1Yy9cysGTwmRHwfZAsdRY6YI3sRIYwAlR/view?usp=drivesdk' },
        { title: 'Transistor Logic Circuit', url: 'https://drive.google.com/file/d/1DqjPJwWjDvJ3ZBVFCQ3m6Nkg5I0XQp4l/view?usp=drivesdk' },
        { title: 'Modeling Styles in VHDL', url: 'https://drive.google.com/file/d/18xcUAe-dJjmnYlbZ7JHbEcLYDAW4vw2S/view?usp=drivesdk' },
        { title: 'Binary Multiplier', url: 'https://drive.google.com/file/d/1yApmfaL6yZybANtzaGWqMO2S1qp4DPNF/view?usp=drivesdk' },
        { title: 'Code Converter PDF', url: 'https://drive.google.com/file/d/1D5fIC8AfZVwvh-Gd9N2-vqNeGV2fry51/view?usp=drivesdk' },
        { title: '2 Bit Magnitude Comparator', url: 'https://drive.google.com/file/d/1P4Yu75WoAst1fhF9trgee_uqu-yel5Ik/view?usp=drivesdk' },
        { title: 'Implementation of MUX', url: 'https://drive.google.com/file/d/1uyYZllDc2HKuu-Q98s8kj5_Ly_aq4shU/view?usp=drivesdk' },
        { title: 'Minimize Output Logical Expression (Assignment)', url: 'https://drive.google.com/file/d/1FKVUTDtpTANotGo8gQQ4ul8uqv6oY0tI/view?usp=drivesdk' }
      ]
    },
    {
      id: 'emmi',
      name: 'EMMI',
      fullName: 'Electrical Machines & Measurements Instrumentation',
      description: 'Electrical machines and measurement techniques',
      notes: [
        { title: 'Unit-1 Notes', url: 'https://drive.google.com/file/d/122gY7moNtAZyisChZzdgtvkGI0dEHIux/view?usp=drivesdk' },
        { title: 'Unit-3 Notes', url: 'https://drive.google.com/file/d/1wLj4vhrI_P-AY3yHWcjDo2bKbRXPY9jY/view?usp=drivesdk' },
        { title: 'Unit-4 & 5 Notes', url: 'https://drive.google.com/file/d/1-L15l3RWjJfZYbIymeVjnwxSYevcDgGh/view?usp=drivesdk' }
      ]
    },
    {
      id: 'hdl',
      name: 'HDL',
      fullName: 'Hardware Description Language',
      description: 'VHDL and hardware design languages',
      notes: [
        { title: 'HDL Book', url: 'https://drive.google.com/file/d/1Do7Toyz5Wkjr-4RtbfrLPv4jd3rBhiqK/view?usp=drivesdk' },
        { title: 'Complete HDL Notes', url: 'https://drive.google.com/file/d/1CuFCLwYW92Bc9OJk2nnrLx8SVAxEtdo5/view?usp=drivesdk' },
        { title: 'HDL Lab File', url: 'https://drive.google.com/file/d/18eWiTlXAUAS-OP9JhDM8s0n-cRwO573H/view?usp=drivesdk' },
        { title: 'VHDL Notes PDF', url: 'https://drive.google.com/file/d/1Bpa98ASoIatwH53to9pPsR8Dtfwjthdh/view?usp=drivesdk' }
      ]
    },
    {
      id: 'ssd',
      name: 'SSD',
      fullName: 'Solid State Devices',
      description: 'Semiconductor devices and circuits',
      notes: [
        { title: 'Microelectronic Circuit Book', url: 'https://drive.google.com/file/d/1h-Xz0wo9m_tmzIUHI4a2GK1Wms5ICEqH/view?usp=drivesdk' },
        { title: 'SSD Unit-5 Notes', url: 'https://drive.google.com/file/d/1Xkf5f7V7SMXGYsvu6x9HTFAcpiNBOFy_/view?usp=drivesdk' }
      ]
    },
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
    }
  ];

  const pyqs = [
    { title: 'ESE PYQs (2020-21)', url: 'https://drive.google.com/file/d/1qSh1KfrtnANPXPTi6TNkDLX2zHiOvQeZ/view?usp=drivesdk' },
    { title: 'ESE PYQs (2024-25)', url: 'https://drive.google.com/file/d/1jITDsxslYvATjArkAP9LJkT7pbyIUsHQ/view?usp=drivesdk' },
    { title: 'ESE PYQs (2021-22)', url: 'https://drive.google.com/file/d/1-sLPRx8hnjPoOYH3haBKAMa2wvyu6_6A/view?usp=drivesdk' }
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
            3rd Semester - ET Notes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Electronics Technology - Comprehensive study materials and resources
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
                    {subject.notes && subject.notes.length > 0 && (
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
                    )}
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}

          {/* PYQs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: subjects.length * 0.1, duration: 0.5 }}
          >
            <Card className="feature-card">
              <CardHeader>
                <CardTitle className="text-2xl">Previous Year Questions</CardTitle>
                <CardDescription>
                  End semester exam papers from previous years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {pyqs.map((pyq, idx) => (
                    <a
                      key={idx}
                      href={pyq.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <span className="text-sm font-medium">{pyq.title}</span>
                      <Download className="h-4 w-4 text-primary" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSemesterETNotes;
