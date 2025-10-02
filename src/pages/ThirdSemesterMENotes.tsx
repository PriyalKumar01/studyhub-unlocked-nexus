import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ArrowLeft, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const ThirdSemesterMENotes = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const handleDownload = (url: string, title: string) => {
    const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (fileId) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, '_blank');
    } else {
      window.open(url, '_blank');
    }
  };

  const subjects = [
    {
      id: 'math2',
      name: 'Engineering Mathematics-II',
      icon: '📐',
      color: 'bg-indigo-500',
      notes: [
        { title: 'Unit 1 C.F & PI Notes', url: 'https://drive.google.com/file/d/1_OfjdkVBUxb6352LJcCSqv_nKrjz4uSU/view?usp=drive_link' },
        { title: 'Unit 2 Notes', url: 'https://drive.google.com/file/d/1_OSlf-B7K9TFC1LgA6yZDUH2sQL-RTy0/view?usp=drive_link' },
        { title: 'Unit 3 Notes', url: 'https://drive.google.com/file/d/1_PtU2rwcwDjGnrBwBpTtSeohDrbvxDBa/view?usp=drive_link' },
        { title: 'Mid Sem 2 Last Minute Revision', url: 'https://drive.google.com/file/d/1oGU5M62XSyErVp3qP4CrEj1v0t5FQqej/view?usp=drive_link' },
        { title: 'Best Maths Chapter 1 & 2 Notes', url: 'https://drive.google.com/file/d/1_JfBOvZp84amQj6Mo7-KtwrARm1kTHUr/view?usp=drive_link' },
        { title: 'Formula Sheet Unit 1', url: 'https://drive.google.com/file/d/1T6PERNwiIdoA0Vm2EGyIVwp9TlrG7IrX/view?usp=drive_link' }
      ]
    },
    {
      id: 'et',
      name: 'Engineering Thermodynamics',
      icon: '🔥',
      color: 'bg-red-500',
      notes: [
        { title: 'Unit-1 Notes', url: 'https://drive.google.com/file/d/1L_cqxvSO6djvfa32zliF32MXiLT2nQh7/view?usp=drivesdk' },
        { title: 'Unit-2 Part 1 Notes', url: 'https://drive.google.com/file/d/1l5qwbL5puPX-SAD5Yc4ww5mSEsWnNvrd/view?usp=drivesdk' },
        { title: 'Unit-2 Part 2 Notes', url: 'https://drive.google.com/file/d/1BRrCZ5njGVkHWqDa6fG4rpB_ewIIePwG/view?usp=drivesdk' },
        { title: 'Unit-3 Notes', url: 'https://drive.google.com/file/d/1hI6X8tlTlrJlNixbhaGIiRctrppFy9fx/view?usp=drivesdk' },
        { title: 'Unit-4 Notes', url: 'https://drive.google.com/file/d/1_kiMpbsqzcwPwOsl3hQpg9Wl9Q_Sfp75/view?usp=drivesdk' },
        { title: 'ET Self Study Notes', url: 'https://drive.google.com/file/d/10V0KF21CkXScf__3pLqWgFF7f--VE7mc/view?usp=drivesdk' }
      ]
    },
    {
      id: 'kom',
      name: 'Kinematics of Machines',
      icon: '⚙️',
      color: 'bg-blue-500',
      notes: [
        { title: 'KOM Book', url: 'https://drive.google.com/file/d/1Ret3lDNQ-Q_aHekhx-1IrVwWN0T1teMN/view?usp=drivesdk' }
      ]
    },
    {
      id: 'ms',
      name: 'Material Science',
      icon: '🔬',
      color: 'bg-purple-500',
      notes: [
        { title: 'Ferrous Material Notes', url: 'https://drive.google.com/file/d/1tUuPIWhyWBwySY3MwFzkStAjHAffeOdm/view?usp=drivesdk' },
        { title: 'Gate GPSC Material Science PDF', url: 'https://drive.google.com/file/d/1ibTXNh7As3GPVdt1W-AKZGAjsYF76M2C/view?usp=drivesdk' },
        { title: 'Imp. PYQs with Solution PDF', url: 'https://drive.google.com/file/d/1nmlQKBUPfw5RfO0-WRnXSrwyD4V4vvBi/view?usp=drivesdk' },
        { title: 'Unit-1, 2 & 3 Notes', url: 'https://drive.google.com/file/d/1oPMef-67CF8M0gDwoNHAfxutsSuCy_Me/view?usp=drivesdk' },
        { title: 'Unit-4 Notes', url: 'https://drive.google.com/file/d/1WjNZVn-02CXoYFBMYZU3ucP0vbk-KJ0R/view?usp=drivesdk' },
        { title: 'Unit-5 Notes', url: 'https://drive.google.com/file/d/11RCPAy1-YnHr06_S6eM9u9ay5uKl1twR/view?usp=drivesdk' }
      ]
    },
    {
      id: 'md',
      name: 'Machine Drawing',
      icon: '📐',
      color: 'bg-green-500',
      notes: [
        { title: 'MD Official Syllabus', url: 'https://drive.google.com/file/d/1KwWOJi9yGLwqA5dLJJnF0pPR7rEbVXMq/view?usp=drivesdk' },
        { title: 'MD Objective Questions', url: 'https://drive.google.com/file/d/1KEkAFfUTKrlfBZSflaRp-3JSY55W2z69/view?usp=drivesdk' }
      ]
    },
    {
      id: 'mes',
      name: 'Manufacturing Engineering Sciences',
      icon: '🏭',
      color: 'bg-orange-500',
      notes: [
        { title: 'Unit-2 Notes', url: 'https://drive.google.com/file/d/1SQCyclPgRSj_dGA7WVU6lW9Eglw8y3kG/view?usp=drivesdk' },
        { title: 'Unit-3 Notes', url: 'https://drive.google.com/file/d/1EO_jaSk0YL-xr8lJT9MZjc1UKQLIgFr3/view?usp=drivesdk' },
        { title: 'Unit-4 Notes', url: 'https://drive.google.com/file/d/1hcIsrWh89XAXCJF_pE0zQhVMJkF6EQp2/view?usp=drivesdk' },
        { title: 'Unit-5 Notes', url: 'https://drive.google.com/file/d/1CYNvhFWiz3zXyJD90XkJA99kRi6kzq1Q/view?usp=drivesdk' },
        { title: 'Imp. PYQs with Solution', url: 'https://drive.google.com/file/d/1kC6iv_fkPr8_JMGN_Ro_CpTPl_-rqymo/view?usp=drivesdk' }
      ]
    },
    {
      id: 'som',
      name: 'Strength of Materials',
      icon: '💪',
      color: 'bg-teal-500',
      notes: [
        { title: 'SOM Book by RK Bansal', url: 'https://drive.google.com/file/d/15ahuMSoS3b6XeNwK7WVxOQ93pk9ukMwx/view?usp=drivesdk' },
        { title: 'SOM Lab Questions', url: 'https://drive.google.com/file/d/15aa0NBdtwFBJUaaK1tMdMM8GTxsDvlcL/view?usp=drivesdk' },
        { title: 'Unit-1, 2 & 3 Handwritten Notes', url: 'https://drive.google.com/file/d/17blfHAcJBn3xuR72YyZEos8HpX4gah50/view?usp=drivesdk' },
        { title: 'Unit-4 Notes', url: 'https://drive.google.com/file/d/1oKnyxO-KzRUuu2qFl21zgxyulHTxFZ0S/view?usp=drivesdk' },
        { title: 'Unit-5 Notes', url: 'https://drive.google.com/file/d/1fJZ2clBRsX8t6hZoA_Sue85IueQzL25e/view?usp=drivesdk' },
        { title: 'Unit-1 PDF Notes', url: 'https://drive.google.com/file/d/19bTcoGiDiYm6rtoXGe8IJvhgbCTc48h5/view?usp=drivesdk' }
      ]
    },
    {
      id: 'pyqs',
      name: 'Previous Year Questions',
      icon: '❓',
      color: 'bg-yellow-500',
      notes: [
        { title: 'End Sem PYQs (2022-23)', url: 'https://drive.google.com/file/d/1oBDlfMok9kUsvyE-0LzJvI8Qn8eFd_tg/view?usp=drivesdk' },
        { title: 'Engg. Thermodynamics PYQs (2022-23)', url: 'https://drive.google.com/file/d/1ob0kQEBoz0soaCFLKiQcgKiR_ggy-1-F/view?usp=drivesdk' },
        { title: 'ESE PYQs (2023-24)', url: 'https://drive.google.com/file/d/1_yfFyoum1jigWHDTEzKQFpb-Tvet81N4/view?usp=drivesdk' },
        { title: 'MID SEM-1 (2025-26)', url: 'https://drive.google.com/file/d/15t3Iqz4L1mqMcnZA1I_uifLnNag8SEVW/view?usp=drivesdk' },
        { title: 'MID SEM PYQs (2023-24)', url: 'https://drive.google.com/file/d/1a4bBTk9Q9NGdPmCv5GJ9wpOBpWYY3gag/view?usp=drivesdk' },
        { title: 'MID SEM PYQs (2022-23)', url: 'https://drive.google.com/file/d/1CDP18lrpDfpro60B_fNbrwCScqXL_6jR/view?usp=drivesdk' },
        { title: 'Mid Sem + ESE PYQs (2024-25)', url: 'https://drive.google.com/file/d/1E7bR9519waWe0YzEMspyimXwFoJm9a6r/view?usp=drivesdk' },
        { title: 'SOM Old PYQs', url: 'https://drive.google.com/file/d/1N3tU3TiSXYWsUDsV3r3z4kHpAIC4s-GP/view?usp=drivesdk' }
      ]
    }
  ];

  const syllabus = {
    title: 'ME Branch Syllabus',
    url: 'https://drive.google.com/file/d/14vei1z0YQmFEVZFZzel2UEhjO3nRE9oy/view?usp=drivesdk'
  };

  if (selectedSubject) {
    const subject = subjects.find(s => s.id === selectedSubject);
    if (!subject) return null;

    return (
      <div className="min-h-screen bg-gradient-hero">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              onClick={() => setSelectedSubject(null)}
              variant="outline"
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Subjects
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {subject.name} 📚
            </h1>
            <p className="text-muted-foreground text-lg">
              All notes for {subject.name} - 3rd Semester ME Branch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subject.notes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="feature-card h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 ${subject.color} rounded-full flex items-center justify-center text-white text-lg`}>
                        <FileText className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary">PDF</Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{note.title}</CardTitle>
                    <CardDescription>
                      {subject.name} study material
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => handleDownload(note.url, note.title)}
                      className="w-full btn-hero"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            onClick={() => navigate('/btech-notes/second-year/semester-3')}
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Branches
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            3rd Semester ME Branch Notes 📖
          </h1>
          <p className="text-muted-foreground text-lg">
            Select a subject to access comprehensive study materials for Mechanical Engineering
          </p>
        </motion.div>

        {/* Syllabus Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📋 Official Syllabus
              </CardTitle>
              <CardDescription>
                Complete syllabus for 3rd Semester ME Branch
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleDownload(syllabus.url, syllabus.title)}
                className="btn-hero"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Syllabus
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className="feature-card h-full cursor-pointer"
                onClick={() => setSelectedSubject(subject.id)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${subject.color} rounded-xl flex items-center justify-center text-white text-3xl mb-4`}>
                    {subject.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{subject.name}</CardTitle>
                  <CardDescription>
                    {subject.notes.length} files available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full btn-hero">
                    View Notes
                  </Button>
                  <div className="mt-3 text-center">
                    <Badge variant="outline" className="text-xs">
                      Playlist: Coming Soon
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSemesterMENotes;
