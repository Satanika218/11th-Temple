
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import BookingSection from "@/components/BookingSection";

const Consultation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gdprConsent) {
      alert("Please accept the privacy policy to proceed.");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted", { 
      name, 
      email, 
      phone, 
      message, 
      gdprConsent, 
      marketingConsent,
      submittedAt: new Date().toISOString()
    });
    
    // Reset form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setGdprConsent(false);
    setMarketingConsent(false);
    
    alert("Thank you for your submission! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-brand-navy-light py-12 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-brand-lime to-white bg-clip-text text-transparent mb-6 animate-pulse">
          Learn More
        </h1>
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-xl text-white font-medium leading-relaxed">
            Simple chat, we'll discuss your business, time-constraints, bottlenecks & maybe even things not yet considered.
          </p>
          <p className="text-lg text-brand-lime font-semibold tracking-wide">
            No hard sell, no commitment; a simple consultation to discuss potential solutions.
          </p>
        </div>
      </div>

         {/* Calendar Booking Section */}
         <div className="max-w-4xl mx-auto px-4 py-8">
           <div className="text-center mb-8">
             <h2 className="text-3xl font-bold text-white mb-4">
               Book Your Free 30-Minute Consultation
             </h2>
             <p className="text-brand-silver text-lg">
               Choose a time that works for you using our secure booking system
             </p>
           </div>
           <BookingSection />
         </div>

         {/* Alternative Contact Form */}
         <div className="max-w-3xl mx-auto px-4 py-8">
           <div className="text-center mb-6">
             <h3 className="text-2xl font-bold text-white mb-2">
               Prefer to Contact Us Directly?
             </h3>
             <p className="text-brand-silver">
               Fill out the form below and we'll get back to you within 24 hours
             </p>
           </div>
         </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-2"
            >
              Name *
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white text-brand-navy placeholder:text-gray-500 border-brand-silver focus:border-brand-lime focus:ring-brand-lime"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Email *
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-brand-navy placeholder:text-gray-500 border-brand-silver focus:border-brand-lime focus:ring-brand-lime"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white mb-2"
            >
              Phone
            </label>
            <Input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white text-brand-navy placeholder:text-gray-500 border-brand-silver focus:border-brand-lime focus:ring-brand-lime"
              placeholder="Your Phone"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white mb-2"
            >
              Message
            </label>
            <Textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white text-brand-navy placeholder:text-gray-500 border-brand-silver focus:border-brand-lime focus:ring-brand-lime resize-none"
              placeholder="How can we help you?"
            />
          </div>

          {/* GDPR Consent Section */}
          <div className="space-y-4 p-6 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-lg border-2 border-brand-lime shadow-lg">
            <h3 className="text-xl font-bold text-brand-lime text-center">Data Protection & Privacy - Action Required</h3>
            
            <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg border border-brand-lime/50">
              <Checkbox
                id="gdpr-consent"
                checked={gdprConsent}
                onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
                className="mt-1 h-6 w-6 border-2 border-brand-lime data-[state=checked]:bg-brand-lime data-[state=checked]:text-purple-900"
              />
              <label htmlFor="gdpr-consent" className="text-sm text-white font-medium leading-relaxed">
                <span className="text-brand-lime font-bold">REQUIRED:</span> I consent to 11th Temple Solutions processing my personal data for the purpose of responding to my consultation request. 
                I understand my data will be processed in accordance with your Privacy Policy and I have the right to withdraw consent at any time. *
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="marketing-consent"
                checked={marketingConsent}
                onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
                className="mt-1"
              />
              <label htmlFor="marketing-consent" className="text-sm text-brand-silver">
                I would like to receive marketing communications about 11th Temple Solutions' services and industry insights. 
                I can unsubscribe at any time. (Optional)
              </label>
            </div>
            
            <p className="text-xs text-brand-silver">
              Your data is processed under Art. 6.1.a (consent) and Art. 6.1.b (contract performance) of the GDPR. 
              We will not share your data with third parties without your explicit consent.
            </p>
          </div>

          <div>
            <Button
              type="submit"
              disabled={!gdprConsent}
              className="w-full bg-brand-lime text-purple-900 hover:bg-yellow-300 font-bold py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform transition-all duration-200 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                if (gdprConsent) {
                  window.open('https://11thtemple.youcanbook.me/', '_blank');
                }
              }}
              aria-label="Book free consultation - opens in new window"
            >
              Free 30min Consultation - Let's Talk How We Help
            </Button>
          </div>
        </form>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default Consultation;
