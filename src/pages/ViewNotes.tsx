import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Download, User, Calendar, BookOpen, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';

const ViewNotes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('all');
  const [filterSemester, setFilterSemester] = useState('all');

  // Mock data - In real app, this would come from your backend
  const notes = [
    {
      id: 1,
      title: 'Linear Algebra Complete Notes',
      subject: 'Mathematics',
      semester: '3rd',
      uploadedBy: 'Rahul Sharma',
      uploadDate: '2024-01-15',
      downloads: 234,
      description: 'Comprehensive notes covering matrices, eigenvalues, and vector spaces',
      fileSize: '2.4 MB',
      approved: true,
    },
    {
      id: 2,
      title: 'Data Structures and Algorithms',
      subject: 'Computer Science',
      semester: '4th',
      uploadedBy: 'Priya Singh',
      uploadDate: '2024-01-10',
      downloads: 189,
      description: 'Complete DSA notes with examples and problem solving techniques',
      fileSize: '3.1 MB',
      approved: true,
    },
    {
      id: 3,
      title: 'Thermodynamics Fundamentals',
      subject: 'Mechanical Engineering',
      semester: '3rd',
      uploadedBy: 'Amit Kumar',
      uploadDate: '2024-01-08',
      downloads: 156,
      description: 'Laws of thermodynamics with practical applications and examples',
      fileSize: '1.8 MB',
      approved: true,
    },
    {
      id: 4,
      title: 'Digital Electronics',
      subject: 'Electronics',
      semester: '2nd',
      uploadedBy: 'Sneha Patel',
      uploadDate: '2024-01-05',
      downloads: 203,
      description: 'Boolean algebra, logic gates, and digital circuit design',
      fileSize: '2.7 MB',
      approved: true,
    },
  ];

  const subjects = ['all', 'Mathematics', 'Computer Science', 'Electronics', 'Mechanical Engineering', 'Physics', 'Chemistry'];
  const semesters = ['all', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = filterSubject === 'all' || note.subject === filterSubject;
    const matchesSemester = filterSemester === 'all' || note.semester === filterSemester;
    
    return matchesSearch && matchesSubject && matchesSemester && note.approved;
  });

  const handleDownload = (noteId: number, title: string) => {
    // In a real app, this would trigger the actual download
    console.log(`Downloading note ${noteId}: ${title}`);
    // You could track downloads here
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
            Study Notes Library 📖
          </h1>
          <p className="text-muted-foreground text-lg">
            Access thousands of quality notes shared by students across all branches and semesters.
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
                placeholder="Search notes, subjects, or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Select value={filterSubject} onValueChange={setFilterSubject}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject === 'all' ? 'All Subjects' : subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filterSemester} onValueChange={setFilterSemester}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by semester" />
            </SelectTrigger>
            <SelectContent>
              {semesters.map((semester) => (
                <SelectItem key={semester} value={semester}>
                  {semester === 'all' ? 'All Semesters' : `${semester} Semester`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Notes Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredNotes.map((note, index) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="feature-card h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{note.subject}</Badge>
                    <Badge variant="outline">{note.semester} Sem</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{note.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {note.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>By {note.uploadedBy}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(note.uploadDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{note.downloads} downloads</span>
                      <span>{note.fileSize}</span>
                    </div>
                    <Button
                      onClick={() => handleDownload(note.id, note.title)}
                      className="w-full btn-hero"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Notes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredNotes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center py-12"
          >
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No notes found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ViewNotes;