export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'assistant' | 'bot';
  timestamp: Date;
  text?: string; // Legacy support
  options?: ConversationOption[]; // Legacy support
  solutions?: Solution[]; // Legacy support
}

// Legacy type aliases for backward compatibility
export type Message = ChatMessage;

export interface Solution {
  category?: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ConversationNode {
  id: string;
  text: string | string[];
  options?: ConversationOption[];
  solutions?: Solution[];
  isEnd?: boolean;
}

// Legacy type alias
export type ConversationTree = Record<string, ConversationNode>;

export interface ConversationOption {
  text: string;
  keywords?: string[];
  next: string;
}

// Legacy type alias
export type Option = ConversationOption;

export interface LLMResponse {
  content: string;
  confidence: number;
  sourceDocuments?: string[];
}

export interface ChatbotState {
  currentNode: string;
  messages: ChatMessage[];
  isLoading: boolean;
  useLLM: boolean;
  isLLMInitialized: boolean;
}

export interface LLMConfig {
  apiKey?: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
}
