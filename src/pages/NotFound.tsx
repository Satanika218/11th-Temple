import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft, Search, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

export default function NotFound() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement search logic here
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-xl text-brand-silver mb-8">
          We couldn't find the page you were looking for.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search our site..."
              className="w-full bg-brand-navy-light border border-brand-silver/30 text-white rounded-md py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-brand-lime"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-lime text-brand-navy p-2 rounded-md hover:bg-brand-lime-dark focus:outline-none focus:ring-2 focus:ring-brand-lime-dark"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy">
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Error Tips Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Tips for Finding What You Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <CardTitle className="text-white">Check the URL</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver">
                Make sure the web address is spelled correctly. Typos are common!
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <CardTitle className="text-white">Use the Search</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver">
                Try searching for specific keywords related to the information you're seeking.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <CardTitle className="text-white">Explore Our Site</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver">
                Use our site navigation to browse through available content.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <CardTitle className="text-white">Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver">
                If all else fails, reach out to our support team for assistance.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
}
