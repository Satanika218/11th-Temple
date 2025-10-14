import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Calendar, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const caseStudies = [
  {
    id: "customer-service",
    title: "Enhanced Customer Service",
    customer: "Tech Solutions Inc.",
    date: "2023-08-15",
    employees: 500,
    tags: ["Customer Service", "AI Chatbots", "Automation"],
    stars: 4.5,
    content: (
      <>
        <CardDescription>
          Tech Solutions Inc. improved customer satisfaction by 40% using our AI-powered chatbots.
        </CardDescription>
        <p>
          By implementing AI-driven chatbots, Tech Solutions Inc. was able to provide 24/7 customer support,
          reducing response times and improving overall customer satisfaction. The AI chatbots handled routine
          inquiries, allowing human agents to focus on more complex issues.
        </p>
      </>
    ),
  },
  {
    id: "lead-generation",
    title: "Lead Generation Automation",
    customer: "Marketing Pro Agency",
    date: "2023-07-01",
    employees: 150,
    tags: ["Lead Generation", "Marketing Automation", "AI"],
    stars: 5,
    content: (
      <>
        <CardDescription>
          Marketing Pro Agency increased lead generation by 60% with our AI-driven marketing automation.
        </CardDescription>
        <p>
          Our AI-driven marketing automation helped Marketing Pro Agency identify and nurture high-quality leads,
          resulting in a significant increase in lead generation. The AI system analyzed customer data to
          personalize marketing messages and optimize campaign performance.
        </p>
      </>
    ),
  },
  {
    id: "process-automation",
    title: "Streamlined Business Processes",
    customer: "Global Enterprises Ltd.",
    date: "2023-06-10",
    employees: 1200,
    tags: ["Process Automation", "Efficiency", "AI"],
    stars: 4,
    content: (
      <>
        <CardDescription>
          Global Enterprises Ltd. reduced operational costs by 30% through our AI-powered process automation.
        </CardDescription>
        <p>
          By automating routine tasks and streamlining workflows, Global Enterprises Ltd. was able to significantly
          reduce operational costs. The AI system automated data entry, invoice processing, and other time-consuming
          tasks, freeing up employees to focus on more strategic initiatives.
        </p>
      </>
    ),
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Dark purple background */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Customer <span className="text-brand-lime">Success Stories</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Explore how businesses like yours have achieved remarkable results with our AI automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section - White background for readability */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={caseStudies[0].id} className="w-full">
            <TabsList className="flex space-x-4 p-2 bg-gray-100 border border-gray-200 rounded-full mb-12">
              {caseStudies.map((study) => (
                <TabsTrigger
                  key={study.id}
                  value={study.id}
                  className="data-[state=active]:bg-brand-lime data-[state=active]:text-brand-navy text-gray-600 hover:text-gray-900 rounded-full px-6 py-3 font-medium text-sm focus:outline-none transition-colors"
                >
                  {study.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {caseStudies.map((study) => (
              <TabsContent
                key={study.id}
                value={study.id}
                className="mt-8"
              >
                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="border-b border-gray-100">
                    <CardTitle className="text-2xl font-bold text-brand-navy">{study.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-gray-600 mt-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 text-brand-lime fill-current" />
                        <span className="font-medium">{study.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-5 w-5 text-gray-500" />
                        <span>{new Date(study.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span>{study.employees} Employees</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} className="bg-brand-lime/20 text-brand-navy border-brand-lime/30">{tag}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="text-gray-700 space-y-4">
                      {typeof study.content === 'string' ? (
                        <p className="text-lg leading-relaxed">{study.content}</p>
                      ) : (
                        <div className="space-y-4">
                          <div className="text-lg text-gray-600 font-medium">
                            {study.content.props.children[0]}
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {study.content.props.children[1].props.children}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Results Section - Light gray background */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI automation solutions have helped businesses across Wales and the UK achieve measurable success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg text-center p-8">
              <TrendingUp className="h-12 w-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-brand-navy mb-2">60%</h3>
              <p className="text-gray-600">Average increase in lead generation</p>
            </Card>
            <Card className="bg-white border-none shadow-lg text-center p-8">
              <Users className="h-12 w-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-brand-navy mb-2">40%</h3>
              <p className="text-gray-600">Improvement in customer satisfaction</p>
            </Card>
            <Card className="bg-white border-none shadow-lg text-center p-8">
              <Star className="h-12 w-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-brand-navy mb-2">30%</h3>
              <p className="text-gray-600">Reduction in operational costs</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark background */}
      <section className="py-20 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Achieve Your Own Success Story?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Contact us today to learn how our AI automation solutions can drive growth and efficiency for your business.
          </p>
          <Link to="/consultation">
            <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Free 30min Consultation - Let's Talk How We Help
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default CaseStudies;
