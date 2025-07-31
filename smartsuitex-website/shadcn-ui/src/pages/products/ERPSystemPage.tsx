import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Calculator, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Settings,
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';

const ERPSystemPage = () => {
  const features = [
    {
      icon: <Calculator className="h-8 w-8 text-blue-600" />,
      title: "Financial Management",
      description: "Complete accounting, budgeting, and financial reporting with real-time insights."
    },
    {
      icon: <Package className="h-8 w-8 text-green-600" />,
      title: "Inventory Management",
      description: "Track stock levels, manage suppliers, and optimize inventory across multiple locations."
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-purple-600" />,
      title: "Procurement & Purchasing",
      description: "Streamline purchase orders, vendor management, and procurement workflows."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Business Intelligence",
      description: "Advanced analytics and reporting for data-driven decision making."
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Human Resources",
      description: "Integrated HR management with payroll, attendance, and performance tracking."
    },
    {
      icon: <Settings className="h-8 w-8 text-gray-600" />,
      title: "Process Automation",
      description: "Automate workflows and reduce manual tasks for increased efficiency."
    }
  ];

  const benefits = [
    "Centralized data management across all departments",
    "Real-time visibility into business operations",
    "Improved decision-making with comprehensive analytics",
    "Reduced operational costs and increased efficiency",
    "Scalable solution that grows with your business",
    "Compliance with industry standards and regulations"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-blue-500 text-white">
              Enterprise Resource Planning
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete ERP System
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Streamline your entire business operations with our comprehensive ERP solution. 
              From finance to inventory, everything you need in one integrated platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link to="/register">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
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
              Comprehensive ERP Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ERP system provides all the tools you need to manage your business efficiently 
              and make data-driven decisions.
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
                Why Choose Our ERP System?
              </h2>
              <p className="text-xl text-gray-600">
                Transform your business operations with our powerful ERP solution
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of businesses that have streamlined their operations with our ERP system.
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

export default ERPSystemPage; 