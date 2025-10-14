import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck, Mail, Phone } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const Privacy = () => (
  <div className="min-h-screen bg-brand-navy">
    <Navigation />

    {/* Hero Section */}
    <div className="bg-brand-navy-light py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Privacy Policy
      </h1>
      <p className="text-xl text-brand-silver max-w-3xl mx-auto">
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your personal information.
      </p>
    </div>

    {/* Privacy Policy Content */}
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <Card className="bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Information We Collect
          </CardTitle>
          <CardDescription className="text-brand-silver">
            We collect information to provide better services to all our users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-brand-silver">
            <li>
              Personal Information: Name, email address, phone number, etc.
            </li>
            <li>
              Usage Data: Information about how you use our website and
              services.
            </li>
            <li>
              Cookies: Small files stored on your device to track your
              preferences.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-8 bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            How We Use Your Information
          </CardTitle>
          <CardDescription className="text-brand-silver">
            We use your information to improve our services and personalize
            your experience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-brand-silver">
            <li>
              To provide and maintain our services.
            </li>
            <li>
              To personalize your experience.
            </li>
            <li>
              To communicate with you about updates and promotions.
            </li>
            <li>
              To analyze and improve our services.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-8 bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Data Security
          </CardTitle>
          <CardDescription className="text-brand-silver">
            We take reasonable measures to protect your information from
            unauthorized access.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-brand-silver">
            <li>
              Encryption: We use encryption to protect your data during
              transmission.
            </li>
            <li>
              Access Control: We restrict access to your personal information to
              authorized personnel.
            </li>
            <li>
              Regular Audits: We conduct regular security audits to identify and
              address vulnerabilities.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-8 bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Your GDPR Rights
          </CardTitle>
          <CardDescription className="text-brand-silver">
            Under GDPR, you have comprehensive rights regarding your personal data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-brand-lime font-semibold mb-3">Data Subject Rights:</h4>
              <ul className="list-disc list-inside text-brand-silver space-y-2">
                <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate information</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Transfer your data to another service</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-lime font-semibold mb-3">How to Exercise Your Rights:</h4>
              <ul className="list-disc list-inside text-brand-silver space-y-2">
                <li>Email us at: <strong>hello@11thtemplesolutions.com</strong></li>
                <li>Response time: Within 30 days</li>
                <li>Free of charge (unless requests are excessive)</li>
                <li>Identity verification may be required</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8 bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Legal Basis for Processing
          </CardTitle>
          <CardDescription className="text-brand-silver">
            We process your data under the following legal bases as defined by GDPR Article 6:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-brand-silver space-y-2">
            <li><strong>Consent (Art. 6.1.a):</strong> For marketing communications and cookies</li>
            <li><strong>Contract (Art. 6.1.b):</strong> To provide our services and fulfill agreements</li>
            <li><strong>Legal Obligation (Art. 6.1.c):</strong> For compliance with legal requirements</li>
            <li><strong>Legitimate Interests (Art. 6.1.f):</strong> For business operations and fraud prevention</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-8 bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Data Retention & International Transfers
          </CardTitle>
          <CardDescription className="text-brand-silver">
            How long we keep your data and where it may be processed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-brand-lime font-semibold mb-3">Retention Periods:</h4>
              <ul className="list-disc list-inside text-brand-silver space-y-2">
                <li><strong>Customer data:</strong> For the duration of our relationship + 7 years</li>
                <li><strong>Marketing data:</strong> Until consent is withdrawn</li>
                <li><strong>Website analytics:</strong> 26 months maximum</li>
                <li><strong>Audit form data:</strong> 30 days unless converted to customer</li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-lime font-semibold mb-3">International Transfers:</h4>
              <ul className="list-disc list-inside text-brand-silver space-y-2">
                <li>Data primarily processed within the UK/EU</li>
                <li>Third-party services may process data internationally</li>
                <li>Adequate safeguards in place (Standard Contractual Clauses)</li>
                <li>Full list of processors available on request</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8 bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Contact Our Data Protection Officer
          </CardTitle>
          <CardDescription className="text-brand-silver">
            For any data protection queries or to exercise your rights.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-brand-lime" />
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-brand-silver">hello@11thtemplesolutions.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-brand-lime" />
              <div>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-brand-silver">+44 7312 190 728</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-brand-navy rounded-lg border border-brand-silver/20">
            <p className="text-brand-silver text-sm">
              <strong className="text-brand-lime">Complaints:</strong> If you're not satisfied with our response, 
              you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at 
              <a href="https://ico.org.uk" className="text-brand-lime hover:underline ml-1" target="_blank" rel="noopener noreferrer" aria-label="Information Commissioner's Office website - opens in new window">ico.org.uk</a>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8 bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Cookie Policy
          </CardTitle>
          <CardDescription className="text-brand-silver">
            Detailed information about cookies and tracking technologies we use.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-brand-lime font-semibold mb-2">Essential Cookies:</h4>
              <p className="text-brand-silver">Required for website functionality. Cannot be disabled.</p>
            </div>
            <div>
              <h4 className="text-brand-lime font-semibold mb-2">Analytics Cookies:</h4>
              <p className="text-brand-silver">Help us understand how visitors interact with our website. Only active with your consent.</p>
            </div>
            <div>
              <h4 className="text-brand-lime font-semibold mb-2">Marketing Cookies:</h4>
              <p className="text-brand-silver">Used to track visitors across websites to display relevant advertising. Only active with your consent.</p>
            </div>
            <div className="mt-4 p-3 bg-brand-navy rounded border border-brand-silver/20">
              <p className="text-brand-silver text-sm">
                You can manage your cookie preferences at any time by clearing your browser data or contacting us. 
                Withdrawing consent will not affect the lawfulness of processing before withdrawal.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-brand-silver text-sm">
          Last updated: {new Date().toLocaleDateString('en-GB')} | 
          <span className="text-brand-lime"> Document version: 2.0</span>
        </p>
      </div>
    </div>

    <Footer />
    <ChatbotLauncher />
  </div>
);

export default Privacy;
