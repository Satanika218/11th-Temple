import { useParams, Link } from "react-router-dom";
import { CalendarDays, User, ArrowLeft } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { useEffect, useState } from "react";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
  slug: string;
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch post: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-navy text-white flex items-center justify-center">
        Loading post...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-brand-navy text-white flex items-center justify-center">
        Error: {error}
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-navy text-white flex items-center justify-center">
        Post not found
      </div>
    );
  }

  return (
    <div className="bg-brand-navy min-h-screen">
      <Navigation />
      <div className="container mx-auto mt-12 px-4 md:px-0">
        <div className="max-w-3xl mx-auto bg-brand-navy-light rounded-lg shadow-md p-8 text-white border border-brand-silver/20">
          <Link to="/blog" className="inline-flex items-center text-brand-lime hover:underline mb-4">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blog
          </Link>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-brand-silver mb-4">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{post.date}</span>
            <User className="ml-4 mr-2 h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default BlogPostPage;
