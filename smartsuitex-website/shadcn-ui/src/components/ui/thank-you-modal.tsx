import { CheckCircle, Mail, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  customerName: string;
}

export function ThankYouModal({ isOpen, onClose, customerName }: ThankYouModalProps) {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate('/');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Thank You, {customerName}! 🎉
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Your inquiry has been successfully submitted. We're excited to help you with your business needs!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* What happens next */}
          <div className="rounded-lg bg-blue-50 p-4">
            <h3 className="font-semibold text-blue-900 mb-3">What happens next?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900">Email Confirmation</p>
                  <p className="text-sm text-blue-700">You'll receive a confirmation email within 5 minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900">Expert Contact</p>
                  <p className="text-sm text-blue-700">Our team will contact you within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900">Custom Solution</p>
                  <p className="text-sm text-blue-700">We'll prepare a personalized demo for your business</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional resources */}
          <div className="rounded-lg bg-gray-50 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">While you wait:</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Explore our product documentation</p>
              <p>• Check out customer success stories</p>
              <p>• Schedule a personalized demo</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button onClick={handleClose} className="flex-1">
              Return to Home
            </Button>
            <Button variant="outline" onClick={() => navigate('/contact')} className="flex-1">
              Contact Support
            </Button>
          </div>

          {/* Footer note */}
          <div className="text-center text-xs text-gray-500 pt-4 border-t">
            <p>Reference ID: {Date.now().toString().slice(-8)}</p>
            <p>Keep this for your records</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 