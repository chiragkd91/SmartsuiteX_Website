import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Eye, Download, Trash2 } from 'lucide-react';

interface TestInquiryData {
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

interface DataTestPanelProps {
  isVisible: boolean;
  onToggle: () => void;
}

export function DataTestPanel({ isVisible, onToggle }: DataTestPanelProps) {
  const [savedInquiries, setSavedInquiries] = useState<TestInquiryData[]>([]);

  // Listen for console logs to capture inquiry data
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    originalConsoleLog(...args);
    
    // Check if this is inquiry data
    if (args[0] === '📋 Prepared inquiry data:' && args[1]) {
      const inquiryData = args[1] as TestInquiryData;
      setSavedInquiries(prev => [...prev, inquiryData]);
    }
  };

  const clearInquiries = () => {
    setSavedInquiries([]);
  };

  const downloadAllAsCSV = () => {
    if (savedInquiries.length === 0) return;

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

    const csvRows = savedInquiries.map(inquiry => [
      inquiry.timestamp,
      `"${inquiry.firstName}"`,
      `"${inquiry.lastName}"`,
      `"${inquiry.email}"`,
      `"${inquiry.phone}"`,
      `"${inquiry.country}"`,
      `"${inquiry.isdCode}"`,
      `"${inquiry.company}"`,
      `"${inquiry.productInterest}"`,
      `"${inquiry.message}"`
    ]);

    const csvContent = [csvHeaders.join(','), ...csvRows.map(row => row.join(','))].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `all_inquiries_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isVisible) {
    return (
      <Button
        onClick={onToggle}
        variant="outline"
        size="sm"
        className="fixed bottom-4 right-4 z-50"
      >
        <Eye className="h-4 w-4 mr-2" />
        Test Data ({savedInquiries.length})
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-96 max-h-96 overflow-hidden z-50 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm">Inquiry Data Test Panel</CardTitle>
          <div className="flex gap-2">
            <Button
              onClick={downloadAllAsCSV}
              variant="outline"
              size="sm"
              disabled={savedInquiries.length === 0}
            >
              <Download className="h-3 w-3 mr-1" />
              Export All
            </Button>
            <Button
              onClick={clearInquiries}
              variant="outline"
              size="sm"
              disabled={savedInquiries.length === 0}
            >
              <Trash2 className="h-3 w-3 mr-1" />
              Clear
            </Button>
            <Button
              onClick={onToggle}
              variant="outline"
              size="sm"
            >
              Hide
            </Button>
          </div>
        </div>
        <Badge variant="secondary" className="w-fit">
          {savedInquiries.length} inquiries captured
        </Badge>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="max-h-64 overflow-y-auto space-y-3">
          {savedInquiries.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-4">
              No inquiries captured yet. Submit a form to see data here.
            </p>
          ) : (
            savedInquiries.map((inquiry, index) => (
              <div key={index} className="border rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-600">
                    Inquiry #{index + 1}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(inquiry.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-medium">Name:</span> {inquiry.firstName} {inquiry.lastName}
                  </div>
                  <div>
                    <span className="font-medium">Email:</span> {inquiry.email}
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span> {inquiry.isdCode} {inquiry.phone}
                  </div>
                  <div>
                    <span className="font-medium">Country:</span> {inquiry.country}
                  </div>
                  <div>
                    <span className="font-medium">Company:</span> {inquiry.company}
                  </div>
                  <div>
                    <span className="font-medium">Product:</span> {inquiry.productInterest}
                  </div>
                </div>
                
                {inquiry.message && (
                  <div>
                    <span className="font-medium text-xs">Message:</span>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {inquiry.message}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
} 