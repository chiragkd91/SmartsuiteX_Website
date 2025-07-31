import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Search,
  HelpCircle,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    {
      id: 'general',
      name: 'General',
      icon: HelpCircle,
      questions: [
        {
          question: 'What is SmartSuitex?',
          answer: 'SmartSuitex is a comprehensive business management platform that combines CRM, project management, inventory management, and analytics tools to help businesses streamline their operations and improve productivity.',
        },
        {
          question: 'How do I get started with SmartSuitex?',
          answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our guided setup process. Our team is also available to help with onboarding and training.',
        },
        {
          question: 'What are the system requirements?',
          answer: 'SmartSuitex is a web-based application that works on any modern browser. We recommend using Chrome, Firefox, Safari, or Edge with JavaScript enabled.',
        },
      ],
    },
    {
      id: 'pricing',
      name: 'Pricing & Billing',
      icon: CheckCircle,
      questions: [
        {
          question: 'What pricing plans are available?',
          answer: 'We offer several pricing tiers: Starter ($29/month), Professional ($99/month), and Enterprise (custom pricing). Each plan includes different features and user limits.',
        },
        {
          question: 'Can I change my plan anytime?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.',
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with our service, contact our support team for a full refund.',
        },
      ],
    },
    {
      id: 'features',
      name: 'Features',
      icon: HelpCircle,
      questions: [
        {
          question: 'What CRM features are included?',
          answer: 'Our CRM includes contact management, lead tracking, deal pipeline, email integration, reporting, and automation tools to help you manage customer relationships effectively.',
        },
        {
          question: 'Can I integrate with other tools?',
          answer: 'Yes, SmartSuitex offers integrations with popular tools like Gmail, Outlook, Slack, Zapier, and many others. We also provide an API for custom integrations.',
        },
        {
          question: 'Is there a mobile app available?',
          answer: 'Yes, we have mobile apps for both iOS and Android devices, allowing you to access your data and manage your business on the go.',
        },
      ],
    },
    {
      id: 'support',
      name: 'Support',
      icon: MessageSquare,
      questions: [
        {
          question: 'How can I contact support?',
          answer: 'You can reach our support team through live chat, email at support@smartsuitex.com, or by phone at +1 (555) 123-4567. We typically respond within 2-4 hours.',
        },
        {
          question: 'Do you offer training sessions?',
          answer: 'Yes, we offer free training sessions for all customers. You can schedule a personalized training session with our product specialists.',
        },
        {
          question: 'Is there a knowledge base available?',
          answer: 'Yes, we have a comprehensive knowledge base with articles, video tutorials, and guides to help you get the most out of SmartSuitex.',
        },
      ],
    },
  ];

  const filteredCategories = faqCategories.filter(category => 
    selectedCategory === 'all' || category.id === selectedCategory
  );

  const filteredQuestions = filteredCategories.flatMap(category =>
    category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about SmartSuitex
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
            >
              All Questions
            </Button>
            {faqCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Common Questions</CardTitle>
                <CardDescription>
                  {searchTerm 
                    ? `Found ${filteredQuestions.length} results for "${searchTerm}"`
                    : 'Browse through our most frequently asked questions'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                {searchTerm ? (
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredQuestions.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                        <AccordionTrigger className="text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <Accordion type="single" collapsible className="space-y-6">
                    {faqCategories.map((category) => (
                      <div key={category.id}>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                          <category.icon className="mr-2 h-5 w-5" />
                          {category.name}
                        </h3>
                        <div className="space-y-4">
                          {category.questions.map((item, index) => (
                            <AccordionItem key={index} value={`${category.id}-${index}`} className="border rounded-lg px-4">
                              <AccordionTrigger className="text-left">
                                {item.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-gray-600">
                                {item.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </div>
                      </div>
                    ))}
                  </Accordion>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle>Still Need Help?</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Our support team is here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-gray-500">support@smartsuitex.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                  </div>
                </div>
                <Button className="w-full">
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  Getting Started Guide
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Video Tutorials
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  API Documentation
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  System Status
                </Button>
              </CardContent>
            </Card>

            {/* Popular Questions */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">How do I reset my password?</p>
                  <p className="text-gray-500">Contact support for password assistance.</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Can I export my data?</p>
                  <p className="text-gray-500">Yes, you can export data in CSV, Excel, or PDF formats.</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Is my data secure?</p>
                  <p className="text-gray-500">We use enterprise-grade security and encryption.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Need More Help?</h3>
              <p className="text-blue-100 mb-6">
                Our support team is available 24/7 to assist you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Live Chat
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQPage; 