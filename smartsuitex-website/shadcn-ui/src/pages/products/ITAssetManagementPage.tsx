import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Smartphone, 
  Server, 
  Shield, 
  Settings,
  Database,
  CheckCircle,
  Zap,
  BarChart3,
  AlertTriangle
} from 'lucide-react';

const ITAssetManagementPage = () => {
  const features = [
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "Hardware Tracking",
      description: "Track all hardware assets including computers, servers, and network devices with detailed inventory."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "Software License Management",
      description: "Manage software licenses, track usage, and ensure compliance with licensing agreements."
    },
    {
      icon: <Server className="h-8 w-8 text-purple-600" />,
      title: "Infrastructure Monitoring",
      description: "Monitor server health, network performance, and infrastructure status in real-time."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Security Management",
      description: "Track security patches, manage access controls, and monitor security compliance."
    },
    {
      icon: <Settings className="h-8 w-8 text-indigo-600" />,
      title: "Configuration Management",
      description: "Manage device configurations, track changes, and maintain system consistency."
    },
    {
      icon: <Database className="h-8 w-8 text-red-600" />,
      title: "Data Backup & Recovery",
      description: "Automated backup solutions and disaster recovery planning for business continuity."
    }
  ];

  const benefits = [
    "Reduce IT costs by 25% through better asset utilization",
    "Improve security posture with comprehensive asset tracking",
    "Ensure compliance with software licensing requirements",
    "Minimize downtime with proactive maintenance scheduling",
    "Streamline IT operations with centralized management",
    "Enhance decision-making with detailed asset analytics"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-green-500 text-white">
              IT Asset Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete IT Asset Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Streamline your IT operations, reduce costs, and ensure compliance with our 
              comprehensive asset management solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
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
              Comprehensive IT Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our IT asset management platform provides complete visibility and control 
              over your technology infrastructure.
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
                Optimize Your IT Operations
              </h2>
              <p className="text-xl text-gray-600">
                Transform your IT management with data-driven insights and automated processes
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
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your IT?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join IT teams that have transformed their operations with our asset management platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITAssetManagementPage; 