'use client';

import { useState } from "react"
import { ArrowLeft, Building, MapPin, Clock, Briefcase, Code, Palette, Brain, TrendingUp, Upload, X, ChevronRight, User, Mail, Phone, FileText, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from 'next/image'

// Define job type for type safety
type Job = {
  id: string;
  title: string;
  department: string;
  departmentIcon: React.ReactNode;
  location: string;
  type: string;
  compensation: string;
  color: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

// Application form data type
type ApplicationData = {
  fullName: string;
  email: string;
  phone: string;
  coverLetter: string;
  resume: File | null;
};

export default function CareersPage() {
  // State for selected job and dialog visibility
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  
  // Application form state
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Job listings data
  // Update the job data with proper color mappings
  const jobs: Job[] = [
    {
      id: "backend-dev",
      title: "Backend Developer",
      department: "Engineering",
      departmentIcon: <Code className="mr-1 h-3 w-3" />,
      location: "Hybrid",
      type: "Internship",
      compensation: "Unpaid",
      color: "blue",
      description: "We're looking for a talented Backend Developer to help build robust and scalable APIs for our platform.",
      responsibilities: [
        "Work with Node.js, Express, and MongoDB",
        "Implement RESTful APIs and authentication systems",
        "Collaborate with frontend developers to integrate APIs",
        "Write clean, maintainable, and efficient code",
        "Participate in code reviews and team discussions"
      ],
      requirements: [
        "Knowledge of JavaScript/TypeScript and Node.js",
        "Understanding of RESTful API design principles",
        "Familiarity with MongoDB or similar NoSQL databases",
        "Basic understanding of authentication and security",
        "Ability to work in a team environment"
      ],
      benefits: [
        "Hands-on experience with real-world projects",
        "Mentorship from experienced developers",
        "Opportunity to work with cutting-edge technologies",
        "Flexible work arrangements",
        "Potential for full-time roles after internship"
      ]
    },
    {
      id: "frontend-dev",
      title: "Frontend Developer",
      department: "Engineering",
      departmentIcon: <Code className="mr-1 h-3 w-3" />,
      location: "Hybrid",
      type: "Internship",
      compensation: "Unpaid",
      color: "purple",
      description: "We're seeking a creative Frontend Developer to build beautiful and responsive user interfaces.",
      responsibilities: [
        "Develop with React, Next.js, and Tailwind CSS",
        "Create responsive and accessible user interfaces",
        "Implement animations and interactive elements",
        "Optimize applications for maximum performance",
        "Collaborate with designers to implement UI/UX designs"
      ],
      requirements: [
        "Knowledge of JavaScript/TypeScript and React",
        "Understanding of HTML, CSS, and responsive design",
        "Familiarity with modern frontend frameworks",
        "Basic understanding of web accessibility standards",
        "Eye for design and attention to detail"
      ],
      benefits: [
        "Work on a cutting-edge web application",
        "Learn modern frontend development practices",
        "Collaborate with experienced developers",
        "Flexible work arrangements",
        "Portfolio-building opportunities"
      ]
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      department: "Design",
      departmentIcon: <Palette className="mr-1 h-3 w-3" />,
      location: "Hybrid",
      type: "Internship",
      compensation: "Unpaid",
      color: "pink",
      description: "Join our design team to create intuitive and beautiful user experiences for our platform.",
      responsibilities: [
        "Design user interfaces and user experiences",
        "Create wireframes, prototypes, and mockups",
        "Conduct user research and usability testing",
        "Collaborate with developers to implement designs",
        "Maintain design systems and style guides"
      ],
      requirements: [
        "Proficiency in design tools like Figma or Adobe XD",
        "Understanding of user-centered design principles",
        "Knowledge of web and mobile design best practices",
        "Basic understanding of HTML/CSS",
        "Strong portfolio showcasing design work"
      ],
      benefits: [
        "Work on innovative design projects",
        "Learn from experienced designers",
        "Build a strong design portfolio",
        "Flexible work arrangements",
        "Opportunity to shape product direction"
      ]
    },
    {
      id: "data-analyst",
      title: "Data Analyst",
      department: "Analytics",
      departmentIcon: <TrendingUp className="mr-1 h-3 w-3" />,
      location: "Remote",
      type: "Internship",
      compensation: "Unpaid",
      color: "green",
      description: "Help us make data-driven decisions by analyzing user behavior and platform performance.",
      responsibilities: [
        "Analyze user data and platform metrics",
        "Create reports and dashboards",
        "Identify trends and insights from data",
        "Support business decision-making with data",
        "Work with SQL and data visualization tools"
      ],
      requirements: [
        "Knowledge of SQL and data analysis",
        "Familiarity with data visualization tools",
        "Understanding of statistical concepts",
        "Experience with Excel or Google Sheets",
        "Strong analytical and problem-solving skills"
      ],
      benefits: [
        "Gain experience with real business data",
        "Learn advanced analytics techniques",
        "Work with modern data tools",
        "Remote work flexibility",
        "Mentorship from data professionals"
      ]
    },
    {
      id: "ai-researcher",
      title: "AI/ML Researcher",
      department: "Research",
      departmentIcon: <Brain className="mr-1 h-3 w-3" />,
      location: "Hybrid",
      type: "Internship",
      compensation: "Unpaid",
      color: "orange",
      description: "Research and develop AI/ML solutions to enhance our platform's capabilities.",
      responsibilities: [
        "Research AI/ML algorithms and techniques",
        "Develop and test machine learning models",
        "Analyze and preprocess data for ML applications",
        "Collaborate on AI feature development",
        "Stay updated with latest AI/ML trends"
      ],
      requirements: [
        "Knowledge of Python and ML libraries",
        "Understanding of machine learning concepts",
        "Familiarity with data science workflows",
        "Experience with ML frameworks like TensorFlow or PyTorch",
        "Strong mathematical and analytical skills"
      ],
      benefits: [
        "Work on cutting-edge AI projects",
        "Access to latest AI tools and technologies",
        "Mentorship from AI experts",
        "Flexible work arrangements",
        "Opportunity to publish research"
      ]
    }
  ];

  // Handle job selection and dialog opening
  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  // Add the missing openJobDetails function
  const openJobDetails = (job: Job) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  // Handle application form submission
  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert resume file to base64 if it exists
      let resumeBase64 = null;
      if (applicationData.resume) {
        const buffer = await applicationData.resume.arrayBuffer();
        resumeBase64 = Buffer.from(buffer).toString('base64');
      }

      // Prepare the data
      const submissionData = {
        jobTitle: selectedJob?.title,
        department: selectedJob?.department,
        fullName: applicationData.fullName,
        email: applicationData.email,
        phone: applicationData.phone,
        coverLetter: applicationData.coverLetter,
        resume: resumeBase64 ? {
          name: applicationData.resume?.name,
          type: applicationData.resume?.type,
          data: resumeBase64
        } : null
      };

      // Submit to our API endpoint
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to submit application');
      }
      
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsApplicationOpen(false);
        setIsDialogOpen(false);
        setSubmitSuccess(false);
        setApplicationData({
          fullName: '',
          email: '',
          phone: '',
          coverLetter: '',
          resume: null
        });
      }, 2000);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setApplicationData(prev => ({ ...prev, resume: file }));
    }
  };

  // Handle apply now click
  const handleApplyNow = () => {
    setIsDialogOpen(false);
    setIsApplicationOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background - keeping existing code */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.15),transparent_50%)]"></div>

        {/* Floating orbs with gradients */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-3d-massive"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float-3d-massive-slow"></div>
        <div className="absolute top-3/4 left-2/3 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl animate-float-3d-massive-slower"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-blue-400/10 rotate-45 animate-float-geometric-massive"></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 border border-purple-400/10 rounded-full animate-float-geometric-massive-slow"></div>
      </div>

      {/* Header - keeping existing code */}
      <header className="border-b border-white/5 bg-black/30 backdrop-blur-2xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/your-logo.png"
                alt="PitchX Logo"
                width={48}
                height={48}
                className="transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-2xl shadow-blue-500/30"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              PitchX
            </span>
          </Link>

          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Page Title - keeping existing code */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-200 border-blue-400/30 px-4 py-2">
            <Building className="mr-2 h-4 w-4" />
            Join Our Team
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
            Careers at PitchX
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join our innovative team and help shape the future of professional hiring
          </p>
        </div>

        {/* Life at PitchX Section - keeping existing code */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
            Life at PitchX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Culture</h3>
              <p className="text-white/70 mb-6">
                At PitchX, we're building a revolutionary platform that transforms how professionals connect with opportunities. Our team is passionate about innovation, collaboration, and making a meaningful impact in the hiring space.
              </p>
              <ul className="space-y-3">
                {[
                  "Collaborative and supportive environment",
                  "Focus on innovation and creative problem-solving",
                  "Opportunities for professional growth and learning",
                  "Work on cutting-edge technologies",
                  "Make a real impact in the hiring industry"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 h-5 w-5 text-blue-400">•</div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-orange-900/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">Benefits & Perks</h3>
              <p className="text-white/70 mb-6">
                We value our team members and offer a range of benefits to support your growth and well-being.
              </p>
              <ul className="space-y-3">
                {[
                  "Flexible work arrangements",
                  "Mentorship from industry experts",
                  "Hands-on experience with real-world projects",
                  "Networking opportunities with professionals",
                  "Potential for full-time roles after internship",
                  "Regular feedback and performance reviews"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 h-5 w-5 text-purple-400">•</div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Job Openings Section - Updated with table view */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Current Openings
            </h2>
            
            {/* View toggle */}
            <Tabs defaultValue="table" className="w-[200px]" onValueChange={(value) => setViewMode(value as 'cards' | 'table')}>
              <TabsList className="grid w-full grid-cols-2 bg-black/50 border border-white/10">
                <TabsTrigger value="table" className="data-[state=active]:bg-white/10">
                  Table View
                </TabsTrigger>
                <TabsTrigger value="cards" className="data-[state=active]:bg-white/10">
                  Card View
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {/* Table View */}
          {viewMode === 'table' && (
            <div className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableHead className="text-white/70">Position</TableHead>
                    <TableHead className="text-white/70">Department</TableHead>
                    <TableHead className="text-white/70">Location</TableHead>
                    <TableHead className="text-white/70">Type</TableHead>
                    <TableHead className="text-white/70">Compensation</TableHead>
                    <TableHead className="text-white/70 text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow 
                      key={job.id} 
                      className="border-white/10 hover:bg-white/5 cursor-pointer transition-colors"
                      onClick={() => openJobDetails(job)}
                    >
                      <TableCell className="font-medium text-white">{job.title}</TableCell>
                      <TableCell>
                        <Badge className={`bg-${job.color}-500/20 text-${job.color}-300 border-${job.color}-400/30`}>
                          {job.departmentIcon} {job.department}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-white/70">
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-3 w-3" /> {job.location}
                        </div>
                      </TableCell>
                      <TableCell className="text-white/70">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" /> {job.type}
                        </div>
                      </TableCell>
                      <TableCell className="text-white/70">
                        <div className="flex items-center">
                          <Briefcase className="mr-1 h-3 w-3" /> {job.compensation}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          size="sm" 
                          className={`bg-gradient-to-r from-${job.color}-500 to-${job.color}-600 hover:from-${job.color}-600 hover:to-${job.color}-700 text-white`}
                          onClick={(e) => {
                            e.stopPropagation();
                            openJobDetails(job);
                          }}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          
          {/* Card View - with enhanced backgrounds */}
          {viewMode === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobs.map((job) => (
                <Card 
                  key={job.id}
                  className={`backdrop-blur-lg border-white/10 overflow-hidden group hover:shadow-lg hover:shadow-${job.color}-500/10 transition-all duration-300 cursor-pointer`}
                  style={{
                    background: job.title === "UI/UX Designer" 
                      ? "linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(0,0,0,1) 100%)"
                      : job.title === "Frontend Developer"
                        ? "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(0,0,0,1) 100%)"
                        : job.title === "Backend Developer"
                          ? "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(0,0,0,1) 100%)"
                          : job.title === "AI/ML Engineer"
                            ? "linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(0,0,0,1) 100%)"
                            : "linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(0,0,0,1) 100%)"
                  }}
                  onClick={() => openJobDetails(job)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <CardTitle className={`text-2xl font-bold text-white group-hover:text-${job.color}-400 transition-colors duration-300`}>
                        {job.title}
                      </CardTitle>
                      <Badge className={`bg-${job.color}-500/20 text-${job.color}-300 border-${job.color}-400/30`}>
                        {job.departmentIcon} {job.department}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
                          <MapPin className="mr-1 h-3 w-3" /> {job.location}
                        </Badge>
                        <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
                          <Clock className="mr-1 h-3 w-3" /> {job.type}
                        </Badge>
                        <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
                          <Briefcase className="mr-1 h-3 w-3" /> {job.compensation}
                        </Badge>
                      </div>
                      
                      <div className="text-white/70 space-y-3">
                        <p>{job.description}</p>
                        <ul className="space-y-2">
                          {job.responsibilities.slice(0, 3).map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className={`mr-2 mt-1 h-4 w-4 text-${job.color}-400`}>•</div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        className={`w-full bg-gradient-to-r from-${job.color}-500 to-${job.color}-600 hover:from-${job.color}-600 hover:to-${job.color}-700 text-white`}
                        onClick={(e) => {
                          e.stopPropagation();
                          openJobDetails(job);
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Job Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedJob && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl border border-white/10 text-white">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-white mb-2">
                {selectedJob.title}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Badge className={`${getColorClasses(selectedJob.color).badge} px-3 py-1 text-sm font-medium`}>
                  {selectedJob.departmentIcon}
                  {selectedJob.department}
                </Badge>
                <Badge variant="outline" className="bg-white/5 text-white/80 border-white/20 px-3 py-1">
                  <MapPin className="mr-1 h-3 w-3" />
                  {selectedJob.location}
                </Badge>
                <Badge variant="outline" className="bg-white/5 text-white/80 border-white/20 px-3 py-1">
                  <Clock className="mr-1 h-3 w-3" />
                  {selectedJob.type}
                </Badge>
                <Badge variant="outline" className="bg-white/5 text-white/80 border-white/20 px-3 py-1">
                  <Briefcase className="mr-1 h-3 w-3" />
                  {selectedJob.compensation}
                </Badge>
              </div>
              <DialogDescription className="text-white/80 mt-4 text-lg font-medium">
                {selectedJob.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-6 space-y-8">
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${getColorClasses(selectedJob.color).text}`}>Responsibilities</h3>
                <ul className="space-y-3">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`mr-3 mt-1 h-5 w-5 ${getColorClasses(selectedJob.color).text} font-bold`}>•</div>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${getColorClasses(selectedJob.color).text}`}>Requirements</h3>
                <ul className="space-y-3">
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`mr-3 mt-1 h-5 w-5 ${getColorClasses(selectedJob.color).text} font-bold`}>•</div>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${getColorClasses(selectedJob.color).text}`}>Benefits</h3>
                <ul className="space-y-3">
                  {selectedJob.benefits.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`mr-3 mt-1 h-5 w-5 ${getColorClasses(selectedJob.color).text} font-bold`}>•</div>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <DialogFooter className="mt-8">
              <Button 
                variant="outline" 
                onClick={() => setIsDialogOpen(false)}
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                Close
              </Button>
              <Button 
                onClick={handleApplyNow}
                className={`${getColorClasses(selectedJob.color).button} text-white px-8 font-semibold`}
              >
                Apply Now
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* Application Form Dialog */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl border border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-2">
              Apply for {selectedJob?.title}
            </DialogTitle>
            <DialogDescription className="text-white/80">
              Fill out the form below to submit your application. We'll review it and get back to you soon.
            </DialogDescription>
          </DialogHeader>

          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-green-400 mb-2">Application Submitted!</h3>
              <p className="text-white/80">Thank you for your interest. We'll review your application and contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleApplicationSubmit} className="space-y-6 mt-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
                
                <div>
                  <Label htmlFor="fullName" className="text-white/90 mb-2 block">
                    <User className="inline mr-2 h-4 w-4" />
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={applicationData.fullName}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white/90 mb-2 block">
                    <Mail className="inline mr-2 h-4 w-4" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={applicationData.email}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white/90 mb-2 block">
                    <Phone className="inline mr-2 h-4 w-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, phone: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <Label htmlFor="coverLetter" className="text-white/90 mb-2 block">
                  <FileText className="inline mr-2 h-4 w-4" />
                  Cover Letter *
                </Label>
                <Textarea
                  id="coverLetter"
                  required
                  value={applicationData.coverLetter}
                  onChange={(e) => setApplicationData(prev => ({ ...prev, coverLetter: e.target.value }))}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 min-h-[120px]"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>

              {/* Resume Upload */}
              <div>
                <Label htmlFor="resume" className="text-white/90 mb-2 block">
                  <Upload className="inline mr-2 h-4 w-4" />
                  Resume/CV *
                </Label>
                <div className="relative">
                  <Input
                    id="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="bg-white/10 border-white/20 text-white file:bg-blue-500/20 file:text-blue-300 file:border-0 file:rounded file:px-3 file:py-1 file:mr-3 hover:file:bg-blue-500/30"
                  />
                  {applicationData.resume && (
                    <p className="text-green-400 text-sm mt-2">
                      ✓ {applicationData.resume.name} selected
                    </p>
                  )}
                </div>
                <p className="text-white/60 text-sm mt-1">
                  Accepted formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>

              {/* Submit Button */}
              <DialogFooter className="mt-8">
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={() => setIsApplicationOpen(false)}
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className={`${selectedJob ? getColorClasses(selectedJob.color).button : 'bg-blue-500 hover:bg-blue-600'} text-white px-8 font-semibold`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Application
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer - keeping existing code */}
      <footer className="border-t border-white/5 bg-black/30 backdrop-blur-xl py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                PitchX
              </span>
            </div>
            <div className="text-white/60 text-sm">
              <span suppressHydrationWarning>
                © {new Date().getFullYear()} PitchX. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Helper function to get proper color classes
const getColorClasses = (color: string) => {
  const colorMap = {
    blue: {
      badge: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
      button: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      text: 'text-blue-400',
      hover: 'hover:text-blue-400',
      shadow: 'hover:shadow-blue-500/10',
      background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0.95) 100%)'
    },
    purple: {
      badge: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
      button: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      text: 'text-purple-400',
      hover: 'hover:text-purple-400',
      shadow: 'hover:shadow-purple-500/10',
      background: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(0,0,0,0.95) 100%)'
    },
    pink: {
      badge: 'bg-pink-500/20 text-pink-300 border-pink-400/30',
      button: 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
      text: 'text-pink-400',
      hover: 'hover:text-pink-400',
      shadow: 'hover:shadow-pink-500/10',
      background: 'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(0,0,0,0.95) 100%)'
    },
    green: {
      badge: 'bg-green-500/20 text-green-300 border-green-400/30',
      button: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      text: 'text-green-400',
      hover: 'hover:text-green-400',
      shadow: 'hover:shadow-green-500/10',
      background: 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(0,0,0,0.95) 100%)'
    },
    orange: {
      badge: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
      button: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      text: 'text-orange-400',
      hover: 'hover:text-orange-400',
      shadow: 'hover:shadow-orange-500/10',
      background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(0,0,0,0.95) 100%)'
    }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};