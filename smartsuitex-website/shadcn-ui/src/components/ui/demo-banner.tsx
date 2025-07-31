import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Info } from 'lucide-react';

interface DemoBannerProps {
  className?: string;
}

export const DemoBanner = ({ className = '' }: DemoBannerProps) => {
  return (
    <Alert className={`bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 ${className}`}>
      <Sparkles className="h-4 w-4 text-blue-600" />
      <AlertDescription className="flex items-center gap-2 text-blue-800">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
          DEMO VERSION
        </Badge>
        <span className="text-sm">
          This is a demonstration of SmartSuitex. All data is mock data for showcase purposes.
          <br />
          <span className="text-xs text-blue-600">
            Demo URL: http://localhost:5173/ | Login: demo@smartsuitex.com / demo123
          </span>
        </span>
      </AlertDescription>
    </Alert>
  );
};

export const DemoInfoCard = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <Info className="h-5 w-5 text-blue-600 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-blue-900 mb-2">Demo Information</h3>
          <div className="space-y-2 text-sm text-blue-800">
            <p>
              <strong>Demo URL:</strong> http://localhost:5173/
            </p>
            <p>
              <strong>Demo Credentials:</strong> demo@smartsuitex.com / demo123
            </p>
            <p>
              <strong>Features:</strong> Complete SaaS platform with CRM, Projects, Inventory, Billing, and more
            </p>
            <p className="text-xs text-blue-600">
              All data is mock data for demonstration purposes. Real-time features, OAuth, and email functionality are simulated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBanner; 