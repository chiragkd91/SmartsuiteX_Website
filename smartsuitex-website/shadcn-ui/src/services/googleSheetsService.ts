// Google Sheets Service for saving inquiry data
// This service will send data to a Google Apps Script web app

interface InquiryData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  isdCode: string;
  company: string;
  productInterest: string;
  message: string;
  timestamp: string;
}

// Google Apps Script Web App URL (you'll need to deploy this)
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

export class GoogleSheetsService {
  private static async sendToGoogleSheets(data: InquiryData): Promise<boolean> {
    try {
      console.log('📤 Sending inquiry data to Google Sheets:', data);
      
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response headers:', response.headers);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('📥 Response data:', result);
      
      return result.success === true;
    } catch (error) {
      console.error('❌ Error sending data to Google Sheets:', error);
      return false;
    }
  }

  public static async saveInquiry(data: Omit<InquiryData, 'timestamp'>): Promise<boolean> {
    console.log('💾 Preparing to save inquiry data:', data);
    
    const inquiryData: InquiryData = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    console.log('⏰ Complete inquiry data with timestamp:', inquiryData);
    
    // Since the Google Apps Script URL is not configured yet, 
    // we'll simulate the process and always fall back to CSV
    console.log('⚠️ Google Apps Script URL not configured, falling back to CSV download');
    return false; // This will trigger the CSV fallback
  }

  // Alternative method using Google Sheets API (requires API key)
  public static async saveToCSV(data: InquiryData): Promise<string> {
    console.log('📄 Saving inquiry data to CSV:', data);
    
    const csvHeaders = [
      'Timestamp',
      'First Name',
      'Last Name', 
      'Email',
      'Phone',
      'Country',
      'ISD Code',
      'Company',
      'Product Interest',
      'Message'
    ];

    const csvRow = [
      data.timestamp,
      `"${data.firstName}"`,
      `"${data.lastName}"`,
      `"${data.email}"`,
      `"${data.phone}"`,
      `"${data.country}"`,
      `"${data.isdCode}"`,
      `"${data.company}"`,
      `"${data.productInterest}"`,
      `"${data.message}"`
    ];

    const csvContent = [csvHeaders.join(','), csvRow.join(',')].join('\n');
    
    console.log('📋 Generated CSV content:', csvContent);
    
    // Create and download CSV file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `inquiry_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('✅ CSV file downloaded successfully');
    return csvContent;
  }

  // Method to validate inquiry data
  public static validateInquiryData(data: Omit<InquiryData, 'timestamp'>): boolean {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'company', 'productInterest'];
    const missingFields = requiredFields.filter(field => !data[field as keyof typeof data]);
    
    if (missingFields.length > 0) {
      console.error('❌ Missing required fields:', missingFields);
      return false;
    }
    
    console.log('✅ All required fields are present');
    return true;
  }
}

export type { InquiryData }; 