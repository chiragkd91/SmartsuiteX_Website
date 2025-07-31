import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Users, 
  BarChart3, 
  Settings, 
  Shield,
  CheckCircle,
  Activity,
  TrendingUp,
  Database,
  Zap
} from 'lucide-react';

const MediumBusinessPage = () => {
  const features = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Business Management",
      description: "Comprehensive business management solution for growing companies."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Team Collaboration",
      description: "Advanced collaboration tools for teams and departments."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Business Intelligence",
      description: "Advanced analytics and reporting for data-driven decisions."
    },
    {
      icon: <Settings className="h-8 w-8 text-orange-600" />,
      title: "Process Automation",
      description: "Automate workflows and streamline business processes."
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance management."
    },
    {
      icon: <Database className="h-8 w-8 text-red-600" />,
      title: "Data Management",
      description: "Centralized data management with backup and recovery."
    }
  ];

  const benefits = [
    "Scale operations efficiently as your business grows",
    "Improve team productivity with collaboration tools",
    "Make informed decisions with advanced analytics",
    "Automate repetitive tasks and focus on growth",
    "Ensure data security and regulatory compliance",
    "Streamline operations across multiple departments"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-cyan-500 text-white">
              Medium Business Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Medium Business Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Designed for growing businesses. Scale operations, improve efficiency, 
              and drive growth with our comprehensive platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600">
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
              Medium Business Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our medium business platform is designed to help growing companies 
              scale operations and improve efficiency.
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
                Scale Your Business
              </h2>
              <p className="text-xl text-gray-600">
                Optimize operations and drive growth with our comprehensive platform
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
      <section className="py-20 px-4 bg-cyan-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            Join growing businesses that have scaled operations with our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediumBusinessPage; 