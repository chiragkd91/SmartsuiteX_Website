import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Shield,
  UserCheck,
  Eye,
  Download,
  Edit,
  Trash2,
  Lock,
  AlertTriangle,
  CheckCircle,
  Info,
  FileText,
  Mail,
  Phone,
  Globe,
  Database,
  Key,
  Clock,
} from 'lucide-react';

const GDPRPage = () => {
  const userRights = [
    {
      title: 'Right to Access',
      description: 'You have the right to request access to your personal data and information about how we process it.',
      icon: Eye,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      title: 'Right to Rectification',
      description: 'You can request correction of inaccurate or incomplete personal data.',
      icon: Edit,
      color: 'bg-green-100 text-green-800',
    },
    {
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data in certain circumstances.',
      icon: Trash2,
      color: 'bg-red-100 text-red-800',
    },
    {
      title: 'Right to Portability',
      description: 'You can request a copy of your data in a structured, machine-readable format.',
      icon: Download,
      color: 'bg-purple-100 text-purple-800',
    },
    {
      title: 'Right to Object',
      description: 'You can object to processing of your personal data in certain situations.',
      icon: AlertTriangle,
      color: 'bg-orange-100 text-orange-800',
    },
    {
      title: 'Right to Restriction',
      description: 'You can request restriction of processing in certain circumstances.',
      icon: Lock,
      color: 'bg-gray-100 text-gray-800',
    },
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      examples: ['Name', 'Email address', 'Phone number', 'Company name'],
      purpose: 'Account creation, communication, service delivery',
      retention: 'Until account deletion or 7 years for legal compliance',
    },
    {
      category: 'Usage Data',
      examples: ['IP address', 'Browser type', 'Pages visited', 'Time spent'],
      purpose: 'Website analytics, security, service improvement',
      retention: '2 years for analytics, 90 days for security logs',
    },
    {
      category: 'Technical Data',
      examples: ['Device information', 'Operating system', 'Screen resolution'],
      purpose: 'Service optimization, troubleshooting, compatibility',
      retention: '1 year',
    },
    {
      category: 'Communication Data',
      examples: ['Support tickets', 'Chat logs', 'Email correspondence'],
      purpose: 'Customer support, service improvement',
      retention: '3 years for support, 1 year for general communication',
    },
  ];

  const complianceMeasures = [
    {
      title: 'Data Protection by Design',
      description: 'We implement privacy and data protection measures from the initial design stage of all our systems.',
      icon: Shield,
    },
    {
      title: 'Regular Security Audits',
      description: 'We conduct regular security assessments and penetration testing to ensure data protection.',
      icon: CheckCircle,
    },
    {
      title: 'Employee Training',
      description: 'All employees receive regular training on data protection and GDPR compliance.',
      icon: UserCheck,
    },
    {
      title: 'Data Minimization',
      description: 'We only collect and process personal data that is necessary for specified purposes.',
      icon: Database,
    },
    {
      title: 'Encryption',
      description: 'All personal data is encrypted both in transit and at rest using industry-standard protocols.',
      icon: Key,
    },
    {
      title: 'Access Controls',
      description: 'Strict access controls ensure only authorized personnel can access personal data.',
      icon: Lock,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16" />
            </div>
            <h1 className="text-4xl font-bold mb-4">GDPR Compliance</h1>
            <p className="text-xl">
              Your data protection and privacy rights under the General Data Protection Regulation
            </p>
            <p className="text-green-200 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-green-600" />
                What is GDPR?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law 
                that came into effect on May 25, 2018. It applies to all organizations operating within 
                the EU and those that offer goods or services to individuals in the EU.
              </p>
              <p className="text-gray-700">
                At SmartSuitex, we are committed to protecting your privacy and ensuring compliance 
                with GDPR requirements. This page explains your rights and how we handle your personal data.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-green-600" />
                Your GDPR Rights
              </CardTitle>
              <CardDescription>
                As a data subject, you have several rights under GDPR
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userRights.map((right) => (
                  <div key={right.title} className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${right.color}`}>
                        <right.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{right.title}</h3>
                        <p className="text-sm text-gray-600">{right.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-green-600" />
                Data We Collect and Process
              </CardTitle>
              <CardDescription>
                Categories of personal data we collect and how we use it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {dataCategories.map((category) => (
                  <div key={category.category} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">{category.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Examples:</h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {category.examples.map((example) => (
                            <li key={example}>{example}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Purpose:</h4>
                        <p className="text-gray-600">{category.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Retention:</h4>
                        <p className="text-gray-600">{category.retention}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compliance Measures */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Our Compliance Measures
              </CardTitle>
              <CardDescription>
                How we ensure GDPR compliance and protect your data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {complianceMeasures.map((measure) => (
                  <div key={measure.title} className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-green-100 text-green-800">
                        <measure.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{measure.title}</h3>
                        <p className="text-sm text-gray-600">{measure.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Processing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                Legal Basis for Processing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We process your personal data based on the following legal grounds:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Consent</h4>
                    <p className="text-sm text-gray-600">
                      When you explicitly agree to the processing of your personal data for specific purposes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Contract Performance</h4>
                    <p className="text-sm text-gray-600">
                      When processing is necessary to fulfill our contractual obligations to you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Legitimate Interest</h4>
                    <p className="text-sm text-gray-600">
                      When processing is necessary for our legitimate business interests, provided they don't override your rights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Legal Obligation</h4>
                    <p className="text-sm text-gray-600">
                      When processing is required to comply with legal obligations.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Transfers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-600" />
                International Data Transfers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Your personal data may be transferred to and processed in countries outside the European Economic Area (EEA). 
                We ensure that such transfers comply with GDPR requirements through:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Adequacy decisions by the European Commission</li>
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Binding Corporate Rules (BCRs) for intra-group transfers</li>
                <li>Other appropriate safeguards as required by GDPR</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-600" />
                Exercise Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                To exercise your GDPR rights or if you have any questions about our data processing practices, 
                please contact our Data Protection Officer:
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Contact Information:</h4>
                    <div className="space-y-1 text-sm">
                      <p className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        dpo@smartsuitex.com
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        +91 98765 43210
                      </p>
                      <p className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        www.smartsuitex.com
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Response Time:</h4>
                    <p className="text-sm text-gray-600">
                      We will respond to your request within 30 days of receipt. 
                      In complex cases, this may be extended by up to 60 days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Data Request Form
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact DPO
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GDPRPage; 