
import { ArrowRight, CheckCircle, Users, TrendingUp, Award, Star, Bot, Zap, PoundSterling, BarChart3, Settings, Brain, Building2, Laptop, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import ServicesDropdownButton from "@/components/homepage/ServicesDropdownButton";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-white" />,
      title: "Process Automation",
      description: "Streamline the manual tasks that too many businesses struggle with due to limited skilled staff. We're tailor-made for the hundreds of SMEs and family-run businesses across the border counties and Wales.",
      link: "/services/process-automation"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Regional SEO AI",
      description: "Help your business compete with larger urban competitors. Essential for businesses serving both Welsh and English markets in the border counties."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Customer Insights",
      description: "Understand your customer's patterns, seasonal variations, and community dynamics. Crucial for the productivity boost that smaller teams need."
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Smart Responses",
      description: "Handle customer inquiries when you're busy with other work or serving customers face-to-face. Perfect for independent businesses wearing multiple hats."
    }
  ];

  const benefits = [
    "30% increase in community customer engagement across UK markets",
    "50% reduction in operational costs for SMEs", 
    "24/7 intelligent customer support with UK data protection compliance",
    "Real-time regional market insights tailored for British businesses"
  ];

  const testimonials = [
    {
      name: "Anonymous Construction Company",
      business: "Mid-Wales",
      content: "Saved us 10 hours per week on admin tasks. Now I can focus on what matters - serving our community.",
      rating: 5
    },
    {
      name: "Anonymous Professional Services", 
      business: "Border Counties",
      content: "Our customer response times improved dramatically.",
      rating: 5
    },
    {
      name: "Anonymous Independent Retailer",
      business: "Herefordshire",
      content: "Finally, technology that makes sense for a unique business like ours.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section - Matching reference image */}
      <main id="main-content">
        <section 
          className="pt-16 pb-16 purple-gradient relative overflow-hidden min-h-screen flex items-center z-0"
          aria-labelledby="hero-heading"
        >
        {/* Floating Background Icons - Hidden on mobile to prevent overlaps */}
        <div className="floating-icons hidden lg:block relative z-0">
          <Bot className="floating-icon animate-float absolute text-white/20" style={{ top: '15%', left: '15%', fontSize: '2.5rem' }} />
          <Brain className="floating-icon animate-float-delayed absolute text-white/30" style={{ top: '20%', right: '20%', fontSize: '2rem' }} />
          <BarChart3 className="floating-icon animate-float absolute text-white/25" style={{ top: '12%', left: '45%', fontSize: '2.2rem' }} />
          <Building2 className="floating-icon animate-float-delayed absolute text-white/30" style={{ top: '25%', right: '10%', fontSize: '1.8rem' }} />
          <Laptop className="floating-icon animate-float absolute text-white/20" style={{ top: '28%', left: '25%', fontSize: '2rem' }} />
          <Clock className="floating-icon animate-float-delayed absolute text-white/25" style={{ top: '18%', right: '35%', fontSize: '1.8rem' }} />
          <Settings className="floating-icon animate-float absolute text-white/20" style={{ top: '30%', left: '60%', fontSize: '1.6rem' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
          {/* Mobile Layout - Stack statistics at top, then content */}
          <div className="lg:hidden animate-fade-in">
            {/* Statistics - Mobile Only */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-accent text-3xl md:text-4xl font-bold mb-3">92.6%</div>
                <p className="text-white text-sm">of Welsh SMEs haven't adopted AI yet</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-accent text-3xl md:text-4xl font-bold mb-3">72%</div>
                <p className="text-white text-sm">No. of SMEs that lack the government's suggested digital skills to remain competitive in the modern market</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 sm:col-span-2 relative z-10">
                <div className="text-accent text-3xl md:text-4xl font-bold mb-3">£10-15k</div>
                <p className="text-white text-sm">Average savings cost per annum for firms that adopt our Tech solutions</p>
              </div>
            </div>

            {/* Content - Mobile Only */}
            <div className="text-center lg:text-left">
              <h1 
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Powering Community-Focused <span className="text-brand-lime">Growth</span> with AI, Tech and Business Solutions
              </h1>
              <p className="text-lg sm:text-xl text-white mb-6 max-w-2xl mx-auto lg:mx-0">
                Serving the heart of Wales and the border counties - One community and every business counts
              </p>
              <p className="text-sm sm:text-base text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
                We understand the unique challenges facing rural and border county businesses. Our AI automation and digital solutions help you save time, reduce costs, and compete with larger enterprises while maintaining your local advantage.
              </p>

              {/* CTA Buttons - Mobile with proper spacing */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-8 sm:mt-10 relative z-20">
                <Link to="/consultation" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold glow-effect animate-pulse-glow text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-3 min-h-[44px] leading-tight">
                    <span className="hidden sm:inline">Free 30min Consultation - Let's Talk How We Help</span>
                    <span className="sm:hidden">Free Consultation</span>
                  </Button>
                </Link>
                <Link to="/free-tools" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-brand-navy text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-3 min-h-[44px]">
                    Try Free Tools
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in">
            {/* Left Column - Content */}
            <div>
              <h1 
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight"
              >
                Powering Community-Focused <span className="text-brand-lime">Growth</span> with AI, Tech and Business Solutions
              </h1>
              <p className="text-lg sm:text-xl text-white mb-6 lg:mb-8 max-w-2xl">
                Serving the heart of Wales and the border counties - One community and every business counts
              </p>
              <p className="text-sm sm:text-base text-white/80 mb-8 lg:mb-12 max-w-2xl">
                We understand the unique challenges facing rural and border county businesses. Our AI automation and digital solutions help you save time, reduce costs, and compete with larger enterprises while maintaining your local advantage.
              </p>

              {/* CTA Buttons - Desktop */}
              <div className="flex flex-col sm:flex-row gap-4 mt-16 lg:mt-20 relative z-20">
                <Link to="/free-tools" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-brand-navy text-sm md:text-base px-4 md:px-6 py-3 min-h-[44px]">
                    Try Free Tools
                  </Button>
                </Link>
                <Link to="/consultation" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold glow-effect animate-pulse-glow text-sm md:text-base px-4 md:px-6 py-3 min-h-[44px] whitespace-normal leading-tight">
                    Free 30min Consultation - Let's Talk How We Help
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Statistics */}
            <div className="grid grid-cols-1 gap-6 lg:gap-8">
              <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 lg:p-8 border border-white/20">
                <div className="text-accent text-3xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">92.6%</div>
                <p className="text-white text-sm lg:text-base">of Welsh SMEs haven't adopted AI yet</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 lg:p-8 border border-white/20">
                <div className="text-accent text-3xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">72%</div>
                <p className="text-white text-sm lg:text-base">No. of SMEs that lack the government's suggested digital skills to remain competitive in the modern market</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 lg:p-8 border border-white/20 relative z-10">
                <div className="text-accent text-3xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">£10-15k</div>
                <p className="text-white text-sm lg:text-base">Average savings cost per annum for firms that adopt our Tech solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Understanding Rural Business Realities Section */}
        <section 
          className="py-20 bg-white"
          aria-labelledby="rural-business-section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                id="rural-business-section"
                className="text-4xl md:text-5xl font-bold text-brand-navy mb-6"
              >
              You're Not Alone in Feeling <span className="text-brand-lime">Uncertain About AI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              <span className="stats-highlight text-brand-lime">92.6%</span> of Welsh SMEs haven't adopted AI yet - and there are many reasons why. We endeavour to understand the unique nuances of each business:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Rural Business Challenges We Understand</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-lime mr-3 mt-1 flex-shrink-0" />
                  <span>Seasonal fluctuations that affect cash flow</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-lime mr-3 mt-1 flex-shrink-0" />
                  <span>Geographic isolation from tech support or qualified staff</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-lime mr-3 mt-1 flex-shrink-0" />
                  <span>Wearing multiple hats with limited staff</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-lime mr-3 mt-1 flex-shrink-0" />
                  <span>Serving both Welsh and English markets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-lime mr-3 mt-1 flex-shrink-0" />
                  <span>Balancing tradition with innovation</span>
                </li>
              </ul>
            </div>
            <div className="bg-brand-navy rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
              <p className="text-brand-silver mb-6">
                That's why we focus on incremental, non-intimidating digital adoption that works for community-rooted businesses. No corporate jargon, no overwhelming tech - just practical solutions that fit your world.
              </p>
              <div className="bg-brand-lime/10 border border-brand-lime/20 rounded-lg p-4">
                <p className="text-brand-silver text-sm italic">
                  Construction businesses (16% of all SMEs) and professional services (14% of SMEs) have seen the biggest benefits from starting small with AI automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Services Section */}
        <section 
          className="py-20 bg-gray-100"
          aria-labelledby="services-section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                id="services-section"
                className="text-4xl md:text-5xl font-bold text-brand-navy mb-6"
              >
              Our <span className="text-brand-lime">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Specialized solutions for rural and border county businesses
            </p>
            <div className="flex justify-center">
              <ServicesDropdownButton />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 rounded-2xl overflow-hidden group">
                <CardContent className="p-6 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="bg-brand-purple rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

        {/* Benefits Section */}
        <section 
          className="py-20 bg-brand-navy"  
          aria-labelledby="benefits-section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 
                  id="benefits-section"
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                Proven Results for <span className="text-brand-lime">UK Independent Businesses</span>
              </h2>
              <p className="text-xl text-brand-silver mb-8">
                Our AI and tech solutions are specifically designed to understand and leverage UK markets, giving your business a competitive edge in your community whilst ensuring you're in line with modern practices.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                    <span className="text-brand-silver">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-brand-lime/20 to-brand-silver/20 rounded-2xl p-8 backdrop-blur-sm border border-brand-silver/20">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-lime mb-2">40%</div>
                    <p className="text-brand-silver text-sm">Reduction in customer complaints for firms that adopt digital solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-lime mb-2">20 Hours</div>
                    <p className="text-brand-silver text-sm">avg. Saved per week for SMEs that automate repetitive tasks</p>
                  </div>
                  <div className="text-center col-span-2">
                    <div className="text-3xl font-bold text-brand-lime mb-2">50%</div>
                    <p className="text-brand-silver text-sm">Reduction in manual data entry errors through AI-powered automation</p>
                  </div>
                </div>
                <Link to="/consultation">
                  <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                    Free 30min Consultation - Let's Talk How We Help
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Testimonials Section */}
        <section 
          className="py-20 bg-white"
          aria-labelledby="testimonials-section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                id="testimonials-section"
                className="text-4xl md:text-5xl font-bold text-brand-navy mb-6"
              >
              What Our <span className="text-brand-lime">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real Welsh and border county businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-brand-lime fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-brand-navy font-semibold">{testimonial.name}</p>
                    <p className="text-brand-lime text-sm">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UK Compliance Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-brand-navy mb-6">UK Focused Support</h3>
            <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-lg">
              As a UK-based company, we understand the numerous and nuanced challenges facing British firms. 
              We provide bespoke regional support with full knowledge of UK regulations, market conditions, and community dynamics.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <p className="text-gray-700 font-medium">GDPR Compliant Solutions</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <p className="text-gray-700 font-medium">UK Data Protection Standards</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <p className="text-gray-700 font-medium">Regional Market Understanding</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <p className="text-gray-700 font-medium">Rural Business Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 purple-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white mb-8">
            Get your free consultation and discover how AI automation can help your business
          </p>
          <div className="flex justify-center">
            <Link to="/consultation">
                    <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                      Free 30min Consultation - Let's Talk How We Help
                    </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
      </main>
    </div>
  );
};

export default Index;
