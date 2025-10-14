
import { useChatbot } from "./useChatbot";
import { ChatWindow } from "./ChatWindow";

interface BusinessConsultantChatbotProps {
  onClose: () => void;
}

const BusinessConsultantChatbot = ({ onClose }: BusinessConsultantChatbotProps) => {
  const { messages, isTyping, handleOptionClick, showBookConsultNow } = useChatbot();

  return (
    <ChatWindow
      messages={messages}
      isTyping={isTyping}
      onOptionClick={handleOptionClick}
      onClose={onClose}
      showBookConsultNow={showBookConsultNow}
    />
  );
};

export default BusinessConsultantChatbot;
