import { extractWebsiteContent } from './WebsiteContentExtractor';
import { createVectorStore } from './VectorStore';
import { generateResponse } from './ResponseGenerator';

export interface LLMConfig {
  apiKey?: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export class LLMService {
  private vectorStore: any;
  private websiteContent: string;
  private config: LLMConfig;

  constructor(config: LLMConfig = {}) {
    this.config = {
      model: 'gpt-3.5-turbo',
      maxTokens: 1000,
      temperature: 0.7,
      ...config
    };
    this.websiteContent = '';
    this.vectorStore = null;
  }

  /**
   * Initialize the LLM service by extracting website content and creating vector store
   */
  async initialize(): Promise<void> {
    try {
      console.log('Extracting website content...');
      this.websiteContent = await extractWebsiteContent();
      
      console.log('Creating vector store...');
      this.vectorStore = await createVectorStore(this.websiteContent);
      
      console.log('LLM Service initialized successfully');
    } catch (error) {
      console.error('Failed to initialize LLM Service:', error);
      throw error;
    }
  }

  /**
   * Generate a response based on user query using only website content
   */
  async generateResponse(query: string, conversationHistory: ChatMessage[] = []): Promise<string> {
    try {
      // Extract relevant context from website content
      const relevantContext = await this.vectorStore.search(query, 5);
      
      // Build prompt with website context and conversation history
      const prompt = this.buildPrompt(query, relevantContext, conversationHistory);
      
      // Generate response using LLM
      const response = await generateResponse(prompt, this.config);
      
      return response;
    } catch (error) {
      console.error('Error generating response:', error);
      return "I apologize, but I'm having trouble processing your request. Please try rephrasing your question.";
    }
  }

  /**
   * Build a prompt that includes website context and conversation history
   */
  private buildPrompt(query: string, context: string[], conversationHistory: ChatMessage[]): string {
    const systemPrompt = `You are a helpful business consultant specializing in AI and digital transformation for SMEs. 
You must ONLY use information from the provided website content to answer questions. 
If the information is not available in the website content, clearly state that you don't have that information.
Be professional, friendly, and provide practical advice based on the website content.
Focus on how 11th Temple Solutions can help businesses with their specific needs.`;

    let prompt = systemPrompt + "\n\n";
    
    // Add relevant website content
    if (context.length > 0) {
      prompt += "Relevant information from our website:\n";
      context.forEach((item, index) => {
        prompt += `${index + 1}. ${item}\n`;
      });
      prompt += "\n";
    }
    
    // Add conversation history
    if (conversationHistory.length > 0) {
      prompt += "Previous conversation:\n";
      conversationHistory.forEach(message => {
        prompt += `${message.role}: ${message.content}\n`;
      });
      prompt += "\n";
    }
    
    prompt += `User question: ${query}\n\n`;
    prompt += "Based on the website content provided, please answer the user's question. If the information is not available in the website content, please state that clearly.";
    
    return prompt;
  }

  /**
   * Check if the service is properly initialized
   */
  isInitialized(): boolean {
    return this.vectorStore !== null && this.websiteContent.length > 0;
  }

  /**
   * Get statistics about the website content
   */
  getContentStats(): { totalWords: number; totalDocuments: number; lastUpdated: Date } {
    return {
      totalWords: this.websiteContent.split(/\s+/).length,
      totalDocuments: this.websiteContent.split(/\n\n/).length,
      lastUpdated: new Date()
    };
  }
}

// Export singleton instance
export const llmService = new LLMService({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: 'gpt-3.5-turbo',
  maxTokens: 1000,
  temperature: 0.7
});