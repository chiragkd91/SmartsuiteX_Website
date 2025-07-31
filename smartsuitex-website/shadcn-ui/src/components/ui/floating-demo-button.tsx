import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, X, Calendar, Clock, Users, Zap } from 'lucide-react';

interface FloatingDemoButtonProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  showBadge?: boolean;
}

export function FloatingDemoButton({ 
  position = 'bottom-right', 
  showBadge = true 
}: FloatingDemoButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4'
  };

  const demoFeatures = [
    {
      icon: <Calendar className="h-4 w-4" />,
      text: '30-60 min sessions'
    },
    {
      icon: <Users className="h-4 w-4" />,
      text: 'Expert guidance'
    },
    {
      icon: <Zap className="h-4 w-4" />,
      text: 'Live demo'
    }
  ];

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Expanded Demo Info */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-lg border p-4 w-64">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Schedule a Demo</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2 mb-4">
            {demoFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                {feature.icon}
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-2">
            <Button asChild className="w-full" size="sm">
              <Link to="/demo">Schedule Demo</Link>
            </Button>
            <Button asChild variant="outline" className="w-full" size="sm">
              <Link to="/register">Customer Inquiry</Link>
            </Button>
          </div>
        </div>
      )}

      {/* Main Demo Button */}
      <div className="relative">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg rounded-full h-14 w-14 p-0"
        >
          <Play className="h-6 w-6" />
        </Button>
        
        {showBadge && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs"
          >
            <span className="animate-pulse">!</span>
          </Badge>
        )}
      </div>
    </div>
  );
} 