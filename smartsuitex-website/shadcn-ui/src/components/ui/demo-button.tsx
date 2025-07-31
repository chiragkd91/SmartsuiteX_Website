import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Sparkles, 
  Info, 
  Copy, 
  CheckCircle, 
  Monitor, 
  Users, 
  Database, 
  Shield,
  Zap,
  Globe
} from 'lucide-react';
import { toast } from 'sonner';

export const DemoButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const demoInfo = {
    url: 'http://localhost:5173/',
    email: 'demo@smartsuitex.com',
    password: 'demo123',
    features: [
      'Complete SaaS Platform',
      'HR Management System',
      'ERP & CRM Integration',
      'Business Intelligence',
      'Real-time Analytics',
      'User Management',
      'Billing & Subscriptions',
      'Email Functionality'
    ]
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast.success(`${field} copied to clipboard!`);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const DemoInfoCard = ({ title, value, icon: Icon, copyable = false, field = '' }: {
    title: string;
    value: string;
    icon: any;
    copyable?: boolean;
    field?: string;
  }) => (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-blue-600" />
          <CardTitle className="text-sm font-medium text-blue-900">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <code className="text-sm text-blue-800 bg-blue-100 px-2 py-1 rounded">
            {value}
          </code>
          {copyable && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(value, field)}
              className="h-8 w-8 p-0 hover:bg-blue-200"
            >
              {copiedField === field ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4 text-blue-600" />
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          DEMO VERSION
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-6 w-6 text-blue-600" />
            <DialogTitle className="text-xl font-bold text-blue-900">
              SmartSuitex Demo
            </DialogTitle>
          </div>
          <DialogDescription className="text-gray-600">
            This is a demonstration of SmartSuitex. All data is mock data for showcase purposes.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Demo Credentials */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              Demo Credentials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <DemoInfoCard
                title="Demo URL"
                value={demoInfo.url}
                icon={Globe}
                copyable={true}
                field="URL"
              />
              <DemoInfoCard
                title="Email"
                value={demoInfo.email}
                icon={Users}
                copyable={true}
                field="Email"
              />
              <DemoInfoCard
                title="Password"
                value={demoInfo.password}
                icon={Shield}
                copyable={true}
                field="Password"
              />
            </div>
          </div>

          <Separator />

          {/* Demo Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-600" />
              Demo Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {demoInfo.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Demo Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-amber-800 mb-1">Demo Information</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• All data shown is mock data for demonstration purposes</li>
                  <li>• Real-time features are simulated</li>
                  <li>• OAuth and email functionality are simulated</li>
                  <li>• This is a frontend-only demo without backend integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={() => {
                copyToClipboard(demoInfo.url, 'URL');
                window.open(demoInfo.url, '_blank');
              }}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              <Monitor className="h-4 w-4 mr-2" />
              Open Demo
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                const credentials = `Email: ${demoInfo.email}\nPassword: ${demoInfo.password}`;
                copyToClipboard(credentials, 'Credentials');
              }}
              className="flex-1"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy Credentials
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoButton; 