import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Calendar, Clock, Eye, Send, Plus, Download } from 'lucide-react';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/Footer';
import { newsletterService, NewsletterContent } from '@/services/NewsletterService';
import { useToast } from '@/hooks/use-toast';

const NewsletterAdmin = () => {
  const [newsletters, setNewsletters] = useState<NewsletterContent[]>([]);
  const [selectedNewsletter, setSelectedNewsletter] = useState<NewsletterContent | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'preview'>('list');
  const { toast } = useToast();

  useEffect(() => {
    loadNewsletters();
    // Initialize newsletter scheduling
    newsletterService.scheduleWeeklyNewsletter();
  }, []);

  const loadNewsletters = () => {
    const allNewsletters = newsletterService.getNewsletters();
    setNewsletters(allNewsletters.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  };

  const handleGenerateNewsletter = async () => {
    setIsGenerating(true);
    try {
      const newsletter = await newsletterService.generateNewsletterNow();
      setNewsletters(prev => [newsletter, ...prev]);
      toast({
        title: "Newsletter Generated",
        description: `${newsletter.title} has been created successfully.`,
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Failed to generate newsletter. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePreviewNewsletter = (newsletter: NewsletterContent) => {
    setSelectedNewsletter(newsletter);
    setViewMode('preview');
  };

  const formatDateUK = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatDateLong = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getTopicColor = (topic: string): string => {
    const colors = {
      'ai-update': 'bg-blue-500',
      'local-focus': 'bg-green-500',
      'skills': 'bg-purple-500',
      'government': 'bg-orange-500',
      'jobs': 'bg-teal-500',
      'news': 'bg-gray-500'
    };
    return colors[topic as keyof typeof colors] || 'bg-gray-500';
  };

  const downloadNewsletter = (newsletter: NewsletterContent) => {
    const element = document.createElement('a');
    const file = new Blob([newsletter.content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${newsletter.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (viewMode === 'preview' && selectedNewsletter) {
    return (
      <div className="min-h-screen bg-brand-navy">
        <Navigation />
        
        <section className="pt-24 pb-16 purple-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Newsletter <span className="text-brand-lime">Preview</span>
              </h1>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                {selectedNewsletter.title}
              </p>
              <Button 
                onClick={() => setViewMode('list')}
                className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90"
              >
                Back to List
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white shadow-xl">
              <CardHeader className="bg-brand-navy text-white">
                <CardTitle className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedNewsletter.title}</h2>
                    <p className="text-brand-silver mt-2">
                      {formatDateLong(selectedNewsletter.date)} • {selectedNewsletter.readTime} min read
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => downloadNewsletter(selectedNewsletter)}
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                    {selectedNewsletter.content}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      <section className="pt-24 pb-16 purple-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Newsletter <span className="text-brand-lime">Admin</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Manage automated weekly newsletters
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              ⚠️ Admin-only access - Newsletter management system
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Statistics Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-navy mb-2">{newsletters.length}</h3>
                <p className="text-gray-600">Total Newsletters</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Sunday</h3>
                <p className="text-gray-600">Weekly Schedule</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-navy mb-2">18:00</h3>
                <p className="text-gray-600">Send Time</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl">
              <CardContent className="p-6 text-center">
                <Send className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-navy mb-2">3-5</h3>
                <p className="text-gray-600">Min Read Time</p>
              </CardContent>
            </Card>
          </div>

          {/* Newsletter Management */}
          <Card className="bg-white shadow-xl">
            <CardHeader className="bg-brand-purple text-white">
              <CardTitle className="text-2xl font-bold flex items-center justify-between">
                <div className="flex items-center">
                  <Mail className="mr-3 h-6 w-6" />
                  Newsletter Management
                </div>
                <Button
                  onClick={handleGenerateNewsletter}
                  disabled={isGenerating}
                  className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90"
                >
                  {isGenerating ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Plus className="mr-2 h-4 w-4" />
                      Generate Newsletter
                    </>
                  )}
                </Button>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              {newsletters.length === 0 ? (
                <div className="text-center py-12">
                  <Mail className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg mb-4">No newsletters generated yet</p>
                  <Button 
                    onClick={handleGenerateNewsletter}
                    className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90"
                  >
                    Generate First Newsletter
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {newsletters.map((newsletter) => (
                    <div key={newsletter.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-brand-navy mb-2">
                            {newsletter.title}
                          </h3>
                          <div className="flex items-center gap-4 text-gray-600 mb-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {formatDateUK(newsletter.date)}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {newsletter.readTime} min read
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {newsletter.topics.map((topic, index) => (
                              <Badge 
                                key={index} 
                                className={`${getTopicColor(topic)} text-white text-xs`}
                              >
                                {topic.replace('-', ' ')}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handlePreviewNewsletter(newsletter)}
                            variant="outline"
                            size="sm"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button
                            onClick={() => downloadNewsletter(newsletter)}
                            variant="outline"
                            size="sm"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Newsletter Information */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-brand-navy">
                  Newsletter Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI & Machine Learning updates</li>
                  <li>• Powys, Herefordshire, Shropshire news</li>
                  <li>• Digital skills and training opportunities</li>
                  <li>• GDPR and compliance updates</li>
                  <li>• Job opportunities and career development</li>
                  <li>• Government schemes and funding</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-brand-navy">
                  Automation Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Schedule:</strong> Every Sunday at 18:00</p>
                  <p><strong>Content Focus:</strong> Informational, not sales-focused</p>
                  <p><strong>Read Time:</strong> 3-5 minutes</p>
                  <p><strong>Regional Focus:</strong> Rotating weekly</p>
                  <p><strong>Auto-generation:</strong> Enabled</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsletterAdmin;