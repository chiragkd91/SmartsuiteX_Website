import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Search,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  HelpCircle,
  BookOpen,
  Video,
  FileText,
  Users,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Star,
} from 'lucide-react';

const SupportPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageSquare,
      status: 'Online',
      responseTime: '< 2 minutes',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      available: true,
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      status: '24/7',
      responseTime: '2-4 hours',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      available: true,
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our team',
      icon: Phone,
      status: 'Business Hours',
      responseTime: 'Immediate',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      available: true,
    },
  ];

  const helpCategories = [
    {
      title: 'Getting Started',
      description: 'Learn the basics and set up your account',
      icon: HelpCircle,
      articles: 12,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Account & Billing',
      description: 'Manage your account and billing information',
      icon: Users,
      articles: 8,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Features & Usage',
      description: 'Learn how to use our features effectively',
      icon: BookOpen,
      articles: 25,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: AlertCircle,
      articles: 15,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  const quickActions = [
    {
      title: 'Reset Password',
      description: 'Forgot your password? Reset it here',
      icon: CheckCircle,
      action: 'Reset Now',
    },
    {
      title: 'Update Billing',
      description: 'Change your payment method or plan',
      icon: CheckCircle,
      action: 'Update',
    },
    {
      title: 'Download Invoice',
      description: 'Get your latest billing statement',
      icon: FileText,
      action: 'Download',
    },
    {
      title: 'System Status',
      description: 'Check if our services are running smoothly',
      icon: CheckCircle,
      action: 'Check Status',
    },
  ];

  const faqs = [
    {
      question: 'How do I reset my password?',
                      answer: 'Contact our support team for password reset assistance. They will help you regain access to your account.',
    },
    {
      question: 'Can I export my data?',
      answer: 'Yes, you can export your data in various formats including CSV, Excel, and PDF. Go to Settings > Data Export to get started.',
    },
    {
      question: 'How do I add team members?',
      answer: 'Navigate to User Management in your dashboard, click "Add User", and fill in the required information. You can assign roles and permissions during this process.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help you succeed with SmartSuitex
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search for help articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Support Channels */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg ${channel.bgColor}`}>
                        <Icon className={`h-6 w-6 ${channel.color}`} />
                      </div>
                      <Badge variant={channel.available ? "default" : "secondary"}>
                        {channel.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{channel.title}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span>Response time:</span>
                      <span className="font-medium">{channel.responseTime}</span>
                    </div>
                    <Button className="w-full">
                      {channel.title === 'Live Chat' ? 'Start Chat' : 
                       channel.title === 'Email Support' ? 'Send Email' : 'Call Now'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon className="h-5 w-5 text-blue-600" />
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{action.title}</h3>
                        <p className="text-xs text-gray-500">{action.description}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        {action.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Help Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className={`p-2 rounded-lg w-fit ${category.bgColor}`}>
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{category.articles} articles</span>
                      <Button variant="ghost" size="sm">
                        Browse
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="faq" className="space-y-6">
          <TabsList>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Find answers to the most common questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Documentation
                  </CardTitle>
                  <CardDescription>
                    Comprehensive guides and API documentation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Getting Started Guide
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    User Manual
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    API Documentation
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Developer Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Video className="mr-2 h-5 w-5" />
                    Video Tutorials
                  </CardTitle>
                  <CardDescription>
                    Step-by-step video guides and tutorials
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Quick Start Videos
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Feature Walkthroughs
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Advanced Tutorials
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Webinar Recordings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Get in touch with our support team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Support Hours</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>9:00 AM - 6:00 PM EST</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>10:00 AM - 4:00 PM EST</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Contact Methods</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-sm text-gray-600">support@smartsuitex.com</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MessageSquare className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="font-medium">Live Chat</p>
                            <p className="text-sm text-gray-600">Available 24/7</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Send us a Message</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Subject</label>
                        <Input placeholder="What can we help you with?" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Message</label>
                        <textarea
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows={4}
                          placeholder="Describe your issue or question..."
                        />
                      </div>
                      <Button className="w-full">
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Feedback */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Was this helpful?</h3>
            <p className="text-blue-100 mb-6">
              Help us improve our support by providing feedback
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="secondary" size="lg">
                <Star className="mr-2 h-4 w-4" />
                Yes, it helped
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                No, I need more help
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupportPage; 