
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AccessibilityQuestion from "@/components/AccessibilityQuestion";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundaryTest";
import CookieConsent from "@/components/CookieConsent";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const CoreValues = lazy(() => import("./pages/CoreValues"));
const Services = lazy(() => import("./pages/Services"));
const ServicesOverview = lazy(() => import("./pages/ServicesOverview"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Contact = lazy(() => import("./pages/Contact"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Consultation = lazy(() => import("./pages/Consultation"));
const Privacy = lazy(() => import("./pages/Privacy"));
const ProcessAutomation = lazy(() => import("./pages/ProcessAutomation"));
const LocalSEO = lazy(() => import("./pages/LocalSEO"));
const CustomerService = lazy(() => import("./pages/CustomerService"));
const DataAnalytics = lazy(() => import("./pages/DataAnalytics"));
const WebsiteCreation = lazy(() => import("./pages/WebsiteCreation"));
const SalesLeadTools = lazy(() => import("./pages/SalesLeadTools"));
const AnalyticsAudit = lazy(() => import("./pages/AnalyticsAudit"));
const SEOAudit = lazy(() => import("./pages/SEOAudit"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DesignMarketing = lazy(() => import("./pages/DesignMarketing"));
const DigitalSkillsAudit = lazy(() => import("./pages/DigitalSkillsAudit"));
const FreeTools = lazy(() => import("./pages/FreeTools"));
const DigitalSkillsQuiz = lazy(() => import("./pages/DigitalSkillsQuiz"));
const GDPRQuiz = lazy(() => import("./pages/GDPRQuiz"));
const GDPRCompliance = lazy(() => import("./pages/GDPRCompliance"));
const DigitalSkillsWorkplace = lazy(() => import("./pages/DigitalSkillsWorkplace"));
const WebsiteAudit = lazy(() => import("./pages/WebsiteAudit"));
const PDFTestAdmin = lazy(() => import("./pages/PDFTestAdmin"));
const NewsletterAdmin = lazy(() => import("./pages/NewsletterAdmin"));
const MassMailer = lazy(() => import("./pages/MassMailer"));

const queryClient = new QueryClient();

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen bg-brand-navy flex items-center justify-center">
    <div className="text-brand-lime text-lg">Loading...</div>
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/core-values" element={<CoreValues />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services-overview" element={<ServicesOverview />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/services/process-automation" element={<ProcessAutomation />} />
              <Route path="/services/local-seo" element={<LocalSEO />} />
              <Route path="/services/customer-service" element={<CustomerService />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/website-creation" element={<WebsiteCreation />} />
              <Route path="/services/sales-lead-tools" element={<SalesLeadTools />} />
              <Route path="/services/design-marketing" element={<DesignMarketing />} />
              <Route path="/analytics-audit" element={<AnalyticsAudit />} />
              <Route path="/seo-audit" element={<SEOAudit />} />
              <Route path="/website-audit" element={<WebsiteAudit />} />
              <Route path="/digital-skills-audit" element={<DigitalSkillsAudit />} />
              <Route path="/free-tools" element={<FreeTools />} />
              <Route path="/digital-skills-quiz" element={<DigitalSkillsQuiz />} />
            <Route path="/gdpr-quiz" element={<GDPRQuiz />} />
            <Route path="/services/gdpr-compliance" element={<GDPRCompliance />} />
            <Route path="/services/digital-skills-workplace" element={<DigitalSkillsWorkplace />} />
            <Route path="/admin/pdf-test" element={<PDFTestAdmin />} />
               <Route path="/admin/newsletter" element={<NewsletterAdmin />} />
            <Route path="/admin/mass-mailer" element={<MassMailer />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <AccessibilityQuestion />
          <AccessibilityToolbar />
          <ChatbotLauncher />
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
