import { useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Briefcase, BookOpen, PlusCircle, Calculator, Bot, Trophy, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Dashboard = () => {
  const { user } = useUser();

  const quickActions = [
    {
      title: 'Browse Notes',
      description: 'Access thousands of quality notes',
      icon: <FileText className="h-6 w-6" />,
      href: '/view-notes',
      color: 'bg-gradient-secondary',
    },
    {
      title: 'Internships',
      description: 'Find amazing internship opportunities',
      icon: <Briefcase className="h-6 w-6" />,
      href: '/opportunities',
      color: 'bg-blue-500',
    },
    {
      title: 'Jobs',
      description: 'Explore full-time job openings',
      icon: <Trophy className="h-6 w-6" />,
      href: '/opportunities',
      color: 'bg-green-500',
    },
    {
      title: 'Scholarships',
      description: 'Apply for educational scholarships',
      icon: <Sparkles className="h-6 w-6" />,
      href: '/opportunities',
      color: 'bg-purple-500',
    },
    {
      title: 'AI Tools',
      description: 'Useful AI tools for students',
      icon: <Bot className="h-6 w-6" />,
      href: '/useful-ai-tools',
      color: 'bg-orange-500',
    },
    {
      title: 'CGPA Calculator',
      description: 'Calculate your semester and overall CGPA',
      icon: <Calculator className="h-6 w-6" />,
      href: '/cgpa-calculator',
      color: 'bg-gradient-secondary',
    },
  ];

  const recentStats = [
    { label: 'Notes Downloaded', value: '89', change: '+15 this week' },
    { label: 'Opportunities', value: '45', change: '+8 this week' },
    { label: 'Study Hours', value: '23', change: '+5 this week' },
    { label: 'CGPA Points', value: '8.5', change: '+0.2 this sem' },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome back, {user?.firstName || 'Student'}! 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Ready to continue your academic journey? Here's what you can do today.
          </p>
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8"
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Link to={action.href}>
                <Card className="feature-card h-full cursor-pointer border-0">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {action.icon}
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription className="text-sm">{action.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Exam Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <Card className="gradient-card border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                <BookOpen className="h-5 w-5" />
                🚨 Upcoming Exams Alert!
              </CardTitle>
              <CardDescription className="text-orange-600 dark:text-orange-400">
                Important exam dates approaching - prepare now!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">1st Semester (1st Year)</h4>
                  <p className="text-sm text-muted-foreground mb-2">1st Mid Sem: <strong>22 September 2025</strong></p>
                  <p className="text-sm text-muted-foreground mb-2">2nd Mid Sem: <strong>25 October 2025</strong></p>
                  <p className="text-sm text-muted-foreground mb-3">End Sem: <strong>2-20 December 2025</strong></p>
                  <Link to="/first-semester-notes">
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                      Download 1st Sem Notes 📚
                    </Button>
                  </Link>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">3rd Semester (2nd Year)</h4>
                  <p className="text-sm text-muted-foreground mb-2">1st Mid Sem: <strong>22 September 2025</strong></p>
                  <p className="text-sm text-muted-foreground mb-2">2nd Mid Sem: <strong>25 October 2025</strong></p>
                  <p className="text-sm text-muted-foreground mb-3">End Sem: <strong>2-20 December 2025</strong></p>
                  <Link to="/third-semester-notes">
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                      Download 3rd Sem Notes 📚
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Your Statistics
                </CardTitle>
                <CardDescription>Track your academic progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {recentStats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                      <div className="text-xs text-success">{stat.change}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Access */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Card className="gradient-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PlusCircle className="h-5 w-5" />
                  Quick Access
                </CardTitle>
                <CardDescription>Essential tools & resources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/cgpa-calculator">
                  <Button variant="outline" className="w-full justify-start">
                    <Calculator className="h-4 w-4 mr-2" />
                    CGPA Calculator
                  </Button>
                </Link>
                <Link to="/useful-ai-tools">
                  <Button variant="outline" className="w-full justify-start">
                    <Bot className="h-4 w-4 mr-2" />
                    AI Tools
                  </Button>
                </Link>
                <Link to="/opportunities">
                  <Button variant="outline" className="w-full justify-start">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Opportunities
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;