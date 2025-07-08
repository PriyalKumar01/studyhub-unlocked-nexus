import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, Upload, UserCheck, Briefcase, Users, Award, 
  TrendingUp, Download, GraduationCap, Star, ArrowRight 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import AnimatedCounter from '@/components/AnimatedCounter';

const Index = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Notes Sharing',
      description: 'Access thousands of quality notes shared by HBTU students across all branches and semesters.',
      href: '/view-notes',
      gradient: 'bg-gradient-primary',
    },
    {
      icon: <Upload className="h-8 w-8" />,
      title: 'Easy Upload',
      description: 'Share your notes with fellow students and earn appreciation certificates.',
      href: '/upload-notes',
      gradient: 'bg-gradient-secondary',
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: 'Resume Builder',
      description: 'Create professional resumes with our easy-to-use builder tailored for students.',
      href: '/resume-builder',
      gradient: 'bg-accent',
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Opportunities',
      description: 'Explore internships, jobs, and graduate programs from top companies.',
      href: '/opportunities',
      gradient: 'bg-warning',
    },
  ];

  const stats = [
    {
      end: 2500,
      suffix: '+',
      title: 'Active Students',
      description: 'Students actively using our platform',
      icon: <Users className="h-8 w-8" />,
    },
    {
      end: 10000,
      suffix: '+',
      title: 'Notes Shared',
      description: 'Study materials shared by students',
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      end: 1200,
      suffix: '+',
      title: 'Certificates Issued',
      description: 'Recognition certificates awarded',
      icon: <Award className="h-8 w-8" />,
    },
    {
      end: 15,
      suffix: '+',
      title: 'Branches Covered',
      description: 'Different engineering branches',
      icon: <GraduationCap className="h-8 w-8" />,
    },
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      branch: 'Computer Science',
      message: 'College Study Hub helped me find amazing notes and land my dream internship!',
      rating: 5,
    },
    {
      name: 'Priya Singh',
      branch: 'Electronics',
      message: 'The resume builder is fantastic. Got multiple interview calls after using it.',
      rating: 5,
    },
    {
      name: 'Amit Kumar',
      branch: 'Mechanical',
      message: 'Such a helpful platform for students. The notes quality is excellent.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                🎓 Your Academic Success Partner
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your One-Stop
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Academic Platform
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empowering HBTU students with comprehensive notes sharing, resume building, 
                and academic resources. Join thousands of students already benefiting from our platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <SignedOut>
                  <SignInButton>
                    <Button className="btn-hero text-lg px-8 py-3">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <Link to="/dashboard">
                    <Button className="btn-hero text-lg px-8 py-3">
                      Go to Dashboard
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </SignedIn>
                
                <Link to="/learning-platforms">
                  <Button variant="outline" className="text-lg px-8 py-3 border-2">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative float-animation">
                <img 
                  src="/lovable-uploads/f3b6ce00-a0ff-4b44-bbdb-ab5640339741.png" 
                  alt="College Study Hub" 
                  className="w-full max-w-md mx-auto pulse-glow"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands of Students
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our growing community of successful students
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedCounter {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools and resources designed specifically for HBTU students 
              to excel in their academic journey.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Link to={feature.href}>
                  <Card className="feature-card h-full cursor-pointer group">
                    <CardHeader>
                      <div className={`w-16 h-16 ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to get started with College Study Hub
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Sign Up',
                description: 'Create your account with your HBTU email and complete your profile with branch and semester details.',
              },
              {
                step: '2',
                title: 'Explore & Share',
                description: 'Browse notes from your branch or share your own study materials to help fellow students succeed.',
              },
              {
                step: '3',
                title: 'Build & Grow',
                description: 'Use our resume builder and earn certificates for your contributions to the academic community.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from our community members
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="gradient-card h-full">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-base italic">
                      "{testimonial.message}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.branch}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Academic Success?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students who are already benefiting from our comprehensive platform.
            </p>
            
            <SignedOut>
              <SignInButton>
                <Button variant="secondary" className="text-lg px-8 py-3">
                  Get Started Now - It's Free!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link to="/dashboard">
                <Button variant="secondary" className="text-lg px-8 py-3">
                  Continue to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </SignedIn>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background/95 border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img 
                src="/lovable-uploads/f3b6ce00-a0ff-4b44-bbdb-ab5640339741.png" 
                alt="College Study Hub" 
                className="h-12 mb-4"
              />
              <p className="text-muted-foreground mb-4">
                Empowering students with comprehensive academic resources and career development tools.
              </p>
              <p className="text-sm text-muted-foreground">
                Built with ❤️ by <strong>Priyal Kumar</strong> for the student community.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/view-notes" className="block text-muted-foreground hover:text-foreground">Notes</Link>
                <Link to="/opportunities" className="block text-muted-foreground hover:text-foreground">Opportunities</Link>
                <Link to="/resume-builder" className="block text-muted-foreground hover:text-foreground">Resume Builder</Link>
                <Link to="/about" className="block text-muted-foreground hover:text-foreground">About</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>priyalkumar06@gmail.com</p>
                <p>For support and inquiries</p>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 College Study Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
