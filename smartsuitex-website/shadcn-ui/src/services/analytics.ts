// Analytics Service for tracking user interactions and conversions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
    _linkedin_partner_id: string;
    linkedin: (...args: any[]) => void;
  }
}

export class AnalyticsService {
  private static instance: AnalyticsService;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  // Initialize analytics
  init() {
    if (this.isInitialized) return;
    
    // Initialize Google Analytics
    this.initGoogleAnalytics();
    
    // Initialize Facebook Pixel
    this.initFacebookPixel();
    
    // Initialize LinkedIn Insight Tag
    this.initLinkedInTag();
    
    this.isInitialized = true;
  }

  // Google Analytics
  private initGoogleAnalytics() {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    }
  }

  // Facebook Pixel
  private initFacebookPixel() {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('init', 'YOUR_PIXEL_ID');
      window.fbq('track', 'PageView');
    }
  }

  // LinkedIn Insight Tag
  private initLinkedInTag() {
    if (typeof window !== 'undefined' && window.linkedin) {
      window._linkedin_partner_id = "YOUR_LINKEDIN_ID";
      window.linkedin('track', { conversion_id: window._linkedin_partner_id });
    }
  }

  // Track page views
  trackPageView(pageTitle: string, pagePath: string) {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageTitle,
        page_location: pagePath,
        send_page_view: true
      });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }

    // LinkedIn
    if (typeof window !== 'undefined' && window.linkedin) {
      window.linkedin('track', { conversion_id: window._linkedin_partner_id });
    }
  }

  // Track events
  trackEvent(eventName: string, parameters: Record<string, any> = {}) {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters);
    }
  }

  // Track conversions
  trackConversion(conversionType: string, value?: number, currency: string = 'INR') {
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

// Export singleton instance
export const analytics = AnalyticsService.getInstance();

// React hook for analytics
export const useAnalytics = () => {
  return {
    trackPageView: analytics.trackPageView.bind(analytics),
    trackEvent: analytics.trackEvent.bind(analytics),
    trackConversion: analytics.trackConversion.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    trackButtonClick: analytics.trackButtonClick.bind(analytics),
    trackTrialSignup: analytics.trackTrialSignup.bind(analytics),
    trackDemoRequest: analytics.trackDemoRequest.bind(analytics),
    trackPricingView: analytics.trackPricingView.bind(analytics),
    trackProductView: analytics.trackProductView.bind(analytics),
    trackScrollDepth: analytics.trackScrollDepth.bind(analytics),
    trackTimeOnPage: analytics.trackTimeOnPage.bind(analytics),
    trackEngagement: analytics.trackEngagement.bind(analytics),
  };
}; 