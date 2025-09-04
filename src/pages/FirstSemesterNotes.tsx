import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ArrowLeft, FileText, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { PlaylistModal } from '@/components/PlaylistModal';

const FirstSemesterNotes = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [playlistModal, setPlaylistModal] = useState<{
    isOpen: boolean;
    title: string;
    playlists: any[];
    type: 'detailed' | 'oneshot' | 'workshop';
  }>({ isOpen: false, title: '', playlists: [], type: 'detailed' });
  

  const subjects = [
    {
      id: 'chemistry',
      name: 'Chemistry Notes',
      icon: '🧪',
      color: 'bg-green-500',
      playlists: {
        detailed: [
          {
            title: 'Engineering Chemistry Detailed Playlist 1',
            url: 'https://youtube.com/playlist?list=PLT3bOBUU3L9jB7qJkp5qn35021QUBC8xP&si=kE_79WdmozBtD5ZS',
            recommended: false
          },
          {
            title: 'Engineering Chemistry Detailed Playlist 2',
            url: 'https://youtube.com/playlist?list=PL-vEH_IPWrhBKXPlljxAHMCkdw7Lb_Qbn&si=4SmEbrEMClBJIb7M',
            recommended: false
          },
          {
            title: 'Engineering Chemistry Detailed Playlist 3 (Best)',
            url: 'https://youtube.com/playlist?list=PLg2LVpcRrOF5BVVKG_DdYRPEaMx6C9XsW&si=wOvmSVvGHocZWco2',
            recommended: true
          }
        ],
        oneshot: [
          {
            title: 'Chemistry One Shot',
            url: 'https://youtube.com/playlist?list=PL-vEH_IPWrhBKXPlljxAHMCkdw7Lb_Qbn&si=J_GtKZCpwqQCeZ42',
            recommended: false
          }
        ]
      },
      notes: [
        {
          title: 'Coordination & Compound',
          url: 'https://drive.google.com/file/d/1RZ_mEFT7IjEgSSJl4_Rt71ZhT7EEdWNX/view?usp=sharing'
        },
        {
          title: 'Chemistry Practical File',
          url: 'https://drive.google.com/file/d/1ovxq8fHzhGVIYnYwS3L3hYRnqpjCYTqa/view?usp=drive_link'
        },
        {
          title: 'Engineering Chemistry Lecture Notes',
          url: 'https://drive.google.com/file/d/1W5Sj-qYeWSaegcB2WUcKXymRQtOigM1f/view?usp=drive_link'
        },
        {
          title: 'Nomenclature Notes',
          url: 'https://drive.google.com/file/d/1ROFkIOZ_PbPQYf1LcW49EPg-F78Zqjwz/view?usp=drive_link'
        },
        {
          title: 'Polymer Notes',
          url: 'https://drive.google.com/file/d/1RSder5E5rNZ3Nkn5ToQkt_8E8WJiDG_B/view?usp=drive_link'
        }
      ]
    },
    {
      id: 'civil',
      name: 'Civil Engineering Notes',
      icon: '🏗️',
      color: 'bg-orange-500',
      playlists: {
        detailed: [
          {
            title: 'Civil Engineering Detailed Playlist 1 (Best)',
            url: 'https://youtube.com/playlist?list=PLEYBvmdYQH_Z3sFfITPeEv-qg3sgHVIqC&si=p7O3LMHX28BDkQxU',
            recommended: true
          },
          {
            title: 'Civil Engineering Detailed Playlist 2',
            url: 'https://youtube.com/playlist?list=PLkEhI-YDhJ6xN7lsr6rc7d5awH5WTmpxG&si=HkRBgTvz96J5wbaH',
            recommended: false
          }
        ],
        oneshot: [
          {
            title: 'Civil Engineering One Shot',
            url: 'https://youtu.be/o-oCyZtCqR0?si=tVpcOQdTAzSSz82u',
            recommended: false
          }
        ]
      },
      notes: [
        {
          title: 'Bitumen Notes',
          url: 'https://drive.google.com/file/d/1YDuklfVCl1EsZYbIx6prmQWjUsl1oflv/view?usp=drive_link'
        },
        {
          title: 'Bricks & Stone',
          url: 'https://drive.google.com/file/d/1Y23Skew2v5zv-Boph-77TdiChtsqjiJR/view?usp=drive_link'
        },
        {
          title: 'Cement & Concrete Notes',
          url: 'https://drive.google.com/file/d/1YAOneWG4NSZkZ_3quAQHG4fsmIYPJran/view?usp=drive_link'
        },
        {
          title: 'Civil Engineering Lecture Notes',
          url: 'https://drive.google.com/file/d/1QNnJexZgJLWCIIDFLlxKIjmEcnf6Q5Ld/view?usp=drive_link'
        },
        {
          title: 'Highway Topic Notes',
          url: 'https://drive.google.com/file/d/1YXMgMQrZYnphcJ7zbR6_N9ICBtflVGAV/view?usp=drive_link'
        },
        {
          title: 'Railway & Airport Notes',
          url: 'https://drive.google.com/file/d/1Y_Qm-e4uW2nFE0Zr_AQOPaXS4A8ohLI_/view?usp=drive_link'
        },
        {
          title: 'Soil Mechanism Notes',
          url: 'https://drive.google.com/file/d/1YGC7dH5Kqf7bDe7bjdyEJ5zxkLu1fkIU/view?usp=drive_link'
        },
        {
          title: 'Surkhi & Stone Dust Notes',
          url: 'https://drive.google.com/file/d/1YKXTKcL0ozY6OCtOC1gocUgRxJpUct_c/view?usp=drive_link'
        },
        {
          title: 'Surveying Notes',
          url: 'https://drive.google.com/file/d/1Xx7kvJhCV5GQnKe9iWi9hWlOVyjj5Wuz/view?usp=drive_link'
        },
        {
          title: 'Unit 1 Notes',
          url: 'https://drive.google.com/file/d/1XxSq3_HJB3DnNJwjepBME6UjB9F1xNWj/view?usp=drive_link'
        },
        {
          title: 'Unit 3 Notes',
          url: 'https://drive.google.com/file/d/1YV3-xqPi-uERYjZ4XfXH6lYTqjmJr_qm/view?usp=drive_link'
        }
      ]
    },
    {
      id: 'ics',
      name: 'ICS Handwritten Notes',
      icon: '💻',
      color: 'bg-blue-500',
      notes: [
        {
          title: 'ICS Notes',
          url: 'https://drive.google.com/file/d/1Q5neO5-oIEwcVtmqzLNzHm5GQXzrixGx/view?usp=drive_link'
        }
      ]
    },
    {
      id: 'ict',
      name: 'ICT Handwritten Notes',
      icon: '🔧',
      color: 'bg-purple-500',
      notes: [
        {
          title: 'ICT Notes',
          url: 'https://drive.google.com/file/d/1PzevLkCwsQBQh_bZDwZnPgdWA6Qqv_5m/view?usp=drive_link'
        }
      ]
    },
    {
      id: 'iet',
      name: 'IET Handwritten Notes',
      icon: '⚡',
      color: 'bg-yellow-500',
      playlists: {
        detailed: [
          {
            title: 'IET Detailed Playlist 1 (Best)',
            url: 'https://youtube.com/playlist?list=PL0c0N7xv8s06iL0pUc8VXGH_v-vbGOSv4&si=D7XeqGctlD86CpnA',
            recommended: true
          },
          {
            title: 'IET Detailed Playlist 2',
            url: 'https://youtube.com/playlist?list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&si=1AvreP0F8uaS4Nyw',
            recommended: false
          }
        ],
        oneshot: [
          {
            title: 'Unit 3 One Shot',
            url: 'https://youtu.be/wVL5X4DSVQo?si=VUANHiiHJpQnvDiu',
            recommended: false
          },
          {
            title: 'Unit 5 One Shot',
            url: 'https://youtu.be/czUrC3t3zWM?si=rqLOu6D6XrbouDmb',
            recommended: false
          },
          {
            title: 'Digital Electronics Full One Shot (6 hrs)',
            url: 'https://youtu.be/pHNbm-4reIc?si=vm26Px3CwVDjkaAZ',
            recommended: false
          }
        ]
      },
      notes: [
        {
          title: 'IET Notes',
          url: 'https://drive.google.com/file/d/1Q5neO5-oIEwcVtmqzLNzHm5GQXzrixGx/view?usp=drive_link'
        }
      ]
    },
    {
      id: 'workshop',
      name: 'Workshop Notes',
      icon: '🔨',
      color: 'bg-red-500',
      playlists: {
        detailed: [
          {
            title: 'Foundry Workshop',
            url: 'https://youtu.be/RIwEspSqY1s?si=CdRIS_VaiH1HOG7w',
            recommended: false
          },
          {
            title: 'Machine Workshop',
            url: 'https://youtu.be/as-H6RX3lr8?si=yEUw-Z9jjijM_AsY',
            recommended: false
          },
          {
            title: 'Fitting Workshop',
            url: 'https://youtu.be/g3f9m24cx0s?si=ZQEF31XxTZolfvwX',
            recommended: false
          },
          {
            title: 'Carpentry Workshop',
            url: 'https://youtu.be/xCKK4l_q8vU?si=UxuRYis-lBCkcs0k',
            recommended: false
          }
        ],
        oneshot: []
      },
      notes: [
        {
          title: 'Workshop File Part 1',
          url: 'https://drive.google.com/file/d/1W2cNn_GykLkrO3gvDBvRhRgw5IwkzYy8/view?usp=drive_link'
        },
        {
          title: 'Workshop File Part 2',
          url: 'https://drive.google.com/file/d/1W3OE6MjtYXe5Ln3_jaztoEvUf9FoIzKE/view?usp=drive_link'
        },
        {
          title: 'Workshop Material Science Notes',
          url: 'https://drive.google.com/file/d/1W8lcNGdqsP5sI3h5ey3ORYBTdDJijFF7/view?usp=drive_link'
        },
        {
          title: 'Material Science Additional PDF 1',
          url: 'https://drive.google.com/file/d/1_YgthLZ625NzKcnUYJIzx8lvuvtpsCZ_/view?usp=drive_link'
        },
        {
          title: 'Material Science Additional PDF 2',
          url: 'https://drive.google.com/file/d/1_a9SNbiP_M2yN4ZCwbC9xHBoOcBhYGI_/view?usp=drive_link'
        }
      ]
    },
    {
      id: 'pyqs',
      name: 'Previous Year Questions',
      icon: '❓',
      color: 'bg-red-500',
      notes: [
        { title: 'All Mid Sem-1 PYQs 2024-25', url: 'https://drive.google.com/file/d/1SFx9P6EEyEu5fCwHrL6hMjnugNkodV2t/view?usp=drive_link' },
        { title: 'All Mid Sem-2 PYQs 2024-25', url: 'https://drive.google.com/file/d/1n-6NNV_escvdTYOIRMxAKftqJB2a7w-R/view?usp=drive_link' },
        { title: 'More Mid Sem-2 PYQs', url: 'https://drive.google.com/file/d/1oBW8TZphAGA3jPf5PaiXzhr3CDkRX8cb/view?usp=drive_link' },
        { title: 'More Mid Sem-1 PYQs', url: 'https://drive.google.com/file/d/1Foqyb3niX43bdCX1Qog0jbp7p2jDvP93/view?usp=drive_link' },
        { title: 'Complete All PYQs - 1st Semester (2024-25)', url: 'https://drive.google.com/file/d/1Fc0AwAU84kbiYuOYfDScpiYCx9vfbV_I/view?usp=drive_link' },
        { title: 'Complete All PYQs - 1st Semester (2023-24)', url: 'https://drive.google.com/file/d/1_mrm9SbSkJmqiWuRDT9pwkLAEjKv6e_n/view?usp=drive_link' },
        { title: 'All End Sem PYQs 2024-25', url: 'https://drive.google.com/file/d/1FefFp2xjatHyPb205qKyORxsdQKeqVDP/view?usp=drive_link' }
      ]
    }
  ];

  const syllabus = {
    title: '1st Semester Syllabus',
    url: 'https://drive.google.com/file/d/1fZ_EtsAe94yc9-SM20b6P8-j_9pjdOkN/view?usp=drive_link'
  };

  const handleDownload = (url: string, title: string) => {
    // Convert Google Drive view link to direct download link
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
              All notes for {subject.name} - 1st Semester B.Tech
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
                    <div className="space-y-3">
                      <Button
                        onClick={() => handleDownload(note.url, note.title)}
                        className="w-full btn-hero"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      
                      {/* YouTube Playlists for subject */}
                      {subject.playlists && (subject.playlists.detailed?.length > 0 || subject.playlists.oneshot?.length > 0) && (
                        <div className="pt-2 border-t space-y-2">
                          <h5 className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                            <Play className="h-3 w-3" />
                            Study Playlists
                          </h5>
                          
                          {subject.playlists.detailed?.length > 0 && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full text-xs h-7"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPlaylistModal({
                                  isOpen: true,
                                  title: subject.name,
                                  playlists: subject.playlists.detailed,
                                  type: 'detailed'
                                });
                              }}
                            >
                              📚 View All Detailed Playlists ({subject.playlists.detailed.length})
                            </Button>
                          )}
                          
                          {subject.playlists.oneshot?.length > 0 && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full text-xs h-7"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPlaylistModal({
                                  isOpen: true,
                                  title: subject.name,
                                  playlists: subject.playlists.oneshot,
                                  type: 'oneshot'
                                });
                              }}
                            >
                              📺 View All One Shot Videos ({subject.playlists.oneshot.length})
                            </Button>
                          )}

                          {subject.id === 'workshop' && subject.playlists?.detailed?.length > 0 && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full text-xs h-7"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPlaylistModal({
                                  isOpen: true,
                                  title: subject.name,
                                  playlists: subject.playlists.detailed,
                                  type: 'workshop'
                                });
                              }}
                            >
                              🔨 View All Workshop Videos ({subject.playlists.detailed.length})
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
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
            1st Semester B.Tech Notes 📖
          </h1>
          <p className="text-muted-foreground text-lg">
            Complete collection of 1st semester study materials for all subjects
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
                1st Semester Syllabus
              </CardTitle>
              <CardDescription>
                Official syllabus for 1st semester B.Tech
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
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{subject.notes.length} Files</Badge>
                      <Button variant="outline" size="sm">View Notes</Button>
                    </div>
                    
                    {/* YouTube Playlists Section */}
                    <div className="pt-2 border-t">
                      <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        Study Playlists
                      </h4>
                      <div className="space-y-1">
                        {subject.playlists && subject.playlists.detailed && subject.playlists.detailed.length > 0 && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-full justify-start text-xs h-8 hover:bg-primary/10" 
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlaylistModal({
                                isOpen: true,
                                title: subject.name,
                                playlists: subject.playlists.detailed,
                                type: 'detailed'
                              });
                            }}
                          >
                            📚 Detailed Playlists ({subject.playlists.detailed.length})
                          </Button>
                        )}
                        {subject.playlists && subject.playlists.oneshot && subject.playlists.oneshot.length > 0 && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-full justify-start text-xs h-8 hover:bg-primary/10"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlaylistModal({
                                isOpen: true,
                                title: subject.name,
                                playlists: subject.playlists.oneshot,
                                type: 'oneshot'
                              });
                            }}
                          >
                            📺 One Shot Videos ({subject.playlists.oneshot.length})
                          </Button>
                        )}
                        {subject.id === 'workshop' && subject.playlists?.detailed?.length > 0 && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-full justify-start text-xs h-8 hover:bg-primary/10"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlaylistModal({
                                isOpen: true,
                                title: subject.name,
                                playlists: subject.playlists.detailed,
                                type: 'workshop'
                              });
                            }}
                          >
                            🔨 Workshop Videos ({subject.playlists.detailed.length})
                          </Button>
                        )}
                        {(!subject.playlists || ((!subject.playlists.detailed || subject.playlists.detailed.length === 0) && (!subject.playlists.oneshot || subject.playlists.oneshot.length === 0))) && (
                          <Button variant="ghost" size="sm" className="w-full justify-start text-xs h-8" disabled>
                            📺 Playlists - Coming Soon
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <PlaylistModal 
        isOpen={playlistModal.isOpen}
        onClose={() => setPlaylistModal({ isOpen: false, title: '', playlists: [], type: 'detailed' })}
        title={playlistModal.title}
        playlists={playlistModal.playlists}
        type={playlistModal.type}
      />
      </div>
  );
};

export default FirstSemesterNotes;