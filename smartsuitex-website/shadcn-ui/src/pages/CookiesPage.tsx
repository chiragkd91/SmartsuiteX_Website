import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Shield,
  Settings,
  Clock,
  AlertTriangle,
  CheckCircle,
  Info,
  Cookie,
  Eye,
  Lock,
  Globe,
  BarChart3,
  TrendingUp,
} from 'lucide-react';

const CookiesPage = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: ['Authentication', 'Security', 'Session management'],
      duration: 'Session',
      icon: Shield,
      color: 'bg-red-100 text-red-800',
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Google Analytics', 'Page views', 'User behavior'],
      duration: '2 years',
      icon: BarChart3,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
      examples: ['Language settings', 'Theme preferences', 'Form data'],
      duration: '1 year',
      icon: Settings,
      color: 'bg-green-100 text-green-800',
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant advertisements.',
      examples: ['Social media', 'Advertising networks', 'Retargeting'],
      duration: '90 days',
      icon: TrendingUp,
      color: 'bg-purple-100 text-purple-800',
    },
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish unique users',
      duration: '2 years',
      type: 'Analytics',
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '24 hours',
      type: 'Analytics',
    },
    {
      name: '_gat',
      purpose: 'Google Analytics - Used to throttle request rate',
      duration: '1 minute',
      type: 'Analytics',
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session across pages',
      duration: 'Session',
      type: 'Essential',
    },
    {
      name: 'user_preferences',
      purpose: 'Stores user preferences and settings',
      duration: '1 year',
      type: 'Functional',
    },
    {
      name: 'marketing_consent',
      purpose: 'Tracks user consent for marketing communications',
      duration: '1 year',
      type: 'Marketing',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Cookie className="h-16 w-16" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl">
              Learn how we use cookies and similar technologies to enhance your experience on SmartSuitex
            </p>
            <p className="text-blue-200 mt-2">
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
                <Info className="h-5 w-5 text-blue-600" />
                What Are Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and personalizing content.
              </p>
              <p className="text-gray-700">
                This Cookie Policy explains how SmartSuitex uses cookies and similar technologies 
                when you visit our website, and how you can control their use.
              </p>
            </CardContent>
          </Card>

          {/* Cookie Types */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                Types of Cookies We Use
              </CardTitle>
              <CardDescription>
                We use different types of cookies for various purposes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cookieTypes.map((type) => (
                  <div key={type.name} className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${type.color}`}>
                        <type.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{type.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-600">Duration: {type.duration}</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium text-gray-700">Examples:</span>
                            <ul className="list-disc list-inside text-gray-600 mt-1">
                              {type.examples.map((example) => (
                                <li key={example}>{example}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cookie Details Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-600" />
                Specific Cookies We Use
              </CardTitle>
              <CardDescription>
                Detailed information about the cookies we use on our website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Cookie Name</th>
                      <th className="text-left p-3 font-semibold">Purpose</th>
                      <th className="text-left p-3 font-semibold">Duration</th>
                      <th className="text-left p-3 font-semibold">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieDetails.map((cookie) => (
                      <tr key={cookie.name} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-mono text-sm">{cookie.name}</td>
                        <td className="p-3 text-sm">{cookie.purpose}</td>
                        <td className="p-3 text-sm">{cookie.duration}</td>
                        <td className="p-3">
                          <Badge variant="outline" className="text-xs">
                            {cookie.type}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                Third-Party Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We may also use third-party cookies from trusted partners to help us analyze 
                website usage and provide you with relevant content and advertisements.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Our Third-Party Partners:</h4>
                <ul className="list-disc list-inside text-blue-700 space-y-1">
                  <li>Google Analytics - Website analytics and performance tracking</li>
                  <li>Google Ads - Advertising and remarketing</li>
                  <li>Facebook Pixel - Social media advertising</li>
                  <li>LinkedIn Insight Tag - Professional network advertising</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Cookie Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                Managing Your Cookie Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                You have several options for managing cookies on our website:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Browser Settings
                  </h4>
                  <p className="text-sm text-gray-600">
                    Most web browsers allow you to control cookies through their settings. 
                    You can delete existing cookies and prevent new ones from being set.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                    Cookie Consent
                  </h4>
                  <p className="text-sm text-gray-600">
                    When you first visit our website, you'll see a cookie consent banner 
                    where you can choose which types of cookies to accept.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Lock className="h-4 w-4 text-purple-600" />
                    Opt-Out Links
                  </h4>
                  <p className="text-sm text-gray-600">
                    For third-party cookies, you can opt out directly through the 
                    respective service providers' websites.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    Essential Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Please note that essential cookies cannot be disabled as they are 
                    necessary for the website to function properly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates and Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Updates and Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time to reflect changes 
                in our practices or for other operational, legal, or regulatory reasons. 
                We will notify you of any material changes by posting the new Cookie Policy 
                on this page.
              </p>
              <div className="bg-gray-50 border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Contact Us</h4>
                <p className="text-sm text-gray-600">
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="mt-2 text-sm">
                  <p className="text-gray-600">Email: privacy@smartsuitex.com</p>
                  <p className="text-gray-600">Phone: +91 98765 43210</p>
                  <p className="text-gray-600">Address: SmartSuitex Technologies, Bangalore, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage; 