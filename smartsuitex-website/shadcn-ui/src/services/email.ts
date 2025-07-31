import { apiService } from './api';

// Email Service Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  subject?: string;
}

export interface NewsletterSubscription {
  email: string;
  firstName?: string;
  lastName?: string;
  preferences?: {
    productUpdates?: boolean;
    blogPosts?: boolean;
    webinarInvites?: boolean;
    specialOffers?: boolean;
  };
}

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  html: string;
  text: string;
}

// Email Service Class
class EmailService {
  // Send contact form email
  async sendContactForm(data: ContactFormData): Promise<boolean> {
    try {
      const response = await apiService.email.sendContactForm(data);
      return response.success;
    } catch (error) {
      console.error('Failed to send contact form:', error);
      return false;
    }
  }

  // Subscribe to newsletter
  async subscribeNewsletter(data: NewsletterSubscription): Promise<boolean> {
    try {
      const response = await apiService.email.subscribeNewsletter(data.email);
      return response.success;
    } catch (error) {
      console.error('Failed to subscribe to newsletter:', error);
      return false;
    }
  }

  // Unsubscribe from newsletter
  async unsubscribeNewsletter(email: string, token: string): Promise<boolean> {
    try {
      const response = await apiService.email.unsubscribeNewsletter(email, token);
      return response.success;
    } catch (error) {
      console.error('Failed to unsubscribe from newsletter:', error);
      return false;
    }
  }

  // Send password reset email (handled by auth service)
  async sendPasswordReset(email: string): Promise<boolean> {
    try {
      const response = await apiService.auth.forgotPassword(email);
      return response.success;
    } catch (error) {
      console.error('Failed to send password reset email:', error);
      return false;
    }
  }

  // Send welcome email
  async sendWelcomeEmail(email: string, name: string): Promise<boolean> {
    try {
      const response = await apiService.email.send({
        template: 'welcome',
        data: { email, name },
      });
      return response.success;
    } catch (error) {
      console.error('Failed to send welcome email:', error);
      return false;
    }
  }

  // Send trial expiration reminder
  async sendTrialExpirationReminder(email: string, name: string, daysLeft: number): Promise<boolean> {
    try {
      const response = await apiService.email.send({
        template: 'trial-expiration',
        data: { email, name, daysLeft },
      });
      return response.success;
    } catch (error) {
      console.error('Failed to send trial expiration reminder:', error);
      return false;
    }
  }

  // Send invoice
  async sendInvoice(email: string, invoiceData: any): Promise<boolean> {
    try {
      const response = await apiService.email.send({
        template: 'invoice',
        data: { email, ...invoiceData },
      });
      return response.success;
    } catch (error) {
      console.error('Failed to send invoice:', error);
      return false;
    }
  }

  // Send account verification email
  async sendVerificationEmail(email: string, token: string): Promise<boolean> {
    try {
      const response = await apiService.email.send({
        template: 'email-verification',
        data: { email, token },
      });
      return response.success;
    } catch (error) {
      console.error('Failed to send verification email:', error);
      return false;
    }
  }

  // Get email templates
  async getEmailTemplates(): Promise<EmailTemplate[]> {
    try {
      const response = await apiService.email.templates();
      return response.data || [];
    } catch (error) {
      console.error('Failed to get email templates:', error);
      return [];
    }
  }

  // Validate email format
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate contact form data
  validateContactForm(data: ContactFormData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.name?.trim()) {
      errors.push('Name is required');
    }

    if (!data.email?.trim()) {
      errors.push('Email is required');
    } else if (!this.validateEmail(data.email)) {
      errors.push('Invalid email format');
    }

    if (!data.message?.trim()) {
      errors.push('Message is required');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  // Validate newsletter subscription
  validateNewsletterSubscription(data: NewsletterSubscription): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.email?.trim()) {
      errors.push('Email is required');
    } else if (!this.validateEmail(data.email)) {
      errors.push('Invalid email format');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

// Create singleton instance
export const emailService = new EmailService();

// React Hook for email functionality
export const useEmail = () => {
  return {
    sendContactForm: emailService.sendContactForm.bind(emailService),
    subscribeNewsletter: emailService.subscribeNewsletter.bind(emailService),
    unsubscribeNewsletter: emailService.unsubscribeNewsletter.bind(emailService),
    sendPasswordReset: emailService.sendPasswordReset.bind(emailService),
    sendWelcomeEmail: emailService.sendWelcomeEmail.bind(emailService),
    sendTrialExpirationReminder: emailService.sendTrialExpirationReminder.bind(emailService),
    sendInvoice: emailService.sendInvoice.bind(emailService),
    sendVerificationEmail: emailService.sendVerificationEmail.bind(emailService),
    getEmailTemplates: emailService.getEmailTemplates.bind(emailService),
    validateEmail: emailService.validateEmail.bind(emailService),
    validateContactForm: emailService.validateContactForm.bind(emailService),
    validateNewsletterSubscription: emailService.validateNewsletterSubscription.bind(emailService),
  };
};

export default emailService; 