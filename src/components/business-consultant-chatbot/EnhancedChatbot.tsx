import { useState, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { llmService } from '@/services/LLMService';
import { conversationTree } from './conversationTree';
import { ChatMessage, LLMResponse } from './types';

const EnhancedChatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLLMInitialized, setIsLLMInitialized] = useState(false);
  const [currentNode, setCurrentNode] = useState('welcome');
  const [useLLM, setUseLLM] = useState(false);

  // Initialize LLM service on component mount
  useEffect(() => {
    initializeLLM();
  }, []);

  const initializeLLM = async () => {
    try {
      console.log('Initializing LLM service...');
      await llmService.initialize();
      setIsLLMInitialized(true);
      console.log('LLM service initialized successfully');
    } catch (error) {
      console.error('Failed to initialize LLM service:', error);
      setIsLLMInitialized(false);
    }
  };

  // Start with welcome message from conversation tree
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeNode = conversationTree[currentNode];
      if (welcomeNode) {
        const textContent = Array.isArray(welcomeNode.text) ? welcomeNode.text.join('\n') : welcomeNode.text;
        addMessage(textContent, 'assistant');
      }
    }
  }, []);

  const addMessage = (content: string, sender: 'user' | 'assistant') => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    addMessage(inputValue, 'user');
    setInputValue('');
    setIsLoading(true);

    try {
      let response: string;

      if (useLLM && isLLMInitialized) {
        // Use LLM for response generation
        const conversationHistory = messages.map(msg => ({
          role: (msg.sender === 'user' ? 'user' : 'assistant') as 'user' | 'assistant' | 'system',
          content: msg.content
        }));

        response = await llmService.generateResponse(inputValue, conversationHistory);
      } else {
        // Use conversation tree for structured responses
        response = await generateTreeBasedResponse(inputValue);
      }

      addMessage(response, 'assistant');
    } catch (error) {
      console.error('Error generating response:', error);
      addMessage("I apologize, but I'm having trouble processing your request. Please try again.", 'assistant');
    } finally {
      setIsLoading(false);
    }
  };

  const generateTreeBasedResponse = async (userInput: string): Promise<string> => {
    // Simple keyword matching to navigate conversation tree
    const currentNodeData = conversationTree[currentNode];
    if (!currentNodeData || !currentNodeData.options) {
      return "I'm not sure how to respond to that. Could you please rephrase or ask about our services?";
    }

    const userInputLower = userInput.toLowerCase();
    
    // Find matching option
    const matchingOption = currentNodeData.options.find(option => {
      const keywords = option.keywords || [];
      return keywords.some(keyword => userInputLower.includes(keyword.toLowerCase()));
    });

    if (matchingOption) {
      const nextNode = conversationTree[matchingOption.next];
      if (nextNode) {
        setCurrentNode(matchingOption.next);
        return Array.isArray(nextNode.text) ? nextNode.text.join('\n') : nextNode.text;
      }
    }

    // If no match found, provide helpful fallback
    return "I understand you're asking about something specific. Let me connect you with a human consultant who can provide detailed information about your query. You can also contact us directly at Hello@11thtemplesolutions.com";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleLLMMode = () => {
    setUseLLM(!useLLM);
    addMessage(`Switched to ${!useLLM ? 'AI-powered' : 'structured'} responses.`, 'assistant');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-96 h-96 flex flex-col bg-white shadow-2xl border-0">
        {/* Header */}
        <div className="bg-brand-purple text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="h-6 w-6 mr-2" />
              <h3 className="font-semibold">Business Consultant</h3>
            </div>
            <div className="flex items-center space-x-2">
              {isLLMInitialized && (
                <button
                  onClick={toggleLLMMode}
                  className={`px-2 py-1 rounded text-xs ${
                    useLLM ? 'bg-green-500' : 'bg-gray-500'
                  } hover:opacity-80 transition-opacity`}
                  title={`${useLLM ? 'AI' : 'Structured'} mode`}
                >
                  {useLLM ? 'AI' : 'Tree'}
                </button>
              )}
              {!isLLMInitialized && (
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" title="AI initializing..."></div>
              )}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-64">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-brand-purple text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <div className="flex items-start">
                  {message.sender === 'assistant' && (
                    <Bot className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                <div className="flex items-center">
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  <p className="text-sm">Thinking...</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about our services..."
              className="flex-1 text-sm"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              size="sm"
              className="bg-brand-purple hover:bg-brand-purple/90"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {useLLM && isLLMInitialized 
              ? "AI-powered responses using website content only" 
              : "Structured conversation mode"}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default EnhancedChatbot;