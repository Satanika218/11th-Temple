
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Users, MapPin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Dan Armour",
      role: "Co-Founder & Director",
      description: "Dan brings years of experience in business strategy and AI implementation, with a deep understanding of rural business challenges and opportunities.",
      location: "Newtown, Powys",
    },
    {
      name: "Neil Owen",
      role: "Co-Founder & Director", 
      description: "Neil specialises in technical solutions and automation, combining cutting-edge technology with practical business applications for local enterprises.",
      location: "Newtown, Powys",
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-20 w-20 text-brand-lime mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet <span className="text-brand-lime">The Team</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              The people behind 11th Temple Solutions - bringing decades of combined experience 
              in business, technology, and rural community understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-brand-navy-light border-brand-silver/20">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-32 h-32 bg-brand-lime/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-brand-lime" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-brand-lime font-semibold mb-4">{member.role}</p>
                  </div>
                  
                  <p className="text-brand-silver mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-brand-silver text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{member.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-brand-lime">Commitment</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              We're not just business partners - we're part of the community, 
              committed to helping local businesses thrive through practical technology solutions.
            </p>
          </div>
          
          <div className="bg-brand-navy border border-brand-silver/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Users className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Community First</h3>
                <p className="text-brand-silver">
                  We prioritise community relationships and understand the unique challenges 
                  facing rural and local businesses.
                </p>
              </div>
              <div>
                <MapPin className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Local Expertise</h3>
                <p className="text-brand-silver">
                  Based in Wales with deep understanding of border county business dynamics 
                  and regional market conditions.
                </p>
              </div>
              <div>
                <Mail className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Personal Service</h3>
                <p className="text-brand-silver">
                  Direct access to our team - no call centres or corporate barriers. 
                  Just genuine business-to-business conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Let's have a conversation about how we can help your business thrive. 
            No sales pressure - just genuine business people talking about practical solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                Free 30min Consultation - Let's Talk How We Help
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default MeetTheTeam;
