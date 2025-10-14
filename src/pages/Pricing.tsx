import { useState } from 'react';
import { Check, ArrowRight, HelpCircle, PoundSterling, TrendingUp, Shield, Users, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/Footer';
import { pricingTiers, addonServices, paymentOptions, fundingOptions, competitorComparison } from '@/content/pricing-data';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'project' | 'monthly'>('project');

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="purple-gradient py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <Badge className="mb-4 bg-accent text-brand-navy">
                <PoundSterling className="w-4 h-4 mr-2" />
                Transparent Pricing
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Solutions for Every Budget
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Affordable, transparent pricing designed for Welsh SMEs. No hidden fees, 
                flexible payment plans, and government funding assistance available.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-white/90">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Users className="w-5 h-5 text-accent" />
                  <span>50+ Welsh SMEs Served</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span>250% Average ROI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card 
                  key={tier.id} 
                  className={`relative ${tier.popular ? 'border-accent border-2 shadow-xl shadow-accent/20' : 'border-white/10'} bg-white/5 hover:border-accent/50 transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-brand-navy px-4 py-1">
                        <Award className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl text-white mb-2">{tier.name}</CardTitle>
                    <CardDescription className="text-white/70 mb-4">{tier.tagline}</CardDescription>
                    <div className="text-4xl font-bold text-accent mb-2">{tier.price.display}</div>
                    <div className="text-white/60 text-sm">One-time investment</div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                            <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-white font-semibold mb-3">Ideal for:</h4>
                      <ul className="space-y-2">
                        {tier.idealFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                            <Zap className="w-4 h-4 text-accent/70 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ROI */}
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                      <div className="text-white font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        Expected ROI
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <div className="text-accent font-bold">{tier.roi.percentage}</div>
                          <div className="text-white/60 text-xs">ROI</div>
                        </div>
                        <div>
                          <div className="text-accent font-bold">{tier.roi.annualSavings}</div>
                          <div className="text-white/60 text-xs">Annual Savings</div>
                        </div>
                      </div>
                      <div className="text-white/70 text-xs mt-2">
                        Timeframe: {tier.roi.timeframe}
                      </div>
                    </div>

                    {/* Case Study */}
                    {tier.caseStudy && (
                      <div className="bg-white/5 rounded-lg p-3 text-xs text-white/70 italic">
                        "{tier.caseStudy.result}"
                        <div className="text-accent mt-1">- {tier.caseStudy.business}</div>
                      </div>
                    )}

                    {/* CTA */}
                    <Button 
                      asChild 
                      className={`w-full ${tier.popular ? 'bg-accent text-brand-navy hover:bg-accent/90' : 'bg-white/10 text-white hover:bg-white/20'}`}
                      size="lg"
                    >
                      <Link to={tier.cta.link}>
                        {tier.cta.text}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-16 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Add-On Services</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Enhance your AI implementation with additional services tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addonServices.map((addon, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:border-accent/50 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg text-white">{addon.name}</CardTitle>
                      <Badge className="bg-accent/20 text-accent border-accent/30">{addon.price}</Badge>
                    </div>
                    <CardDescription className="text-white/70">{addon.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-white/60 text-sm">Duration: {addon.duration}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Flexible Payment Options</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Choose the payment plan that works best for your business cash flow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentOptions.map((option, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:border-accent/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg text-white mb-2">{option.name}</CardTitle>
                    <Badge className="bg-accent/20 text-accent border-accent/30 w-fit">
                      {option.discount}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-white/80 text-sm">{option.description}</p>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {option.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                            <Check className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Government Funding */}
        <section className="py-16 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Government Funding Available</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Reduce your investment by up to 60% with government grants and funding programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {fundingOptions.map((funding, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:border-accent/50 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg text-white">{funding.name}</CardTitle>
                      <Badge className="bg-accent/20 text-accent border-accent/30">{funding.coverage}</Badge>
                    </div>
                    <CardDescription className="text-white/70">{funding.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Maximum Amount:</span>
                      <span className="text-accent font-semibold">{funding.maxAmount}</span>
                    </div>
                    <div className="text-white/70 text-sm">
                      <strong>Eligibility:</strong> {funding.eligibility}
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full border-accent/30 text-accent hover:bg-accent/10">
                      <a href={funding.link} target="_blank" rel="noopener noreferrer">
                        Learn More
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Card className="bg-accent/10 border-accent/30 inline-block">
                <CardContent className="p-6">
                  <p className="text-white mb-4">
                    <strong>Need help with funding applications?</strong> We provide free assistance with grant applications and funding proposals.
                  </p>
                  <Button asChild className="bg-accent text-brand-navy hover:bg-accent/90">
                    <Link to="/funding-navigator">
                      Explore Funding Options
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose 11th Temple Solutions?</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                See how we compare to enterprise consultancies and generic AI providers
              </p>
            </div>

            <Card className="bg-white/5 border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-white font-semibold">Feature</th>
                      {competitorComparison.competitors.map((comp, idx) => (
                        <th key={idx} className={`text-center p-4 text-white font-semibold ${idx === 0 ? 'bg-accent/10' : ''}`}>
                          {comp.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {competitorComparison.features.map((feature, idx) => (
                      <tr key={idx} className="border-b border-white/5">
                        <td className="p-4 text-white/80">{feature}</td>
                        {competitorComparison.competitors.map((comp, compIdx) => (
                          <td key={compIdx} className={`text-center p-4 ${compIdx === 0 ? 'bg-accent/5' : ''}`}>
                            {comp.features[idx] ? (
                              <Check className="w-5 h-5 text-accent mx-auto" />
                            ) : (
                              <span className="text-white/30">—</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 bg-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                { q: 'How much does AI implementation cost?', a: 'Our solutions range from £2,500 to £50,000 depending on complexity. Most Welsh SMEs invest £5,000-£15,000.' },
                { q: 'What kind of ROI can I expect?', a: 'Our clients typically see 200-400% ROI in the first year, with average annual savings of £10-15k.' },
                { q: 'Are there ongoing costs?', a: 'Yes, but minimal. Most solutions have monthly costs of £50-200 for software licenses and cloud services.' }
              ].map((faq, idx) => (
                <Card key={idx} className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-white flex items-start gap-2">
                      <HelpCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      {faq.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                <Link to="/contact">
                  View All FAQs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="bg-gradient-to-br from-accent/20 to-brand-purple/20 border-accent/30">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Book a free consultation to discuss your needs and get a personalized quote. 
                  No obligation, no pressure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent text-brand-navy hover:bg-accent/90">
                    <Link to="/consultation">
                      Book Free Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/roi-calculator">
                      Calculate Your ROI
                      <TrendingUp className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;