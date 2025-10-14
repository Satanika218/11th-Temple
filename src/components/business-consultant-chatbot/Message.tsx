
import { cn } from "@/lib/utils";
import { Message as MessageType } from "./types";

export const Message = ({ message }: { message: MessageType }) => {
  const isBot = message.sender === 'bot';
  const text = message.text || message.content || '';
  
  const renderText = () => {
    if (Array.isArray(text)) {
      return text.map((line, index) => <p key={index}>{line}</p>);
    }
    return <p>{text}</p>;
  };
  
  return (
    <div
      className={cn(
        "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
        isBot ? "bg-brand-navy text-brand-silver" : "ml-auto bg-brand-lime text-brand-navy"
      )}
    >
      {renderText()}
    </div>
  );
};
