import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingDown, AlertTriangle, Award, CheckCircle, Brain, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";

const DigitalSkillsWorkplace = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <div className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Brain className="h-16 w-16 text-brand-lime" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Digital Skills for Life & The Workplace
              </h1>
              <p className="text-xl md:text-2xl text-brand-silver mb-8">
                Empowering Powys workforces with essential digital competencies for the modern economy
              </p>
              <Link to="/consultation">
                <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-bold py-4 px-8 text-lg">
                  Free 30min Consultation - Let's Talk How We Help
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Crisis Statistics */}
        <section className="py-16 bg-brand-navy-light/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                The Digital Skills Crisis in Wales & Powys
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="bg-gradient-to-br from-red-600 to-red-800 border-red-500 text-white">
                  <CardHeader className="text-center">
                    <AlertTriangle className="h-12 w-12 text-red-200 mx-auto mb-2" />
                    <CardTitle className="text-3xl font-bold">60%</CardTitle>
                    <CardDescription className="text-red-100">
                      UK workforce cannot complete 20 essential digital work tasks
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-gradient-to-br from-orange-600 to-orange-800 border-orange-500 text-white">
                  <CardHeader className="text-center">
                    <TrendingDown className="h-12 w-12 text-orange-200 mx-auto mb-2" />
                    <CardTitle className="text-3xl font-bold">11.3M</CardTitle>
                    <CardDescription className="text-orange-100">
                      UK adults lack full basic digital skills
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-600 to-yellow-800 border-yellow-500 text-white">
                  <CardHeader className="text-center">
                    <Users className="h-12 w-12 text-yellow-200 mx-auto mb-2" />
                    <CardTitle className="text-3xl font-bold">23%</CardTitle>
                    <CardDescription className="text-yellow-100">
                      Wales residents lack basic digital skills
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-600 to-emerald-800 border-emerald-500 text-white">
                  <CardHeader className="text-center">
                    <Award className="h-12 w-12 text-emerald-200 mx-auto mb-2" />
                    <CardTitle className="text-3xl font-bold">47%</CardTitle>
                    <CardDescription className="text-emerald-100">
                      UK businesses cite digital skills gaps as growth barrier
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-brand-navy-light/80 to-brand-navy/80 backdrop-blur-sm border-brand-lime/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white mb-4">Age Demographics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-brand-silver">
                      <li className="flex justify-between">
                        <span>16-24 years:</span> 
                        <span className="text-green-400 font-bold">8% lack digital skills</span>
                      </li>
                      <li className="flex justify-between">
                        <span>25-34 years:</span> 
                        <span className="text-brand-lime font-bold">12% lack digital skills</span>
                      </li>
                      <li className="flex justify-between">
                        <span>35-54 years:</span> 
                        <span className="text-orange-400 font-bold">18% lack digital skills</span>
                      </li>
                      <li className="flex justify-between">
                        <span>55+ years:</span> 
                        <span className="text-red-400 font-bold">43% lack digital skills</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-brand-navy-light/80 to-brand-navy/80 backdrop-blur-sm border-brand-lime/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white mb-4">Rural Wales Challenge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-silver mb-4">
                      Powys faces unique challenges with an aging population and traditional industries. 
                      Tourism, agriculture, and retail businesses struggle with:
                    </p>
                    <ul className="space-y-2 text-brand-silver">
                      <li>• Limited access to digital skills training</li>
                      <li>• Aging workforce resistant to change</li>
                      <li>• Poor broadband infrastructure in rural areas</li>
                      <li>• Seasonal workforce turnover</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Transform Your Workforce CTA - Moved Up */}
        <section className="py-16 bg-gradient-to-r from-brand-lime/10 to-brand-navy-light/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Workforce's Digital Confidence
              </h2>
              <p className="text-xl text-brand-silver mb-8">
                Don't let digital skills gaps hold your Powys business back. Create a confident, 
                capable, and secure digital workforce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consultation">
                  <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-bold py-4 px-8 text-lg">
                    <Brain className="h-5 w-5 mr-2" />
                    Free 30min Consultation - Let's Talk How We Help
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Skills Assessment Tool */}
        <section className="py-16 bg-brand-navy-light/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Check Your Digital Skills
                </h2>
                <p className="text-xl text-brand-silver mb-8">
                  Take our free assessment to identify skills gaps in your workforce and get personalized recommendations.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card className="bg-gradient-to-br from-brand-navy-light/80 to-brand-navy/60 border-brand-lime/30 shadow-lg backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Brain className="h-10 w-10 text-brand-lime" />
                      <div>
                        <CardTitle className="text-2xl font-bold text-white">Free Skills Assessment</CardTitle>
                        <CardDescription className="text-brand-silver">Identify your team's digital readiness</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                        <span className="text-brand-silver">Assess all 20 essential digital work tasks</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                        <span className="text-brand-silver">Get personalized skills gap analysis</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                        <span className="text-brand-silver">Receive tailored training recommendations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                        <span className="text-brand-silver">Download comprehensive report</span>
                      </li>
                    </ul>
                    <Link to="/digital-skills-audit">
                      <Button className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-bold py-3">
                        Start Free Assessment
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-brand-navy-light/80 to-brand-navy/60 border-brand-silver/20 shadow-lg backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Award className="h-10 w-10 text-brand-silver" />
                      <div>
                        <CardTitle className="text-2xl font-bold text-white">Digital Skills Quiz</CardTitle>
                        <CardDescription className="text-brand-silver">Quick 5-minute skills check</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-brand-silver mt-0.5 flex-shrink-0" />
                        <span className="text-brand-silver">Fast digital literacy evaluation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-brand-silver mt-0.5 flex-shrink-0" />
                        <span className="text-brand-silver">Instant results and scoring</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-brand-silver mt-0.5 flex-shrink-0" />
                        <span className="text-brand-silver">Identify priority learning areas</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-brand-silver mt-0.5 flex-shrink-0" />
                        <span className="text-brand-silver">Compare with industry benchmarks</span>
                      </li>
                    </ul>
                    <Link to="/digital-skills-quiz">
                      <Button variant="outline" className="w-full border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-navy font-bold py-3">
                        Take Quick Quiz
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <div className="bg-brand-navy-light/50 border border-brand-lime/20 rounded-xl p-6 max-w-3xl mx-auto backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-brand-lime mb-2">Why Check Your Digital Skills?</h3>
                  <p className="text-brand-silver mb-4">
                    Understanding your current digital capabilities is the first step to building a more confident and productive workforce.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-left">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-brand-lime flex-shrink-0" />
                      <span className="text-brand-silver text-sm">Reduce Security Risks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingDown className="h-4 w-4 text-brand-lime flex-shrink-0" />
                      <span className="text-brand-silver text-sm">Boost Productivity</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-brand-lime flex-shrink-0" />
                      <span className="text-brand-silver text-sm">Improve Team Confidence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 20 Essential Skills Framework */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                The 20 Essential Digital Work Tasks
              </h2>

              <div className="grid lg:grid-cols-5 gap-6 mb-12">
                <Card className="bg-gradient-to-br from-brand-purple/50 to-brand-navy/50 border-brand-purple/30">
                  <CardHeader className="text-center">
                    <Users className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                    <CardTitle className="text-white text-lg">Communicating</CardTitle>
                  </CardHeader>
                  <CardContent className="text-brand-silver text-sm">
                    <p>Digital workplace communication, professional online accounts, collaborative tools</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 border-purple-500/30">
                  <CardHeader className="text-center">
                    <Shield className="h-8 w-8 text-purple-300 mx-auto mb-2" />
                    <CardTitle className="text-white text-lg">Handling Information</CardTitle>
                  </CardHeader>
                  <CardContent className="text-purple-100 text-sm">
                    <p>Digital records, data management, cloud storage, version control</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-800/50 to-green-900/50 border-green-500/30">
                  <CardHeader className="text-center">
                    <Award className="h-8 w-8 text-green-300 mx-auto mb-2" />
                    <CardTitle className="text-white text-lg">Transacting</CardTitle>
                  </CardHeader>
                  <CardContent className="text-green-100 text-sm">
                    <p>IT policies, secure sharing, digital transactions, compliance protocols</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-800/50 to-yellow-900/50 border-yellow-500/30">
                  <CardHeader className="text-center">
                    <Brain className="h-8 w-8 text-brand-lime-dark mx-auto mb-2" />
                    <CardTitle className="text-white text-lg">Problem Solving</CardTitle>
                  </CardHeader>
                  <CardContent className="text-yellow-100 text-sm">
                    <p>Digital troubleshooting, online research, learning platforms, productivity tools</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-800/50 to-red-900/50 border-red-500/30">
                  <CardHeader className="text-center">
                    <Shield className="h-8 w-8 text-red-300 mx-auto mb-2" />
                    <CardTitle className="text-white text-lg">Being Safe Online</CardTitle>
                  </CardHeader>
                  <CardContent className="text-red-100 text-sm">
                    <p>Cybersecurity awareness, software updates, secure networks, privacy protection</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-16 bg-brand-navy-light/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                How We Build Digital Confidence
              </h2>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card className="bg-background/90 backdrop-blur-sm border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Brain className="h-8 w-8 text-primary" />
                      <CardTitle className="text-foreground">Technology-Enhanced Learning</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-foreground">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Interactive digital skills assessment platforms</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Personalized learning pathways</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Gamified progression tracking</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Virtual reality workplace simulations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>AI-powered skills gap identification</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background/90 backdrop-blur-sm border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Users className="h-8 w-8 text-primary" />
                      <CardTitle className="text-foreground">Human-Centered Approach</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-foreground">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>One-to-one mentoring and support</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Age-appropriate training methods</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Confidence-building workshops</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Peer learning networks</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Ongoing support and refresher training</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-background/95 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground mb-4">Tech Workplace Champions Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We create internal "Digital Champions" within your organization - employees who become 
                    confident technology advocates and peer mentors. These champions help colleagues overcome 
                    digital anxiety and build sustainable skills development within your team.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="bg-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-foreground font-bold">Peer Support</h4>
                      <p className="text-muted-foreground text-sm">Champions provide ongoing help and encouragement</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-foreground font-bold">Risk Reduction</h4>
                      <p className="text-muted-foreground text-sm">Prevent breaches, scams, and security incidents</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-foreground font-bold">Productivity Boost</h4>
                      <p className="text-muted-foreground text-sm">Maximize digital tools and efficiency gains</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DigitalSkillsWorkplace;