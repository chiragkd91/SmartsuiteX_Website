import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Users, 
  Search,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Code
} from 'lucide-react';

const DocumentationPage = () => {
  const categories = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Getting Started",
      description: "Quick start guides and tutorials for new users",
      items: ["Installation Guide", "First Steps", "Basic Configuration", "Quick Tour"]
    },
    {
      icon: <FileText className="h-8 w-8 text-green-600" />,
      title: "User Guides",
      description: "Comprehensive guides for all platform features",
      items: ["HR Management", "CRM Features", "ERP System", "Analytics"]
    },
    {
      icon: <Video className="h-8 w-8 text-purple-600" />,
      title: "Video Tutorials",
      description: "Step-by-step video tutorials and demonstrations",
      items: ["Setup Videos", "Feature Walkthroughs", "Best Practices", "Tips & Tricks"]
    },
    {
      icon: <Code className="h-8 w-8 text-orange-600" />,
      title: "API Documentation",
      description: "Technical documentation for developers",
      items: ["API Reference", "Integration Guides", "SDK Documentation", "Webhooks"]
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Community",
      description: "Connect with other users and get help",
      items: ["User Forum", "Knowledge Base", "Support Tickets", "Feature Requests"]
    },
    {
      icon: <Search className="h-8 w-8 text-red-600" />,
      title: "Troubleshooting",
      description: "Common issues and their solutions",
      items: ["FAQ", "Error Codes", "Performance Tips", "Security Best Practices"]
    }
  ];

  const quickLinks = [
    "Installation Guide",
    "User Manual",
    "API Documentation",
    "Video Tutorials",
    "FAQ",
    "Support Center"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-gray-500 text-white">
              Documentation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SmartSuitex Documentation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Everything you need to know about SmartSuitex. From getting started 
              to advanced features, find comprehensive guides and tutorials.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100">
                <Search className="mr-2 h-4 w-4" />
                Search Documentation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-600">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link, index) => (
              <Button key={index} variant="outline" className="hover:bg-gray-50">
                {link}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive documentation organized by category to find 
              exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <span className="text-sm">{item}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    View All
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Getting Started with SmartSuitex
              </h2>
              <p className="text-xl text-gray-600">
                New to SmartSuitex? Follow these steps to get up and running quickly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Create Your Account</h3>
                    <p className="text-gray-600">Sign up for a free trial and set up your organization profile.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Configure Your Settings</h3>
                    <p className="text-gray-600">Customize your workspace and set up your preferences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Import Your Data</h3>
                    <p className="text-gray-600">Upload your existing data or start fresh with our templates.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Invite Your Team</h3>
                    <p className="text-gray-600">Add team members and assign roles and permissions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Explore Features</h3>
                    <p className="text-gray-600">Take a tour of our features and start using the platform.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Get Support</h3>
                    <p className="text-gray-600">Access our support resources and community forums.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need More Help?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100">
              <Play className="mr-2 h-4 w-4" />
              Watch Tutorials
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-600">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentationPage; 