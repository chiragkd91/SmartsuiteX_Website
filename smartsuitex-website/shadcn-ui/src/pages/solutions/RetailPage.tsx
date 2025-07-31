import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Store, 
  BarChart3, 
  Users, 
  Package,
  CheckCircle,
  Activity,
  CreditCard,
  Truck,
  Database
} from 'lucide-react';

const RetailPage = () => {
  const features = [
    {
      icon: <Store className="h-8 w-8 text-blue-600" />,
      title: "Multi-Store Management",
      description: "Manage multiple store locations from a single platform with centralized control."
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-600" />,
      title: "E-commerce Integration",
      description: "Seamless integration with online stores and marketplace platforms."
    },
    {
      icon: <Package className="h-8 w-8 text-purple-600" />,
      title: "Inventory Management",
      description: "Real-time inventory tracking across all channels and locations."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Sales Analytics",
      description: "Comprehensive sales reporting and customer behavior analytics."
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Customer Management",
      description: "Customer relationship management with loyalty programs and marketing tools."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-red-600" />,
      title: "Payment Processing",
      description: "Secure payment processing with multiple payment method support."
    }
  ];

  const benefits = [
    "Increase sales by 25% with omnichannel retail management",
    "Reduce inventory costs with smart stock management",
    "Improve customer satisfaction with personalized experiences",
    "Streamline operations across multiple store locations",
    "Enhance marketing effectiveness with customer analytics",
    "Boost online and offline sales with integrated platforms"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-purple-500 text-white">
              Retail & E-commerce Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Retail Management Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Transform your retail business with our comprehensive omnichannel 
              management solution for stores and e-commerce.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
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
              Retail-Specific Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our retail platform is designed to handle both brick-and-mortar stores 
              and e-commerce operations seamlessly.
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
                Drive Retail Success
              </h2>
              <p className="text-xl text-gray-600">
                Optimize your retail operations and boost sales with our comprehensive platform
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
      <section className="py-20 px-4 bg-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Join retailers that have increased sales and efficiency with our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailPage; 