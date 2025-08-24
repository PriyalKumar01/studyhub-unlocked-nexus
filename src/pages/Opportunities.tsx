import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Search, ExternalLink, Calendar, MapPin, Building, Clock, GraduationCap, Briefcase, School
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');
  const [activeTab, setActiveTab] = useState<'Internships' | 'Jobs' | 'Scholarships' | 'Hackathons' | 'Competitions'>('Internships');
  const filters = {
    Internships: ['all', 'Technical', 'Non-technical', 'Online', 'Hybrid', 'Onsite'],
    Jobs: ['all', 'Full-time', 'Part-time', 'Remote', 'Hybrid', 'Onsite'],
    Scholarships: ['all', 'Merit-based', 'Women-only', 'Merit-cum-Need Based','Open-for-all'],
    Hackathons: ['all', 'Web Development', 'AI/ML', 'Blockchain', 'Mobile App', 'Gaming'],
    Competitions: ['all', 'Coding', 'Design', 'Innovation', 'Business', 'Technical']
  };

  const locations = ['all', 'Bangalore', 'Mumbai', 'Hyderabad', 'Delhi','Kanpur', 'Hybrid','Online' ];

  const allOpportunities = {
    //1-10 id is reserve for Internships, 11-20 for Jobs, 21-40 for Scholarships
    Internships: [
     {
  id: 1,
  title: 'Full Stack Developer Internship',
  company: 'Bootcoding Pvt. Ltd.',
  type: 'Technical',
  location: 'Remote',
  deadline: '2025-07-29',
  eligibility: ['Engineering Students', 'Node.js/Python', 'Full Stack Project Experience'],
  description: 'Build internal tools & dashboards using React and Node.js. AceInt AI interview required for shortlisting.',
  applyLink: 'https://unstop.com/internships/full-stack-developer-internship-bootcoding-pvt-ltd-1522846?lb=gBjlX3Ge&utm_medium=Share&utm_source=shortUrl',
  postedDate: '2025-07-16',
  duration: '3 months'
},
{
  id: 2,
  title: 'Data Scientist Internship',
  company: 'FlatUIUX',
  type: 'Technical',
  location: 'Remote',
  deadline: '2025-08-10',
  eligibility: ['Engineering Students', 'MBA Students', 'Python/R', 'SQL Knowledge'],
  description: 'Work with data collection, analysis, ML modeling, and visualization tools like Tableau and Python libraries.',
  applyLink: 'https://unstop.com/internships/data-scientist-internship-flatuiux-1523259?lb=gBjlX3Ge&utm_medium=Share&utm_source=shortUrl',
  postedDate: '2025-07-15',
  duration: '2 months'
},

{
        id: 10,
        title: 'Content Writing Intern',
        company: 'EduBlogs',
        type: 'Non-technical',
        location: 'Online',
        deadline: '2024-10-30',
        eligibility: ['Any Stream', 'Writing Skills', 'Communication'],
        description: 'Write engaging educational content and blogs.',
        applyLink: 'https://edublogs.in/apply',
        postedDate: '2024-07-10',
        duration: '2 months'
      }
    ],
    Jobs: [
      {
        id: 11,
        title: 'Backend Developer',
        company: 'TechNova',
        type: 'Full-time',
        location: 'Bangalore',
        deadline: '2024-11-25',
        eligibility: ['Node.js', 'MongoDB', 'REST APIs'],
        description: 'Work as a backend developer on enterprise-level APIs.',
        applyLink: 'https://technova.jobs',
        postedDate: '2024-07-05',
        duration: 'Permanent'
      },
      {
        id: 12,
        title: 'Customer Support (Remote)',
        company: 'QuickHelp',
        type: 'Part-time',
        location: 'Remote',
        deadline: '2024-10-01',
        eligibility: ['English Fluency', 'Basic Computer Skills'],
        description: 'Provide chat-based customer support remotely.',
        applyLink: 'https://quickhelp.com/apply',
        postedDate: '2024-07-06',
        duration: 'Ongoing'
      }
    ],
    Scholarships: [
      
        {
  id: 21,
  title: '🎓 UP Scholarship 2025',
  company: 'Government of Uttar Pradesh',
  type: 'Open-for-all',
  location: 'Online',
  deadline: '2025-12-10',
  eligibility: [
    'Must be a resident of Uttar Pradesh',
    'Annual Family Income (all sources):General / OBC / Minority: ₹2.0 Lakhs or less',
    'Annual Family Income (all sources):SC / ST: ₹2.5 Lakhs or less'
  ],
  description: 'The U.P Scholarship 2025 Covers Pre-Matric, Post-Matric, and Post-Matric (Other Than Intermediate) scholarships for UP residents.',
  applyLink: 'https://scholarship.up.gov.in/',
  postedDate: '2025-07-10',
  duration: '1 Year'
},
{
  id: 22,
  title: '✍️ Plagiarism Search Scholarship 2025',
  company: 'PlagiarismSearch',
  type: 'Merit-based',
  location: 'Online',
  deadline: '2025-12-20',
  eligibility: [
    'Must be at least 18 years old',
    'Currently enrolled or planning to enroll in college in 2025',
    'Submit a 500–700 word essay in English on one of the listed topics'
  ],
  description: 'A one-time $1,000 scholarship for students with strong writing skills, awarded through an online essay competition.',
  applyLink: 'https://www.buddy4study.com/scholarship/plagiarism-search-scholarship',
  postedDate: '2025-07-16',
  duration: 'One-time'
},
{
  id: 23,
  title: '🎯 Satya Scholarship Program 2025',
  company: 'Nehru Sidhant Kender Trust',
  type: 'Merit-based',
  location: 'Ludhiana District, Punjab',
  deadline: '2025-08-31',
  eligibility: [
    'Class 12 passed with at least 60% from Ludhiana district',
    'Annual family income ≤ ₹5 Lakhs',
    'Enrolled in 1st-year UG or integrated course in Commerce, Engineering, or Medical fields',
    'Preference to girls, athletes, PwD, orphans, single-parent students'
  ],
  description: 'Full tuition fee support for UG/integrated courses at selected colleges in Ludhiana; preference to underrepresented groups.',
  applyLink: 'https://www.buddy4study.com/page/satya-scholarship-program',
  postedDate: '2025-07-16',
  duration: 'Up to 5 Years'
},
{
  id: 24,
  title: '🏦 HDFC Bank Parivartan\'s ECSS Scholarship 2025-26',
  company: 'HDFC Bank',
  type: 'Merit-cum-Need Based',
  location: 'Online',
  deadline: '2025-08-31',
  eligibility: [
    'Open to Classes 1–12, Diploma, ITI, Polytechnic, UG, and PG students',
    'Minimum 55% in last qualifying exam',
    'Annual family income ≤ ₹2.5 Lakh',
    'Indian nationals only',
    'Preference to students facing personal or family crisis in last 3 years'
  ],
  description: 'Financial assistance ranging from ₹15,000 to ₹75,000 for deserving school and college students.',
  applyLink: 'https://www.buddy4study.com/page/hdfc-bank-parivartans-ecss-programme',
  postedDate: '2025-07-16',
  duration: '1 Year (renewable)'
},
{
  id: 25,
  title: '🚀 Aspire Scholarship Program 2025-26',
  company: 'SWAYAM Charitable Trust',
  type: 'Open-for-all',
  location: 'Online',
  deadline: '2025-08-01',
  eligibility: [
    'Admitted to 1st-year B.Tech at one of 11 listed premier institutions',
    'Annual family income ≤ ₹6 Lakh',
    'Not receiving any other scholarship (self-declaration required)'
  ],
  description: 'Full academic cost coverage (tuition, hostel, food) for B.Tech students at premier institutions like IITs, IIITs, and more.',
  applyLink: 'https://www.buddy4study.com/page/aspire-scholarship-program',
  postedDate: '2025-07-16',
  duration: '4 Years (renewable annually)'
},
{
  id: 26,
  title: '🌍 Global Scholar Challenge – Powered by TOEFL 2025',
  company: 'TOEFL',
  type: 'Open-for-all',
  location: 'Online',
  deadline: '2025-08-20',
  eligibility: [
    'Indian students in 3rd or 4th year of college',
    'OR professionals with up to 2 years of experience',
    'Preference to students in STEM courses',
    'Must create a TOEFL account to be eligible'
  ],
  description: 'Quiz-based competition awarding up to ₹50,000 plus TOEFL test fee coupons and free prep materials to study-abroad aspirants.',
  applyLink: 'https://www.buddy4study.com/page/toefl-global-scholar-challenge',
  postedDate: '2025-07-16',
  duration: 'One-time prize'
},
{
  id: 27,
  title: '🎓 Infosys Foundation STEM Stars Scholarship 2025-26',
  company: 'Infosys Foundation',
  type: 'Women-only',
  location: 'Online',
  deadline: '2025-09-15',
  eligibility: [
    'Indian female students',
    'Completed Class 12',
    '1st-year UG in STEM (NIRF or Govt colleges)',
    'Annual family income ≤ ₹8,00,000'
  ],
  description: 'Up to ₹1,00,000 per year for 4 years covering tuition, materials & living costs.',
  applyLink: 'https://www.buddy4study.com/page/infosys-stem-stars-scholarship',
  postedDate: '2025-07-16',
  duration: '4 years'
},
{
  id: 28,
  title: '💼 Raman Kant Munjal Scholarships 2025-26',
  company: 'Raman Kant Munjal Foundation',
  type: 'Finance UG',
  location: 'Online',
  deadline: '2025-07-31',
  eligibility: [
    '1st-year UG in BBA, B.Com, BMS, etc.',
    '≥ 80% in Class 10 & 12 (70% for PwD)',
    'Annual family income < ₹6,00,000'
  ],
  description: 'Scholarship up to ₹5,50,000/year for 3 years depending on college fee.',
  applyLink: 'https://www.buddy4study.com/page/raman-kant-munjal-scholarships',
  postedDate: '2025-07-16',
  duration: '3 years'
},
{
  id: 29,
  title: '📡 Bharti Airtel Scholarship Program 2025-26',
  company: 'Bharti Airtel Foundation',
  type: 'Open-for-all',
  location: 'Online',
  deadline: '2025-07-31',
  eligibility: [
    '1st-year UG/Integrated in top 50 NIRF engineering colleges',
    'STEM/AI/Telecom/Data Science, etc.',
    'Annual family income ≤ ₹8,50,000',
    'No other scholarship allowed'
  ],
  description: 'Covers 100% fees, hostel, mess + laptop for up to 5 years.',
  applyLink: 'https://www.buddy4study.com/page/bharti-airtel-scholarship',
  postedDate: '2025-07-16',
  duration: 'Up to 5 years'
},
{
  id: 30,
  title: '🔧 HOPE Engineering Scholarship by Schaeffler India 2025',
  company: 'Schaeffler India',
  type: 'Women-only',
  location: 'Online',
  deadline: '2025-07-30',
  eligibility: [
    'Female students in 1st-year engineering',
    '≥ 60% in Class 12 (40% for PwD)',
    'Annual family income ≤ ₹5,00,000'
  ],
  description: '₹50,000 financial aid + mentorship from Schaeffler engineers.',
  applyLink: 'https://www.buddy4study.com/page/hope-engineering-scholarship-by-schaeffler-india',
  postedDate: '2025-07-16',
  duration: 'One-time prize'
},
{
  id: 31,
  title: '🏢 HSB MBA Scholarship-cum-Admission Seat 2025-26',
  company: 'Hari Shankar Singhania School of Business',
  type: 'merit-based',
  location: 'Jaipur, Rajasthan',
  deadline: '2025-07-18',
  eligibility: [
    'UG degree with ≥ 60%',
    'MBA in Product, AI/Analytics, or Entrepreneurship',
    'Valid test score preferred, not mandatory for working professionals'
  ],
  description: 'Up to 100% tuition fee waiver for MBA aspirants at HSB.',
  applyLink: 'https://www.buddy4study.com/page/hsb-scholarship-cum-admission-seat-programme',
  postedDate: '2025-07-16',
  duration: '2 years'
},
    ],
    Hackathons: [
      {
        id: 41,
        title: 'Smart India Hackathon 2025',
        company: 'Government of India',
        type: 'Web Development',
        location: 'Multiple Cities',
        deadline: '2025-09-15',
        eligibility: ['Engineering Students', 'Team of 6 members', 'Innovation mindset'],
        description: 'Indias biggest hackathon to solve real-world problems using technology.',
        applyLink: 'https://sih.gov.in/',
        postedDate: '2025-07-01',
        duration: '36 hours'
      },
      {
        id: 42,
        title: 'HackNUTH 2025',
        company: 'NIT Hamirpur',
        type: 'AI/ML',
        location: 'Hamirpur, HP',
        deadline: '2025-10-20',
        eligibility: ['College Students', 'AI/ML knowledge', 'Team of 2-4'],
        description: 'Annual hackathon focusing on AI and Machine Learning solutions.',
        applyLink: 'https://hacknuth.com/',
        postedDate: '2025-07-10',
        duration: '24 hours'
      }
    ],
    Competitions: [
      {
        id: 51,
        title: 'CodeChef October Challenge',
        company: 'CodeChef',
        type: 'Coding',
        location: 'Online',
        deadline: '2025-10-31',
        eligibility: ['Programming knowledge', 'Any level welcome'],
        description: 'Monthly coding contest with exciting prizes and global rankings.',
        applyLink: 'https://codechef.com/',
        postedDate: '2025-08-01',
        duration: '10 days'
      },
      {
        id: 52,
        title: 'Google Solution Challenge 2025',
        company: 'Google',
        type: 'Innovation',
        location: 'Global',
        deadline: '2025-12-01',
        eligibility: ['University students', 'Team of 1-4', 'Google technologies'],
        description: 'Build solutions for UN Sustainable Development Goals using Google tech.',
        applyLink: 'https://developers.google.com/community/gdsc-solution-challenge',
        postedDate: '2025-07-20',
        duration: '3 months'
      }
    ]
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const now = new Date();
    const end = new Date(deadline);
    return Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  };
  const filteredOpportunities = allOpportunities[activeTab].filter(item => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(searchLower) ||
      item.company.toLowerCase().includes(searchLower) ||
      item.eligibility.some((el: string) => el.toLowerCase().includes(searchLower));

    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesLocation = filterLocation === 'all' || item.location === filterLocation;

    return matchesSearch && matchesType && matchesLocation;
  });

  const isExpired = (deadline: string) => new Date(deadline) < new Date();

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Career Opportunities 🚀
        </h1>
        <p className="text-muted-foreground mb-8">
          Explore Internships, Jobs, and Scholarships from top companies & organizations.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['Internships', 'Jobs', 'Scholarships', 'Hackathons', 'Competitions'].map(tab => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'default' : 'outline'}
              onClick={() => {
                setActiveTab(tab as any);
                setFilterType('all');
              }}
              className="capitalize"
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={`Search ${activeTab.toLowerCase()}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger>
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              {filters[activeTab].map((type) => (
                <SelectItem key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filterLocation} onValueChange={setFilterLocation}>
            <SelectTrigger>
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc === 'all' ? 'All Locations' : loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Opportunities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOpportunities.map((item, index) => {
            const expired = isExpired(item.deadline);
            const daysLeft = getDaysUntilDeadline(item.deadline);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="feature-card h-full relative">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="outline">{item.type}</Badge>
                      <Badge className={expired ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}>
                        {expired ? 'Expired' : 'Ongoing'}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mt-2">{item.title}</CardTitle>
                    <CardDescription className="flex gap-4 mt-1 text-sm">
                      <span className="flex items-center gap-1">
                        <Building className="w-4 h-4" /> {item.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {item.location}
                      </span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
                      <div className="flex flex-wrap gap-1">
                        {item.eligibility.map((req, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{req}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Deadline: {new Date(item.deadline).toLocaleDateString()}
                      </span>
                    </div>
                    <Button disabled={expired} asChild className="w-full btn-hero">
                      <a
                        href={item.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Apply Now <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        {filteredOpportunities.length === 0 && (
          <div className="text-center py-10">
            <School className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold">No opportunities found</h3>
            <p className="text-muted-foreground text-sm">Try changing filters or keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Opportunities;
