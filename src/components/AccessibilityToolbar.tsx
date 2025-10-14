import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Settings, X, Type, Eye, Palette, Volume2, Mouse, Keyboard, Brain, Globe } from "lucide-react";

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownInitialPrompt, setHasShownInitialPrompt] = useState(false);
  
  // Check if user has been shown the accessibility prompt before
  useEffect(() => {
    const hasSeenPrompt = localStorage.getItem('accessibility-prompt-shown');
    if (!hasSeenPrompt) {
      setIsOpen(true);
      setHasShownInitialPrompt(true);
      localStorage.setItem('accessibility-prompt-shown', 'true');
    }
  }, []);

  const [settings, setSettings] = useState({
    fontSize: 'normal',
    contrast: 'normal',
    colorBlind: false,
    screenReader: false,
    keyboardNav: false,
    reducedMotion: false,
    focusIndicators: false,
    textSpacing: false,
    language: 'en'
  });

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Font size
    root.classList.remove('text-sm', 'text-lg', 'text-xl');
    if (settings.fontSize === 'large') root.classList.add('text-lg');
    if (settings.fontSize === 'xlarge') root.classList.add('text-xl');
    
    // High contrast
    if (settings.contrast === 'high') {
      root.classList.add('contrast-high');
    } else {
      root.classList.remove('contrast-high');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('motion-reduce');
    } else {
      root.classList.remove('motion-reduce');
    }
    
    // Focus indicators
    if (settings.focusIndicators) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Text spacing
    if (settings.textSpacing) {
      root.classList.add('text-spacing');
    } else {
      root.classList.remove('text-spacing');
    }
  }, [settings]);

  const resetSettings = () => {
    setSettings({
      fontSize: 'normal',
      contrast: 'normal',
      colorBlind: false,
      screenReader: false,
      keyboardNav: false,
      reducedMotion: false,
      focusIndicators: false,
      textSpacing: false,
      language: 'en'
    });
  };

  // Move icon when user scrolls past midway
  const [moveToTop, setMoveToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setMoveToTop(true);
      } else {
        setMoveToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Button
        className={`fixed left-6 w-16 h-16 rounded-full bg-brand-purple hover:bg-brand-purple/80 text-white shadow-xl z-[9999] transition-all duration-500
            ${moveToTop ? "top-6" : "bottom-6"}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility settings"
      >
        {isOpen ? <X size={24} /> : <Settings size={24} />}
      </Button>

      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-[9999] p-6 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {hasShownInitialPrompt ? "Welcome! Accessibility Options" : "Accessibility Settings"}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              aria-label="Close accessibility settings"
            >
              <X size={16} />
            </Button>
          </div>

          {hasShownInitialPrompt && (
            <div className="mb-4 p-3 bg-brand-lime/10 dark:bg-brand-navy/20 rounded-lg">
              <p className="text-sm text-brand-navy dark:text-brand-silver">
                We want to ensure everyone can access our content comfortably. Customize these settings to improve your browsing experience.
              </p>
            </div>
          )}

          <div className="space-y-4">
            {/* Font Size */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Type size={16} className="text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Font Size</span>
              </div>
              <select
                value={settings.fontSize}
                onChange={(e) => setSettings(prev => ({ ...prev, fontSize: e.target.value }))}
                className="text-xs border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="normal">Normal</option>
                <option value="large">Large</option>
                <option value="xlarge">Extra Large</option>
              </select>
            </div>

            {/* Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye size={16} className="text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Contrast</span>
              </div>
              <select
                value={settings.contrast}
                onChange={(e) => setSettings(prev => ({ ...prev, contrast: e.target.value }))}
                className="text-xs border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="normal">Normal</option>
                <option value="high">High Contrast</option>
              </select>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Brain size={16} className="text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Reduce Motion</span>
              </div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                  className="sr-only"
                />
                <div className={`w-8 h-4 rounded-full ${settings.reducedMotion ? 'bg-brand-lime' : 'bg-gray-300'} relative transition-colors`}>
                  <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform ${settings.reducedMotion ? 'translate-x-4' : 'translate-x-0.5'}`} />
                </div>
              </label>
            </div>

            {/* Focus Indicators */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Keyboard size={16} className="text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Enhanced Focus</span>
              </div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.focusIndicators}
                  onChange={(e) => setSettings(prev => ({ ...prev, focusIndicators: e.target.checked }))}
                  className="sr-only"
                />
                <div className={`w-8 h-4 rounded-full ${settings.focusIndicators ? 'bg-brand-lime' : 'bg-gray-300'} relative transition-colors`}>
                  <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform ${settings.focusIndicators ? 'translate-x-4' : 'translate-x-0.5'}`} />
                </div>
              </label>
            </div>

            {/* Text Spacing */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Type size={16} className="text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Text Spacing</span>
              </div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.textSpacing}
                  onChange={(e) => setSettings(prev => ({ ...prev, textSpacing: e.target.checked }))}
                  className="sr-only"
                />
                <div className={`w-8 h-4 rounded-full ${settings.textSpacing ? 'bg-brand-lime' : 'bg-gray-300'} relative transition-colors`}>
                  <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform ${settings.textSpacing ? 'translate-x-4' : 'translate-x-0.5'}`} />
                </div>
              </label>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button
              onClick={resetSettings}
              variant="outline"
              size="sm"
              className="w-full text-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Reset to Default
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityToolbar;
