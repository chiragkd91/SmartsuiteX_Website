import { HeroSection } from "@/components/ui/hero-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, Clock, CalendarDays, Wallet, LineChart, 
  GraduationCap, UserPlus, UserCog 
} from "lucide-react";

export default function HRManagementPage() {
  return (
    <>
      <HeroSection
        title="SmartX HR Management"
        subtitle="Comprehensive human resource management solution for businesses of all sizes"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1740"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/register">Start Free Trial</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/30 hover:text-white" asChild>
            <Link to="/contact">Request Demo</Link>
          </Button>
        </div>
      </HeroSection>

      {/* Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Streamline Your HR Operations</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  SmartX HR Management is a comprehensive solution that streamlines all your human resource processes, from recruitment to retirement.
                </p>
                <p>
                  Built specifically for Indian businesses, our system handles everything from employee records and attendance to payroll processing and performance management, all while ensuring compliance with local regulations.
                </p>
                <p>
                  With SmartX HR Management, you can focus on building your team while we take care of the administrative burden.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1740"
                alt="HR Dashboard"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Key Features"
            subtitle="Everything you need to manage your human resources effectively"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Users size={28} />}
              title="Employee Management"
              description="Centralized employee database with comprehensive profiles, document management, and organizational structure."
            />
            <FeatureCard
              icon={<Clock size={28} />}
              title="Attendance Tracking"
              description="Automated attendance tracking with biometric integration, shift management, and overtime calculation."
            />
            <FeatureCard
              icon={<CalendarDays size={28} />}
              title="Leave Management"
              description="Streamlined leave application process, approval workflows, balance tracking, and holiday calendar."
            />
            <FeatureCard
              icon={<Wallet size={28} />}
              title="Payroll Processing"
              description="Automated salary calculation, tax deductions, compliance with Indian tax laws, and direct deposit options."
            />
            <FeatureCard
              icon={<LineChart size={28} />}
              title="Performance Management"
              description="Goal setting, continuous feedback, performance reviews, and recognition tools to motivate your team."
            />
            <FeatureCard
              icon={<GraduationCap size={28} />}
              title="Training & Development"
              description="Training needs assessment, course management, skill gap analysis, and learning tracking."
            />
            <FeatureCard
              icon={<UserPlus size={28} />}
              title="Recruitment"
              description="End-to-end recruitment management from job posting to onboarding with applicant tracking system."
            />
            <FeatureCard
              icon={<UserCog size={28} />}
              title="Employee Self-Service"
              description="Empower employees with self-service portals for viewing payslips, applying for leave, and updating information."
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="Benefits"
            subtitle="How SmartX HR Management transforms your human resources operations"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Save Time and Resources</h3>
                <p className="text-gray-700">
                  Reduce administrative workload by up to 60% through automation of routine HR tasks and paperless workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Ensure Compliance</h3>
                <p className="text-gray-700">
                  Stay compliant with Indian labor laws, PF regulations, ESI requirements, and tax laws with automatic updates.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Data-Driven Decisions</h3>
                <p className="text-gray-700">
                  Access real-time HR analytics and reports to make informed decisions about workforce planning and development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Improved Employee Experience</h3>
                <p className="text-gray-700">
                  Enhance employee satisfaction with self-service tools, transparent processes, and faster response times.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Scalable Solution</h3>
                <p className="text-gray-700">
                  Grow from 10 to 10,000+ employees without changing systems, with flexible configurations for your evolving needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
                <p className="text-gray-700">
                  Integrate with other SmartX modules or third-party applications for a unified business management experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Use Cases"
            subtitle="How businesses are leveraging SmartX HR Management"
          />

          <Tabs defaultValue="enterprise" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              <TabsTrigger value="midsize">Mid-Size Business</TabsTrigger>
              <TabsTrigger value="startup">Startup</TabsTrigger>
            </TabsList>
            <TabsContent value="enterprise" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Multi-location Workforce Management</h3>
                    <p className="text-gray-700 mb-4">
                      An IT services company with 2,000+ employees across 5 cities uses SmartX HR to standardize processes while accommodating location-specific policies.
                    </p>
                    <p className="text-blue-600 font-medium">Results: 40% reduction in HR administrative costs and improved policy consistency.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
                    <p className="text-gray-700 mb-4">
                      A manufacturing firm leverages SmartX HR to ensure compliance with complex labor laws across multiple states and union agreements.
                    </p>
                    <p className="text-blue-600 font-medium">Results: Zero compliance violations in the past 2 years and 65% faster regulatory reporting.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Performance Management</h3>
                    <p className="text-gray-700 mb-4">
                      A financial services company implemented SmartX HR's performance management tools to align employee goals with corporate objectives.
                    </p>
                    <p className="text-blue-600 font-medium">Results: 28% increase in high-performer retention and improved goal achievement rates.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="midsize" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Growth Management</h3>
                    <p className="text-gray-700 mb-4">
                      A rapidly growing healthcare provider used SmartX HR to scale their operations from 50 to 250 employees without adding HR headcount.
                    </p>
                    <p className="text-blue-600 font-medium">Results: Maintained 1:125 HR-to-employee ratio during 400% growth over 3 years.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Employee Self-service</h3>
                    <p className="text-gray-700 mb-4">
                      A retail chain implemented SmartX HR self-service tools to empower employees to manage their own information and requests.
                    </p>
                    <p className="text-blue-600 font-medium">Results: 75% reduction in routine HR inquiries and 90% employee adoption rate.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Recruitment Optimization</h3>
                    <p className="text-gray-700 mb-4">
                      A technology consulting firm streamlined their hiring process using SmartX HR's recruitment module.
                    </p>
                    <p className="text-blue-600 font-medium">Results: 35% reduction in time-to-hire and improved quality of candidates.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="startup" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Foundation Building</h3>
                    <p className="text-gray-700 mb-4">
                      A fintech startup implemented SmartX HR to establish proper HR processes from day one, setting them up for successful scaling.
                    </p>
                    <p className="text-blue-600 font-medium">Results: Successful onboarding of 30 employees in 6 months with minimal HR overhead.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Investor Readiness</h3>
                    <p className="text-gray-700 mb-4">
                      An e-commerce startup used SmartX HR to demonstrate organizational maturity and compliance to potential investors.
                    </p>
                    <p className="text-blue-600 font-medium">Results: Successfully secured Series A funding with strong governance practices highlighted.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Remote Workforce</h3>
                    <p className="text-gray-700 mb-4">
                      A SaaS startup with a fully remote team leveraged SmartX HR to maintain cohesion and accountability across distributed employees.
                    </p>
                    <p className="text-blue-600 font-medium">Results: 95% employee satisfaction and successful management of team across 5 time zones.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Screenshots/Demo */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="See SmartX HR in Action"
            subtitle="Explore key features of our HR management solution"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1740"
                alt="Employee Dashboard" 
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Employee Dashboard</h3>
                <p className="text-gray-600">
                  Intuitive employee self-service portal for managing personal information, leave requests, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1740"
                alt="HR Analytics" 
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">HR Analytics</h3>
                <p className="text-gray-600">
                  Comprehensive analytics dashboard with key HR metrics, trends, and actionable insights.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21ed1c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1736"
                alt="Payroll Processing" 
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Payroll Processing</h3>
                <p className="text-gray-600">
                  Automated payroll with compliance features for Indian tax regulations and statutory deductions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Request Full Product Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Simple, Transparent Pricing"
            subtitle="Choose the plan that fits your business needs"
          />

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/pricing">View Detailed Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your HR Operations?"
        description="Join thousands of businesses using SmartX HR Management to streamline their human resources."
        bgColor="accent"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">Start Free Trial</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20" asChild>
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </div>
      </CTASection>
    </>
  );
}