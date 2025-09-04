import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ArrowLeft, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const ThirdSemesterNotes = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const subjects = [
    {
      id: 'dsuc',
      name: 'Data Structures Using C',
      icon: '💻',
      color: 'bg-blue-500',
      notes: [
        { title: 'Complete DSUC Best Notes - Quantum', url: 'https://drive.google.com/file/d/1owA6SjSqpZrLk1-qH_W0o96jamAcciOC/view?usp=drive_link' },
        { title: 'All Most Important Programs for End Sem DSUC', url: 'https://drive.google.com/file/d/16eqDnz71Ir1RulrBmeN7Lsxb54NnFPVs/view?usp=drive_link' },
        { title: 'DSUC Lab File', url: 'https://drive.google.com/file/d/1-XiDXdsHOUgn_FWc7Vj3nqkPIpvQ6Z00/view?usp=drive_link' },
        { title: 'DSUC Unit 3 Notes', url: 'https://drive.google.com/file/d/16vyaX2v03fQIIRlPQEuRpZlj9yMkwslJ/view?usp=drive_link' },
        { title: 'DSUC Unit 1 Notes', url: 'https://drive.google.com/file/d/17AvvwyJt04S2BVhsGaeIPTmKiauFjFt3/view?usp=drive_link' },
        { title: 'DSUC Unit 2 Notes', url: 'https://drive.google.com/file/d/176a8uPhPDR4sCE0OGOnem3fAJzhEafHp/view?usp=drive_link' },
        { title: 'DSUC Unit 4 Notes', url: 'https://drive.google.com/file/d/16puOi7D4C8zNYQy7b5g57ldSY4uxKu1U/view?usp=drive_link' },
        { title: 'DSUC Unit 5 Notes', url: 'https://drive.google.com/file/d/16lSiwGeeApPd-ROVWiHzE2p_lrGl8Nmx/view?usp=drive_link' },
        { title: 'Best Unit 1 Notes', url: 'https://drive.google.com/file/d/1ox2uuOi9_5E_OykzE4HVFziuaztrG_6h/view?usp=drive_link' }
      ]
    },
    {
      id: 'itetiict',
      name: 'Intro to Emerging Technologies in ICT',
      icon: '🌐',
      color: 'bg-purple-500',
      notes: [
        { title: 'IoT Introduction PDF', url: 'https://drive.google.com/file/d/1_RxHI-c9kG75CDeqvMaq6ZF7kfpcASfr/view?usp=drive_link' },
        { title: 'Cryptocurrency Notes', url: 'https://drive.google.com/file/d/1nXHy2Yc2Sj9Dbnk5sc8b40WRdR5FEYt-/view?usp=drive_link' },
        { title: 'IoT Smart City PDF', url: 'https://drive.google.com/file/d/1_Ptg9E0I-o6t8yu_dx3tEEZ1SdF3mk7M/view?usp=drive_link' },
        { title: 'OSI Model PDF', url: 'https://drive.google.com/file/d/1_UGWKcSl3PlJoPFnh7doApswuIxVDoxA/view?usp=drive_link' },
        { title: 'Blockchain Notes', url: 'https://drive.google.com/file/d/1naxhYNRX8Jh3F761QKSXgz1GSPvEWQPI/view?usp=drive_link' },
        { title: 'Mid Sem 2 (Unit 3 & 4 Revision Notes)', url: 'https://drive.google.com/file/d/1o66wwin_5zxme7XQZtLxzrfDfRndVaIN/view?usp=drive_link' },
        { title: 'Blockchain Reference Book', url: 'https://drive.google.com/file/d/1n31Nl9JGvvB9gu2IcYnHxA_f-_f81Abd/view?usp=drive_link' },
        { title: 'Unit 3 Topic Smart Contract PDF', url: 'https://drive.google.com/file/d/1ncpHnKX8YdQb0S-qYPjZpy0raJSG6xCx/view?usp=drive_link' },
        { title: 'AWS, Azure & Cloud Difference - Most Important PDF', url: 'https://drive.google.com/file/d/1_5MPY5RNWggsfMMZ8OfNYwv25cTe5o1J/view?usp=drive_link' },
        { title: 'Artificial Intelligence Notes', url: 'https://drive.google.com/file/d/1nQMQcUnAiWtmGsA7I8O5uhkGCJfVpumY/view?usp=drive_link' },
        { title: '10 V\'s of Big Data PDF', url: 'https://drive.google.com/file/d/1n3L4z2CaXd1GEbVE6A3ghpX1wYLWxlCv/view?usp=drive_link' },
        { title: '10 Use Cases of Blockchain PDF', url: 'https://drive.google.com/file/d/1nWBxdm1CXBihI_yI8BLan6lKeWkshEus/view?usp=drive_link' },
        { title: 'Unit 1 Short Notes', url: 'https://drive.google.com/file/d/1Yx6KtWPOFZo9r0Gkzz4wB63xGlzcRD7E/view?usp=drive_link' },
        { title: 'Unit 2 Short Notes', url: 'https://drive.google.com/file/d/1Z75dUAIGpD9BjO6XbTmrC5PLR3hbu4H6/view?usp=drive_link' },
        { title: 'Unit 3 Short Notes', url: 'https://drive.google.com/file/d/1Z7DnmJZGdh9FvJf-9uzGWb2X0wlAi2ep/view?usp=drive_link' },
        { title: 'Unit 5 Short Notes', url: 'https://drive.google.com/file/d/1ZIdEag2hUDiDcS0oMMD6_0AYzucWll0n/view?usp=drive_link' }
      ]
    },
    {
      id: 'co',
      name: 'Computer Organisation',
      icon: '🖥️',
      color: 'bg-green-500',
      notes: [
        { title: 'CO Notes', url: 'https://drive.google.com/file/d/1_BSSWlVYgFZrNF2tmNEBhMDATUmCj73B/view?usp=drive_link' },
        { title: 'CO Unit 3 & 4 Notes', url: 'https://drive.google.com/file/d/1nmTLVoJw-JmThfro0vm5Wk-taA1jDHBn/view?usp=drive_link' },
        { title: 'CO Unit 3 Handwritten Notes', url: 'https://drive.google.com/file/d/1nt9Llpt9gmc2SlQb0fqwVzcEfAYjZkGD/view?usp=drive_link' },
        { title: 'Full CO Playlist SS Notes', url: 'https://drive.google.com/file/d/1565sCtaXE8cUAYyQ9t6hlShUkteSK8di/view?usp=drive_link' },
        { title: 'Control Unit & Design Notes', url: 'https://drive.google.com/file/d/1o3kF8AMJDkFcIFVaaxiB2i8HNejd-GTk/view?usp=drive_link' },
        { title: 'Full Important CO Material - ESE', url: 'https://drive.google.com/file/d/15Ah5duaHgJSNDRD2chR68rUc1dozjcYW/view?usp=drive_link' },
        { title: 'RISC Vs CISC PDF', url: 'https://drive.google.com/file/d/1nuRiot85uZwMmsH_4vizdT92BNGGdPEJ/view?usp=drive_link' },
        { title: 'CO Mid Sem 2 Numericals - Last Minute Revision PDF', url: 'https://drive.google.com/file/d/1o4JJ7-guZ4ttvNNitQd0Vh4aDeoNogRe/view?usp=drive_link' }
      ]
    },
    {
      id: 'python',
      name: 'Python Programming',
      icon: '🐍',
      color: 'bg-orange-500',
      notes: [
        { title: 'PP Notes', url: 'https://drive.google.com/file/d/14MsO70g821_IZrtXEp8bezOKnte8Enak/view?usp=drive_link' },
        { title: 'PP Lab File', url: 'https://drive.google.com/file/d/1-Vb1JsaRf3VnonTH80EtYzg2W53n5HV5/view?usp=drive_link' },
        { title: 'PP Best Quantum Notes', url: 'https://drive.google.com/file/d/1ovVLnKwYM1vsYSeAk0UNEqcF-lU7otVH/view?usp=drive_link' },
        { title: 'Important PP Programs for ESE', url: 'https://drive.google.com/file/d/13viyP84UNb_1UfGWPUnqOapXUSq2jcMz/view?usp=drive_link' },
        { title: 'Python Full Handwritten Notes', url: 'https://drive.google.com/file/d/1_VF2ORzst49Yu5BtYdhSkTbw16Wge2rE/view?usp=drive_link' }
      ]
    },
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
      id: 'de',
      name: 'Digital Electronics',
      icon: '🔌',
      color: 'bg-teal-500',
      notes: [
        { title: 'Question Bank (Chapter Wise)', url: 'https://drive.google.com/file/d/1ANtk5b6Sr6Q6LQLDELmjDsiLis77ThjI/view?usp=drive_link' },
        { title: 'DE Complete Lab File', url: 'https://drive.google.com/file/d/1-u7KbXNDxNQNw7g64PEbwfqE7FOhZmRb/view?usp=drive_link' }
      ]
    },
    {
      id: 'assignments',
      name: 'Assignments - All Subjects',
      icon: '📝',
      color: 'bg-yellow-500',
      notes: [
        { title: 'PP Assignment-1', url: 'https://drive.google.com/file/d/1-dydD1SBZZ7Grggn3whZwA4Fbfo-xupA/view?usp=drive_link' },
        { title: 'ItETiICT Assignment-1', url: 'https://drive.google.com/file/d/1rXGsAnU9Shr7YNybgAQJVZrtR3QbfOwU/view?usp=drive_link' },
        { title: 'EM-II Assignment 1', url: 'https://drive.google.com/file/d/1TIUedXB4mRke7CDxuvHnVn9lXXA6KmQf/view?usp=drive_link' },
        { title: 'EM-II Assignment-2', url: 'https://drive.google.com/file/d/1TKW4nyYuBMe5LJxXLBlEwEIOdSvbWTpI/view?usp=drive_link' },
        { title: 'EM-II Assignment-3', url: 'https://drive.google.com/file/d/1tDZaX9nQEPecEtrDgjgtPOblvp_GA9TG/view?usp=drive_link' }
      ]
    },
    {
      id: 'pyqs',
      name: 'Previous Year Questions',
      icon: '❓',
      color: 'bg-red-500',
      notes: [
        { title: 'All End Sem PYQs 2023-24', url: 'https://drive.google.com/file/d/1TeQ1Pee5v93WkAncNgNss9JQaXhg4b0h/view?usp=drive_link' },
        { title: 'All Mid Sem 2 PYQs', url: 'https://drive.google.com/file/d/1my2tho6uAeNtm2r6wA9Egare2Wsj6MzX/view?usp=drive_link' },
        { title: 'All End Sem PYQs 2024-25', url: 'https://drive.google.com/file/d/1P6gRk-loWPVrYtclKa9YaXa5AKLiebZ7/view?usp=drive_link' },
        { title: 'All Mid Sem 1 PYQs (2024-25)', url: 'https://drive.google.com/file/d/1SFi-2scaPEeehBKK7sW-vuag0-t3Z3Pk/view?usp=drive_link' },
        { title: 'Mid Sem-1 PYQs (2023-24)', url: 'https://drive.google.com/file/d/1TLslQyKp3OofBB61ApE4-5q0epHzVcik/view?usp=drive_link' }
      ]
    }
  ];

  const syllabus = {
    title: '3rd Semester Syllabus',
    url: 'https://drive.google.com/file/d/1mpACtmx9BF_gInlrOa8U-8ykmGHumQRk/view?usp=drive_link'
  };

  const handleDownload = (url: string, title: string) => {
    const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (fileId) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, '_blank');
    } else {
      window.open(url, '_blank');
    }
  };

  if (selectedSubject) {
    const subject = subjects.find(s => s.id === selectedSubject);
    if (!subject) return null;

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
              All notes for {subject.name} - 3rd Semester B.Tech
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            onClick={() => navigate('/btech-notes')}
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to B.Tech Notes
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            3rd Semester B.Tech Notes 📖
          </h1>
          <p className="text-muted-foreground text-lg">
            <strong>Only for CSE/IT students</strong>
          </p>
        </motion.div>

        {/* Syllabus Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                3rd Semester Syllabus
              </CardTitle>
              <CardDescription>
                Official syllabus for 3rd semester B.Tech
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
              transition={{ delay: (index + 1) * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card 
                className="feature-card h-full cursor-pointer transition-all duration-300"
                onClick={() => setSelectedSubject(subject.id)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${subject.color} rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto`}>
                    {subject.icon}
                  </div>
                  <CardTitle className="text-lg text-center">{subject.name}</CardTitle>
                  <CardDescription className="text-center">
                    {subject.notes.length} notes available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{subject.notes.length} Files</Badge>
                    <Button variant="outline" size="sm">View Notes</Button>
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

export default ThirdSemesterNotes;