import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  Users, 
  BarChart3, 
  Target, 
  Zap,
  CheckCircle,
  Activity,
  TrendingUp,
  Lightbulb,
  Globe
} from 'lucide-react';

const StartupsPage = () => {
  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      title: "Rapid Growth Tools",
      description: "Tools designed to help startups scale quickly and efficiently."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Customer Acquisition",
      description: "CRM and marketing tools to acquire and retain customers."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Growth Analytics",
      description: "Analytics and insights to track startup metrics and KPIs."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Market Research",
      description: "Tools to understand market trends and customer needs."
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: "Quick Setup",
      description: "Get up and running quickly with pre-built templates and workflows."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-600" />,
      title: "Scalable Infrastructure",
      description: "Infrastructure that grows with your startup from MVP to scale."
    }
  ];

  const benefits = [
    "Launch your startup faster with pre-built solutions",
    "Focus on product development, not infrastructure",
    "Scale operations as your startup grows",
    "Track key metrics and make data-driven decisions",
    "Acquire and retain customers effectively",
    "Build a solid foundation for future growth"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-pink-500 text-white">
              Startup Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Startup Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100">
              Built for startups. Scale fast, grow smart, and focus on what matters most - 
              building your product and acquiring customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
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
              Startup-Specific Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our startup platform is designed to help you launch faster, 
              grow smarter, and scale efficiently.
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
                Accelerate Your Startup
              </h2>
              <p className="text-xl text-gray-600">
                Focus on innovation while we handle the business operations
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
      <section className="py-20 px-4 bg-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Startup?
          </h2>
          <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">
            Join successful startups that have accelerated growth with our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupsPage; 