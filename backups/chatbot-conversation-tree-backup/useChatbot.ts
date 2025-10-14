
import { useState, useCallback, useEffect } from 'react';
import { conversationTree } from './conversationTree';
import { Message, Option } from './types';
import { nanoid } from 'nanoid';

const SPECIALIST_OPTION_TEXT = 'Chat with a specialist';

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [isTyping, setIsTyping] = useState(false);
  const [showBookConsultNow, setShowBookConsultNow] = useState(false);

  const addMessage = useCallback((message: Omit<Message, 'id'>) => {
    setMessages((prev) => [...prev, { ...message, id: nanoid() }]);
  }, []);

  const processToNextNode = useCallback((nodeId: string) => {
    const node = conversationTree[nodeId];
    if (!node) return;

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage({
        sender: 'bot',
        text: node.text,
        options: node.options,
        solutions: node.solutions,
      });
      setCurrentNodeId(nodeId);
    }, 1000);
  }, [addMessage]);
  
  useEffect(() => {
    processToNextNode('start');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionClick = useCallback((option: Option) => {
    addMessage({ sender: 'user', text: option.text });

    if (
      option.text.trim().toLowerCase() === SPECIALIST_OPTION_TEXT.toLowerCase()
    ) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage({
          sender: 'bot',
          text:
            "Perfect! I'd love to connect you with one of our specialists who can discuss these solutions in detail and create a customised plan for your business. Click Book Consultation Now",
        });
        setShowBookConsultNow(true);
      }, 900);
    } else {
      setShowBookConsultNow(false);
      processToNextNode(option.next);
    }
  }, [addMessage, processToNextNode]);

  return { messages, isTyping, handleOptionClick, showBookConsultNow };
};

