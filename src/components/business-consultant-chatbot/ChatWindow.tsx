import { Message as MessageType, Option } from "./types";
import { Message } from "./Message";
import { Options } from "./Options";
import { Solutions } from "./Solutions";
import React, { useRef, useEffect } from "react";
import { Bot, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ChatWindowProps {
  messages: MessageType[];
  isTyping: boolean;
  onOptionClick: (option: Option) => void;
  onClose: () => void;
  showBookConsultNow: boolean;
}

export const ChatWindow = ({ messages, isTyping, onOptionClick, onClose, showBookConsultNow }: ChatWindowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const lastMessage = messages[messages.length - 1];
  const lastMessageOptions = lastMessage?.sender === 'bot' ? lastMessage.options : undefined;
  const lastMessageSolutions = lastMessage?.sender === 'bot' ? lastMessage.solutions : undefined;

  // Find if our special message is present and show the button if so (or via prop)
  const showConsultBtn =
    showBookConsultNow ||
    (lastMessage &&
      lastMessage.sender === 'bot' &&
      typeof lastMessage.text === "string" &&
      lastMessage.text.includes('Click Book Consultation Now'));

  return (
    <div 
      className="fixed bottom-24 right-4 md:right-8 w-[calc(100%-2rem)] max-w-lg md:max-w-2xl h-[80vh] max-h-[700px] flex flex-col bg-brand-navy-light border border-brand-silver/20 rounded-lg shadow-2xl z-[9998] animate-slide-in-right"
      style={{ zIndex: 9998 }}
    >
      <header className="flex items-center justify-between p-4 bg-brand-navy rounded-t-lg border-b border-brand-silver/20">
        <div className="flex items-center gap-2">
          <Bot className="text-brand-lime" />
          <h2 className="text-white font-semibold">AI Business Consultant</h2>
        </div>
        <button onClick={onClose} className="text-brand-silver hover:text-white">
          <X size={20} />
        </button>
      </header>
      
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <React.Fragment key={msg.id}>
            <Message message={msg} />
            {msg.solutions && <Solutions solutions={msg.solutions} />}
          </React.Fragment>
        ))}
        {isTyping && (
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></div>
             <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse [animation-delay:0.2s]"></div>
             <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse [animation-delay:0.4s]"></div>
          </div>
        )}
        {showConsultBtn && !isTyping && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => navigate("/consultation")}
              className="bg-brand-navy px-8 py-3 rounded-lg border-2 border-brand-lime text-brand-lime font-bold text-xl transition hover:bg-brand-navy-light hover:text-brand-lime-dark"
              aria-label="Book consultation now"
            >
              Book consultation now
            </button>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {lastMessageOptions && !isTyping && (
        <div className="p-4 border-t border-brand-silver/20">
          <Options options={lastMessageOptions} onOptionClick={onOptionClick} disabled={isTyping} />
        </div>
      )}
    </div>
  );
};
