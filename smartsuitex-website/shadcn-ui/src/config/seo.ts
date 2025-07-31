// SEO Configuration for SmartSuitex Website

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  twitterImage?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

export interface PageSEOConfig {
  [key: string]: SEOConfig;
}

// Page-specific SEO configurations
export const pageSEOConfig: PageSEOConfig = {
  // Homepage
  '/': {
    title: 'SmartSuitex - Complete Business Management Suite',
    description: 'All-in-one business management platform for Indian businesses. HR, ERP, CRM & Business Intelligence in one integrated solution. Start free trial today!',
    keywords: 'business management, HR software, ERP system, CRM platform, business intelligence, Indian business software, GST compliance, IT asset management',
    structuredData: {
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
    }
  },

  // Product Pages
  '/hr-management': {
    title: 'HR Management Software - SmartSuitex',
    description: 'Complete HR management software for Indian businesses. Employee management, payroll, attendance, performance tracking, and compliance.',
    keywords: 'HR software, employee management, payroll software, attendance tracking, performance management, HR compliance',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SmartSuitex HR Management",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "Complete HR management software for employee management, payroll, attendance, and compliance",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "description": "Free trial available"
      }
    }
  },

  '/erp-system': {
    title: 'ERP System - SmartSuitex',
    description: 'Comprehensive ERP system for Indian businesses. Financial management, inventory, procurement, manufacturing, and order processing.',
    keywords: 'ERP system, enterprise resource planning, financial management, inventory management, procurement software',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SmartSuitex ERP System",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "Comprehensive ERP system for financial management, inventory, procurement, and manufacturing",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "description": "Free trial available"
      }
    }
  },

  '/crm-platform': {
    title: 'CRM Platform - SmartSuitex',
    description: 'Advanced CRM platform for customer relationship management. Lead tracking, sales pipeline, customer analytics, and Indian market focus.',
    keywords: 'CRM platform, customer relationship management, lead management, sales pipeline, customer analytics',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SmartSuitex CRM Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "Advanced CRM platform for lead tracking, sales pipeline, and customer analytics",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "description": "Free trial available"
      }
    }
  },

  // Pricing Page
  '/pricing': {
    title: 'Pricing Plans - SmartSuitex',
    description: 'Choose the perfect pricing plan for your business. Starter, Professional, and Enterprise plans with flexible pricing options.',
    keywords: 'pricing plans, business software pricing, SaaS pricing, enterprise software cost',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "PriceSpecification",
      "name": "SmartSuitex Pricing Plans",
      "description": "Flexible pricing plans for businesses of all sizes",
      "priceCurrency": "INR",
      "validFrom": "2024-01-01"
    }
  },

  // About Page
  '/about': {
    title: 'About SmartSuitex - Our Story',
    description: 'Learn about SmartSuitex, our mission to empower Indian businesses with comprehensive business management solutions.',
    keywords: 'about SmartSuitex, company story, mission, vision, Indian business software company',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SmartSuitex",
      "description": "Empowering Indian businesses with comprehensive business management solutions",
      "foundingDate": "2020",
      "numberOfEmployees": "50-100"
    }
  },

  // Contact Page
  '/contact': {
    title: 'Contact SmartSuitex - Get in Touch',
    description: 'Contact SmartSuitex for sales inquiries, technical support, or general questions. We\'re here to help your business grow.',
    keywords: 'contact SmartSuitex, sales inquiry, technical support, customer service',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact SmartSuitex",
      "description": "Get in touch with SmartSuitex for sales, support, or general inquiries"
    }
  },

  // Blog Page
  '/blog': {
    title: 'Blog - SmartSuitex Insights',
    description: 'Latest insights, industry trends, and best practices for business management. Stay updated with SmartSuitex blog.',
    keywords: 'business blog, industry insights, business management tips, HR trends, ERP insights',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "SmartSuitex Blog",
      "description": "Latest insights and best practices for business management"
    }
  },

  // FAQ Page
  '/faq': {
    title: 'Frequently Asked Questions - SmartSuitex',
    description: 'Find answers to common questions about SmartSuitex business management platform. Comprehensive FAQ section.',
    keywords: 'FAQ, frequently asked questions, SmartSuitex help, business software questions',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": "SmartSuitex FAQ",
      "description": "Frequently asked questions about SmartSuitex platform"
    }
  },

  // Support Page
  '/support': {
    title: 'Support Center - SmartSuitex',
    description: 'Get help and support for SmartSuitex platform. Knowledge base, video tutorials, and technical support.',
    keywords: 'support, help center, technical support, knowledge base, video tutorials',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SmartSuitex Support",
      "description": "Technical support and help center for SmartSuitex platform"
    }
  }
};

// Default SEO configuration
export const defaultSEO: SEOConfig = {
  title: 'SmartSuitex - Complete Business Management Suite',
  description: 'All-in-one business management platform for Indian businesses. HR, ERP, CRM & Business Intelligence in one integrated solution.',
  keywords: 'business management, HR software, ERP system, CRM platform, business intelligence, Indian business software',
  ogImage: 'https://smartsuitex.com/og-image.jpg',
  twitterImage: 'https://smartsuitex.com/twitter-image.jpg'
};

// Get SEO configuration for a specific page
export const getSEOConfig = (pathname: string): SEOConfig => {
  return pageSEOConfig[pathname] || defaultSEO;
};

// Generate breadcrumb structured data
export const generateBreadcrumbData = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Generate FAQ structured data
export const generateFAQData = (questions: Array<{ question: string; answer: string }>) => {
  return {
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
};

// Generate product structured data
export const generateProductData = (product: {
  name: string;
  description: string;
  price: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "description": product.description,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": product.currency || "INR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating || 4.8,
      "ratingCount": product.reviewCount || 1250
    }
  };
}; 