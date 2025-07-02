import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Code, Users, Cloud, FileText, Play } from 'lucide-react';
import Navbar from '@/components/Navbar';

const LearningPlatforms = () => {
  const platforms = [
    {
      name: 'CodeXtream Community',
      description: 'Join a vibrant community of developers and learners to enhance your coding skills.',
      url: 'https://www.linkedin.com/company/codextream-community/',
      icon: <Code className="h-6 w-6" />,
      gradient: 'bg-gradient-primary',
    },
    {
      name: 'TaskSwap',
      description: 'Collaborative platform for task management and productivity enhancement.',
      url: 'https://taskswap-4bbb4.web.app/',
      icon: <Users className="h-6 w-6" />,
      gradient: 'bg-gradient-secondary',
    },
    {
      name: 'Google Cloud Arcade Community',
      description: 'Connect with cloud enthusiasts and learn Google Cloud technologies together.',
      url: 'https://chat.whatsapp.com/DbccyK1f9dOCPIGwRYOpNA?mode=r_t',
      icon: <Cloud className="h-6 w-6" />,
      gradient: 'bg-accent',
    },
    {
      name: 'Complete Btech Notes - By Priyal Kumar',
      description: 'Comprehensive collection of BTech notes curated for all semesters and subjects.',
      url: 'https://priyalkumar01.github.io/College-Study/',
      icon: <BookOpen className="h-6 w-6" />,
      gradient: 'bg-warning',
    },
    {
      name: 'Btech CSE/IT Notes - By Ayush Tripathi',
      description: 'Specialized notes for CSE/IT students covering first 4 semesters comprehensively.',
      url: 'https://ayushtripathi1025.notion.site/Sophomore-Study-Guide-9099693698a042409b6ae4a561a48442?pvs=4',
      icon: <FileText className="h-6 w-6" />,
      gradient: 'bg-gradient-primary',
    },
    {
      name: 'Priyal Tech Tips YouTube Channel',
      description: 'Educational content covering tech tips, tutorials, and career guidance for students.',
      url: 'https://youtube.com/@priyal_tech_tips?si=Gnweudfwv8JuGVRO',
      icon: <Play className="h-6 w-6" />,
      gradient: 'bg-gradient-secondary',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Integrated Learning Platforms
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Expand your learning beyond our platform with these recommended educational resources 
            that complement your study materials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="feature-card h-full group cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${platform.gradient} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {platform.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{platform.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {platform.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  >
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      Visit Platform
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPlatforms;