import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ExternalLink, Calendar, MapPin, Building, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  // Mock data - In real app, this would come from your backend
  const opportunities = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'Google',
      type: 'Internship',
      location: 'Bangalore',
      deadline: '2024-02-15',
      description: 'Join Google as a Software Engineering Intern and work on cutting-edge technologies.',
      requirements: ['JavaScript', 'Python', 'Data Structures'],
      applyLink: 'https://careers.google.com',
      postedDate: '2024-01-10',
      duration: '3 months',
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Microsoft',
      type: 'Full-time',
      location: 'Hyderabad',
      deadline: '2024-02-20',
      description: 'Build scalable web applications using modern technologies at Microsoft.',
      requirements: ['React', 'Node.js', 'MongoDB', 'Azure'],
      applyLink: 'https://careers.microsoft.com',
      postedDate: '2024-01-12',
      duration: 'Permanent',
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'Amazon',
      type: 'Internship',
      location: 'Mumbai',
      deadline: '2024-02-10',
      description: 'Analyze large datasets and build machine learning models at Amazon.',
      requirements: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
      applyLink: 'https://amazon.jobs',
      postedDate: '2024-01-08',
      duration: '6 months',
    },
    {
      id: 4,
      title: 'Product Manager Trainee',
      company: 'Flipkart',
      type: 'Graduate Program',
      location: 'Bangalore',
      deadline: '2024-02-25',
      description: 'Launch your product management career with Flipkart\'s graduate program.',
      requirements: ['Product Strategy', 'Analytics', 'Communication'],
      applyLink: 'https://flipkart.jobs',
      postedDate: '2024-01-15',
      duration: '12 months',
    },
  ];

  const types = ['all', 'Internship', 'Full-time', 'Graduate Program', 'Hackathon', 'Challenges', 'Contests', 'Other'];
  const locations = ['all', 'Bangalore', 'Mumbai', 'Hyderabad', 'Delhi', 'Pune'];

  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = filterType === 'all' || opportunity.type === filterType;
    const matchesLocation = filterLocation === 'all' || opportunity.location === filterLocation;
    
    // Check if deadline hasn't passed
    const now = new Date();
    const deadline = new Date(opportunity.deadline);
    const isActive = deadline > now;
    
    return matchesSearch && matchesType && matchesLocation && isActive;
  });

  const getDaysUntilDeadline = (deadline: string) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-blue-100 text-blue-800';
      case 'Full-time': return 'bg-green-100 text-green-800';
      case 'Graduate Program': return 'bg-purple-100 text-purple-800';
      case 'Hackathon': return 'bg-red-100 text-red-800';
      case 'Challenges': return 'bg-yellow-100 text-yellow-800';
      case 'Contests': return 'bg-orange-100 text-orange-800';
      case 'Other': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Career Opportunities 💼
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover internships, jobs, and graduate programs from top companies.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search opportunities, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filterLocation} onValueChange={setFilterLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location === 'all' ? 'All Locations' : location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Opportunities Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {filteredOpportunities.map((opportunity, index) => {
            const daysLeft = getDaysUntilDeadline(opportunity.deadline);
            
            return (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="feature-card h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getTypeColor(opportunity.type)}>
                        {opportunity.type}
                      </Badge>
                      <Badge variant={daysLeft <= 7 ? 'destructive' : 'outline'}>
                        {daysLeft} days left
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {opportunity.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {opportunity.location}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {opportunity.description}
                      </p>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                        <div className="flex flex-wrap gap-1">
                          {opportunity.requirements.map((req) => (
                            <Badge key={req} variant="secondary" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {opportunity.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                        </span>
                      </div>

                      <Button
                        asChild
                        className="w-full btn-hero"
                      >
                        <a
                          href={opportunity.applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Apply Now
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredOpportunities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center py-12"
          >
            <Building className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No opportunities found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Opportunities;