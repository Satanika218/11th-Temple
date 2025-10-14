import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Lightbulb, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const CoreValues = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-brand-navy-light py-24 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Our Core Values</h1>
        <p className="text-xl text-brand-silver max-w-3xl mx-auto">
          These values guide our decisions and define our commitment to our clients and community.
        </p>
      </div>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          {/* Passion Card */}
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <Heart className="h-10 w-10 text-brand-lime mb-2" />
              <CardTitle className="text-2xl font-bold text-white">Passion</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver">
                We are passionate about leveraging AI to drive innovation and create value for our clients.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Collaboration Card */}
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <Users className="h-10 w-10 text-brand-lime mb-2" />
              <CardTitle className="text-2xl font-bold text-white">Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver">
                We believe in the power of teamwork and open communication to achieve shared goals.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Innovation Card */}
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <Lightbulb className="h-10 w-10 text-brand-lime mb-2" />
              <CardTitle className="text-2xl font-bold text-white">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver">
                We are committed to pushing the boundaries of what's possible with AI and automation.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <Target className="h-10 w-10 text-brand-lime mb-2" />
              <CardTitle className="text-2xl font-bold text-white">Results</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver">
                We are dedicated to delivering measurable results and exceeding our clients' expectations.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-navy-light text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the 11th Temple Difference?</h2>
        <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-6">
          Discover how our core values translate into tangible benefits for your business.
        </p>
        <Link to="/contact">
          <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
            Contact Us Today <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default CoreValues;
