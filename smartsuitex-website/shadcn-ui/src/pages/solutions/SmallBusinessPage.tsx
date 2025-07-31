import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Users, 
  Calculator, 
  BarChart3, 
  FileText,
  CheckCircle,
  Activity,
  CreditCard,
  Calendar,
  Zap
} from 'lucide-react';

const SmallBusinessPage = () => {
  const features = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Business Management",
      description: "Complete business management solution designed for small businesses."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Customer Management",
      description: "Simple yet powerful CRM to manage customer relationships and sales."
    },
    {
      icon: <Calculator className="h-8 w-8 text-purple-600" />,
      title: "Financial Management",
      description: "Easy-to-use accounting and financial management tools."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Business Analytics",
      description: "Simple dashboards and reports to track business performance."
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-600" />,
      title: "Document Management",
      description: "Organize and manage business documents and contracts."
    },
    {
      icon: <Calendar className="h-8 w-8 text-red-600" />,
      title: "Task Management",
      description: "Project and task management to keep your business organized."
    }
  ];

  const benefits = [
    "Start managing your business efficiently from day one",
    "Grow your customer base with simple CRM tools",
    "Keep your finances organized with easy accounting",
    "Make informed decisions with business insights",
    "Scale your operations as your business grows",
    "Focus on what matters most - growing your business"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-teal-500 text-white">
              Small Business Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Small Business Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Everything you need to run and grow your small business. 
              Simple, affordable, and powerful.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Small Business Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our small business platform is designed to be simple, affordable, 
              and powerful - perfect for growing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Grow Your Small Business
              </h2>
              <p className="text-xl text-gray-600">
                Focus on what you do best while we handle the business management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-teal-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Join thousands of small businesses that have grown with our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallBusinessPage; 