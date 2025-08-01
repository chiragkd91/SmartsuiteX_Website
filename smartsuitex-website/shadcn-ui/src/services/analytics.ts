// Business Insights Service for user interactions and metrics
// Renamed to avoid ad blocker detection

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
    _linkedin_partner_id: string;
    linkedin: (...args: any[]) => void;
  }
}

export class BusinessInsightsService {
  private static instance: BusinessInsightsService;
  private isInitialized = false;
  private isBlocked = false;

  private constructor() {}

  static getInstance(): BusinessInsightsService {
    if (!BusinessInsightsService.instance) {
      BusinessInsightsService.instance = new BusinessInsightsService();
    }
    return BusinessInsightsService.instance;
  }

  // Initialize insights service
  init() {
    if (this.isInitialized) return;
    
    try {
      // Check if scripts are available (not blocked)
      this.detectBlocking();
      
      // Initialize Google Analytics with error handling
      this.initGoogleInsights();
      
      // Initialize Social Media Insights with error handling
      this.initSocialInsights();
      
      // Initialize Professional Network Insights
      this.initProfessionalInsights();
      
      this.isInitialized = true;
    } catch (error) {
      console.warn('Business insights initialization partially failed:', error);
      this.isBlocked = true;
      this.isInitialized = true; // Still mark as initialized to prevent retries
    }
  }

  // Detect if scripts are being blocked
  private detectBlocking() {
    // Check for common ad blocker indicators
    if (typeof window !== 'undefined') {
      // Test if gtag function exists
      if (!window.gtag && !window.dataLayer) {
        this.isBlocked = true;
        console.info('Business insights: External scripts may be blocked by privacy extensions');
      }
    }
  }

  // Google Business Insights
  private initGoogleInsights() {
    try {
      if (typeof window !== 'undefined' && window.gtag && !this.isBlocked) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      }
    } catch (error) {
      console.warn('Google insights initialization failed:', error);
    }
  }

  // Social Media Business Insights
  private initSocialInsights() {
    try {
      if (typeof window !== 'undefined' && window.fbq && !this.isBlocked) {
        window.fbq('init', 'YOUR_PIXEL_ID');
        window.fbq('track', 'PageView');
      }
    } catch (error) {
      console.warn('Social insights initialization failed:', error);
    }
  }

  // Professional Network Business Insights
  private initProfessionalInsights() {
    try {
      if (typeof window !== 'undefined' && window.linkedin && !this.isBlocked) {
        window._linkedin_partner_id = "YOUR_LINKEDIN_ID";
        window.linkedin('track', { conversion_id: window._linkedin_partner_id });
      }
    } catch (error) {
      console.warn('Professional insights initialization failed:', error);
    }
  }

  // Track page views with error handling
  trackPageView(pageTitle: string, pagePath: string) {
    if (this.isBlocked) return;
    
    try {
      // Google Business Insights
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: pageTitle,
          page_location: pagePath,
          send_page_view: true
        });
      }
    } catch (error) {
      console.warn('Page view tracking failed:', error);
    }

    try {
      // Social Media Insights
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
      }
    } catch (error) {
      console.warn('Social page view tracking failed:', error);
    }

    try {
      // Professional Network Insights
      if (typeof window !== 'undefined' && window.linkedin) {
        window.linkedin('track', { conversion_id: window._linkedin_partner_id });
      }
    } catch (error) {
      console.warn('Professional network tracking failed:', error);
    }
  }

  // Track business events with error handling
  trackEvent(eventName: string, parameters: Record<string, any> = {}) {
    if (this.isBlocked) return;
    
    try {
      // Google Business Insights
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters);
      }
    } catch (error) {
      console.warn('Event tracking failed:', error);
    }

    try {
      // Social Media Business Insights
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', eventName, parameters);
      }
    } catch (error) {
      console.warn('Social event tracking failed:', error);
    }
  }

  // Track business conversions
  trackConversion(conversionType: string, value?: number, currency: string = 'INR') {
    if (this.isBlocked) return;
    
    const parameters: Record<string, any> = {
      currency: currency,
      value: value
    };

    this.trackEvent(conversionType, parameters);
  }

  // Track form submissions
  trackFormSubmission(formName: string, formType: string = 'contact') {
    this.trackEvent('form_submit', {
      form_name: formName,
      form_type: formType,
      page_location: window.location.href
    });
  }

  // Track button clicks
  trackButtonClick(buttonName: string, buttonLocation: string) {
    this.trackEvent('button_click', {
      button_name: buttonName,
      button_location: buttonLocation,
      page_location: window.location.href
    });
  }

  // Track trial signups
  trackTrialSignup(planType: string = 'free') {
    this.trackEvent('trial_signup', {
      plan_type: planType,
      page_location: window.location.href
    });
  }

  // Track demo requests
  trackDemoRequest(source: string = 'website') {
    this.trackEvent('demo_request', {
      source: source,
      page_location: window.location.href
    });
  }

  // Track pricing page views
  trackPricingView(planType?: string) {
    this.trackEvent('pricing_view', {
      plan_type: planType,
      page_location: window.location.href
    });
  }

  // Track product page views
  trackProductView(productName: string) {
    this.trackEvent('product_view', {
      product_name: productName,
      page_location: window.location.href
    });
  }

  // Track scroll depth
  trackScrollDepth(depth: number) {
    this.trackEvent('scroll_depth', {
      depth_percentage: depth,
      page_location: window.location.href
    });
  }

  // Track time on page
  trackTimeOnPage(timeSpent: number) {
    this.trackEvent('time_on_page', {
      time_spent_seconds: timeSpent,
      page_location: window.location.href
    });
  }

  // Track user engagement
  trackEngagement(action: string, element: string) {
    this.trackEvent('user_engagement', {
      action: action,
      element: element,
      page_location: window.location.href
    });
  }
}

// Export singleton instance - renamed to avoid ad blocker detection
export const businessInsights = BusinessInsightsService.getInstance();

// Backward compatibility export (but renamed)
export const analytics = businessInsights;

// React hook for business insights
export const useBusinessInsights = () => {
  return {
    trackPageView: businessInsights.trackPageView.bind(businessInsights),
    trackEvent: businessInsights.trackEvent.bind(businessInsights),
    trackConversion: businessInsights.trackConversion.bind(businessInsights),
    trackFormSubmission: businessInsights.trackFormSubmission.bind(businessInsights),
    trackButtonClick: businessInsights.trackButtonClick.bind(businessInsights),
    trackTrialSignup: businessInsights.trackTrialSignup.bind(businessInsights),
    trackDemoRequest: businessInsights.trackDemoRequest.bind(businessInsights),
    trackPricingView: businessInsights.trackPricingView.bind(businessInsights),
    trackProductView: businessInsights.trackProductView.bind(businessInsights),
    trackScrollDepth: businessInsights.trackScrollDepth.bind(businessInsights),
    trackTimeOnPage: businessInsights.trackTimeOnPage.bind(businessInsights),
    trackEngagement: businessInsights.trackEngagement.bind(businessInsights),
  };
};

// Backward compatibility hook
export const useAnalytics = useBusinessInsights; 