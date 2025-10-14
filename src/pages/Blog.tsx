
import { Link } from "react-router-dom";
import { CalendarDays, User, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { blogPosts } from "@/content/blogData";
import { newBlogPosts } from "@/content/newBlogData";

const Blog = () => {
  // Combine all blog posts and sort by date (newest first)
  const allBlogPosts = [...blogPosts, ...newBlogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Format date to UK standard (DD/MM/YYYY)
  const formatDateUK = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-brand-lime">Blog</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Insights, trends, and tips on leveraging AI for local business success.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post) => (
              <div key={post.slug} className="bg-brand-navy rounded-2xl p-6 border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
                <Link to={`/blog/${post.slug}`} className="block no-underline">
                  <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
                  <div className="flex items-center text-brand-silver text-sm mb-4">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>{formatDateUK(post.date)}</span>
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <p className="text-brand-silver mb-4">{post.excerpt}</p>
                  <div className="text-brand-lime hover:text-brand-lime-dark flex items-center">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default Blog;
