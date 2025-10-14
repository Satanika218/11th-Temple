import { useState } from 'react';
import { ArrowRight, TrendingUp, Clock, PoundSterling, Award, Filter, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/Footer';
import { successStories, aggregateStats, quickWins } from '@/content/success-stories';
import { Link } from 'react-router-dom';

const ResultsGallery = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const filteredStories = selectedIndustry === 'all' 
    ? successStories 
    : successStories.filter(story => story.industry.toLowerCase() === selectedIndustry.toLowerCase());

  const industries = ['all', ...Array.from(new Set(successStories.map(s => s.industry.toLowerCase())))];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="purple-gradient py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <Badge className="mb-4 bg-accent text-brand-navy">
                <Award className="w-4 h-4 mr-2" />
                Real Results from Real Businesses
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Stories & Results Gallery
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                See how Welsh and border county SMEs are transforming their businesses with AI. 
                Real metrics, real savings, real success.
              </p>
              
              {/* Aggregate Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <div className="text-accent text-4xl font-bold mb-2">{aggregateStats.totalClients}+</div>
                  <p className="text-white text-sm">Welsh SMEs Served</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <div className="text-accent text-4xl font-bold mb-2">{aggregateStats.totalSavings}</div>
                  <p className="text-white text-sm">Total Client Savings</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <div className="text-accent text-4xl font-bold mb-2">{aggregateStats.averageROI}</div>
                  <p className="text-white text-sm">Average ROI</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <div className="text-accent text-4xl font-bold mb-2">{aggregateStats.clientSatisfaction}</div>
                  <p className="text-white text-sm">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-brand-navy/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-accent" />
                <span className="text-white font-semibold">Filter by Industry:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {industries.map(industry => (
                  <Button
                    key={industry}
                    variant={selectedIndustry === industry ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedIndustry(industry)}
                    className={selectedIndustry === industry ? 'bg-accent text-brand-navy' : ''}
                  >
                    {industry.charAt(0).toUpperCase() + industry.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredStories.map((story, index) => (
                <Card key={story.id} className="bg-white/5 border-white/10 hover:border-accent/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className="mb-2 bg-accent/20 text-accent border-accent/30">
                          {story.industry}
                        </Badge>
                        <CardTitle className="text-2xl text-white mb-2">
                          {story.businessType}
                        </CardTitle>
                        <CardDescription className="text-white/70 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {story.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-accent text-3xl font-bold">{story.roi}</div>
                        <div className="text-white/70 text-sm">ROI</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-accent" />
                        The Challenge
                      </h4>
                      <p className="text-white/80 text-sm">{story.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" />
                        Our Solution
                      </h4>
                      <p className="text-white/80 text-sm">{story.solution}</p>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="text-accent text-2xl font-bold mb-1">{result.value}</div>
                          <div className="text-white font-semibold text-sm mb-1">{result.metric}</div>
                          <div className="text-white/60 text-xs">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                      <p className="text-white/90 italic mb-3">"{story.testimonial.quote}"</p>
                      <div className="text-white/70 text-sm">
                        <div className="font-semibold">{story.testimonial.author}</div>
                        <div>{story.testimonial.position}</div>
                      </div>
                    </div>

                    {/* Implementation Details */}
                    <div className="flex items-center justify-between text-sm pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-white/70">
                        <Clock className="w-4 h-4" />
                        {story.timeline}
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <PoundSterling className="w-4 h-4" />
                        Investment: {story.investment}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {story.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs border-white/20 text-white/70">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Wins Section */}
        <section className="py-16 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Quick Wins</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Smaller implementations with fast results and immediate impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickWins.map((win, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:border-accent/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{win.business}</CardTitle>
                    <CardDescription className="text-white/70 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {win.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 mb-4">{win.result}</p>
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {win.timeframe}
                      </span>
                      <span className="flex items-center gap-1">
                        <PoundSterling className="w-3 h-3" />
                        {win.investment}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="bg-gradient-to-br from-accent/20 to-brand-purple/20 border-accent/30">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Join 50+ Welsh SMEs already transforming their businesses with AI. 
                  Book your free consultation today.
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

export default ResultsGallery;