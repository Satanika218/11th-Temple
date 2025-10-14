
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, Clock, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    gdprConsent: false,
    marketingConsent: false
  });

  // Calendar state
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast({
        title: "GDPR Consent Required",
        description: "Please consent to data processing to submit your inquiry.",
        variant: "destructive",
      });
      return;
    }

    const submissionData = {
      ...formData,
      selectedDate: selectedDate?.toISOString(),
      selectedTime,
      submittedAt: new Date().toISOString()
    };

    console.log("Form submitted", submissionData);
    
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      gdprConsent: false,
      marketingConsent: false
    });
    setSelectedDate(null);
    setSelectedTime("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateAvailable = (date: Date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && day >= 1 && day <= 5; // Monday to Friday
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 17 && minute > 0) break;
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isAvailable = isDateAvailable(date);
      const isSelected = selectedDate && 
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();

      days.push(
        <button
          key={day}
          onClick={() => isAvailable && setSelectedDate(date)}
          disabled={!isAvailable}
          className={`h-10 w-10 rounded-lg text-sm font-medium transition-all duration-300 ${
            isSelected
              ? 'bg-brand-lime text-brand-navy'
              : isAvailable
              ? 'bg-white/10 text-white hover:bg-brand-lime hover:text-brand-navy border border-brand-silver/20'
              : 'bg-brand-silver/20 text-brand-silver/50 cursor-not-allowed'
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 purple-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get In <span className="text-brand-lime">Touch</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Ready to transform your business with AI and digital solutions?
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help you save time, reduce costs, and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center bg-gray-50 border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Email Us</h3>
                <a 
                  href="mailto:Hello@11thtemplesolutions.com" 
                  className="text-brand-purple hover:text-brand-purple/80 transition-colors font-medium"
                >
                  Hello@11thtemplesolutions.com
                </a>
              </CardContent>
            </Card>
            <Card className="text-center bg-gray-50 border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Contact us on all platforms</h3>
                <a 
                  href="https://wa.me/447312190728" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-purple hover:text-brand-purple/80 transition-colors font-medium inline-flex items-center gap-1"
                >
                  +44 7312 190 728
                  <span className="text-xs">(WhatsApp)</span>
                </a>
              </CardContent>
            </Card>
            <Card className="text-center bg-gray-50 border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Visit Us</h3>
                <p className="text-gray-600">Newtown, Powys</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Calendar */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-brand-purple text-white">
                <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 focus:border-brand-purple focus:ring-brand-purple"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 focus:border-brand-purple focus:ring-brand-purple"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 focus:border-brand-purple focus:ring-brand-purple"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 focus:border-brand-purple focus:ring-brand-purple"
                      placeholder="Tell us about your business and how we can help..."
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="gdprConsent"
                        checked={formData.gdprConsent}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, gdprConsent: checked as boolean }))
                        }
                        className="mt-1"
                      />
                      <label htmlFor="gdprConsent" className="text-sm text-gray-600">
                        I consent to the processing of my personal data in accordance with the 
                        <a href="/privacy" className="text-brand-purple hover:underline ml-1">Privacy Policy</a>. *
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="marketingConsent"
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, marketingConsent: checked as boolean }))
                        }
                        className="mt-1"
                      />
                      <label htmlFor="marketingConsent" className="text-sm text-gray-600">
                        I would like to receive marketing communications about services and offers.
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Book Consultation */}
            <Card className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-brand-navy text-white">
                <CardTitle className="text-2xl font-bold text-center">Book Your Free Consultation</CardTitle>
                <p className="text-brand-silver text-center">Schedule a 30-minute call to discuss your needs</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="preferred-date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <Input
                      id="preferred-date"
                      type="date"
                      className="w-full border-gray-300 focus:border-brand-navy focus:ring-brand-navy"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <Input
                      id="preferred-time"
                      type="time"
                      className="w-full border-gray-300 focus:border-brand-navy focus:ring-brand-navy"
                    />
                  </div>
                  
                  <div className="bg-brand-lime/10 border border-brand-lime/20 rounded-lg p-4">
                    <p className="text-brand-navy text-sm font-medium mb-2">Business Hours:</p>
                    <p className="text-brand-navy/80 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-brand-navy/60 text-xs mt-2">
                      If your preferred time isn't available, we'll suggest the next closest half-hour slot.
                    </p>
                  </div>
                  
                     <Link to="/consultation">
                       <Button 
                         className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime/90 font-semibold py-3 rounded-xl transition-all duration-300"
                         aria-label="Book free consultation"
                       >
                         Free Consultation
                       </Button>
                     </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default Contact;
