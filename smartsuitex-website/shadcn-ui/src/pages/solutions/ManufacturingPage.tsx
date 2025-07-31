import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Factory, 
  Settings, 
  Package, 
  BarChart3, 
  Shield,
  CheckCircle,
  Activity,
  Wrench,
  Truck,
  Database
} from 'lucide-react';

const ManufacturingPage = () => {
  const features = [
    {
      icon: <Factory className="h-8 w-8 text-blue-600" />,
      title: "Production Planning",
      description: "Advanced production scheduling and capacity planning for optimal efficiency."
    },
    {
      icon: <Settings className="h-8 w-8 text-green-600" />,
      title: "Quality Control",
      description: "Comprehensive quality management with automated inspection and testing."
    },
    {
      icon: <Package className="h-8 w-8 text-purple-600" />,
      title: "Inventory Management",
      description: "Real-time inventory tracking and automated reorder management."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Performance Analytics",
      description: "Manufacturing analytics with OEE tracking and performance optimization."
    },
    {
      icon: <Wrench className="h-8 w-8 text-indigo-600" />,
      title: "Equipment Maintenance",
      description: "Predictive maintenance scheduling and equipment lifecycle management."
    },
    {
      icon: <Truck className="h-8 w-8 text-red-600" />,
      title: "Supply Chain Management",
      description: "End-to-end supply chain visibility and supplier management."
    }
  ];

  const benefits = [
    "Increase production efficiency by 30% with optimized planning",
    "Reduce quality issues with automated quality control processes",
    "Minimize inventory costs with smart inventory management",
    "Improve equipment uptime with predictive maintenance",
    "Enhance supply chain visibility and reduce lead times",
    "Ensure compliance with manufacturing standards and regulations"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-blue-500 text-white">
              Manufacturing Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Manufacturing Excellence Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Optimize your manufacturing operations with our comprehensive 
              production management and quality control solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
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
              Manufacturing-Specific Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our manufacturing platform is designed to streamline production, 
              improve quality, and optimize operations.
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
                Drive Manufacturing Excellence
              </h2>
              <p className="text-xl text-gray-600">
                Transform your manufacturing operations with data-driven insights and automation
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
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Manufacturing?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join manufacturers that have transformed their operations with our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingPage; 