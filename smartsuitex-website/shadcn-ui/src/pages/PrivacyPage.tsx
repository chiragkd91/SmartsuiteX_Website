import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Shield,
  Calendar,
  User,
  Lock,
  Eye,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-green-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-xl text-gray-600 mb-4">
              Last updated: January 15, 2024
            </p>
            <Badge variant="outline" className="text-sm">
              GDPR Compliant
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Privacy Matters</CardTitle>
            <CardDescription>
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              This Privacy Policy explains how SmartSuitex ("we," "us," or "our") collects, uses, and protects your information when you use our service. We are committed to ensuring that your privacy is protected.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-800">Secure</h3>
                <p className="text-sm text-green-700">Enterprise-grade security</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-800">Transparent</h3>
                <p className="text-sm text-blue-700">Clear data practices</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-purple-800">Compliant</h3>
                <p className="text-sm text-purple-700">GDPR & CCPA compliant</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
            <CardDescription>
              We collect information to provide and improve our services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Company and job title</li>
                <li>Billing and payment information</li>
                <li>Account credentials and preferences</li>
                <li>Communication history with our support team</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Usage Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Log data and device information</li>
                <li>Usage patterns and feature interactions</li>
                <li>Performance data and error reports</li>
                <li>IP address and location data</li>
                <li>Browser type and version</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Business Data</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Customer and contact information you input</li>
                <li>Project and task data</li>
                <li>Inventory and sales records</li>
                <li>Analytics and reporting data</li>
                <li>Integration data from third-party services</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
            <CardDescription>
              We use your information to provide, improve, and secure our services.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Service Provision</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and payments</li>
                  <li>Send service-related communications</li>
                  <li>Provide customer support</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Service Improvement</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Analyze usage patterns</li>
                  <li>Develop new features</li>
                  <li>Improve user experience</li>
                  <li>Conduct research and analytics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Data Sharing and Disclosure</CardTitle>
            <CardDescription>
              We do not sell your personal information. We may share data in limited circumstances.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-800">We Do Not Sell Your Data</p>
                  <p className="text-yellow-700 text-sm">
                    SmartSuitex does not sell, trade, or rent your personal information to third parties for marketing purposes.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">When We May Share Data</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our service</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
            <CardDescription>
              We implement robust security measures to protect your information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Security Measures</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>End-to-end encryption</li>
                  <li>Regular security audits</li>
                  <li>Access controls and authentication</li>
                  <li>Data backup and recovery</li>
                  <li>Employee security training</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Compliance</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>GDPR compliance</li>
                  <li>CCPA compliance</li>
                  <li>SOC 2 Type II certification</li>
                  <li>ISO 27001 standards</li>
                  <li>Regular compliance audits</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Privacy Rights</CardTitle>
            <CardDescription>
              You have control over your personal information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Access and Control</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Access your personal data</li>
                  <li>Update or correct information</li>
                  <li>Delete your account and data</li>
                  <li>Export your data</li>
                  <li>Opt-out of communications</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Additional Rights</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Restrict data processing</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent</li>
                  <li>Lodge complaints</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full">
                <User className="mr-2 h-4 w-4" />
                Manage Your Privacy Settings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cookies and Tracking</CardTitle>
            <CardDescription>
              We use cookies and similar technologies to improve your experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and features</li>
              <li>Improve our services and user experience</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-800">Cookie Control</p>
                  <p className="text-blue-700 text-sm">
                    You can control cookie settings through your browser preferences or our cookie consent manager.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Have questions about your privacy? We're here to help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-gray-600">privacy@smartsuitex.com</p>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Phone</h3>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Address</h3>
                <p className="text-sm text-gray-600">123 Business St, Suite 100<br />New York, NY 10001</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline">
                <Shield className="mr-2 h-4 w-4" />
                Request Data Report
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <Separator className="mb-6" />
          <p className="text-gray-500 text-sm">
            This Privacy Policy was last updated on January 15, 2024. We may update this policy from time to time, and we will notify you of any material changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage; 