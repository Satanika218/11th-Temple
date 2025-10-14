
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { CheckCircle, Heart, Users, Zap, Handshake, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-brand-lime">11th Temple Solutions</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              We're a UK-based AI automation company with deep roots in rural and community business communities. 
              We understand rural business challenges through decades of first hand regional experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-brand-lime">Mission</span>
              </h2>
              <p className="text-xl text-brand-silver mb-6">
                To empower UK independent businesses with cutting-edge AI automation whilst preserving the personal touch 
                and community connection that makes them special.
              </p>
              <p className="text-brand-silver mb-8">
                We believe that rural and community-focused businesses are the backbone of British communities. Our technology 
                solutions are designed to help them thrive in the digital age without losing their authentic, 
                personal approach to customer service.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                  <span className="text-brand-silver">UK-focused solutions with regional market understanding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                  <span className="text-brand-silver">Full GDPR compliance and UK data protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                  <span className="text-brand-silver">Rural business experience and community understanding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                  <span className="text-brand-silver">Supporting businesses across Welsh and English markets</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-brand-lime/20 to-brand-silver/20 rounded-2xl p-8 backdrop-blur-sm border border-brand-silver/20">
                <h3 className="text-2xl font-bold text-white mb-4">Why We're Different</h3>
                <p className="text-brand-silver mb-6">
                  Unlike larger tech companies, we understand the unique challenges facing UK rural and community-focused businesses. Why? Because it's our home, it's where we worked, where we've seen great ideas, and jobs come and go.
                </p>
                <p className="text-brand-silver mb-6">
                  We live in these communities, have family and friends as part of the workforce and want to be part of ensuring that the tradition of locally-owned businesses persist. There is a huge culture of entrepreneurship, self-employment, and 'micro-businesses' (less than 10-employees) rank among the highest in the UK, there's a wealth of knowledge and independence. We don't want to take anything away from that, we want to help you optimise it by helping minimise the time spent doing the tasks you don't like and giving you the freedom to spend more time doing what you want to be doing!
                </p>
                <p className="text-brand-silver mb-6">
                  Unfortunately, rural areas miss out on the technological advances of larger cities and with the speed that tech is accelerating at, businesses will be left behind and that when smaller businesses die because they can't compete with the biggest firms. We want to help firms stay as up to date as possible, whilst minimising costs and maximising returns, and empowering businesses to become technologically competent, for now and the future.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Heart className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                    <p className="text-brand-silver text-sm">Community First</p>
                  </div>
                  <div className="text-center">
                    <Home className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                    <p className="text-brand-silver text-sm">Regional Knowledge</p>
                  </div>
                  <div className="text-center">
                    <Handshake className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                    <p className="text-brand-silver text-sm">Symbiotic Relationships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooted in Rural Business Understanding Section */}
      <section className="py-20 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rooted in <span className="text-brand-lime">Rural Business Understanding</span>
            </h2>
          </div>
          
          <div className="bg-brand-navy border border-brand-silver/20 rounded-2xl p-8">
            <p className="text-xl text-brand-silver mb-6">
              We're part of the rural business community, understanding the dynamics of businesses that serve both Welsh and English markets. Our approach recognises that rural enterprises face unique challenges - from farming seasons affecting schedules to the need for technology that doesn't overwhelm already stretched teams, add another salary to the payroll or leave businesses behind in the face of the next huge technological innovation.
            </p>
            <p className="text-xl text-brand-silver mb-8">
              We believe in AI and technological adoption that reduces fear rather than creating it. The UK has over 5.5 million UK SMEs that are the backbone of our economy, that's who we want to be supporting with a special focus on the area that bred us and we love.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Market Town Businesses</h3>
                <p className="text-brand-silver">
                  We understand the rhythms of market town commerce, the importance of community relationships, and the seasonal variations that affect cash flow and operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Family-Run Enterprises</h3>
                <p className="text-brand-silver">
                  From multi-generational family businesses to new enterprises, we respect traditional business values whilst introducing modern efficiencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-brand-lime">Core Values</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-2xl mx-auto">
              These principles guide everything we do and every solution we create for UK businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-navy-light border border-brand-silver/20 rounded-2xl p-8 text-center">
              <Heart className="h-12 w-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Community Connection</h3>
              <p className="text-brand-silver">
                We believe technology should strengthen community bonds, not replace them. Our solutions help 
                businesses serve their community customers better whilst maintaining personal relationships.
              </p>
            </div>
            <div className="bg-brand-navy-light border border-brand-silver/20 rounded-2xl p-8 text-center">
              <Home className="h-12 w-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Regional Knowledge</h3>
              <p className="text-brand-silver">
                Rural businesses face unique challenges. We understand seasonal variations, limited resources, 
                and the importance of word-of-mouth reputation in close-knit communities.
              </p>
            </div>
            <div className="bg-brand-navy-light border border-brand-silver/20 rounded-2xl p-8 text-center">
              <Zap className="h-12 w-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Practical Innovation</h3>
              <p className="text-brand-silver">
                We focus on AI solutions that solve real problems and deliver measurable results. No 
                unnecessary complexity - just practical technology that works for UK businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements Section */}
      <section className="py-20 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Technology That Respects <span className="text-brand-lime">Traditional Business Values</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-brand-navy border border-brand-silver/20 rounded-xl p-6 text-center">
              <Heart className="h-8 w-8 text-brand-lime mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">This is our home and community, we want to see it thrive</h3>
            </div>
            <div className="bg-brand-navy border border-brand-silver/20 rounded-xl p-6 text-center">
              <Users className="h-8 w-8 text-brand-lime mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Pillars of the Community</h3>
            </div>
            <div className="bg-brand-navy border border-brand-silver/20 rounded-xl p-6 text-center">
              <CheckCircle className="h-8 w-8 text-brand-lime mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Supporting Rural Enterprises</h3>
            </div>
            <div className="bg-brand-navy border border-brand-silver/20 rounded-xl p-6 text-center">
              <Zap className="h-8 w-8 text-brand-lime mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Respecting Traditional Values</h3>
            </div>
          </div>
        </div>
      </section>

      {/* UK Focus Section */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proudly <span className="text-brand-lime">UK-Based</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Our understanding of British business culture, regulatory requirements, and community dynamics 
              comes from being part of these communities ourselves.
            </p>
          </div>
          
          <div className="bg-brand-navy-light border border-brand-silver/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">UK Compliance & Standards</h3>
                <ul className="space-y-3 text-brand-silver">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Full GDPR compliance and UK data protection adherence</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Understanding of UK business regulations and requirements</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Supporting rural areas with dedicated regional expertise</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>UK-based data storage and processing where required</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Regional Expertise</h3>
                <ul className="space-y-3 text-brand-silver">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Deep understanding of Welsh rural business challenges</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Understanding Welsh business culture and cross-border trade</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Knowledge of English countryside and market town dynamics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Understanding of seasonal business variations across the UK</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Let's discuss how our UK-focused AI solutions can help your independent business thrive whilst 
            maintaining the community connection that makes you special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                Free 30min Consultation - Let's Talk How We Help
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold">
                Let's discuss how we can collaborate
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

export default About;
