import { useState, useEffect } from 'react';
import { Loader2, Smartphone, Building2, BarChart3, Users } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

export function LoadingScreen({ isLoading, onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { icon: <Building2 className="h-8 w-8" />, text: "Initializing SmartSuitex..." },
    { icon: <Users className="h-8 w-8" />, text: "Loading HR Management..." },
    { icon: <BarChart3 className="h-8 w-8" />, text: "Setting up Analytics..." },
    { icon: <Smartphone className="h-8 w-8" />, text: "Preparing Dashboard..." }
  ];

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepInterval);
          return loadingSteps.length - 1;
        }
        return prev + 1;
      });
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [isLoading, onLoadingComplete, loadingSteps.length]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/backgrounds/Backgound Loding.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center text-white">
        {/* Logo and Title */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <img
              src="/images/logos/Logo.png"
              alt="SmartSuitex Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            SmartSuitex
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Complete Business Management Suite
          </p>
        </div>

        {/* Loading Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {loadingSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 transition-all duration-300 ${
                  index <= currentStep ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <div className={`transition-colors duration-300 ${
                  index <= currentStep ? 'text-blue-400' : 'text-white/60'
                }`}>
                  {step.icon}
                </div>
                <span className="text-sm hidden md:block">{step.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-96 mx-auto mb-6">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-sm text-white/80">
            {progress}% Complete
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin text-blue-400" />
          <span className="text-sm text-white/80">Loading...</span>
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-white/60">
          <div className="flex items-center space-x-1">
            <Users className="h-3 w-3" />
            <span>HR Management</span>
          </div>
          <div className="flex items-center space-x-1">
            <Building2 className="h-3 w-3" />
            <span>ERP System</span>
          </div>
          <div className="flex items-center space-x-1">
            <BarChart3 className="h-3 w-3" />
            <span>CRM Platform</span>
          </div>
          <div className="flex items-center space-x-1">
            <Smartphone className="h-3 w-3" />
            <span>Business Intelligence</span>
          </div>
        </div>
      </div>
    </div>
  );
} 