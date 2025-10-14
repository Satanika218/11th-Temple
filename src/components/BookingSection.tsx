import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import InternalBookingCalendar from './InternalBookingCalendar';

const BookingSection = () => {
  const [hasConsent, setHasConsent] = useState(false);
  const [showDisclosure, setShowDisclosure] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    setHasConsent(consent === 'accepted');
    
    if (consent === 'accepted') {
      setShowDisclosure(false);
    } else if (!consent) {
      setShowDisclosure(true);
    }
  }, []);

  const handleConsentAndProceed = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setHasConsent(true);
    setShowDisclosure(false);
  };

  if (showDisclosure) {
    return (
      <Card className="bg-brand-navy-light border-brand-silver/20 shadow-2xl">
        <CardContent className="p-8 text-center">
          <AlertCircle className="h-12 w-12 text-brand-lime mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Data Processing Disclosure</h3>
          <div className="space-y-4 text-brand-silver">
            <p>
              To schedule your consultation, we'll use our secure internal booking system.
            </p>
            <p>
              <strong>This process will:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-left max-w-2xl mx-auto">
              <li>Collect your name, email, and phone number</li>
              <li>Store your booking preferences and selected time slot securely</li>
              <li>Send you confirmation details</li>
              <li>Use local storage to manage your booking data</li>
            </ul>
            <p>
              Your data is processed securely and stored locally. We never share your information with third parties.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button 
              onClick={handleConsentAndProceed}
              className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90"
              aria-label="Accept data processing and proceed to booking"
            >
              Accept & Continue to Booking
            </Button>
            <Link to="/privacy">
              <Button 
                variant="outline"
                className="border-brand-silver bg-brand-silver text-black hover:bg-brand-silver/80 w-full sm:w-auto"
                aria-label="Read our privacy policy"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Privacy Policy
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Show the internal booking calendar once consent is given
  return <InternalBookingCalendar />;
};

export default BookingSection;
