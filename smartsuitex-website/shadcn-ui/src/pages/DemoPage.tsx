import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  Building2, 
  BarChart3, 
  FileCheck, 
  Warehouse,
  Play,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ResponsiveContainer, ResponsiveGrid, ResponsiveText, useDeviceDetection } from '@/components/ui/responsive-container';
import { SectionHeading } from '@/components/ui/section-heading';
import { FeatureCard } from '@/components/ui/feature-card';

export default function DemoPage() {
  const device = useDeviceDetection();
  const [selectedModule, setSelectedModule] = useState('overview');
  const [selectedTime, setSelectedTime] = useState('');

  const demoModules = [
    {
      id: 'overview',
      title: 'Platform Overview',
      description: 'Complete system walkthrough',
      icon: <Globe className="h-6 w-6" />,
      duration: '30 min'
    },
    {
      id: 'hr',
      title: 'HR Management',
      description: 'Employee lifecycle management',
      icon: <Users className="h-6 w-6" />,
      duration: '45 min'
    },
    {
      id: 'erp',
      title: 'ERP System',
      description: 'Enterprise resource planning',
      icon: <Building2 className="h-6 w-6" />,
      duration: '60 min'
    },
    {
      id: 'crm',
      title: 'CRM Platform',
      description: 'Customer relationship management',
      icon: <BarChart3 className="h-6 w-6" />,
      duration: '45 min'
    },
    {
      id: 'bi',
      title: 'Business Intelligence',
      description: 'Analytics and reporting',
      icon: <Database className="h-6 w-6" />,
      duration: '30 min'
    },
    {
      id: 'gst',
      title: 'GST Compliance',
      description: 'Tax management and filing',
      icon: <FileCheck className="h-6 w-6" />,
      duration: '30 min'
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const demoFeatures = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Live Demo',
      description: 'Interactive walkthrough of real features'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Expert Guidance',
      description: 'One-on-one session with our specialists'
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: 'Custom Solutions',
      description: 'Tailored to your business needs'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-orange-600" />,
      title: 'Multi-Platform',
      description: 'Desktop, tablet, and mobile access'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechCorp Solutions',
      rating: 5,
      comment: 'The demo was incredibly comprehensive. We could see exactly how SmartSuitex would fit our workflow.'
    },
    {
      name: 'Priya Sharma',
      company: 'Innovate Manufacturing',
      rating: 5,
      comment: 'The expert was very knowledgeable and answered all our questions. Highly recommended!'
    },
    {
      name: 'Amit Patel',
      company: 'Global Retail Chain',
      rating: 5,
      comment: 'The live demo helped us understand the ROI immediately. Great experience!'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4">
        <ResponsiveContainer maxWidth="6xl" padding="lg">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <Play className="h-4 w-4 mr-2" />
              Interactive Demo
            </Badge>
            
            <ResponsiveText
              as="h1"
              size={{ mobile: '3xl', tablet: '4xl', laptop: '5xl', desktop: '6xl' }}
              className="font-bold text-gray-900 leading-tight"
            >
              Experience SmartSuitex
              <span className="text-blue-600 block">In Action</span>
            </ResponsiveText>
            
            <ResponsiveText
              as="p"
              size={{ mobile: 'lg', tablet: 'xl', laptop: '2xl', desktop: '2xl' }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              See how our integrated platform can transform your business operations. 
              Book a personalized demo with our experts.
            </ResponsiveText>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <Link to="/register">Schedule Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Demo Modules */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <ResponsiveContainer maxWidth="7xl" padding="lg">
          <SectionHeading 
            title="Choose Your Demo Focus"
            subtitle="Select the modules you'd like to explore during your personalized demo session"
          />

          <ResponsiveGrid 
            cols={{ mobile: 1, tablet: 2, laptop: 3, desktop: 3 }}
            gap="lg"
            className="mt-12"
          >
            {demoModules.map((module) => (
              <Card 
                key={module.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedModule === module.id 
                    ? 'ring-2 ring-blue-500 bg-blue-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedModule(module.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {module.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                        <p className="text-sm text-gray-600">{module.description}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{module.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {selectedModule === module.id && (
                    <div className="space-y-3">
                      <Separator />
                      <div className="flex items-center space-x-2 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>Selected for demo</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Demo Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
        <ResponsiveContainer maxWidth="7xl" padding="lg">
          <SectionHeading 
            title="What to Expect"
            subtitle="Your personalized demo experience includes everything you need to make an informed decision"
          />

          <ResponsiveGrid 
            cols={{ mobile: 1, tablet: 2, laptop: 2, desktop: 4 }}
            gap="lg"
            className="mt-12"
          >
            {demoFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Demo Scheduling */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <ResponsiveContainer maxWidth="4xl" padding="lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Ready to See SmartSuitex in Action?
              </h2>
              <p className="text-lg text-gray-600">
                Book your personalized demo today and discover how our integrated platform 
                can streamline your business operations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>30-60 minute sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>One-on-one with experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Monitor className="h-5 w-5 text-blue-600" />
                  <span>Screen sharing available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>No commitment required</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/register">Schedule Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Available Time Slots</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className="justify-start"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                
                {selectedTime && (
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2 text-green-700">
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-medium">Selected: {selectedTime}</span>
                    </div>
                    <p className="text-sm text-green-600 mt-1">
                      Click "Schedule Demo" to book this time slot
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
        <ResponsiveContainer maxWidth="7xl" padding="lg">
          <SectionHeading 
            title="What Our Customers Say"
            subtitle="Hear from businesses that experienced our demo and chose SmartSuitex"
          />

          <ResponsiveGrid 
            cols={{ mobile: 1, tablet: 2, laptop: 3, desktop: 3 }}
            gap="lg"
            className="mt-12"
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-blue-600">
        <ResponsiveContainer maxWidth="4xl" padding="lg">
          <div className="text-center text-white space-y-6">
            <h2 className="text-3xl font-bold">
              Start Your SmartSuitex Journey Today
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their operations 
              with our integrated platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/register">
                  Schedule Your Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link to="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
} 