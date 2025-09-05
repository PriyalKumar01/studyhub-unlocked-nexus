import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, Code, Database, Globe, GraduationCap, 
  Cpu, FileText, Sparkles 
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const NotesCategories = () => {
  const noteCategories = [
    {
      id: 'btech',
      title: 'B.Tech Notes',
      description: 'Semester-wise engineering notes for all branches',
      icon: <GraduationCap className="h-8 w-8" />,
      route: '/btech-notes',
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
      available: true,
      count: '1st-4th Sem Available'
    },
    {
      id: 'dsa',
      title: 'DSA Notes',
      description: 'Data Structures and Algorithms comprehensive guide',
      icon: <Database className="h-8 w-8" />,
      route: '/dsa-notes',
      gradient: 'bg-gradient-to-br from-green-500 to-green-600',
      available: true,
      count: '50+ Topics Covered'
    },
    {
      id: 'coding',
      title: 'Coding Study Material',
      description: 'Programming languages and coding practice materials',
      icon: <Code className="h-8 w-8" />,
      route: '/coding-study-material',
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
      available: true,
      count: 'Multiple Languages'
    },
    {
      id: 'webdev',
      title: 'Web Development',
      description: 'Frontend, backend and full-stack development notes',
      icon: <Globe className="h-8 w-8" />,
      route: '/web-development-notes',
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
      available: true,
      count: 'Complete Stack'
    },
    {
      id: 'placement',
      title: 'Placement Preparation',
      description: 'Complete placement guide, resume building, and career tips',
      icon: <Sparkles className="h-8 w-8" />,
      route: '/placement-preparation',
      gradient: 'bg-gradient-to-br from-green-500 to-blue-500',
      available: true,
      count: 'Career Success Guide'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white">
              <BookOpen className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                Study Notes Hub 📚
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose your category to access comprehensive study materials
              </p>
            </div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {noteCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Link to={category.route}>
                <Card className={`feature-card h-full cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden ${
                  category.id === 'placement' ? 'border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20' : ''
                }`}>
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 ${category.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {category.icon}
                      </div>
                      <Badge variant="secondary" className={`${
                        category.id === 'placement' ? 'bg-green-100 text-green-700 border-green-300' : 'bg-primary/10 text-primary'
                      }`}>
                        {category.count}
                      </Badge>
                    </div>
                    <CardTitle className={`text-2xl mb-2 group-hover:text-primary transition-colors ${
                      category.id === 'placement' ? 'text-green-700 dark:text-green-300' : ''
                    }`}>
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sparkles className="h-4 w-4" />
                        <span>High Quality Content</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                        <FileText className="h-4 w-4" />
                        <span>Explore</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-muted/30 rounded-xl p-8 border"
        >
          <h3 className="text-2xl font-bold text-center mb-6">Why Choose Our Notes? 🌟</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Cpu className="h-6 w-6" />,
                title: 'Curated Content',
                description: 'All notes are carefully reviewed and organized for maximum learning efficiency.'
              },
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: 'Regular Updates',
                description: 'Content is continuously updated to reflect latest curriculum and industry standards.'
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                title: 'Student Friendly',
                description: 'Written and formatted specifically for student comprehension and exam preparation.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotesCategories;