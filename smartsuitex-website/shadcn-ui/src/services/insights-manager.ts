// Business Insights Manager - Handles both external and fallback tracking
// Automatically switches to fallback when external scripts are blocked

import { businessInsights } from './analytics';
import { fallbackInsights } from './fallback-insights';

export class InsightsManager {
  private static instance: InsightsManager;
  private usesFallback = false;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): InsightsManager {
    if (!InsightsManager.instance) {
      InsightsManager.instance = new InsightsManager();
    }
    return InsightsManager.instance;
  }

  // Initialize and detect if external scripts are blocked
  async init(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Test if external analytics scripts are available
      const testBlocked = await this.testExternalScripts();
      
      if (testBlocked) {
        console.info('📊 Using privacy-friendly fallback insights service');
        this.usesFallback = true;
      } else {
        console.info('📊 Using full business insights service');
        businessInsights.init();
      }
      
      this.isInitialized = true;
    } catch (error) {
      console.warn('Insights manager initialization failed, using fallback:', error);
      this.usesFallback = true;
      this.isInitialized = true;
    }
  }

  // Test if external scripts are blocked
  private async testExternalScripts(): Promise<boolean> {
    return new Promise((resolve) => {
      // Check if common analytics globals exist
      const timeout = setTimeout(() => {
        resolve(true); // Assume blocked if timeout
      }, 100);

      try {
        if (typeof window !== 'undefined') {
          // Check for Google Analytics
          if (!window.gtag && !window.dataLayer) {
            clearTimeout(timeout);
            resolve(true);
            return;
          }
          
          // Scripts seem to be available
          clearTimeout(timeout);
          resolve(false);
        } else {
          clearTimeout(timeout);
          resolve(true);
        }
      } catch (error) {
        clearTimeout(timeout);
        resolve(true);
      }
    });
  }

  // Unified tracking interface - automatically uses appropriate service
  trackPageView(pageTitle: string, pagePath: string): void {
    if (this.usesFallback) {
      fallbackInsights.trackPageView(pageTitle, pagePath);
    } else {
      businessInsights.trackPageView(pageTitle, pagePath);
    }
  }

  trackEvent(eventName: string, parameters: Record<string, any> = {}): void {
    if (this.usesFallback) {
      fallbackInsights.trackEvent(eventName, parameters);
    } else {
      businessInsights.trackEvent(eventName, parameters);
    }
  }

  trackConversion(conversionType: string, value?: number, currency: string = 'INR'): void {
    if (this.usesFallback) {
      fallbackInsights.trackConversion(conversionType, value, currency);
    } else {
      businessInsights.trackConversion(conversionType, value, currency);
    }
  }

  trackFormSubmission(formName: string, formType: string = 'contact'): void {
    if (this.usesFallback) {
      fallbackInsights.trackFormSubmission(formName, formType);
    } else {
      businessInsights.trackFormSubmission(formName, formType);
    }
  }

  trackButtonClick(buttonName: string, buttonLocation: string): void {
    if (this.usesFallback) {
      fallbackInsights.trackButtonClick(buttonName, buttonLocation);
    } else {
      businessInsights.trackButtonClick(buttonName, buttonLocation);
    }
  }

  trackTrialSignup(planType: string = 'free'): void {
    if (this.usesFallback) {
      fallbackInsights.trackTrialSignup(planType);
    } else {
      businessInsights.trackTrialSignup(planType);
    }
  }

  trackDemoRequest(source: string = 'website'): void {
    if (this.usesFallback) {
      fallbackInsights.trackDemoRequest(source);
    } else {
      businessInsights.trackDemoRequest(source);
    }
  }

  trackPricingView(planType?: string): void {
    if (this.usesFallback) {
      fallbackInsights.trackPricingView(planType);
    } else {
      businessInsights.trackPricingView(planType);
    }
  }

  trackProductView(productName: string): void {
    if (this.usesFallback) {
      fallbackInsights.trackProductView(productName);
    } else {
      businessInsights.trackProductView(productName);
    }
  }

  trackScrollDepth(depth: number): void {
    if (this.usesFallback) {
      fallbackInsights.trackScrollDepth(depth);
    } else {
      businessInsights.trackScrollDepth(depth);
    }
  }

  trackTimeOnPage(timeSpent: number): void {
    if (this.usesFallback) {
      fallbackInsights.trackTimeOnPage(timeSpent);
    } else {
      businessInsights.trackTimeOnPage(timeSpent);
    }
  }

  trackEngagement(action: string, element: string): void {
    if (this.usesFallback) {
      fallbackInsights.trackEngagement(action, element);
    } else {
      businessInsights.trackEngagement(action, element);
    }
  }

  // Status methods
  isUsingFallback(): boolean {
    return this.usesFallback;
  }

  getInsightsStatus(): {
    initialized: boolean;
    usingFallback: boolean;
    reason: string;
  } {
    return {
      initialized: this.isInitialized,
      usingFallback: this.usesFallback,
      reason: this.usesFallback 
        ? 'External scripts blocked by privacy extension' 
        : 'External analytics scripts available'
    };
  }

  // Fallback-specific methods (only available when using fallback)
  exportFallbackEvents(): string | null {
    if (this.usesFallback) {
      return fallbackInsights.exportEvents();
    }
    return null;
  }

  getFallbackStoredEvents(): any[] | null {
    if (this.usesFallback) {
      return fallbackInsights.getStoredEvents();
    }
    return null;
  }

  clearFallbackEvents(): void {
    if (this.usesFallback) {
      fallbackInsights.clearStoredEvents();
    }
  }
}

// Export singleton instance
export const insightsManager = InsightsManager.getInstance();

// React hook for unified insights
export const useInsights = () => {
  return {
    trackPageView: insightsManager.trackPageView.bind(insightsManager),
    trackEvent: insightsManager.trackEvent.bind(insightsManager),
    trackConversion: insightsManager.trackConversion.bind(insightsManager),
    trackFormSubmission: insightsManager.trackFormSubmission.bind(insightsManager),
    trackButtonClick: insightsManager.trackButtonClick.bind(insightsManager),
    trackTrialSignup: insightsManager.trackTrialSignup.bind(insightsManager),
    trackDemoRequest: insightsManager.trackDemoRequest.bind(insightsManager),
    trackPricingView: insightsManager.trackPricingView.bind(insightsManager),
    trackProductView: insightsManager.trackProductView.bind(insightsManager),
    trackScrollDepth: insightsManager.trackScrollDepth.bind(insightsManager),
    trackTimeOnPage: insightsManager.trackTimeOnPage.bind(insightsManager),
    trackEngagement: insightsManager.trackEngagement.bind(insightsManager),
    isUsingFallback: insightsManager.isUsingFallback.bind(insightsManager),
    getStatus: insightsManager.getInsightsStatus.bind(insightsManager),
    exportFallbackEvents: insightsManager.exportFallbackEvents.bind(insightsManager),
    getFallbackStoredEvents: insightsManager.getFallbackStoredEvents.bind(insightsManager),
    clearFallbackEvents: insightsManager.clearFallbackEvents.bind(insightsManager),
  };
};