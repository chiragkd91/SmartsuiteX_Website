import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  Shield, 
  BarChart3, 
  Settings,
  CheckCircle,
  Activity,
  Database,
  Globe,
  Zap
} from 'lucide-react';

const EnterprisePage = () => {
  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "Enterprise Resource Planning",
      description: "Comprehensive ERP solution for large-scale business operations."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Enterprise CRM",
      description: "Advanced customer relationship management for enterprise organizations."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Enterprise Security",
      description: "Advanced security features with SSO, MFA, and compliance controls."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Enterprise Analytics",
      description: "Advanced business intelligence and analytics for data-driven decisions."
    },
    {
      icon: <Settings className="h-8 w-8 text-indigo-600" />,
      title: "Enterprise Integration",
      description: "Seamless integration with existing enterprise systems and workflows."
    },
    {
      icon: <Database className="h-8 w-8 text-red-600" />,
      title: "Enterprise Data Management",
      description: "Robust data management with backup, recovery, and governance."
    }
  ];

  const benefits = [
    "Scale operations across multiple locations and departments",
    "Ensure enterprise-grade security and compliance",
    "Integrate with existing enterprise systems seamlessly",
    "Provide advanced analytics for strategic decision-making",
    "Support thousands of users with high performance",
    "Maintain data integrity and governance standards"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-gray-600 text-white">
              Enterprise Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Enterprise-grade solutions designed for large organizations. 
              Scalable, secure, and powerful.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100">
                Contact Sales
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
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
              Enterprise Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our enterprise platform is built to handle the complex needs of 
              large organizations with advanced features and scalability.
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
                Enterprise Excellence
              </h2>
              <p className="text-xl text-gray-600">
                Transform your enterprise operations with our comprehensive platform
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
      <section className="py-20 px-4 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join enterprise organizations that have scaled operations with our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterprisePage; 