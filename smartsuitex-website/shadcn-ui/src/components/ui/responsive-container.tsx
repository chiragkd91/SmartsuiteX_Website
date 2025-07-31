import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
  fluid?: boolean;
}

export const ResponsiveContainer = ({
  children,
  className,
  maxWidth = '7xl',
  padding = 'lg',
  centered = true,
  fluid = false,
}: ResponsiveContainerProps) => {
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
  };

  const paddingClasses = {
    none: '',
    sm: 'px-4 sm:px-6 lg:px-8',
    md: 'px-6 sm:px-8 lg:px-12',
    lg: 'px-8 sm:px-12 lg:px-16 xl:px-20',
    xl: 'px-12 sm:px-16 lg:px-24 xl:px-32',
  };

  return (
    <div
      className={cn(
        'w-full',
        !fluid && maxWidthClasses[maxWidth],
        centered && !fluid && 'mx-auto',
        paddingClasses[padding],
        // Safe area support for mobile devices
        'safe-left safe-right',
        className
      )}
    >
      {children}
    </div>
  );
};

// Responsive grid component
interface ResponsiveGridProps {
  children: ReactNode;
  className?: string;
  cols?: {
    mobile?: number;
    tablet?: number;
    laptop?: number;
    desktop?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  autoFit?: boolean;
  autoFill?: boolean;
}

export const ResponsiveGrid = ({
  children,
  className,
  cols = { mobile: 1, tablet: 2, laptop: 3, desktop: 4 },
  gap = 'lg',
  autoFit = false,
  autoFill = false,
}: ResponsiveGridProps) => {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  const gridClasses = autoFit 
    ? 'grid-cols-auto-fit'
    : autoFill
    ? 'grid-cols-auto-fill'
    : `grid-cols-${cols.mobile} sm:grid-cols-${cols.tablet} lg:grid-cols-${cols.laptop} xl:grid-cols-${cols.desktop}`;

  return (
    <div
      className={cn(
        'grid',
        gridClasses,
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
};

// Responsive text component
interface ResponsiveTextProps {
  children: ReactNode;
  className?: string;
  size?: {
    mobile?: string;
    tablet?: string;
    laptop?: string;
    desktop?: string;
  };
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  align?: 'left' | 'center' | 'right' | 'justify';
}

export const ResponsiveText = ({
  children,
  className,
  size = { mobile: 'base', tablet: 'lg', laptop: 'xl', desktop: '2xl' },
  weight = 'normal',
  align = 'left',
}: ResponsiveTextProps) => {
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  return (
    <div
      className={cn(
        `text-${size.mobile} sm:text-${size.tablet} lg:text-${size.laptop} xl:text-${size.desktop}`,
        weightClasses[weight],
        alignClasses[align],
        'leading-relaxed',
        className
      )}
    >
      {children}
    </div>
  );
};

// Responsive spacing component
interface ResponsiveSpacingProps {
  children: ReactNode;
  className?: string;
  padding?: {
    mobile?: string;
    tablet?: string;
    laptop?: string;
    desktop?: string;
  };
  margin?: {
    mobile?: string;
    tablet?: string;
    laptop?: string;
    desktop?: string;
  };
}

export const ResponsiveSpacing = ({
  children,
  className,
  padding,
  margin,
}: ResponsiveSpacingProps) => {
  const paddingClasses = padding ? {
    mobile: `p-${padding.mobile}`,
    tablet: `sm:p-${padding.tablet}`,
    laptop: `lg:p-${padding.laptop}`,
    desktop: `xl:p-${padding.desktop}`,
  } : {};

  const marginClasses = margin ? {
    mobile: `m-${margin.mobile}`,
    tablet: `sm:m-${margin.tablet}`,
    laptop: `lg:m-${margin.laptop}`,
    desktop: `xl:m-${margin.desktop}`,
  } : {};

  return (
    <div
      className={cn(
        Object.values(paddingClasses),
        Object.values(marginClasses),
        className
      )}
    >
      {children}
    </div>
  );
};

// Device detection hook
import { useState, useEffect } from 'react';

export const useDeviceDetection = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
    isTouch: false,
    isPortrait: false,
    isLandscape: false,
    screenWidth: 0,
    screenHeight: 0,
  });

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isPortrait = height > width;
      const isLandscape = width > height;

      setDevice({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isLaptop: width >= 1024 && width < 1440,
        isDesktop: width >= 1440,
        isTouch,
        isPortrait,
        isLandscape,
        screenWidth: width,
        screenHeight: height,
      });
    };

    updateDevice();
    window.addEventListener('resize', updateDevice);
    window.addEventListener('orientationchange', updateDevice);

    return () => {
      window.removeEventListener('resize', updateDevice);
      window.removeEventListener('orientationchange', updateDevice);
    };
  }, []);

  return device;
};

// Responsive image component
interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  aspectRatio?: 'square' | 'video' | 'photo' | 'wide' | 'ultrawide' | 'auto';
}

export const ResponsiveImage = ({
  src,
  alt,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  loading = 'lazy',
  aspectRatio = 'auto',
}: ResponsiveImageProps) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    photo: 'aspect-photo',
    wide: 'aspect-wide',
    ultrawide: 'aspect-ultrawide',
    auto: '',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        'w-full h-auto object-cover',
        aspectRatioClasses[aspectRatio],
        'rounded-lg',
        className
      )}
      sizes={sizes}
      loading={loading}
    />
  );
};

export default ResponsiveContainer; 