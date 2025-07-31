import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Calculator, 
  Shield, 
  BarChart3, 
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Calendar,
  Database,
  Zap
} from 'lucide-react';

const GSTCompliancePage = () => {
  const features = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Automated GST Filing",
      description: "Automated GST return filing with real-time validation and error checking for compliance."
    },
    {
      icon: <Calculator className="h-8 w-8 text-green-600" />,
      title: "Tax Calculation Engine",
      description: "Advanced tax calculation engine that handles complex GST scenarios and multiple tax rates."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Compliance Monitoring",
      description: "Continuous monitoring of GST compliance status with automated alerts and notifications."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "GST Analytics",
      description: "Comprehensive analytics and reporting for GST data with actionable insights."
    },
    {
      icon: <Calendar className="h-8 w-8 text-indigo-600" />,
      title: "Filing Calendar",
      description: "Automated filing calendar with reminders and deadline tracking for all GST returns."
    },
    {
      icon: <Database className="h-8 w-8 text-red-600" />,
      title: "Data Management",
      description: "Centralized GST data management with secure storage and easy retrieval."
    }
  ];

  const benefits = [
    "Ensure 100% GST compliance with automated filing",
    "Reduce manual errors and filing time by 80%",
    "Stay updated with latest GST regulations and changes",
    "Avoid penalties with timely filing and accurate calculations",
    "Generate comprehensive GST reports for audit purposes",
    "Streamline GST processes across multiple business locations"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-orange-500 text-white">
              GST Compliance
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete GST Compliance Solution
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Stay compliant with Indian GST regulations with our automated filing, 
              calculation, and reporting platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
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
              Comprehensive GST Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our GST compliance platform provides everything you need to manage 
              GST filing, calculations, and reporting efficiently.
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
                Simplify GST Compliance
              </h2>
              <p className="text-xl text-gray-600">
                Transform your GST management with automated processes and real-time compliance monitoring
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
      <section className="py-20 px-4 bg-orange-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Simplify GST Compliance?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Join businesses that have streamlined their GST compliance with our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GSTCompliancePage; 