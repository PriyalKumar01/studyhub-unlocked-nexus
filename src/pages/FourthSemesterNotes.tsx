import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ArrowLeft, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';


const FourthSemesterNotes = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  
  const subjects = [
    {
      id: 'em',
      name: 'Economics & Management',
      icon: '💼',
      color: 'bg-blue-500',
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
      id: 'math3',
      name: 'Engineering Mathematics-III',
      icon: '📐',
      color: 'bg-purple-500',
      notes: [
        { title: 'BS Gerewal Math Book', url: 'https://drive.google.com/file/d/1WO6VBRte2_4ZdXbwuwLoA4PfjgSFdabL/view?usp=drive_link' },
        { title: 'HK Das Math Book', url: 'https://drive.google.com/file/d/1WO_2jHYoYX_T9PoZHVVvts4WssiWRqPK/view?usp=drive_link' },
        { title: 'Complete Unit-1,2 & 3 Notes', url: 'https://drive.google.com/file/d/1CE9GVSQI9YCq6iEZ25ASudXDyLHEL5tJ/view?usp=drive_link' },
        { title: 'Unit 4 (Moment) Notes', url: 'https://drive.google.com/file/d/1R0KO9NqX0WFnSbuFqZMTxyol1KmIrC5T/view?usp=drive_link' },
        { title: 'Unit 5 Notes', url: 'https://drive.google.com/file/d/1R0nue1eUT7kZXKeQnXJiZ6mZuijVoQ07/view?usp=drive_link' },
        { title: 'Unit 4 Curve Fitting Notes', url: 'https://drive.google.com/file/d/1CEcIG1FTaeZdqRn53Fy-O8at9SGbmXX2/view?usp=drive_link' },
        { title: 'Z-Transform Notes', url: 'https://drive.google.com/file/d/1_QbIn7C9i3M8E6HD_J3hNwgMORjrMEaj/view?usp=drive_link' },
        { title: 'EM-III Residue Notes', url: 'https://drive.google.com/file/d/1_PeEnniPP66dRbwGRJiPzyjLTEs00jbX/view?usp=drive_link' },
        { title: 'Harmonic Function Prove Notes', url: 'https://drive.google.com/file/d/1_PeEnniPP66dRbwGRJiPzyjLTEs00jbX/view?usp=drive_link' }
      ]
    },
    {
      id: 'os',
      name: 'Operating System',
      icon: '🖥️',
      color: 'bg-green-500',
      notes: [
        { title: 'OS Unit-2,3,4 & 5 Notes + Imp. Diagrams', url: 'https://drive.google.com/file/d/1eAmO8ZWoSUJpoD2DratHpmdtX79XYFil/view?usp=drive_link' },
        { title: 'OS Signal Handling Notes', url: 'https://drive.google.com/file/d/1dP129HBR-TeLyeeVaM6IdtjHFlx8uJzo/view?usp=drive_link' },
        { title: 'OS Signal Notes (Part-1)', url: 'https://drive.google.com/file/d/1dWOYpI3__S2wgcXOxwdiLRWNs-NE6TMU/view?usp=drive_link' },
        { title: 'OS Signal Notes (Part-2)', url: 'https://drive.google.com/file/d/1dXKXaUcIar-x_zSu1WgIvXXRI9RlTDRD/view?usp=drive_link' },
        { title: 'OS Thread Notes', url: 'https://drive.google.com/file/d/1dVcpDFeOc3MOn7qtuX38fiJM0xB7lDJz/view?usp=drive_link' },
        { title: 'OS Unit-1,2 & 3 Handwritten Notes', url: 'https://drive.google.com/file/d/1eDNTvHrbaoVGjK1o2hpUpOtZblRUG09L/view?usp=drive_link' },
        { title: 'OS Wiley Book (Very Imp.)', url: 'https://drive.google.com/file/d/1dbo8X8UuubqEyE7fNwGGfV8isF9n57zg/view?usp=drive_link' },
        { title: 'OS Wiley Book (Practice Ques.)', url: 'https://drive.google.com/file/d/1dlHVXg5DniDFYabpuetm0AVZx2LV54PM/view?usp=drive_link' },
        { title: 'OS William Stalling Book', url: 'https://drive.google.com/file/d/1WcCEPMIbYxYzJRSRF_Gc3jhspUNUV5Vl/view?usp=drive_link' },
        { title: 'William Stalling Book (Question\'s Ans.)', url: 'https://drive.google.com/file/d/1daJ9evLWTzhENcIe60k35iM4l-CJJ_PZ/view?usp=drive_link' }
      ]
    },
    {
      id: 'se',
      name: 'Software Engineering',
      icon: '⚙️',
      color: 'bg-orange-500',
      notes: [
        { title: 'Sample Front Page for SE Lab File', url: 'https://drive.google.com/file/d/1f4w_qy8Xw3_wPRY01kz2vj7gzlGfFBvk/view?usp=drive_link' },
        { title: 'Railway Reservation System SRS Document (SE Lab)', url: 'https://drive.google.com/file/d/1f3B8LyiCYj9tw3GwDwlhm59_YfBfZvsc/view?usp=drive_link' },
        { title: 'Software Design Notes + Imp. Diagrams', url: 'https://drive.google.com/file/d/1f-jTrT_1YOFYl9Yfk-8NiLlqIA1E6evA/view?usp=drive_link' },
        { title: 'SE Notes for ESE', url: 'https://drive.google.com/file/d/1cdWjUs4QQcFIsezWgbUvkhbwhHbZY4_y/view?usp=drive_link' },
        { title: 'COCOMO Model Notes', url: 'https://drive.google.com/file/d/1eoRxxiE651xOVu7fdhUIbQ7Gjn7Rtd7Z/view?usp=drive_link' },
        { title: 'SE Unit-1 Notes', url: 'https://drive.google.com/file/d/1cMLUTDTZ9ewZ4imUCAbhW4fp-smNhuQ-/view?usp=drive_link' },
        { title: 'Complete Unit 1 to 5 Notes', url: 'https://drive.google.com/file/d/1cc4ZbPh7dRnPIkRI3ztv5awCGak5yQtv/view?usp=drive_link' },
        { title: 'SE Unit-2 Quantum Notes', url: 'https://drive.google.com/file/d/1cLsEXQnu9TDKGBnO_t8Zwj0WuM_Sxel8/view?usp=drive_link' },
        { title: 'Unit-3 Quantum Notes', url: 'https://drive.google.com/file/d/1cLUwBU7Ptmgmrk4MWVLbVE2i5pJz7ave/view?usp=drive_link' },
        { title: 'Unit-4 Quantum Notes', url: 'https://drive.google.com/file/d/1cN1jyX8BnMrmAh-TH3ic5EWA8covDQpc/view?usp=drive_link' },
        { title: 'Unit-5 Quantum Notes', url: 'https://drive.google.com/file/d/1cOnVxh_6oshKly7E1P2DLe4kCnwsjT6p/view?usp=drive_link' },
        { title: 'SE Unit-1 to 4 Handwritten Notes', url: 'https://drive.google.com/file/d/1cJA-CYdIg3CR42yYeyYAvqLM94egetb1/view?usp=drive_link' },
        { title: 'Unit-2.1 SRS Requirement PDF Notes', url: 'https://drive.google.com/file/d/1eMI451NUOyvAbJ0WKowu0JD25fl7rqPa/view?usp=drive_link' },
        { title: 'Unit-2.2 Estimation Notes', url: 'https://drive.google.com/file/d/1efnISXG6ZEmjJhg5sCIEBehapPQ6KUq5/view?usp=drive_link' },
        { title: 'Unit-3 Software Design PDF Notes', url: 'https://drive.google.com/file/d/1eSi6xDL3HRcyKpQZ7iL_bfThtv7uoLVD/view?usp=drive_link' },
        { title: 'Unit-4 Software Testing Notes', url: 'https://drive.google.com/file/d/1eIfEhGq_A7Z7GeUZaE4_hcZTUSqunOuc/view?usp=drive_link' },
        { title: 'Unit-5 Software Maintenance Notes', url: 'https://drive.google.com/file/d/1eDhut9YkysRfZjqjgmqyLzShg8LmxcUb/view?usp=drive_link' },
        { title: 'Laws of Software Maintenance Notes', url: 'https://drive.google.com/file/d/1euUA6RHIAMUW_Z2yEuVzoVB6B6GyhHv3/view?usp=drive_link' }
      ]
    },
    {
      id: 'ppl',
      name: 'Principles of Programming Language',
      icon: '💻',
      color: 'bg-indigo-500',
      notes: [
        { title: 'PPL Book PDF', url: 'https://drive.google.com/file/d/1ddHsyjqoYPErKWD2vjELX0wC0L3Y9sba/view?usp=drive_link' },
        { title: 'PPL Unit-5 Notes', url: 'https://drive.google.com/file/d/1cmcJTPaiVHDb10m8kmAxdqUGfFuTSSkq/view?usp=drive_link' },
        { title: 'PPL Storage Management Notes', url: 'https://drive.google.com/file/d/1d9Vq_fXAFqEDSBn_1--rTLOL-v011_Ni/view?usp=drive_link' },
        { title: 'PPL Unit-1 to 4 Handwritten Notes', url: 'https://drive.google.com/file/d/1cdvnZ1DFnc5jHvJKvsngM1ys9xwKqvSi/view?usp=drive_link' },
        { title: 'PPL Unit-4 & 5 GPT Notes', url: 'https://drive.google.com/file/d/1cg7TZ1CaIudGt4zT7e9wpPcc7h3ILyMU/view?usp=drive_link' },
        { title: 'Unit-5 Notes PDF', url: 'https://drive.google.com/file/d/1crfywzKWvg5vY6hGLawZ6XkZfJZLHDHy/view?usp=drive_link' },
        { title: 'PPL Sub-program Notes', url: 'https://drive.google.com/file/d/1C5KMC-EHWNvc4LHOrGQoRYoB8DiH5vWw/view?usp=drive_link' },
        { title: 'Exception Handling Notes', url: 'https://drive.google.com/file/d/1d5gfmpTLefmvlb1ZOx9ftwVO7VLL89cr/view?usp=drive_link' },
        { title: 'Unit-1 (Part 1) Notes', url: 'https://drive.google.com/file/d/1dXwzaV3nuTNkHiXvTMs7WqAxuYxY-591/view?usp=drive_link' },
        { title: 'Unit-1 (Part 2) Notes', url: 'https://drive.google.com/file/d/1dY_dh8D_Nrx62JsGb_UmQ6t8XOc7szQc/view?usp=drive_link' },
        { title: 'Unit-1 (Part 3) Notes', url: 'https://drive.google.com/file/d/1dbfV9QCs0eocXoWlRsMHaJRGjCNsERxz/view?usp=drive_link' },
        { title: 'Unit 2 (Part 1) Notes', url: 'https://drive.google.com/file/d/1dcLD7ZvrgQWqmspqtBsiMdQ2kcjPBuNH/view?usp=drive_link' },
        { title: 'Unit 2 (Part 2) Notes', url: 'https://drive.google.com/file/d/1Bof5brMwKyqX7pLh2H-7JREw8mCHb-I1/view?usp=drive_link' },
        { title: 'Unit 2 (Part 3) Notes', url: 'https://drive.google.com/file/d/1BxiydjcOonC6LN6IVSaBkWo4G8sAlUR1/view?usp=drive_link' },
        { title: 'Unit-2 (Part 4) & Unit-3 (Part 1) Notes', url: 'https://drive.google.com/file/d/1BzzpT_s5n3YhXFSPCAi-P7ykE5TQhG9V/view?usp=drive_link' },
        { title: 'Unit-3 (Part 2) Notes', url: 'https://drive.google.com/file/d/1C4yFY25rkAdLYoZ65TpEo1ogtMu969hs/view?usp=drive_link' },
        { title: 'Unit-4 Stage of Translation Notes', url: 'https://drive.google.com/file/d/1dHkajpGfI75LcTsnAl2SN6KgWZKtlmBY/view?usp=drive_link' }
      ]
    },
    {
      id: 'wt',
      name: 'Web Technology',
      icon: '🌐',
      color: 'bg-teal-500',
      notes: [
        { title: 'Complete Unit-1 to 5 Quantum Notes', url: 'https://drive.google.com/file/d/1dPJxkCx-uuN2tvHMFrp3gURZjF-mlLTH/view?usp=drive_link' },
        { title: 'WT Handwritten Notes', url: 'https://drive.google.com/file/d/1WjOaDpW8qhOpBIZRS8s7eY5RoaviloO3/view?usp=drive_link' },
        { title: 'WT Imp. Question Bank', url: 'https://drive.google.com/file/d/1Wdup17mKYlv5J4t5NLaCQrTiYH_SU7-S/view?usp=drive_link' },
        { title: 'WT Unit-3,4 & 5 GPT Notes', url: 'https://drive.google.com/file/d/1W_pBYiKIBI4C6TowcYnWdtx6wuaPpWsI/view?usp=drive_link' },
        { title: 'Unit-1 OneShot Notes', url: 'https://drive.google.com/file/d/1WmdI24FpQYcpfXHuv2wkozCkQP8GTp-p/view?usp=drive_link' },
        { title: 'Unit-2 OneShot Notes', url: 'https://drive.google.com/file/d/1Wp-Z1W5_XhK9AV4V26wvugWNqTFN3nZO/view?usp=drive_link' },
        { title: 'Unit-3 OneShot Notes', url: 'https://drive.google.com/file/d/1Wwi2cc_4Ro6XYGEwFabqJlANB-I-l3Su/view?usp=drive_link' },
        { title: 'Unit-4 OneShot Notes', url: 'https://drive.google.com/file/d/1WzZc5csum5vJdXJY1eFfxVk3nmhZyF06/view?usp=drive_link' },
        { title: 'Unit-5 OneShot Notes', url: 'https://drive.google.com/file/d/1X6xWaulVOBcpySBmd3fvDf8uUWKMB2JF/view?usp=drive_link' },
        { title: 'WT Full YouTube SS Notes', url: 'https://drive.google.com/file/d/1WfwsbrbRDXSfyb6nPaPqoxw_h01wHFGf/view?usp=drive_link' }
      ]
    },
    {
      id: 'assignments',
      name: 'Assignments - All Subjects',
      icon: '📝',
      color: 'bg-yellow-500',
      notes: [
        { title: 'E&M Assignment-2', url: 'https://drive.google.com/file/d/1fDegieCMpAuj47Y3TzIVidqm2cQqM5yV/view?usp=drive_link' },
        { title: 'EM-III Assignment Ques. (For Practice)', url: 'https://drive.google.com/file/d/1_UnztNjMw8E_in3W-Fy75go8igGuV_Iq/view?usp=drive_link' },
        { title: 'EM-III Assignment Ques. (For Practice)', url: 'https://drive.google.com/file/d/1_XXityVgli5CQoOpWTKiHRgBVMzQM5wm/view?usp=drive_link' },
        { title: 'OS Assignment-1', url: 'https://drive.google.com/file/d/1b4mUC6HdmaGEmnOi-t0iCmw96laEnMuo/view?usp=drive_link' },
        { title: 'OS Assignment-2', url: 'https://drive.google.com/file/d/1b4yH8R2Dmv9k_1NL8-XuYTUjKo3sXORe/view?usp=drive_link' },
        { title: 'OS Assignment-3', url: 'https://drive.google.com/file/d/19qSrVD2RIYKaKrbRq12U8ODBvYYn8Yun/view?usp=drive_link' },
        { title: 'OS Assignment-4', url: 'https://drive.google.com/file/d/19qDDjL8LNFZ5z01POO6y8_SCBrwZBObQ/view?usp=drive_link' }
      ]
    },
    {
      id: 'pyqs',
      name: 'Previous Year Questions',
      icon: '❓',
      color: 'bg-red-500',
      notes: [
        { title: 'PPL PYQs with Solution', url: 'https://drive.google.com/file/d/1zmI94Kwpn-hVY5hTSeK5e_pwZc_RCP6A/view?usp=drive_link' },
        { title: 'All Mid Sem-1 PYQs', url: 'https://drive.google.com/file/d/1zhJ4vgSUR3N0pefSDKHQwCIsEFxwM8sE/view?usp=drive_link' },
        { title: 'Math\'s PYQs (2024-25)', url: 'https://drive.google.com/file/d/1R1MAUoeyvU813aNWlkzVhoioK2Z7NBRH/view?usp=drive_link' },
        { title: 'WT ESE PYQs with Solutions', url: 'https://drive.google.com/file/d/1WcMLbY9sTbBqyLrqe_lPAt3E4BSVo-gw/view?usp=drive_link' }
      ]
    }
  ];

  const syllabus = {
    title: '4th Semester Syllabus',
    url: 'https://drive.google.com/file/d/1Pj0S0G7EnEaFwQfBPndyIE_v37Z_P4pi/view?usp=drive_link'
  };

  const handleDownload = (url: string, title: string) => {
    
    // Extract file ID from Google Drive URL
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
              All notes for {subject.name} - 4th Semester B.Tech
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
                <Card className="feature-card h-full border-2 border-transparent hover:border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 ${subject.color} rounded-full flex items-center justify-center text-white text-lg`}>
                        <FileText className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" >PDF</Badge>
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
            4th Semester B.Tech Notes 📖
          </h1>
          <p className="text-muted-foreground text-lg">
            Complete collection of 4th semester study materials for all subjects
          </p>
        </motion.div>

        {/* Syllabus Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <Card className="gradient-card border-2 border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                4th Semester Syllabus
              </CardTitle>
              <CardDescription>
                Official syllabus for 4th semester B.Tech
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
                className="feature-card h-full cursor-pointer transition-all duration-300 border-2 border-transparent hover:border-primary/20 shadow-lg hover:shadow-xl"
                onClick={() => setSelectedSubject(subject.id)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${subject.color} rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg`}>
                    {subject.icon}
                  </div>
                  <CardTitle className="text-lg text-center">{subject.name}</CardTitle>
                  <CardDescription className="text-center">
                    {subject.notes.length} notes available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary"> {subject.notes.length} Files</Badge>
                    <Button variant="outline" size="sm" >
                      View Notes
                    </Button>
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

export default FourthSemesterNotes;