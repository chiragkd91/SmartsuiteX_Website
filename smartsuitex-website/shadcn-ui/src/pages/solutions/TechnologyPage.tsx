import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Code, 
  Server, 
  Shield, 
  Database,
  CheckCircle,
  Activity,
  Wrench,
  Cloud,
  Zap
} from 'lucide-react';

const TechnologyPage = () => {
  const features = [
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "IT Infrastructure Management",
      description: "Comprehensive management of IT infrastructure and network systems."
    },
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      title: "Software Development",
      description: "Project management and collaboration tools for development teams."
    },
    {
      icon: <Server className="h-8 w-8 text-purple-600" />,
      title: "Cloud Management",
      description: "Multi-cloud infrastructure management and optimization."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Cybersecurity",
      description: "Advanced security monitoring and threat detection systems."
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: "Data Management",
      description: "Big data analytics and data governance solutions."
    },
    {
      icon: <Wrench className="h-8 w-8 text-red-600" />,
      title: "DevOps & Automation",
      description: "CI/CD pipeline management and infrastructure automation."
    }
  ];

  const benefits = [
    "Accelerate software development with streamlined workflows",
    "Enhance security posture with comprehensive monitoring",
    "Optimize cloud costs with intelligent resource management",
    "Improve team collaboration with integrated tools",
    "Ensure compliance with automated governance",
    "Scale operations efficiently with automation"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-indigo-500 text-white">
              IT & Technology Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology Management Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Empower your technology teams with our comprehensive IT management 
              and development platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
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
              Technology-Specific Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology platform is designed to streamline IT operations, 
              accelerate development, and enhance security.
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
                Drive Technology Innovation
              </h2>
              <p className="text-xl text-gray-600">
                Accelerate your technology initiatives and improve operational efficiency
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
      <section className="py-20 px-4 bg-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Technology Operations?
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Join technology teams that have accelerated innovation with our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage; 