import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';

const NotesUpload = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    semester: '',
    description: '',
    file: null as File | null,
  });

  const categories = [
    'Complete B.Tech Notes (1st Semester)', 'Complete B.Tech Notes (2nd Semester)', 
    'Complete B.Tech Notes (3rd Semester)', 'Complete B.Tech Notes (4th Semester)',
    'Complete B.Tech Notes (5th Semester)', 'Complete B.Tech Notes (6th Semester)',
    'Complete B.Tech Notes (7th Semester)', 'Complete B.Tech Notes (8th Semester)',
    'BBA Notes', 'DSA in C++', 'DSA in Java', 'GATE Notes', 'JEE Notes', 'Web Development Notes',
    'Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Electronics',
    'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering',
    'Information Technology', 'Chemical Engineering', 'Biotechnology'
  ];

  const semesters = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: 'Invalid file type',
          description: 'Please upload only PDF or DOC files.',
          variant: 'destructive',
        });
        return;
      }

      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast({
          title: 'File too large',
          description: 'Please upload files smaller than 10MB.',
          variant: 'destructive',
        });
        return;
      }

      setFormData({ ...formData, file });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to upload notes.',
        variant: 'destructive',
      });
      return;
    }
    
    if (!formData.file || !formData.title || !formData.subject || !formData.semester) {
      toast({
        title: 'Missing information',
        description: 'Please fill all required fields and upload a file.',
        variant: 'destructive',
      });
      return;
    }

    setIsUploading(true);

    try {
      // Upload file to Supabase Storage
      const fileExt = formData.file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('notes-files')
        .upload(fileName, formData.file);

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('notes-files')
        .getPublicUrl(fileName);

      // Insert note record into database
      const { error: insertError } = await supabase
        .from('notes')
        .insert({
          title: formData.title,
          subject: formData.subject,
          semester: formData.semester,
          description: formData.description || null,
          file_name: formData.file.name,
          file_url: publicUrl,
          uploaded_by: user.id,
          user_email: user.emailAddresses[0]?.emailAddress || '',
          user_name: user.fullName || user.firstName || 'Anonymous',
        });

      if (insertError) {
        throw insertError;
      }
      
      toast({
        title: 'Notes uploaded successfully!',
        description: 'Your notes have been sent for admin approval. You\'ll be notified once approved.',
      });

      // Reset form
      setFormData({
        title: '',
        subject: '',
        semester: '',
        description: '',
        file: null,
      });

      // Reset file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: 'Upload failed',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Share Your Notes 📚
          </h1>
          <p className="text-muted-foreground text-lg">
            Help your fellow students by sharing your study materials. All uploads go through admin approval.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Notes
                </CardTitle>
                <CardDescription>
                  Fill out the form below to share your study materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g., Linear Algebra Notes"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Category *</Label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="semester">Semester *</Label>
                    <Select value={formData.semester} onValueChange={(value) => setFormData({ ...formData, semester: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent>
                        {semesters.map((semester) => (
                          <SelectItem key={semester} value={semester}>
                            {semester} Semester
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Brief description of the notes content..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="file-upload">Upload File (PDF/DOC only) *</Label>
                    <Input
                      id="file-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                    {formData.file && (
                      <p className="text-sm text-success mt-2 flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" />
                        {formData.file.name} selected
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isUploading}
                    className="w-full btn-hero"
                  >
                    {isUploading ? 'Uploading...' : 'Upload Notes'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Upload Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">File Requirements</h4>
                    <p className="text-sm text-muted-foreground">Only PDF and DOC files are accepted (max 10MB)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Quality Content</h4>
                    <p className="text-sm text-muted-foreground">Ensure notes are clear, legible, and well-organized</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Admin Approval</h4>
                    <p className="text-sm text-muted-foreground">All uploads are reviewed before being made public</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Original Content</h4>
                    <p className="text-sm text-muted-foreground">Please ensure you have rights to share the content</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotesUpload;