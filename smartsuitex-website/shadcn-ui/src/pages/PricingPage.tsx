import { useState } from "react";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/ui/cta-section";
import { PricingCard } from "@/components/ui/pricing-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check, HelpCircle, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(true);
  
  return (
    <>
      <HeroSection
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that works best for your business needs"
        backgroundImage="/images/backgrounds/Price Section.jpg"
      />

      {/* Pricing Plans */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-3">
              <Label htmlFor="billing-toggle">Monthly</Label>
              <Switch
                id="billing-toggle"
                checked={annualBilling}
                onCheckedChange={setAnnualBilling}
              />
              <div className="flex items-center">
                <Label htmlFor="billing-toggle">Annual</Label>
                <span className="ml-2 rounded-full text-xs bg-green-100 text-green-800 px-2 py-0.5">
                  Save 20%
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PricingCard 
              title="Starter Plan"
              price={annualBilling ? "₹599" : "₹749"}
              description="Perfect for small businesses just getting started"
              features={[
                "Up to 25 employees",
                "HR Management",
                "Basic Attendance Tracking",
                "Leave Management",
                "Employee Self-Service Portal",
                "Email Support"
              ]}
              ctaLabel="Start Free Trial"
              ctaLink="/register"
            />

            <PricingCard 
              title="Professional Plan"
              price={annualBilling ? "₹1,499" : "₹1,899"}
              description="Ideal for growing businesses needing more features"
              features={[
                "Up to 100 employees",
                "Everything in Starter Plan",
                "Payroll Processing",
                "Performance Management",
                "Basic Recruitment Tools",
                "Training Management",
                "Priority Support"
              ]}
              ctaLabel="Start Free Trial"
              ctaLink="/register"
              popular={true}
            />

            <PricingCard 
              title="Enterprise Plan"
              price={annualBilling ? "₹2,999" : "₹3,749"}
              description="For larger organizations with advanced needs"
              features={[
                "Up to 500 employees",
                "Everything in Professional Plan",
                "Advanced Analytics",
                "Multi-branch Management",
                "Custom Workflow Automation",
                "API Access",
                "24/7 Priority Support",
                "Dedicated Account Manager"
              ]}
              ctaLabel="Start Free Trial"
              ctaLink="/register"
            />

            <PricingCard 
              title="Custom Plan"
              price="Custom"
              description="Tailored solution for unique business requirements"
              features={[
                "Unlimited employees",
                "Everything in Enterprise Plan",
                "Custom Integrations",
                "White-labeling Options",
                "On-premise Deployment",
                "Custom Development",
                "SLA Guarantees",
                "Strategic Business Consulting"
              ]}
              ctaLabel="Contact Sales"
              ctaLink="/contact"
            />
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">All plans include:</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-700">Free Updates</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-700">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-700">Secure Data Storage</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-700">Mobile App Access</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-700">30-Day Money-back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/95 mix-blend-multiply"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/backgrounds/Price Section.jpg')` }}
            aria-hidden="true"
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Feature Comparison</h2>
            <p className="text-lg md:text-xl text-white/90">Compare plans to find the right fit for your business</p>
          </div>

          <Tabs defaultValue="hr" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8 bg-white/10 backdrop-blur-sm">
              <TabsTrigger value="hr" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">
                HR Management
              </TabsTrigger>
              <TabsTrigger value="crm" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">
                CRM
              </TabsTrigger>
              <TabsTrigger value="erp" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">
                ERP
              </TabsTrigger>
              <TabsTrigger value="itam" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">
                IT Asset Mgmt
              </TabsTrigger>
              <TabsTrigger value="bi" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">
                Business Intelligence
              </TabsTrigger>
              <TabsTrigger value="automation" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">
                Automation Hub
              </TabsTrigger>
            </TabsList>

            {/* HR Management Pricing */}
            <TabsContent value="hr" className="overflow-x-auto">
            <Table className="text-white">
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="w-1/3 text-white font-semibold">Feature</TableHead>
                    <TableHead className="text-white font-semibold">Starter (₹599)</TableHead>
                    <TableHead className="text-white font-semibold">Professional (₹1,499)</TableHead>
                    <TableHead className="text-white font-semibold">Enterprise (₹2,999)</TableHead>
                  <TableHead className="text-white font-semibold">Custom</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-white/20">
                  <TableCell className="font-medium text-white">Employee Limit</TableCell>
                  <TableCell className="text-white">25</TableCell>
                  <TableCell className="text-white">100</TableCell>
                  <TableCell className="text-white">500</TableCell>
                  <TableCell className="text-white">Unlimited</TableCell>
                </TableRow>
                <TableRow className="border-white/20">
                  <TableCell className="font-medium text-white">HR Management</TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                </TableRow>
                <TableRow className="border-white/20">
                  <TableCell className="font-medium text-white">Attendance Tracking</TableCell>
                  <TableCell className="text-white">Basic</TableCell>
                  <TableCell className="text-white">Advanced</TableCell>
                  <TableCell className="text-white">Advanced</TableCell>
                  <TableCell className="text-white">Custom</TableCell>
                </TableRow>
                <TableRow className="border-white/20">
                  <TableCell className="font-medium text-white">Leave Management</TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                </TableRow>
                <TableRow className="border-white/20">
                  <TableCell className="font-medium text-white">Payroll Processing</TableCell>
                  <TableCell className="text-white">—</TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                </TableRow>
                <TableRow className="border-white/20">
                  <TableCell className="font-medium text-white">Performance Management</TableCell>
                  <TableCell className="text-white">—</TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                </TableRow>
                <TableRow className="border-white/20">
                  <TableCell className="font-medium text-white">Recruitment Tools</TableCell>
                  <TableCell className="text-white">—</TableCell>
                  <TableCell className="text-white">Basic</TableCell>
                  <TableCell className="text-white">Advanced</TableCell>
                  <TableCell className="text-white">Custom</TableCell>
                </TableRow>
                <TableRow className="border-white/20">
                  <TableCell className="font-medium text-white">Training Management</TableCell>
                  <TableCell className="text-white">—</TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                </TableRow>
                <TableRow className="border-white/20">
                  <TableCell className="font-medium text-white">Analytics</TableCell>
                  <TableCell className="text-white">Basic</TableCell>
                  <TableCell className="text-white">Standard</TableCell>
                  <TableCell className="text-white">Advanced</TableCell>
                  <TableCell className="text-white">Custom</TableCell>
                </TableRow>
                <TableRow className="border-white/20">
                  <TableCell className="font-medium text-white">API Access</TableCell>
                  <TableCell className="text-white">—</TableCell>
                  <TableCell className="text-white">—</TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                </TableRow>
                <TableRow className="border-white/20">
                  <TableCell className="font-medium text-white">Support</TableCell>
                  <TableCell className="text-white">Email</TableCell>
                  <TableCell className="text-white">Priority</TableCell>
                  <TableCell className="text-white">24/7 Priority</TableCell>
                  <TableCell className="text-white">Dedicated Manager</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </TabsContent>

            {/* CRM Pricing */}
            <TabsContent value="crm" className="overflow-x-auto">
              <Table className="text-white">
                <TableHeader>
                  <TableRow className="border-white/20">
                    <TableHead className="w-1/3 text-white font-semibold">Feature</TableHead>
                    <TableHead className="text-white font-semibold">Starter (₹2,399)</TableHead>
                    <TableHead className="text-white font-semibold">Professional (₹4,899)</TableHead>
                    <TableHead className="text-white font-semibold">Enterprise (₹8,299)</TableHead>
                    <TableHead className="text-white font-semibold">Custom</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Contact Management</TableCell>
                    <TableCell className="text-white">Up to 1,000 Contacts</TableCell>
                    <TableCell className="text-white">Unlimited</TableCell>
                    <TableCell className="text-white">Unlimited + AI Scoring</TableCell>
                    <TableCell className="text-white">Custom</TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Sales Pipeline</TableCell>
                    <TableCell className="text-white">Basic</TableCell>
                    <TableCell className="text-white">Advanced</TableCell>
                    <TableCell className="text-white">Forecasting + AI</TableCell>
                    <TableCell className="text-white">Tailored</TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Email Integration</TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Reporting & Dashboards</TableCell>
                    <TableCell className="text-white">Basic</TableCell>
                    <TableCell className="text-white">Advanced</TableCell>
                    <TableCell className="text-white">Advanced + Custom</TableCell>
                    <TableCell className="text-white">Custom</TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Marketing Automation</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Custom Workflows</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">API Access</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Support</TableCell>
                    <TableCell className="text-white">Email</TableCell>
                    <TableCell className="text-white">Priority</TableCell>
                    <TableCell className="text-white">24/7 Premium</TableCell>
                    <TableCell className="text-white">Dedicated</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            {/* ERP Pricing */}
            <TabsContent value="erp" className="overflow-x-auto">
              <Table className="text-white">
                <TableHeader>
                  <TableRow className="border-white/20">
                    <TableHead className="w-1/3 text-white font-semibold">Feature</TableHead>
                    <TableHead className="text-white font-semibold">Starter (₹3,999)</TableHead>
                    <TableHead className="text-white font-semibold">Professional (₹7,199)</TableHead>
                    <TableHead className="text-white font-semibold">Enterprise (₹12,099)</TableHead>
                    <TableHead className="text-white font-semibold">Custom</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Financial Management</TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Inventory Management</TableCell>
                    <TableCell className="text-white">Up to 10K Items</TableCell>
                    <TableCell className="text-white">Unlimited Items</TableCell>
                    <TableCell className="text-white">Advanced + AI Analytics</TableCell>
                    <TableCell className="text-white">Custom</TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Order & Procurement</TableCell>
                    <TableCell className="text-white">Basic</TableCell>
                    <TableCell className="text-white">Advanced</TableCell>
                    <TableCell className="text-white">Full SCM</TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Multi-location/Company</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Workflow Automation</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">BI Integration</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white">Optional</TableCell>
                    <TableCell className="text-white">Advanced</TableCell>
                    <TableCell className="text-white">Custom</TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Support</TableCell>
                    <TableCell className="text-white">Email</TableCell>
                    <TableCell className="text-white">Priority</TableCell>
                    <TableCell className="text-white">24/7 Premium</TableCell>
                    <TableCell className="text-white">Dedicated</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            {/* IT Asset Management Pricing */}
            <TabsContent value="itam" className="overflow-x-auto">
              <Table className="text-white">
                <TableHeader>
                  <TableRow className="border-white/20">
                    <TableHead className="w-1/3 text-white font-semibold">Feature</TableHead>
                    <TableHead className="text-white font-semibold">Starter (₹1,599)</TableHead>
                    <TableHead className="text-white font-semibold">Professional (₹3,199)</TableHead>
                    <TableHead className="text-white font-semibold">Enterprise (₹5,699)</TableHead>
                    <TableHead className="text-white font-semibold">Custom</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Asset Tracking</TableCell>
                    <TableCell className="text-white">Up to 500 Assets</TableCell>
                    <TableCell className="text-white">Unlimited</TableCell>
                    <TableCell className="text-white">AI Optimization</TableCell>
                    <TableCell className="text-white">Custom</TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Maintenance Scheduling</TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white">Predictive</TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Compliance Tracking</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">API & Integration</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white">Optional</TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Custom Reports</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Multi-location Support</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Support</TableCell>
                    <TableCell className="text-white">Email</TableCell>
                    <TableCell className="text-white">Priority</TableCell>
                    <TableCell className="text-white">24/7 Premium</TableCell>
                    <TableCell className="text-white">Dedicated</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            {/* Business Intelligence Pricing */}
            <TabsContent value="bi" className="overflow-x-auto">
              <Table className="text-white">
                <TableHeader>
                  <TableRow className="border-white/20">
                    <TableHead className="w-1/3 text-white font-semibold">Feature</TableHead>
                    <TableHead className="text-white font-semibold">Starter (₹3,299)</TableHead>
                    <TableHead className="text-white font-semibold">Professional (₹6,599)</TableHead>
                    <TableHead className="text-white font-semibold">Enterprise (₹10,799)</TableHead>
                    <TableHead className="text-white font-semibold">Custom</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Dashboards/Templates</TableCell>
                    <TableCell className="text-white">10 Prebuilt</TableCell>
                    <TableCell className="text-white">Unlimited + Custom</TableCell>
                    <TableCell className="text-white">White-label BI</TableCell>
                    <TableCell className="text-white">Custom</TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Data Integration</TableCell>
                    <TableCell className="text-white">CSV/Manual Import</TableCell>
                    <TableCell className="text-white">Tools + Real-time</TableCell>
                    <TableCell className="text-white">Advanced + API</TableCell>
                    <TableCell className="text-white">Tailored</TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Predictive Analytics</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Visualizations</TableCell>
                    <TableCell className="text-white">Basic</TableCell>
                    <TableCell className="text-white">Advanced</TableCell>
                    <TableCell className="text-white">Advanced + AI</TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Modeling & Custom Data</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Support</TableCell>
                    <TableCell className="text-white">Email</TableCell>
                    <TableCell className="text-white">Priority</TableCell>
                    <TableCell className="text-white">24/7 Premium</TableCell>
                    <TableCell className="text-white">Dedicated</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            {/* Automation Hub Pricing */}
            <TabsContent value="automation" className="overflow-x-auto">
              <Table className="text-white">
                <TableHeader>
                  <TableRow className="border-white/20">
                    <TableHead className="w-1/3 text-white font-semibold">Feature</TableHead>
                    <TableHead className="text-white font-semibold">Starter (₹2,099)</TableHead>
                    <TableHead className="text-white font-semibold">Professional (₹4,599)</TableHead>
                    <TableHead className="text-white font-semibold">Enterprise (₹7,999)</TableHead>
                    <TableHead className="text-white font-semibold">Custom</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Workflow Automation</TableCell>
                    <TableCell className="text-white">10 Workflows</TableCell>
                    <TableCell className="text-white">Unlimited</TableCell>
                    <TableCell className="text-white">AI + ML + Triggers</TableCell>
                    <TableCell className="text-white">Custom</TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">RPA</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">API Access</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white">Optional</TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Monitoring & Analytics</TableCell>
                    <TableCell className="text-white">Basic</TableCell>
                    <TableCell className="text-white">Advanced</TableCell>
                    <TableCell className="text-white">AI-Driven</TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Custom Integration</TableCell>
                    <TableCell className="text-white"><X className="h-5 w-5 text-red-400" /></TableCell>
                    <TableCell className="text-white">Optional</TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                    <TableCell className="text-white"><Check className="h-5 w-5 text-green-400" /></TableCell>
                  </TableRow>
                  <TableRow className="border-white/20">
                    <TableCell className="font-medium text-white">Support</TableCell>
                    <TableCell className="text-white">Email</TableCell>
                    <TableCell className="text-white">Priority</TableCell>
                    <TableCell className="text-white">24/7 Premium</TableCell>
                    <TableCell className="text-white">Dedicated</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our pricing and plans"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Can I switch plans later?
              </h3>
              <p className="text-gray-700">
                Yes, you can upgrade, downgrade, or change your plan at any time. Changes to your subscription will be prorated based on the time remaining in your billing cycle.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Do you offer discounts for non-profits?
              </h3>
              <p className="text-gray-700">
                Yes, we offer special pricing for registered non-profit organizations. Please contact our sales team for more information.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                What payment methods do you accept?
              </h3>
              <p className="text-gray-700">
                We accept all major credit cards, UPI, NetBanking, and bank transfers for annual plans. For custom plans, we also offer invoice-based payments.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Is there a setup fee?
              </h3>
              <p className="text-gray-700">
                No, there are no setup fees for our standard plans. For custom implementations or migrations, there may be one-time professional services fees.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                How does the free trial work?
              </h3>
              <p className="text-gray-700">
                All our standard plans come with a 30-day free trial. No credit card is required to start, and you'll have access to all features of your selected plan during the trial period.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Can I add more employees later?
              </h3>
              <p className="text-gray-700">
                Absolutely! You can adjust your employee count at any time. If you exceed your plan's limit, we'll automatically suggest an upgrade to the appropriate tier.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Trial Information */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your 30-Day Free Trial</h2>
            <p className="text-lg text-gray-600 mb-8">
              Try SmartsuiteX risk-free for 30 days. No credit card required, and no obligations.
            </p>
            <Button size="lg" asChild>
              <Link to="/register">Get Started Now</Link>
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Need help choosing the right plan? Contact our sales team for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Sales */}
      <CTASection
        title="Need a Custom Solution?"
        description="Contact our sales team to discuss your specific requirements and get a tailored solution for your business."
        bgColor="accent"
      >
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">Contact Sales</Link>
        </Button>
      </CTASection>
    </>
  );
}