import { useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Briefcase, UserCheck, BookOpen, PlusCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Dashboard = () => {
  const { user } = useUser();

  const quickActions = [
    {
      title: 'Upload Notes',
      description: 'Share your study materials with fellow students',
      icon: <Upload className="h-6 w-6" />,
      href: '/upload-notes',
      color: 'bg-gradient-primary',
    },
    {
      title: 'Browse Notes',
      description: 'Access thousands of quality notes',
      icon: <FileText className="h-6 w-6" />,
      href: '/view-notes',
      color: 'bg-gradient-secondary',
    },
    {
      title: 'Build Resume',
      description: 'Create professional ATS-friendly resumes',
      icon: <UserCheck className="h-6 w-6" />,
      href: '/resume-builder',
      color: 'bg-accent',
    },
    {
      title: 'Opportunities',
      description: 'Explore internships and job openings',
      icon: <Briefcase className="h-6 w-6" />,
      href: '/opportunities',
      color: 'bg-warning',
    },
  ];

  const recentStats = [
    { label: 'Notes Uploaded', value: '12', change: '+3 this week' },
    { label: 'Downloads', value: '89', change: '+15 this week' },
    { label: 'Resume Views', value: '23', change: '+8 this week' },
    { label: 'Certificates', value: '5', change: '+1 this week' },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
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

        {/* Stats and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Your Statistics
                </CardTitle>
                <CardDescription>Track your contributions and activity</CardDescription>
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

          {/* Quick Upload */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="gradient-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PlusCircle className="h-5 w-5" />
                  Quick Upload
                </CardTitle>
                <CardDescription>Share your notes instantly</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <p className="text-sm text-muted-foreground mb-4">
                  Got some great notes to share? Upload them now and help your fellow students succeed!
                </p>
                <Link to="/upload-notes">
                  <Button className="w-full btn-hero">
                    Upload Notes
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