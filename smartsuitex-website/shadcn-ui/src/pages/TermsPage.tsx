import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  FileText,
  Calendar,
  User,
  Shield,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
            </div>
            <p className="text-xl text-gray-600 mb-4">
              Last updated: January 15, 2024
            </p>
            <Badge variant="outline" className="text-sm">
              Version 2.1
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  1. Acceptance of Terms
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  2. Description of Service
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  3. User Accounts
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  4. Acceptable Use Policy
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  5. Payment Terms
                </Button>
              </div>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  6. Privacy Policy
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  7. Intellectual Property
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  8. Limitation of Liability
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  9. Termination
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  10. Contact Information
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                By accessing and using SmartSuitex ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700">
                These Terms of Service ("Terms") govern your use of our website and services. By using our Service, you agree to these Terms in full. If you disagree with these Terms or any part of these Terms, you must not use our Service.
              </p>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                Description of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                SmartSuitex is a comprehensive business management platform that provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Customer Relationship Management (CRM) tools</li>
                <li>Project management and task tracking</li>
                <li>Inventory management and tracking</li>
                <li>Analytics and reporting features</li>
                <li>Team collaboration tools</li>
                <li>Integration with third-party services</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice.
              </p>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                User Accounts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                To access certain features of the Service, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-800">Important</p>
                    <p className="text-yellow-700 text-sm">
                      You are responsible for maintaining the security of your account. We cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                Acceptable Use Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the Service</li>
                <li>Use the Service for any illegal or unauthorized purpose</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to terminate accounts that violate these terms.
              </p>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  5
                </span>
                Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Our Service is offered on a subscription basis. Payment terms include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Monthly or annual billing cycles</li>
                <li>Automatic renewal unless cancelled</li>
                <li>Prorated refunds for plan changes</li>
                <li>30-day money-back guarantee</li>
                <li>Late payment may result in service suspension</li>
              </ul>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">Money-Back Guarantee</p>
                    <p className="text-green-700 text-sm">
                      If you're not satisfied with our service within 30 days, we'll provide a full refund.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  6
                </span>
                Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information. By using our Service, you agree to our Privacy Policy.
              </p>
              <Button variant="outline" className="w-full">
                <Shield className="mr-2 h-4 w-4" />
                View Privacy Policy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  7
                </span>
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                The Service and its original content, features, and functionality are owned by SmartSuitex and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-700">
                You retain ownership of any content you submit to the Service, but you grant us a license to use, modify, and display that content in connection with providing the Service.
              </p>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  8
                </span>
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                In no event shall SmartSuitex, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-gray-700">
                Our total liability to you for any claims arising from the use of our Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
              </p>
            </CardContent>
          </Card>

          {/* Section 9 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  9
                </span>
                Termination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p className="text-gray-700">
                If you wish to terminate your account, you may simply discontinue using the Service or contact us to delete your account.
              </p>
            </CardContent>
          </Card>

          {/* Section 10 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  10
                </span>
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700"><strong>Email:</strong> legal@smartsuitex.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Business St, Suite 100, New York, NY 10001</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Separator className="mb-6" />
          <p className="text-gray-500 text-sm">
            These Terms of Service were last updated on January 15, 2024. We may update these terms from time to time, and we will notify you of any changes by posting the new Terms of Service on this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage; 