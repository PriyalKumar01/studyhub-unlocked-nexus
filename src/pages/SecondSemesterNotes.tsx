import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ArrowLeft, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const SecondSemesterNotes = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const subjects = [
    {
      id: 'electrical',
      name: 'Electrical Engineering',
      icon: '⚡',
      color: 'bg-yellow-500',
      notes: [
        { title: 'Basic Electrical Engineering Book', url: 'https://drive.google.com/file/d/1S2t5UuoQF8vOfr1C9Zy53BfpXhd0gzeB/view?usp=drive_link' },
        { title: 'Unit 5 DC Machine Notes', url: 'https://drive.google.com/file/d/1WKvvTkqGPDMPmSP_nC3mM7qvkKZdlTpN/view?usp=drive_link' },
        { title: 'Electrical Book - C.L Wadhwa', url: 'https://drive.google.com/file/d/1k5EBek40Ou-BXrSwYtLcy8RmW9k0qFbH/view?usp=drive_link' },
        { title: 'Electrical File PDF', url: 'https://drive.google.com/file/d/1Wj06KV7jXwpONsvFpRd2T79776mwfDv5/view?usp=drive_link' },
        { title: 'Unit 2 Notes', url: 'https://drive.google.com/file/d/1WguCYHHNsnbB0_T3EQsyzv3H2FlDVTGk/view?usp=drive_link' },
        { title: 'Transformer Notes', url: 'https://drive.google.com/file/d/1W_bGwn702donDpAde0Qznxcdkl-2GtRY/view?usp=drive_link' },
        { title: 'Unit 1 Notes', url: 'https://drive.google.com/file/d/1SAYkzsR88yrvU8yTQLdQ78N8zM3cefN2/view?usp=drive_link' },
        { title: 'IEE Full Handwritten Notes', url: 'https://drive.google.com/file/d/1VtdV8ZT2I1_dtD8xyUgeor-4G_01RHm8/view?usp=drive_link' },
        { title: 'Unit 3 Handwritten Notes', url: 'https://drive.google.com/file/d/1_ypFDDG_e7GoMF2dzWSHhiDhFW4yWyyD/view?usp=drive_link' },
        { title: 'Unit 4 Handwritten Notes', url: 'https://drive.google.com/file/d/1_yPLVG8DQuKMzITmRJkh2se_wOdYhbEm/view?usp=drive_link' },
        { title: 'Unit 5 Handwritten Notes', url: 'https://drive.google.com/file/d/1_yiMvCtTgCTvnCIVnc_UrxnsGu5OeUnO/view?usp=drive_link' },
        { title: 'Unit 1 Handwritten Notes', url: 'https://drive.google.com/file/d/1jcfwsClNa0PnIdVM21VxBuXPnBT7PAbz/view?usp=drive_link' }
      ]
    },
    {
      id: 'mechanics',
      name: 'Engineering Mechanics',
      icon: '⚙️',
      color: 'bg-blue-500',
      notes: [
        { title: 'Unit 1 Notes', url: 'https://docs.google.com/document/d/1SbrdyYktEpHGJ271gbl-bbbB9EvmlLI2/edit?usp=drive_link&ouid=114822883182552949712&rtpof=true&sd=true' },
        { title: 'Unit 2 & 3 Combined Handwritten Notes', url: 'https://drive.google.com/file/d/1_XgDXt6FY0NBUktGfQDxXWFOdSY8LEOU/view?usp=drive_link' },
        { title: 'Complete Mechanical Engineering Handwritten Notes', url: 'https://drive.google.com/file/d/1WDJbOvvQ68rFrs0kAQnzXNOACmEAe7-2/view?usp=drive_link' },
        { title: 'Engineering Mechanics Book - RK Bansal', url: 'https://drive.google.com/file/d/1SDkvZJ1JciXW_yXjwVBZhI7mUVRpwpMp/view?usp=drive_link' }
      ]
    },
    {
      id: 'math',
      name: 'Engineering Mathematics',
      icon: '📐',
      color: 'bg-green-500',
      notes: [
        { title: 'Engineering Math Handwritten Notes', url: 'https://drive.google.com/file/d/1TZ8L0xmAQju60MFrkJ6ixvhJXEPcuNnh/view?usp=drive_link' },
        { title: 'Engineering Math Book - BS Gerewal', url: 'https://drive.google.com/file/d/1_ofPrUVZXyrwggNv8WeJTX1DeoHMqldX/view?usp=drive_link' },
        { title: 'LPP Graphical Method Notes', url: 'https://drive.google.com/file/d/1_sOUHSZ4dfLHW8cKLd_n0UQoC427cSBi/view?usp=drive_link' }
      ]
    },
    {
      id: 'pc',
      name: 'Professional Communication',
      icon: '💬',
      color: 'bg-purple-500',
      notes: [
        { title: 'One Word Substitution Important PDF', url: 'https://drive.google.com/file/d/1k9DQuSHvbBc_-iB8RPC4g1MZJgHmFBOO/view?usp=drive_link' },
        { title: 'PC Handwritten Notes', url: 'https://drive.google.com/file/d/1STrVBwHdz4WLytQ-KxO4SebJwX0jh6jM/view?usp=drive_link' },
        { title: 'PC Old Notes', url: 'https://drive.google.com/file/d/1iFWlH6L2YJHnH0IxLsZYH-duRJ5wl8u0/view?usp=drive_link' },
        { title: 'Renunciation Story PDF', url: 'https://drive.google.com/file/d/1hn_7lGRiVyuCuQbo1IPnVROIj8DYfZ7p/view?usp=drive_link' },
        { title: 'The Barber\'s Trade Union Story PDF', url: 'https://drive.google.com/file/d/1i2ph1pYGL7KXNcOxNu6WjrhL5Sl5LTi1/view?usp=drive_link' },
        { title: 'The Eyes Are Not Here Story PDF', url: 'https://drive.google.com/file/d/1i9sA1LbAtppEyEjA9YUUmr4rrZXA9h7K/view?usp=drive_link' },
        { title: 'The Lament Story PDF', url: 'https://drive.google.com/file/d/1hvnLA7_Nb9rfRHHvz6eaeGRsPxcE7_cz/view?usp=drive_link' },
        { title: 'Unit 5 Essay Writing PDF', url: 'https://drive.google.com/file/d/1hiZrrMy7d88ZGJcK1hXENVlCuEmaaBZe/view?usp=drive_link' }
      ]
    },
    {
      id: 'physics',
      name: 'Engineering Physics',
      icon: '🔬',
      color: 'bg-indigo-500',
      notes: [
        { title: 'Dielectric Materials Notes', url: 'https://drive.google.com/file/d/1RfW4S61Eqg8WxD-unbh_7se3qhdIoS70/view?usp=drive_link' },
        { title: 'Electromagnetic Theory Notes', url: 'https://drive.google.com/file/d/1kUlhq50o1PBRfrCHBQrFs9zf2pupHOWU/view?usp=drive_link' },
        { title: 'Engineering Physics Handwritten Notes', url: 'https://drive.google.com/file/d/1VzZEDMbinHRr_QUcK1YrWBwq-nRhDera/view?usp=drive_link' },
        { title: 'LASER Topic Notes', url: 'https://drive.google.com/file/d/1RijFS5VF7vdaW6D7UF_ymcr6XOPt5-A1/view?usp=drive_link' },
        { title: 'Nanomaterials Notes', url: 'https://drive.google.com/file/d/1Rt82c5VWLhL5HfyZka68A-Zd7OB1geIb/view?usp=drive_link' },
        { title: 'Physics Lab Experiment (1-13)', url: 'https://drive.google.com/file/d/1YYafb_TK1gWabj3kRC34wUn_Rztt-piI/view?usp=drive_link' },
        { title: 'Unit 1 Notes', url: 'https://drive.google.com/file/d/1kNPYkJ-KIWNAsqgY5UpmphraTSlTLUDI/view?usp=drive_link' },
        { title: 'Unit 3 Notes', url: 'https://drive.google.com/file/d/1RgAj7_fhV20RT88XGDHK_o7S7fLCKFsL/view?usp=drive_link' },
        { title: 'Quantum Mechanics Notes', url: 'https://drive.google.com/file/d/1RtnZADoZD40qQkEp5ARa1DldZiafchnr/view?usp=drive_link' },
        { title: 'Semiconducting Materials Notes', url: 'https://drive.google.com/file/d/1Ruy7Ij_Mq_UImQnhKCLKvJ_WBg5Cj7h5/view?usp=drive_link' },
        { title: 'Semiconductor - Unit 4 Notes', url: 'https://drive.google.com/file/d/1kKqBU2pqeqZOFCdimRFOjnxkj9WP2L6F/view?usp=drive_link' },
        { title: 'Statistical Mechanics Notes', url: 'https://drive.google.com/file/d/1S1ehd1Ri0K_HHNpPur7Z8xbHLVMxo80k/view?usp=drive_link' }
      ]
    },
    {
      id: 'graphics',
      name: 'Engineering Graphics',
      icon: '📐',
      color: 'bg-teal-500',
      notes: [
        { title: 'Engineering Graphics Diagram', url: 'https://drive.google.com/file/d/1auehP9w9Ot4CIP6QVzjE6KJk48GJHX_s/view?usp=drive_link' },
        { title: 'Engineering Graphics Notes', url: 'https://drive.google.com/file/d/1X-847TSkSxdsvIi1y8mJtPHD99ACtiCl/view?usp=drive_link' },
        { title: 'Engineering Graphics Book', url: 'https://drive.google.com/file/d/1hY68Wif6LCQUipraYXIT_utPQvzsKK_F/view?usp=drive_link' },
        { title: 'Isometric Projection Notes', url: 'https://drive.google.com/file/d/1hZYat1B9h-8TXO77vIyXSpydsWmg1uK5/view?usp=drive_link' },
        { title: 'Orthographic View Notes', url: 'https://drive.google.com/file/d/1hc0lIdW75OUQA9eKVkIgxJd6S-AmJ1e3/view?usp=drive_link' },
        { title: 'Projection of Straight Line Notes', url: 'https://drive.google.com/file/d/1hdZ9go7GiT69tLqh4N8SX-HILNKKN0s3/view?usp=drive_link' },
        { title: 'Rules of Dimensions', url: 'https://drive.google.com/file/d/1a5toVeLKoFgUkEesqJJ0qnvCgeC1svAt/view?usp=drive_link' },
        { title: 'Section of Solid Notes', url: 'https://drive.google.com/file/d/1a-MdUdcohktnqRpG9AdFtDuSwfXvYNPS/view?usp=drive_link' }
      ]
    },
    {
      id: 'assignments',
      name: 'Assignments - All Subjects',
      icon: '📝',
      color: 'bg-orange-500',
      notes: [
        { title: 'Electrical 3rd Assignment', url: 'https://drive.google.com/file/d/1k2HJZ84Fm3ZNJzO6PJ_qr94_-l4J0vi7/view?usp=drive_link' },
        { title: 'Maths 8th Assignment', url: 'https://drive.google.com/file/d/1k4aOot_K5gGAxy_afRjhtVaZT_0nRUjk/view?usp=drive_link' },
        { title: 'Mechanics 2nd Assignment', url: 'https://drive.google.com/file/d/1jm9LUxJiRf6OgNGFmynBmu6LbU9pU0dz/view?usp=drive_link' },
        { title: 'Mechanics 3rd Assignment', url: 'https://drive.google.com/file/d/1jf8MMsZAp-BZaLbcp0YHZhA-rgYUR10r/view?usp=drive_link' },
        { title: 'Physics 1st Assignment', url: 'https://drive.google.com/file/d/1k1-Si6BvF8nY8J40aOhpOmm564Yzn8Ck/view?usp=drive_link' },
        { title: 'Physics 2nd Assignment', url: 'https://drive.google.com/file/d/1k-syKk-vljcqWp51kxWe3tin1Q73JE6n/view?usp=drive_link' },
        { title: 'Physics 3rd Assignment', url: 'https://drive.google.com/file/d/1jzmYWysA38KVYlTQNdcRa_lnvAQ412O7/view?usp=drive_link' },
        { title: 'Physics 4th Assignment', url: 'https://drive.google.com/file/d/1jxMnbGqis4JDtNSqdcfEqb8dFNFIZFow/view?usp=drive_link' },
        { title: 'Physics 5th Assignment', url: 'https://drive.google.com/file/d/1jtpSRohBmacgFKmAGJUQ6oX9n6xQqHk1/view?usp=drive_link' }
      ]
    },
    {
      id: 'pyqs',
      name: 'Previous Year Questions',
      icon: '❓',
      color: 'bg-red-500',
      notes: [
        { title: 'Mid Sem 1 PYQs', url: 'https://drive.google.com/file/d/1SzIrS0HedxD7rXrfdeleOMO9YXI-O4Cg/view?usp=drive_link' },
        { title: 'More Mid Sem 1 PYQs', url: 'https://drive.google.com/file/d/1SHThDw8j2ar0oJ7huAKSTTBWAqLqgT86/view?usp=drive_link' },
        { title: 'End Sem PYQs 2024-25', url: 'https://drive.google.com/file/d/1FoxxXrQZyJYqIWNxgqoix-whiELRM9ap/view?usp=drive_link' },
        { title: 'Mid Sem 2 PYQs 2024-25', url: 'https://drive.google.com/file/d/1FmF7U7v0GnqSYhEY5V05Sh2nbq5_Io2V/view?usp=drive_link' },
        { title: 'All Electrical Engineering Subject PYQs', url: 'https://drive.google.com/file/d/1T_SDeOBPNk2_PuR-MSNvyZO083YAawZT/view?usp=drive_link' },
        { title: 'All Engineering Graphics ESE 2023-24 PYQs', url: 'https://drive.google.com/file/d/1XAQWVkHIBL98_6DQ_g5gLdJtPItnr6Fr/view?usp=drive_link' },
        { title: 'All Engineering Math PYQs 2023-24', url: 'https://drive.google.com/file/d/1XAuHs6HHsd83jqxAhSg8jm8CqCAMubIT/view?usp=drive_link' },
        { title: 'All ESE PYQs 2022-23', url: 'https://drive.google.com/file/d/1TUqMumNd8NU2KLY7oSapwyZKDxUwBwEe/view?usp=drive_link' },
        { title: 'PC All End Sem PYQs', url: 'https://drive.google.com/file/d/1_gxaLSw8Uz3OhjCGUkr4nCDeFYaVy816/view?usp=drive_link' },
        { title: 'Important Unit 1-5 Physics PYQs', url: 'https://drive.google.com/file/d/1_chuSn7TOwmsI8M-TAiISYE_AvHKMg7S/view?usp=drive_link' }
      ]
    }
  ];

  const syllabus = {
    title: '2nd Semester Syllabus',
    url: 'https://drive.google.com/file/d/1TGhKLkREEFgTGkDLhn5m9pKWJo9soALy/view?usp=drive_link'
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
              All notes for {subject.name} - 2nd Semester B.Tech
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
            2nd Semester B.Tech Notes 📖
          </h1>
          <p className="text-muted-foreground text-lg">
            Complete collection of 2nd semester study materials for all subjects
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
                2nd Semester Syllabus
              </CardTitle>
              <CardDescription>
                Official syllabus for 2nd semester B.Tech
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default SecondSemesterNotes;