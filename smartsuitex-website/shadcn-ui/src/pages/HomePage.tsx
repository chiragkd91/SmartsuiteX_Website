import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Building2, Laptop, UserRound, Warehouse, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/ui/hero-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/ui/cta-section";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ResponsiveContainer, ResponsiveGrid, ResponsiveText, useDeviceDetection } from "@/components/ui/responsive-container";

export default function HomePage() {
  const device = useDeviceDetection();

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="SmartSuitex - Complete Business Management Suite"
        subtitle="HR, ERP, CRM & Business Intelligence in One Integrated Platform"
        backgroundImage="/images/backgrounds/digital-transformation.jpg"
      >
        <ResponsiveContainer maxWidth="4xl" padding="lg">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Button size={device.isMobile ? "default" : "lg"} asChild className="touch-target">
              <Link to="/register">Start Free Trial</Link>
            </Button>
            <Button 
              size={device.isMobile ? "default" : "lg"} 
              variant="outline" 
              className="bg-gray-900/10 text-gray-900 border-gray-900/30 hover:bg-gray-900/20 hover:text-gray-900 touch-target" 
              asChild
            >
              <Link to="/demo">Schedule Demo</Link>
            </Button>
          </div>
        </ResponsiveContainer>
      </HeroSection>

      {/* Features Overview */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <ResponsiveContainer maxWidth="7xl" padding="lg">
          <SectionHeading 
            title="All-In-One Solution for Your Business"
            subtitle="Get all the tools you need to run your business efficiently - no need for multiple software subscriptions"
          />

          <ResponsiveGrid 
            cols={{ mobile: 1, tablet: 2, laptop: 3, desktop: 3 }}
            gap="lg"
            className="mt-12"
          >
            <FeatureCard
              icon={<UserRound size={device.isMobile ? 24 : 28} />}
              title="HR Management"
              description="Comprehensive employee management, attendance tracking, leave management, payroll processing, and more."
            />
            <FeatureCard
              icon={<Building2 size={device.isMobile ? 24 : 28} />}
              title="ERP System"
              description="Complete enterprise resource planning with financial management, inventory, procurement, and order management."
            />
            <FeatureCard
              icon={<Laptop size={device.isMobile ? 24 : 28} />}
              title="CRM Platform"
              description="Track leads, manage customers, analyze sales data, and improve customer relationships with our advanced CRM."
            />
            <FeatureCard
              icon={<BarChart3 size={device.isMobile ? 24 : 28} />}
              title="Business Intelligence"
              description="Real-time analytics, custom reports, KPI dashboards, and data visualization tools for smarter decision-making."
            />
            <FeatureCard
              icon={<FileCheck size={device.isMobile ? 24 : 28} />}
              title="GST Compliance"
              description="Stay compliant with Indian GST regulations with automated filing, invoice generation, and tax management."
            />
            <FeatureCard
              icon={<Warehouse size={device.isMobile ? 24 : 28} />}
              title="IT Asset Management"
              description="Track and manage all your IT assets, software licenses, and support tickets in one place."
            />
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Industry Solutions */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
        <ResponsiveContainer maxWidth="7xl" padding="lg">
          <SectionHeading 
            title="Tailored Solutions for Your Industry"
            subtitle="SmartSuitex adapts to your specific industry needs with specialized features and workflows"
          />

          <ResponsiveGrid 
            cols={{ mobile: 1, tablet: 2, laptop: 3, desktop: 3 }}
            gap="lg"
            className="mt-12"
          >
            {[
              {
                title: "Healthcare",
                description: "Patient management, staff scheduling, inventory tracking, and regulatory compliance tools.",
                link: "/solutions/healthcare",
                image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Manufacturing",
                description: "Production planning, quality control, equipment maintenance, and supply chain management.",
                link: "/solutions/manufacturing",
                image: "https://images.unsplash.com/photo-1574472374272-26e91165e036?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Retail & E-commerce",
                description: "Inventory management, customer analytics, multi-store support, and sales reporting.",
                link: "/solutions/retail",
                image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Financial Services",
                description: "Compliance management, risk assessment, portfolio tracking, and regulatory reporting.",
                link: "/solutions/financial",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "IT & Technology",
                description: "Project management, resource allocation, time tracking, and client collaboration tools.",
                link: "/solutions/technology",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Small Business",
                description: "Scalable solutions designed specifically for small businesses and startups.",
                link: "/solutions/small-business",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((solution, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <ResponsiveText
                    size={{ mobile: 'lg', tablet: 'xl', laptop: 'xl', desktop: 'xl' }}
                    weight="semibold"
                    className="mb-3 text-gray-900"
                  >
                    {solution.title}
                  </ResponsiveText>
                  <ResponsiveText
                    size={{ mobile: 'sm', tablet: 'base', laptop: 'base', desktop: 'base' }}
                    className="mb-4 text-gray-600"
                  >
                    {solution.description}
                  </ResponsiveText>
                  <Link to={solution.link} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium touch-target">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <ResponsiveContainer maxWidth="6xl" padding="lg">
          <SectionHeading 
            title="Trusted by Businesses Across India"
            subtitle="See what our customers have to say about SmartSuitex"
          />

          <ResponsiveGrid 
            cols={{ mobile: 1, tablet: 2, laptop: 3, desktop: 3 }}
            gap="lg"
            className="mt-12"
          >
            <TestimonialCard
              quote="SmartSuitex has transformed our HR operations. The automation features have saved us countless hours."
              name="Priya Sharma"
              title="HR Director"
              company="TechCorp India"
              avatarSrc="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              quote="The ERP system is incredibly intuitive. We've seen a 40% improvement in our operational efficiency."
              name="Rajesh Kumar"
              title="Operations Manager"
              company="Manufacturing Solutions Ltd"
              avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              quote="Best CRM platform we've used. The customer insights have helped us increase sales by 60%."
              name="Anita Patel"
              title="Sales Director"
              company="Retail Innovations"
              avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            />
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Join thousands of businesses that trust SmartSuitex for their management needs"
        bgColor="accent"
      >
        <ResponsiveContainer maxWidth="4xl" padding="lg">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Button size={device.isMobile ? "default" : "lg"} asChild className="touch-target">
              <Link to="/register">Start Free Trial</Link>
            </Button>
            <Button 
              size={device.isMobile ? "default" : "lg"} 
              variant="outline" 
              className="bg-gray-900/10 text-gray-900 border-gray-900/30 hover:bg-gray-900/20 hover:text-gray-900 touch-target" 
              asChild
            >
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </ResponsiveContainer>
      </CTASection>
    </>
  );
}