import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Users, 
  Calendar, 
  FileText, 
  Shield,
  CheckCircle,
  Activity,
  Stethoscope,
  Pill,
  Database
} from 'lucide-react';

const HealthcarePage = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Patient Management",
      description: "Comprehensive patient records, medical history, and treatment tracking."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Staff Scheduling",
      description: "Intelligent staff scheduling with shift management and workload optimization."
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "Appointment Management",
      description: "Efficient appointment booking, reminders, and calendar management."
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      title: "Medical Records",
      description: "Secure electronic health records with HIPAA compliance and data protection."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Compliance Management",
      description: "Ensure compliance with healthcare regulations and standards."
    },
    {
      icon: <Activity className="h-8 w-8 text-indigo-600" />,
      title: "Health Analytics",
      description: "Advanced analytics for patient outcomes and operational efficiency."
    }
  ];

  const benefits = [
    "Improve patient care with comprehensive record management",
    "Reduce administrative overhead with automated workflows",
    "Ensure regulatory compliance with built-in safeguards",
    "Enhance staff productivity with optimized scheduling",
    "Increase patient satisfaction with streamlined processes",
    "Reduce medical errors with integrated safety checks"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-red-500 text-white">
              Healthcare Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Healthcare Management Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Streamline healthcare operations, improve patient care, and ensure 
              compliance with our comprehensive healthcare management solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
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
              Healthcare-Specific Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our healthcare platform is designed specifically for medical facilities, 
              clinics, and healthcare providers.
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
                Transform Healthcare Delivery
              </h2>
              <p className="text-xl text-gray-600">
                Improve patient outcomes and operational efficiency with our healthcare platform
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
      <section className="py-20 px-4 bg-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Join healthcare providers that have improved patient care with our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage; 