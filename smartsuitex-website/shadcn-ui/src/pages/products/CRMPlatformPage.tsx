import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  BarChart3, 
  MessageSquare, 
  Calendar,
  Phone,
  Mail,
  CheckCircle,
  Zap,
  TrendingUp,
  X
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const CRMPlatformPage = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Lead Management",
      description: "Capture, track, and nurture leads through the entire sales pipeline with automated workflows."
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Sales Pipeline",
      description: "Visualize your sales process, track deals, and forecast revenue with precision."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
      title: "Customer Communication",
      description: "Centralized communication hub with email, phone, and chat integration."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Analytics & Reporting",
      description: "Comprehensive dashboards and reports to track performance and identify opportunities."
    },
    {
      icon: <Calendar className="h-8 w-8 text-indigo-600" />,
      title: "Task Management",
      description: "Organize tasks, set reminders, and never miss important follow-ups."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-600" />,
      title: "Performance Tracking",
      description: "Monitor team performance, set goals, and optimize sales strategies."
    }
  ];

  const benefits = [
    "Increase sales productivity by 30% with streamlined workflows",
    "Improve customer retention through better relationship management",
    "Gain real-time insights into sales performance and trends",
    "Automate repetitive tasks and focus on high-value activities",
    "Enhance team collaboration with shared customer data",
    "Scale your sales operations without proportional cost increases"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-purple-500 text-white">
              Customer Relationship Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful CRM Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Build stronger customer relationships, boost sales, and grow your business 
              with our comprehensive CRM solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                <Link to="/register">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
                <Link to="/demo">Schedule Demo</Link>
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
              Complete CRM Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our CRM platform provides everything you need to manage customer relationships, 
              track sales, and drive business growth.
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
                Transform Your Sales Process
              </h2>
              <p className="text-xl text-gray-600">
                See measurable improvements in your sales performance and customer satisfaction
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

      {/* CRM Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              CRM Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect CRM plan for your business needs. All plans include our core CRM features 
              with different levels of advanced functionality.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table className="bg-white rounded-lg shadow-lg">
              <TableHeader>
                <TableRow className="border-b-2 border-gray-200">
                  <TableHead className="w-1/4 text-gray-900 font-semibold text-lg p-6">Feature</TableHead>
                  <TableHead className="text-center text-gray-900 font-semibold text-lg p-6">
                    <div className="space-y-1">
                      <div>Starter Plan</div>
                      <div className="text-2xl font-bold text-purple-600">₹2,399</div>
                    </div>
                  </TableHead>
                  <TableHead className="text-center text-gray-900 font-semibold text-lg p-6">
                    <div className="space-y-1">
                      <div>Professional Plan</div>
                      <div className="text-2xl font-bold text-purple-600">₹4,899</div>
                    </div>
                  </TableHead>
                  <TableHead className="text-center text-gray-900 font-semibold text-lg p-6">
                    <div className="space-y-1">
                      <div>Enterprise Plan</div>
                      <div className="text-2xl font-bold text-purple-600">₹8,299</div>
                    </div>
                  </TableHead>
                  <TableHead className="text-center text-gray-900 font-semibold text-lg p-6">
                    <div className="space-y-1">
                      <div>Custom Plan</div>
                      <div className="text-sm text-gray-600">Contact Sales</div>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900 p-6">Contact Management</TableCell>
                  <TableCell className="text-center p-6">Up to 1,000 Contacts</TableCell>
                  <TableCell className="text-center p-6">Unlimited</TableCell>
                  <TableCell className="text-center p-6">Unlimited + AI Scoring</TableCell>
                  <TableCell className="text-center p-6">Custom</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900 p-6">Sales Pipeline</TableCell>
                  <TableCell className="text-center p-6">Basic</TableCell>
                  <TableCell className="text-center p-6">Advanced</TableCell>
                  <TableCell className="text-center p-6">Forecasting + AI</TableCell>
                  <TableCell className="text-center p-6">Tailored</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900 p-6">Email Integration</TableCell>
                  <TableCell className="text-center p-6">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center p-6">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center p-6">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center p-6">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900 p-6">Reporting & Dashboards</TableCell>
                  <TableCell className="text-center p-6">Basic</TableCell>
                  <TableCell className="text-center p-6">Advanced</TableCell>
                  <TableCell className="text-center p-6">Advanced + Custom</TableCell>
                  <TableCell className="text-center p-6">Custom</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900 p-6">Marketing Automation</TableCell>
                  <TableCell className="text-center p-6">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center p-6">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center p-6">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center p-6">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900 p-6">Custom Workflows</TableCell>
                  <TableCell className="text-center p-6">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center p-6">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center p-6">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center p-6">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900 p-6">API Access</TableCell>
                  <TableCell className="text-center p-6">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center p-6">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center p-6">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center p-6">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900 p-6">Support</TableCell>
                  <TableCell className="text-center p-6">Email</TableCell>
                  <TableCell className="text-center p-6">Priority</TableCell>
                  <TableCell className="text-center p-6">24/7 Premium</TableCell>
                  <TableCell className="text-center p-6">Dedicated</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Starter Plan</h3>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link to="/register?plan=starter">Get Started</Link>
                </Button>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Professional Plan</h3>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link to="/register?plan=professional">Get Started</Link>
                </Button>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Enterprise Plan</h3>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link to="/register?plan=enterprise">Get Started</Link>
                </Button>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Custom Plan</h3>
                <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50" asChild>
                  <Link to="/contact-sales">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Sales?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Join thousands of sales teams that have transformed their performance with our CRM platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMPlatformPage; 