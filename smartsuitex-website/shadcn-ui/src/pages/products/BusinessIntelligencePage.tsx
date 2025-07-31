import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  LineChart, 
  Activity,
  CheckCircle,
  Zap,
  Database,
  Eye,
  Target
} from 'lucide-react';

const BusinessIntelligencePage = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Powerful analytics engine with predictive modeling and machine learning capabilities."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Real-time Dashboards",
      description: "Interactive dashboards with real-time data visualization and KPI tracking."
    },
    {
      icon: <PieChart className="h-8 w-8 text-purple-600" />,
      title: "Custom Reports",
      description: "Create custom reports and visualizations tailored to your business needs."
    },
    {
      icon: <LineChart className="h-8 w-8 text-orange-600" />,
      title: "Trend Analysis",
      description: "Identify trends and patterns in your data with advanced statistical analysis."
    },
    {
      icon: <Activity className="h-8 w-8 text-indigo-600" />,
      title: "Performance Monitoring",
      description: "Monitor business performance with automated alerts and notifications."
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Goal Tracking",
      description: "Set and track business goals with progress monitoring and forecasting."
    }
  ];

  const benefits = [
    "Make data-driven decisions with comprehensive analytics",
    "Identify new business opportunities and market trends",
    "Improve operational efficiency with performance insights",
    "Reduce costs through better resource allocation",
    "Enhance customer understanding with behavioral analytics",
    "Stay ahead of competition with predictive insights"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-indigo-500 text-white">
              Business Intelligence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advanced Business Intelligence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Transform your data into actionable insights with our comprehensive 
              business intelligence and analytics platform.
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
              Powerful BI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our business intelligence platform provides advanced analytics, 
              real-time dashboards, and predictive insights to drive your business forward.
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
                Drive Business Growth with Data
              </h2>
              <p className="text-xl text-gray-600">
                Leverage the power of data to make informed decisions and accelerate business growth
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
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Join businesses that have transformed their operations with data-driven insights.
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

export default BusinessIntelligencePage; 