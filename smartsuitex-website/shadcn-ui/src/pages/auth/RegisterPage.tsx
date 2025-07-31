import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, User, Phone, Building, MessageSquare, Package } from 'lucide-react';
import { toast } from 'sonner';
import Logo from '@/components/ui/logo';
import { CountrySelector, type Country } from '@/components/ui/country-selector';
import { GoogleSheetsService, type InquiryData } from '@/services/googleSheetsService';
import { ThankYouModal } from '@/components/ui/thank-you-modal';
import { DataTestPanel } from '@/components/ui/data-test-panel';

const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  productInterest: z.string().min(1, 'Please select a product of interest'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  acceptTerms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [showTestPanel, setShowTestPanel] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>({
    name: 'India',
    code: 'IN',
    isd: '+91',
    flag: '🇮🇳'
  });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const acceptTerms = watch('acceptTerms');

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      console.log('📝 Form submitted with data:', data);
      console.log('🌍 Selected country:', selectedCountry);
      
      // Prepare inquiry data
      const inquiryData: Omit<InquiryData, 'timestamp'> = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        country: selectedCountry?.name || 'Unknown',
        isdCode: selectedCountry?.isd || '',
        company: data.company,
        productInterest: data.productInterest,
        message: data.message,
      };

      console.log('📋 Prepared inquiry data:', inquiryData);

      // Validate the data
      if (!GoogleSheetsService.validateInquiryData(inquiryData)) {
        toast.error('Please fill in all required fields.');
        return;
      }

      // Save to Google Sheets
      const success = await GoogleSheetsService.saveInquiry(inquiryData);
      
      if (success) {
        setCustomerName(data.firstName);
        setShowThankYouModal(true);
      } else {
        // Fallback: Save as CSV file
        const csvData: InquiryData = {
          ...inquiryData,
          timestamp: new Date().toISOString(),
        };
        await GoogleSheetsService.saveToCSV(csvData);
        setCustomerName(data.firstName);
        setShowThankYouModal(true);
      }
    } catch (error) {
      console.error('Error saving inquiry:', error);
      toast.error('Inquiry failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Logo size="lg" variant="blue" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Customer Inquiry</CardTitle>
          <CardDescription className="text-center">
            Tell us about your business needs and we'll get back to you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="pl-10"
                    {...register('firstName')}
                  />
                </div>
                {errors.firstName && (
                  <Alert variant="destructive" className="py-2">
                    <AlertDescription>{errors.firstName.message}</AlertDescription>
                  </Alert>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="pl-10"
                    {...register('lastName')}
                  />
                </div>
                {errors.lastName && (
                  <Alert variant="destructive" className="py-2">
                    <AlertDescription>{errors.lastName.message}</AlertDescription>
                  </Alert>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="pl-10"
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <Alert variant="destructive" className="py-2">
                  <AlertDescription>{errors.email.message}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex gap-2">
                <CountrySelector
                  value={selectedCountry}
                  onValueChange={setSelectedCountry}
                />
                <div className="relative flex-1">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    className="pl-10"
                    {...register('phone')}
                  />
                </div>
              </div>
              {errors.phone && (
                <Alert variant="destructive" className="py-2">
                  <AlertDescription>{errors.phone.message}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="company"
                  placeholder="Your Company Name"
                  className="pl-10"
                  {...register('company')}
                />
              </div>
              {errors.company && (
                <Alert variant="destructive" className="py-2">
                  <AlertDescription>{errors.company.message}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="productInterest">Product of Interest</Label>
              <div className="relative">
                <Package className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <select
                  id="productInterest"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  {...register('productInterest')}
                >
                  <option value="">Select a product</option>
                  <option value="hr-management">HR Management</option>
                  <option value="erp-system">ERP System</option>
                  <option value="crm-platform">CRM Platform</option>
                  <option value="business-intelligence">Business Intelligence</option>
                  <option value="gst-compliance">GST Compliance</option>
                  <option value="it-asset-management">IT Asset Management</option>
                  <option value="complete-suite">Complete Business Suite</option>
                  <option value="custom-solution">Custom Solution</option>
                </select>
              </div>
              {errors.productInterest && (
                <Alert variant="destructive" className="py-2">
                  <AlertDescription>{errors.productInterest.message}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <textarea
                  id="message"
                  placeholder="Tell us about your business needs and how we can help..."
                  className="w-full min-h-[100px] px-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  {...register('message')}
                />
              </div>
              {errors.message && (
                <Alert variant="destructive" className="py-2">
                  <AlertDescription>{errors.message.message}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="acceptTerms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setValue('acceptTerms', checked as boolean)}
              />
              <Label htmlFor="acceptTerms" className="text-sm">
                I agree to the{' '}
                <Link to="/terms" className="text-blue-600 hover:text-blue-800">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            {errors.acceptTerms && (
              <Alert variant="destructive" className="py-2">
                <AlertDescription>{errors.acceptTerms.message}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Sending inquiry...' : 'Send Inquiry'}
            </Button>
          </form>

          <div className="text-center text-sm">
            Need immediate assistance?{' '}
            <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Contact us directly
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Thank You Modal */}
      <ThankYouModal
        isOpen={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
        customerName={customerName}
      />

      {/* Data Test Panel - Only visible in development */}
      {process.env.NODE_ENV === 'development' && (
        <DataTestPanel
          isVisible={showTestPanel}
          onToggle={() => setShowTestPanel(!showTestPanel)}
        />
      )}
    </div>
  );
};

export default RegisterPage; 