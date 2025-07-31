import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  twitterImage?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

export const SEOHead = ({
  title = 'SmartSuitex - Complete Business Management Suite',
  description = 'All-in-one business management platform for Indian businesses. HR, ERP, CRM & Business Intelligence in one integrated solution.',
  keywords = 'business management, HR software, ERP system, CRM platform, business intelligence, Indian business software',
  canonical,
  ogImage = 'https://smartsuitex.com/og-image.jpg',
  twitterImage = 'https://smartsuitex.com/twitter-image.jpg',
  structuredData,
  noIndex = false,
  noFollow = false,
}: SEOHeadProps) => {
  const fullTitle = title.includes('SmartSuitex') ? title : `${title} | SmartSuitex`;
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://smartsuitex.com');
  const robots = noIndex || noFollow ? `${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}` : 'index, follow';

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SmartSuitex",
    "url": "https://smartsuitex.com",
            "logo": "/images/logos/Logo.png",
    "description": "Complete Business Management Suite with HR, ERP, CRM & Business Intelligence in One Integrated Platform",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9157067587",
      "contactType": "customer service",
      "email": "info@smartsuitex.com"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  // Track page view for analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: fullTitle,
        page_location: currentUrl,
        send_page_view: true
      });
    }
  }, [fullTitle, currentUrl]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="SmartSuitex" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={twitterImage} />
      <meta property="twitter:site" content="@smartsuitex" />
      <meta property="twitter:creator" content="@smartsuitex" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

// Breadcrumb structured data component
export const BreadcrumbStructuredData = ({ items }: { items: Array<{ name: string; url: string }> }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

// FAQ structured data component
export const FAQStructuredData = ({ questions }: { questions: Array<{ question: string; answer: string }> }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

// Product structured data component
export const ProductStructuredData = ({ 
  name, 
  description, 
  price, 
  currency = "INR",
  rating = 4.8,
  reviewCount = 1250,
  availability = "InStock"
}: {
  name: string;
  description: string;
  price: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  availability?: string;
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": `https://schema.org/${availability}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "ratingCount": reviewCount
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default SEOHead; 