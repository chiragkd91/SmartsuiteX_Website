// Fallback Business Insights Service 
// Provides analytics functionality when external scripts are blocked by privacy extensions

export class FallbackInsightsService {
  private static instance: FallbackInsightsService;
  private events: Array<{ event: string; data: any; timestamp: number }> = [];

  private constructor() {}

  static getInstance(): FallbackInsightsService {
    if (!FallbackInsightsService.instance) {
      FallbackInsightsService.instance = new FallbackInsightsService();
    }
    return FallbackInsightsService.instance;
  }

  // Store events locally when external services are blocked
  trackEvent(eventName: string, parameters: Record<string, any> = {}) {
    const event = {
      event: eventName,
      data: parameters,
      timestamp: Date.now()
    };
    
    this.events.push(event);
    
    // Log for debugging (can be removed in production)
    console.info('Fallback tracking:', eventName, parameters);
    
    // Store in localStorage for later analysis
    this.storeEventLocally(event);
  }

  trackPageView(pageTitle: string, pagePath: string) {
    this.trackEvent('page_view', {
      page_title: pageTitle,
      page_path: pagePath,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
    });
  }

  trackFormSubmission(formName: string, formType: string = 'contact') {
    this.trackEvent('form_submit', {
      form_name: formName,
      form_type: formType,
      page_location: window.location.href
    });
  }

  trackButtonClick(buttonName: string, buttonLocation: string) {
    this.trackEvent('button_click', {
      button_name: buttonName,
      button_location: buttonLocation,
      page_location: window.location.href
    });
  }

  trackConversion(conversionType: string, value?: number, currency: string = 'INR') {
    this.trackEvent('conversion', {
      conversion_type: conversionType,
      value: value,
      currency: currency
    });
  }

  trackTrialSignup(planType: string = 'free') {
    this.trackEvent('trial_signup', {
      plan_type: planType,
      page_location: window.location.href
    });
  }

  trackDemoRequest(source: string = 'website') {
    this.trackEvent('demo_request', {
      source: source,
      page_location: window.location.href
    });
  }

  trackPricingView(planType?: string) {
    this.trackEvent('pricing_view', {
      plan_type: planType,
      page_location: window.location.href
    });
  }

  trackProductView(productName: string) {
    this.trackEvent('product_view', {
      product_name: productName,
      page_location: window.location.href
    });
  }

  trackScrollDepth(depth: number) {
    this.trackEvent('scroll_depth', {
      depth_percentage: depth,
      page_location: window.location.href
    });
  }

  trackTimeOnPage(timeSpent: number) {
    this.trackEvent('time_on_page', {
      time_spent_seconds: timeSpent,
      page_location: window.location.href
    });
  }

  trackEngagement(action: string, element: string) {
    this.trackEvent('user_engagement', {
      action: action,
      element: element,
      page_location: window.location.href
    });
  }

  // Store events in localStorage for later analysis
  private storeEventLocally(event: any) {
    try {
      const stored = localStorage.getItem('smartsuitex_insights') || '[]';
      const events = JSON.parse(stored);
      events.push(event);
      
      // Keep only last 100 events to avoid storage bloat
      if (events.length > 100) {
        events.splice(0, events.length - 100);
      }
      
      localStorage.setItem('smartsuitex_insights', JSON.stringify(events));
    } catch (error) {
      console.warn('Failed to store event locally:', error);
    }
  }

  // Export events for manual analysis
  exportEvents(): string {
    return JSON.stringify(this.events, null, 2);
  }

  // Get events from localStorage
  getStoredEvents(): any[] {
    try {
      const stored = localStorage.getItem('smartsuitex_insights') || '[]';
      return JSON.parse(stored);
    } catch (error) {
      console.warn('Failed to retrieve stored events:', error);
      return [];
    }
  }

  // Clear stored events
  clearStoredEvents() {
    try {
      localStorage.removeItem('smartsuitex_insights');
      this.events = [];
    } catch (error) {
      console.warn('Failed to clear stored events:', error);
    }
  }
}

// Export singleton instance
export const fallbackInsights = FallbackInsightsService.getInstance();

// React hook for fallback insights
export const useFallbackInsights = () => {
  return {
    trackPageView: fallbackInsights.trackPageView.bind(fallbackInsights),
    trackEvent: fallbackInsights.trackEvent.bind(fallbackInsights),
    trackConversion: fallbackInsights.trackConversion.bind(fallbackInsights),
    trackFormSubmission: fallbackInsights.trackFormSubmission.bind(fallbackInsights),
    trackButtonClick: fallbackInsights.trackButtonClick.bind(fallbackInsights),
    trackTrialSignup: fallbackInsights.trackTrialSignup.bind(fallbackInsights),
    trackDemoRequest: fallbackInsights.trackDemoRequest.bind(fallbackInsights),
    trackPricingView: fallbackInsights.trackPricingView.bind(fallbackInsights),
    trackProductView: fallbackInsights.trackProductView.bind(fallbackInsights),
    trackScrollDepth: fallbackInsights.trackScrollDepth.bind(fallbackInsights),
    trackTimeOnPage: fallbackInsights.trackTimeOnPage.bind(fallbackInsights),
    trackEngagement: fallbackInsights.trackEngagement.bind(fallbackInsights),
    exportEvents: fallbackInsights.exportEvents.bind(fallbackInsights),
    getStoredEvents: fallbackInsights.getStoredEvents.bind(fallbackInsights),
    clearStoredEvents: fallbackInsights.clearStoredEvents.bind(fallbackInsights),
  };
};