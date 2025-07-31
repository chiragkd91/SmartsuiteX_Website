import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  Shield, 
  BarChart3, 
  Users, 
  FileText,
  CheckCircle,
  Activity,
  CreditCard,
  Calculator,
  Database
} from 'lucide-react';

const FinancialPage = () => {
  const features = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "Financial Management",
      description: "Comprehensive financial planning, budgeting, and cash flow management."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Compliance & Risk",
      description: "Regulatory compliance monitoring and risk assessment tools."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Investment Analytics",
      description: "Advanced analytics for investment portfolio management and analysis."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Client Management",
      description: "Comprehensive client relationship management and service delivery."
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-600" />,
      title: "Document Management",
      description: "Secure document storage and management with audit trails."
    },
    {
      icon: <Calculator className="h-8 w-8 text-red-600" />,
      title: "Tax Management",
      description: "Automated tax calculations, filing, and compliance management."
    }
  ];

  const benefits = [
    "Ensure regulatory compliance with automated monitoring",
    "Improve client service with integrated relationship management",
    "Reduce operational risks with comprehensive risk assessment",
    "Enhance investment performance with advanced analytics",
    "Streamline financial operations with automated workflows",
    "Increase client trust with secure and transparent processes"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-green-500 text-white">
              Financial Services Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Financial Services Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Empower your financial services business with our comprehensive 
              management and compliance solution.
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
              Financial Services Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our financial services platform is designed to meet the unique needs 
              of banks, investment firms, and financial advisors.
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
                Drive Financial Excellence
              </h2>
              <p className="text-xl text-gray-600">
                Optimize your financial services operations and enhance client relationships
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
            Ready to Transform Financial Services?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join financial institutions that have improved efficiency and compliance with our platform.
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

export default FinancialPage; 