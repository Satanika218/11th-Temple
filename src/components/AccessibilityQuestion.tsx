
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accessibility, X } from 'lucide-react';

const AccessibilityQuestion = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  useEffect(() => {
    // Show question after 3 seconds on page load if not previously answered
    const answered = localStorage.getItem('accessibility-answered');
    if (!answered) {
      const timer = setTimeout(() => {
        setShowQuestion(true);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setHasAnswered(true);
    }
  }, []);

  const handleAnswer = (needsAccessibility: boolean) => {
    if (needsAccessibility) {
      // Apply accessibility improvements
      document.documentElement.style.fontSize = '115%';
      document.body.style.lineHeight = '1.7';
      document.body.style.letterSpacing = '0.5px';
      // Add high contrast mode
      document.documentElement.setAttribute('data-accessibility-mode', 'true');
    }
    localStorage.setItem('accessibility-answered', 'true');
    localStorage.setItem('accessibility-enabled', needsAccessibility.toString());
    setShowQuestion(false);
    setHasAnswered(true);
  };

  const resetAccessibility = () => {
    document.documentElement.style.fontSize = '';
    document.body.style.lineHeight = '';
    document.body.style.letterSpacing = '';
    document.documentElement.removeAttribute('data-accessibility-mode');
    localStorage.removeItem('accessibility-answered');
    localStorage.removeItem('accessibility-enabled');
    setHasAnswered(false);
    setShowQuestion(true);
  };

  if (showQuestion) {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <Card className="bg-brand-navy border-brand-silver/30 max-w-md w-full shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Accessibility className="h-6 w-6 text-brand-lime" />
                <h3 className="text-lg font-semibold text-white">Accessibility Support</h3>
              </div>
              <Button
                onClick={() => handleAnswer(false)}
                variant="ghost"
                size="sm"
                className="text-brand-silver hover:text-white"
                aria-label="Close accessibility question"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-brand-silver mb-6">
              Do you need accessibility enhancements such as larger text, improved contrast, or increased spacing to help you navigate our website?
            </p>
            <div className="flex space-x-3">
              <Button
                onClick={() => handleAnswer(true)}
                className="flex-1 bg-brand-lime text-brand-navy hover:bg-brand-lime/90 font-semibold"
                aria-label="Enable accessibility features"
              >
                Yes, please
              </Button>
              <Button
                onClick={() => handleAnswer(false)}
                className="flex-1 bg-brand-silver text-black hover:bg-brand-silver/90 font-semibold"
                aria-label="Continue without accessibility features"
              >
                No, thank you
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export const AccessibilityFooterLink = () => {
  const resetAccessibility = () => {
    document.documentElement.style.fontSize = '';
    document.body.style.lineHeight = '';
    document.body.style.letterSpacing = '';
    document.documentElement.removeAttribute('data-accessibility-mode');
    localStorage.removeItem('accessibility-answered');
    localStorage.removeItem('accessibility-enabled');
    window.location.reload();
  };

  return (
    <button
      onClick={resetAccessibility}
      className="text-brand-silver hover:text-brand-lime transition-colors text-sm flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:ring-offset-2 focus:ring-offset-brand-navy"
      aria-label="Reset accessibility options"
    >
      <Accessibility className="h-4 w-4" />
      <span>Accessibility Options</span>
    </button>
  );
};

export default AccessibilityQuestion;
