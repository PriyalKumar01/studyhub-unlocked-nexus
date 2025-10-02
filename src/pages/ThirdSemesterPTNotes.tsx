import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const ThirdSemesterPTNotes = () => {
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
    },
    {
      id: 'isctc',
      name: 'ISCTC',
      fullName: 'Introduction to Surface Coating Technology & Chemistry',
      description: 'Surface coating techniques and chemical processes',
      notes: [
        { title: 'ISCTC Notes (Part-1)', url: 'https://drive.google.com/file/d/1nykZkVtniaUYCIW0xUsA3FYMNPolU_yL/view?usp=drivesdk' },
        { title: 'ISCTC Notes 2', url: 'https://drive.google.com/file/d/1ob5KJJV77sbjlunsulK7aASMT9VdeIm3/view?usp=drivesdk' }
      ]
    },
    {
      id: 'fmmo',
      name: 'FMMO',
      fullName: 'Fluid Mechanics & Machinery Operations',
      description: 'Study of fluid behavior and machinery operations',
      notes: [
        { title: 'FMMO Unit-2 Notes', url: 'https://drive.google.com/file/d/1Ze7GYkPZ04Wc1S557WQtdtgphL21zMXV/view?usp=drivesdk' }
      ]
    },
    {
      id: 'tofep',
      name: 'TOFEP',
      fullName: 'Technology of Film & Emulsion Paints',
      description: 'Paint technology and emulsion chemistry',
      notes: [
        { title: '1 - Introduction & Definition Notes', url: 'https://drive.google.com/file/d/1nykZkVtniaUYCIW0xUsA3FYMNPolU_yL/view?usp=drivesdk' },
        { title: '2 - Ingredient & Characteristics Notes', url: 'https://drive.google.com/file/d/1ob5KJJV77sbjlunsulK7aASMT9VdeIm3/view?usp=drivesdk' },
        { title: '3 - Classification Notes', url: 'https://drive.google.com/file/d/1W6x44NFGW3bd9VoyRiJfJIIxaGeYJyq1/view?usp=drivesdk' },
        { title: '4 - Fundamental Notes', url: 'https://drive.google.com/file/d/1_sW8TnSFrIEGfSoRS8FS33gR-3fH4mCX/view?usp=drivesdk' },
        { title: '5 - Industry Scenario, Paint Dispersion, Flocculation, Emulsion, Stabilisation', url: 'https://drive.google.com/file/d/1wdaw6ngi6aVq2pvBbxGUctMFmdH04Eur/view?usp=drivesdk' },
        { title: '6 - Oil Notes (Part-1)', url: 'https://drive.google.com/file/d/1HIOzWJ1vljX70rVZv-Mflo_cnTXAiwl4/view?usp=drivesdk' },
        { title: '7 - Oil Notes (Part-2)', url: 'https://drive.google.com/file/d/1yHAIEvwnb7AJZ6k8njiF1zC2TKhgmAKO/view?usp=drivesdk' },
        { title: '8 - Oil Extraction & Silent Features Notes', url: 'https://drive.google.com/file/d/1CzUlqiSdsudv4Anb8r-fuJpfN9pr-hBI/view?usp=drivesdk' },
        { title: '9 - Modified Oil, Driers & Solvents Notes', url: 'https://drive.google.com/file/d/1TiCM4GHdrrRCR45SUhq3jv0oy7rAnffq/view?usp=drivesdk' },
        { title: '10 - Plasticizer & Solvents Notes', url: 'https://drive.google.com/file/d/16kytxH0_XoGAiIr8mPilVRKnU06t4GBN/view?usp=drivesdk' },
        { title: '11 - Pigment Notes (Part-1)', url: 'https://drive.google.com/file/d/1gL6M2wRppjmKJWy3tELBcP_Fv9DHaq_f/view?usp=drivesdk' },
        { title: '12 - Pigment (Part-2)', url: 'https://drive.google.com/file/d/13esE0MardJpzjNuc4nmIpJZ64EpigSek/view?usp=drivesdk' },
        { title: '13 - Pigment Notes (Part-3)', url: 'https://drive.google.com/file/d/18XKjO7n09CBGJVS3icf_XHLWxXSzeFXA/view?usp=drivesdk' },
        { title: '14 - Natural Resin & Alkyl Notes', url: 'https://drive.google.com/file/d/11j3rzNw_WMYNPkVnivx_bCJmdyFv759E/view?usp=drivesdk' },
        { title: '15 - Alkyd Notes', url: 'https://drive.google.com/file/d/1bvUq42wxy0vOVjsCHc3qmendhals1Vjb/view?usp=drivesdk' },
        { title: '16 - Polymer Notes (Part-1)', url: 'https://drive.google.com/file/d/15iuMVScQTgOQqpz6iKRcKriUHEPBen6h/view?usp=drivesdk' },
        { title: '17 - Polymer Notes (Part-2)', url: 'https://drive.google.com/file/d/1Ml7ozTdKVUahetcgCulKn2CzPXlhKAyC/view?usp=drivesdk' },
        { title: '18 - Synthetic Resin Notes', url: 'https://drive.google.com/file/d/1_9l87iTxMBsCKlDuVGb0weqW2zr8A-4D/view?usp=drivesdk' },
        { title: '19 - Paint Additive Notes', url: 'https://drive.google.com/file/d/1BJS9t94b0-JPNm-j_vjP0Jq4AjYYDgbX/view?usp=drivesdk' },
        { title: '20 - Paint Formulation Notes', url: 'https://drive.google.com/file/d/1TeJG0OT0Tx2DuKuVAlDT29pmNBdHTMRb/view?usp=drivesdk' },
        { title: '21 - Drier Notes', url: 'https://drive.google.com/file/d/1taOp8I9d5fAm_bYDBebbm6-2uWbK0Uin/view?usp=drivesdk' },
        { title: '22 - Solvent Notes', url: 'https://drive.google.com/file/d/1xXy1O0nHHQXKwGpE-W5yU42qhS5NnlAM/view?usp=drivesdk' }
      ]
    },
    {
      id: 'cpc',
      name: 'CPC',
      fullName: 'Chemical Process Calculations',
      description: 'Chemical engineering calculations and processes',
      notes: [
        { title: 'CPC Book', url: 'https://drive.google.com/file/d/1C_4Tu6_ewgL1YRjW6hTRx4AwSUrFBXJG/view?usp=drivesdk' }
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
            3rd Semester - PT Notes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plastic Technology - Comprehensive study materials and resources
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
        </div>
      </div>
    </div>
  );
};

export default ThirdSemesterPTNotes;
