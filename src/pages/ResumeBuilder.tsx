import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Plus, X, User, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

interface Education {
  institution: string;
  degree: string;
  year: string;
  cgpa: string;
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

const ResumeBuilder = () => {
  const { toast } = useToast();
  const [activeStep, setActiveStep] = useState(0);
  
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
  });

  const [education, setEducation] = useState<Education[]>([
    { institution: '', degree: '', year: '', cgpa: '' }
  ]);

  const [experience, setExperience] = useState<Experience[]>([
    { company: '', position: '', duration: '', description: '' }
  ]);

  const [projects, setProjects] = useState<Project[]>([
    { name: '', description: '', technologies: [], link: '' }
  ]);

  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');

  const steps = [
    { title: 'Personal Info', icon: <User className="h-4 w-4" /> },
    { title: 'Education', icon: <FileText className="h-4 w-4" /> },
    { title: 'Experience', icon: <FileText className="h-4 w-4" /> },
    { title: 'Projects', icon: <FileText className="h-4 w-4" /> },
    { title: 'Skills', icon: <FileText className="h-4 w-4" /> },
    { title: 'Preview', icon: <FileText className="h-4 w-4" /> },
  ];

  const addEducation = () => {
    setEducation([...education, { institution: '', degree: '', year: '', cgpa: '' }]);
  };

  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const addExperience = () => {
    setExperience([...experience, { company: '', position: '', duration: '', description: '' }]);
  };

  const removeExperience = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const addProject = () => {
    setProjects([...projects, { name: '', description: '', technologies: [], link: '' }]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const generatePDF = () => {
    toast({
      title: 'Resume Generated!',
      description: 'Your ATS-friendly resume has been generated and downloaded.',
    });
    // In a real app, this would generate and download the actual PDF
  };

  const renderPersonalInfo = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={personalInfo.fullName}
            onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
            placeholder="John Doe"
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={personalInfo.email}
            onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
            placeholder="john@example.com"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            value={personalInfo.phone}
            onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
            placeholder="+91 9876543210"
          />
        </div>
        <div>
          <Label htmlFor="location">Location *</Label>
          <Input
            id="location"
            value={personalInfo.location}
            onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
            placeholder="Mumbai, India"
          />
        </div>
        <div>
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            value={personalInfo.linkedin}
            onChange={(e) => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
            placeholder="linkedin.com/in/johndoe"
          />
        </div>
        <div>
          <Label htmlFor="github">GitHub</Label>
          <Input
            id="github"
            value={personalInfo.github}
            onChange={(e) => setPersonalInfo({ ...personalInfo, github: e.target.value })}
            placeholder="github.com/johndoe"
          />
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a skill"
          onKeyPress={(e) => e.key === 'Enter' && addSkill()}
        />
        <Button onClick={addSkill} variant="outline">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="flex items-center gap-1">
            {skill}
            <X
              className="h-3 w-3 cursor-pointer"
              onClick={() => removeSkill(skill)}
            />
          </Badge>
        ))}
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Education {index + 1}</h3>
            {education.length > 1 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeEducation(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor={`institution-${index}`}>Institution *</Label>
              <Input
                id={`institution-${index}`}
                value={edu.institution}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].institution = e.target.value;
                  setEducation(newEducation);
                }}
                placeholder="University/College Name"
              />
            </div>
            <div>
              <Label htmlFor={`degree-${index}`}>Degree *</Label>
              <Input
                id={`degree-${index}`}
                value={edu.degree}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].degree = e.target.value;
                  setEducation(newEducation);
                }}
                placeholder="B.Tech Computer Science"
              />
            </div>
            <div>
              <Label htmlFor={`year-${index}`}>Year *</Label>
              <Input
                id={`year-${index}`}
                value={edu.year}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].year = e.target.value;
                  setEducation(newEducation);
                }}
                placeholder="2020-2024"
              />
            </div>
            <div>
              <Label htmlFor={`cgpa-${index}`}>CGPA/Percentage</Label>
              <Input
                id={`cgpa-${index}`}
                value={edu.cgpa}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].cgpa = e.target.value;
                  setEducation(newEducation);
                }}
                placeholder="8.5/10 or 85%"
              />
            </div>
          </div>
        </div>
      ))}
      <Button onClick={addEducation} variant="outline" className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        Add Education
      </Button>
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      {experience.map((exp, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Experience {index + 1}</h3>
            {experience.length > 1 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeExperience(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor={`company-${index}`}>Company *</Label>
              <Input
                id={`company-${index}`}
                value={exp.company}
                onChange={(e) => {
                  const newExperience = [...experience];
                  newExperience[index].company = e.target.value;
                  setExperience(newExperience);
                }}
                placeholder="Company Name"
              />
            </div>
            <div>
              <Label htmlFor={`position-${index}`}>Position *</Label>
              <Input
                id={`position-${index}`}
                value={exp.position}
                onChange={(e) => {
                  const newExperience = [...experience];
                  newExperience[index].position = e.target.value;
                  setExperience(newExperience);
                }}
                placeholder="Software Engineer Intern"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor={`duration-${index}`}>Duration *</Label>
              <Input
                id={`duration-${index}`}
                value={exp.duration}
                onChange={(e) => {
                  const newExperience = [...experience];
                  newExperience[index].duration = e.target.value;
                  setExperience(newExperience);
                }}
                placeholder="June 2023 - August 2023"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor={`description-${index}`}>Description</Label>
              <Textarea
                id={`description-${index}`}
                value={exp.description}
                onChange={(e) => {
                  const newExperience = [...experience];
                  newExperience[index].description = e.target.value;
                  setExperience(newExperience);
                }}
                placeholder="Describe your key responsibilities and achievements..."
                rows={4}
              />
            </div>
          </div>
        </div>
      ))}
      <Button onClick={addExperience} variant="outline" className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        Add Experience
      </Button>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Project {index + 1}</h3>
            {projects.length > 1 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeProject(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor={`project-name-${index}`}>Project Name *</Label>
              <Input
                id={`project-name-${index}`}
                value={project.name}
                onChange={(e) => {
                  const newProjects = [...projects];
                  newProjects[index].name = e.target.value;
                  setProjects(newProjects);
                }}
                placeholder="E-commerce Website"
              />
            </div>
            <div>
              <Label htmlFor={`project-description-${index}`}>Description</Label>
              <Textarea
                id={`project-description-${index}`}
                value={project.description}
                onChange={(e) => {
                  const newProjects = [...projects];
                  newProjects[index].description = e.target.value;
                  setProjects(newProjects);
                }}
                placeholder="Describe your project..."
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor={`project-link-${index}`}>Project Link</Label>
              <Input
                id={`project-link-${index}`}
                value={project.link}
                onChange={(e) => {
                  const newProjects = [...projects];
                  newProjects[index].link = e.target.value;
                  setProjects(newProjects);
                }}
                placeholder="https://github.com/username/project"
              />
            </div>
            <div>
              <Label>Technologies Used</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  placeholder="Add technology"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const tech = e.currentTarget.value.trim();
                      if (tech && !projects[index].technologies.includes(tech)) {
                        const newProjects = [...projects];
                        newProjects[index].technologies.push(tech);
                        setProjects(newProjects);
                        e.currentTarget.value = '';
                      }
                    }
                  }}
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="flex items-center gap-1">
                    {tech}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => {
                        const newProjects = [...projects];
                        newProjects[index].technologies.splice(techIndex, 1);
                        setProjects(newProjects);
                      }}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <Button onClick={addProject} variant="outline" className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        Add Project
      </Button>
    </div>
  );

  const renderPreview = () => (
    <div className="space-y-6 bg-white p-8 rounded-lg text-black">
      <div className="text-center border-b pb-4">
        <h1 className="text-2xl font-bold">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="flex justify-center items-center gap-4 mt-2 text-sm">
          {personalInfo.email && (
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              {personalInfo.phone}
            </span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {personalInfo.location}
            </span>
          )}
        </div>
      </div>

      {education.some(edu => edu.institution) && (
        <div>
          <h2 className="text-lg font-semibold border-b mb-2">Education</h2>
          {education.map((edu, index) => (
            edu.institution && (
              <div key={index} className="mb-2">
                <div className="flex justify-between">
                  <span className="font-medium">{edu.degree}</span>
                  <span>{edu.year}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{edu.institution}</span>
                  {edu.cgpa && <span>CGPA: {edu.cgpa}</span>}
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {experience.some(exp => exp.company) && (
        <div>
          <h2 className="text-lg font-semibold border-b mb-2">Experience</h2>
          {experience.map((exp, index) => (
            exp.company && (
              <div key={index} className="mb-3">
                <div className="flex justify-between">
                  <span className="font-medium">{exp.position}</span>
                  <span className="text-sm">{exp.duration}</span>
                </div>
                <div className="text-sm mb-1">{exp.company}</div>
                {exp.description && <p className="text-sm text-gray-600">{exp.description}</p>}
              </div>
            )
          ))}
        </div>
      )}

      {projects.some(project => project.name) && (
        <div>
          <h2 className="text-lg font-semibold border-b mb-2">Projects</h2>
          {projects.map((project, index) => (
            project.name && (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{project.name}</span>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600">
                      View Project
                    </a>
                  )}
                </div>
                {project.description && <p className="text-sm text-gray-600 mb-1">{project.description}</p>}
                {project.technologies.length > 0 && (
                  <div className="text-xs text-gray-500">
                    Technologies: {project.technologies.join(', ')}
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold border-b mb-2">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill, index) => (
              <span key={index} className="text-sm">
                {skill}{index < skills.length - 1 && ', '}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Resume Builder 📄
          </h1>
          <p className="text-muted-foreground text-lg">
            Create professional, ATS-friendly resumes in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Steps Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle>Build Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-3 rounded-md transition-colors duration-200 flex items-center gap-2 ${
                      activeStep === index
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {step.icon}
                    {step.title}
                  </button>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle>{steps[activeStep].title}</CardTitle>
                <CardDescription>
                  {activeStep === 0 && 'Enter your basic contact information'}
                  {activeStep === 1 && 'Add your educational background'}
                  {activeStep === 2 && 'Include your work experience'}
                  {activeStep === 3 && 'Showcase your projects'}
                  {activeStep === 4 && 'List your technical skills'}
                  {activeStep === 5 && 'Review and download your resume'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {activeStep === 0 && renderPersonalInfo()}
                {activeStep === 1 && renderEducation()}
                {activeStep === 2 && renderExperience()}
                {activeStep === 3 && renderProjects()}
                {activeStep === 4 && renderSkills()}
                {activeStep === 5 && renderPreview()}
                
                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  <Button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    variant="outline"
                  >
                    Previous
                  </Button>
                  
                  {activeStep === steps.length - 1 ? (
                    <Button onClick={generatePDF} className="btn-hero">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                      className="btn-hero"
                    >
                      Next
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;