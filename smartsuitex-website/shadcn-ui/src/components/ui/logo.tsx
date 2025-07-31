import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white' | 'blue';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  variant = 'default',
  showText = true
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  const colorClasses = {
    default: 'text-blue-600',
    white: 'text-white',
    blue: 'text-blue-600'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Image */}
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        <img
          src="/images/logos/Logo.png"
          alt="SmartSuitex Logo"
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback to SVG if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full ${colorClasses[variant]}">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M7 7c0-1.1.9-2 2-2s2 .9 2 2-1 3.5-2 3.5-2-2.4-2-3.5z"/>
                  <path d="M12 19c1.1 0 2-.9 2-2s-1-3.5-2-3.5-2 2.4-2 3.5.9 2 2 2z"/>
                  <path d="M10 10c0-.55.45-1 1-1s1 .45 1 1-1 2.5-1 2.5-1-1.95-1-2.5z"/>
                  <path d="M12 14c.55 0 1-.45 1-1s-1-2.5-1-2.5-1 1.95-1 2.5.45 1 1 1z"/>
                </svg>
              `;
            }
          }}
        />
      </div>
      
      {/* Text Logo */}
      {showText && (
        <span className={`font-bold ${textSizeClasses[size]} ${colorClasses[variant]} tracking-wide`}>
          SmartSuitex
        </span>
      )}
    </div>
  );
};

export default Logo; 