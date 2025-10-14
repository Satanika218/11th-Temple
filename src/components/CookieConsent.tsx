
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie } from 'lucide-react';

// Fix for TS error: declare tracking_enabled property on window
declare global {
  interface Window {
    __tracking_initialized?: boolean;
  }
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show cookie banner after a short delay to ensure it's visible
      setTimeout(() => setIsVisible(true), 1000);
    }
    // GDPR: Only load analytics/tracking if consent is 'accepted'
    if (consent === "accepted" && !window.__tracking_initialized) {
      window.__tracking_initialized = true;
      // Example: window.dataLayer = window.dataLayer || [];
      // (initialize gtag, pixel, etc. here only after consent)
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    // Only then initialize analytics/tracking here if needed
    if (!window.__tracking_initialized) {
      window.__tracking_initialized = true;
      console.log('Analytics tracking initialized after user consent');
      // Example: window.dataLayer = window.dataLayer || [];
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    console.log('User declined cookie tracking - no analytics will be loaded');
  };

  const handleManagePreferences = () => {
    // In a real implementation, this would open a preferences modal
    alert('Cookie preferences management would be implemented here. For now, you can accept or decline all cookies.');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[9999] md:left-auto md:max-w-md" role="dialog" aria-labelledby="cookie-banner-title" aria-describedby="cookie-banner-description">
      <Card className="bg-brand-navy border-2 border-brand-lime shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Cookie className="h-6 w-6 text-brand-lime flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 id="cookie-banner-title" className="text-lg font-semibold text-white mb-2">
                Cookie Consent
              </h3>
              <p id="cookie-banner-description" className="text-brand-silver text-sm mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. We only track usage and habits if you accept cookies, in full compliance with GDPR. You have the right to withdraw consent at any time.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 mb-2">
                <Button 
                  onClick={handleAccept}
                  className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90 flex-1 font-semibold"
                  aria-label="Accept all cookies"
                >
                  Accept All
                </Button>
                <Button 
                  onClick={handleDecline}
                  variant="outline"
                  className="border-brand-silver bg-transparent text-white hover:bg-brand-silver hover:text-brand-navy flex-1"
                  aria-label="Decline non-essential cookies"
                >
                  Decline
                </Button>
              </div>
              <Button 
                onClick={handleManagePreferences}
                variant="ghost"
                className="text-brand-silver hover:text-white text-xs p-0 h-auto"
                aria-label="Manage cookie preferences"
              >
                Manage Preferences
              </Button>
              <p className="text-xs text-brand-silver mt-3">
                You can update your cookie preferences at any time from our Privacy Policy page. Data processing is based on your consent (Art. 6.1.a GDPR).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
