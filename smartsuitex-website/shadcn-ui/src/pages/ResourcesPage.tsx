import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Download,
  FileText,
  BookOpen,
  Video,
  FileSpreadsheet,
  Calculator,
  Search,
  Filter,
  Calendar,
  Clock,
  Users,
  TrendingUp,
  Building2,
  BarChart3,
  Shield,
  Zap,
} from 'lucide-react';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = {
    whitepapers: [
      {
        id: 1,
        title: 'Digital Transformation in Indian SMEs',
        description: 'A comprehensive guide to digital transformation strategies for small and medium enterprises in India.',
        category: 'Digital Transformation',
        fileSize: '2.4 MB',
        downloadCount: 1247,
        publishDate: '2024-01-15',
        thumbnail: '/images/whitepapers/digital-transformation.jpg',
        tags: ['SME', 'Digital Transformation', 'India'],
      },
      {
        id: 2,
        title: 'GST Compliance Best Practices 2024',
        description: 'Essential guidelines and best practices for GST compliance in the current financial year.',
        category: 'Compliance',
        fileSize: '1.8 MB',
        downloadCount: 2156,
        publishDate: '2024-01-10',
        thumbnail: '/images/whitepapers/gst-compliance.jpg',
        tags: ['GST', 'Compliance', 'Tax'],
      },
      {
        id: 3,
        title: 'HR Automation ROI Analysis',
        description: 'Detailed analysis of return on investment for HR automation solutions in Indian businesses.',
        category: 'HR Management',
        fileSize: '3.1 MB',
        downloadCount: 892,
        publishDate: '2024-01-05',
        thumbnail: '/images/whitepapers/hr-automation.jpg',
        tags: ['HR', 'Automation', 'ROI'],
      },
    ],
    ebooks: [
      {
        id: 1,
        title: 'Complete Guide to Business Process Automation',
        description: 'A comprehensive ebook covering all aspects of business process automation and optimization.',
        category: 'Automation',
        fileSize: '5.2 MB',
        downloadCount: 3456,
        publishDate: '2024-01-20',
        thumbnail: '/images/ebooks/business-automation.jpg',
        tags: ['Automation', 'Process', 'Guide'],
      },
      {
        id: 2,
        title: 'CRM Implementation Success Stories',
        description: 'Real-world case studies and success stories from Indian companies implementing CRM solutions.',
        category: 'CRM',
        fileSize: '4.7 MB',
        downloadCount: 2789,
        publishDate: '2024-01-12',
        thumbnail: '/images/ebooks/crm-success.jpg',
        tags: ['CRM', 'Case Studies', 'Success'],
      },
    ],
    webinars: [
      {
        id: 1,
        title: 'Future of ERP in Indian Manufacturing',
        description: 'Expert insights on how ERP systems are evolving to meet the needs of Indian manufacturing sector.',
        category: 'ERP',
        duration: '45 min',
        viewCount: 1234,
        publishDate: '2024-01-18',
        thumbnail: '/images/webinars/erp-manufacturing.jpg',
        tags: ['ERP', 'Manufacturing', 'Future'],
        isLive: false,
      },
      {
        id: 2,
        title: 'Data Analytics for Business Growth',
        description: 'Learn how to leverage data analytics to drive business growth and make informed decisions.',
        category: 'Analytics',
        duration: '60 min',
        viewCount: 2156,
        publishDate: '2024-01-25',
        thumbnail: '/images/webinars/data-analytics.jpg',
        tags: ['Analytics', 'Growth', 'Data'],
        isLive: true,
      },
    ],
    templates: [
      {
        id: 1,
        title: 'Project Management Templates',
        description: 'Complete set of project management templates including Gantt charts, timelines, and task trackers.',
        category: 'Project Management',
        fileSize: '1.2 MB',
        downloadCount: 4567,
        publishDate: '2024-01-08',
        thumbnail: '/images/templates/project-management.jpg',
        tags: ['Project Management', 'Templates', 'Excel'],
      },
      {
        id: 2,
        title: 'HR Documentation Templates',
        description: 'Essential HR templates for employee onboarding, performance reviews, and policy documentation.',
        category: 'HR',
        fileSize: '2.1 MB',
        downloadCount: 3123,
        publishDate: '2024-01-14',
        thumbnail: '/images/templates/hr-docs.jpg',
        tags: ['HR', 'Documentation', 'Templates'],
      },
    ],
  };

  const categories = [
    { id: 'all', name: 'All Resources', icon: FileText },
    { id: 'whitepapers', name: 'Whitepapers', icon: FileText },
    { id: 'ebooks', name: 'E-Books', icon: BookOpen },
    { id: 'webinars', name: 'Webinars', icon: Video },
    { id: 'templates', name: 'Templates', icon: FileSpreadsheet },
  ];

  const handleDownload = (resource: any) => {
    // Simulate download
    console.log(`Downloading: ${resource.title}`);
    // In real implementation, this would trigger actual file download
  };

  const handleWatchWebinar = (webinar: any) => {
    // Simulate webinar viewing
    console.log(`Watching webinar: ${webinar.title}`);
    // In real implementation, this would open video player
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Resources Center</h1>
            <p className="text-xl mb-8">
              Access exclusive content, guides, and tools to help your business grow and succeed
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <Tabs defaultValue="whitepapers" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
            <TabsTrigger value="ebooks">E-Books</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="whitepapers" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.whitepapers.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{resource.category}</Badge>
                      <span className="text-sm text-gray-500">{resource.fileSize}</span>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        {resource.downloadCount} downloads
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(resource.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button onClick={() => handleDownload(resource)} className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Whitepaper
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ebooks" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.ebooks.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{resource.category}</Badge>
                      <span className="text-sm text-gray-500">{resource.fileSize}</span>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        {resource.downloadCount} downloads
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(resource.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button onClick={() => handleDownload(resource)} className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download E-Book
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="webinars" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.webinars.map((webinar) => (
                <Card key={webinar.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={webinar.isLive ? 'destructive' : 'secondary'}>
                        {webinar.isLive ? 'Live' : 'Recorded'}
                      </Badge>
                      <span className="text-sm text-gray-500">{webinar.duration}</span>
                    </div>
                    <CardTitle className="text-lg">{webinar.title}</CardTitle>
                    <CardDescription>{webinar.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {webinar.viewCount} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(webinar.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {webinar.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button onClick={() => handleWatchWebinar(webinar)} className="w-full">
                      <Video className="mr-2 h-4 w-4" />
                      {webinar.isLive ? 'Join Live' : 'Watch Recording'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.templates.map((template) => (
                <Card key={template.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{template.category}</Badge>
                      <span className="text-sm text-gray-500">{template.fileSize}</span>
                    </div>
                    <CardTitle className="text-lg">{template.title}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        {template.downloadCount} downloads
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(template.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {template.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button onClick={() => handleDownload(template)} className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Templates
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* ROI Calculator Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Calculate Your ROI</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use our interactive ROI calculator to estimate the potential savings and benefits 
              of implementing SmartSuitex solutions in your business.
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Launch ROI Calculator
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage; 