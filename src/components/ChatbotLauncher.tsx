import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MessageSquare, X } from "lucide-react";
import EnhancedChatbot from "./business-consultant-chatbot/EnhancedChatbot";

const ChatbotLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moveToTop, setMoveToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setMoveToTop(true);
      } else {
        setMoveToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Button
        className={`fixed right-6 w-16 h-16 rounded-full bg-brand-lime hover:bg-brand-lime-dark text-brand-navy shadow-xl z-[9998] animate-pulse-glow transition-all duration-500
          ${moveToTop ? "top-6" : "bottom-6"}
        `}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? <X size={50} /> : <MessageSquare size={50} />}
      </Button>
      {isOpen && <EnhancedChatbot />}
    </>
  );
};

export default ChatbotLauncher;
