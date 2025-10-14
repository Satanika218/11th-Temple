/**
 * Simple vector store implementation for similarity search
 * In a production environment, you might use a proper vector database like Pinecone or Weaviate
 */

interface VectorDocument {
  id: string;
  content: string;
  embedding?: number[];
  metadata?: Record<string, any>;
}

export class SimpleVectorStore {
  private documents: VectorDocument[] = [];
  private embeddings: Map<string, number[]> = new Map();

  /**
   * Add documents to the vector store
   */
  async addDocuments(documents: VectorDocument[]): Promise<void> {
    for (const doc of documents) {
      // Generate simple embedding (in production, you'd use a proper embedding model)
      const embedding = await this.generateEmbedding(doc.content);
      
      this.documents.push(doc);
      this.embeddings.set(doc.id, embedding);
    }
  }

  /**
   * Search for similar documents
   */
  async search(query: string, topK: number = 5): Promise<string[]> {
    if (this.documents.length === 0) {
      return [];
    }

    // Generate embedding for query
    const queryEmbedding = await this.generateEmbedding(query);
    
    // Calculate similarities
    const similarities = this.documents.map(doc => {
      const docEmbedding = this.embeddings.get(doc.id);
      if (!docEmbedding) return { doc, similarity: 0 };
      
      const similarity = this.cosineSimilarity(queryEmbedding, docEmbedding);
      return { doc, similarity };
    });

    // Sort by similarity and return top results
    similarities.sort((a, b) => b.similarity - a.similarity);
    
    return similarities
      .slice(0, topK)
      .filter(item => item.similarity > 0.3) // Minimum similarity threshold
      .map(item => item.doc.content);
  }

  /**
   * Generate simple embedding (placeholder implementation)
   * In production, you'd use a proper embedding model like OpenAI's text-embedding-ada-002
   */
  private async generateEmbedding(text: string): Promise<number[]> {
    // Simple word-based embedding for demonstration
    // This creates a 50-dimensional embedding based on word frequency and position
    const words = text.toLowerCase().split(/\s+/);
    const embedding = new Array(50).fill(0);
    
    // Create a simple hash-based embedding
    words.forEach((word, index) => {
      const hash = this.simpleHash(word);
      const dimension = hash % 50;
      const weight = 1 / (index + 1); // Decreasing weight for position
      embedding[dimension] += weight;
    });
    
    // Normalize the embedding
    const magnitude = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
    if (magnitude > 0) {
      return embedding.map(val => val / magnitude);
    }
    
    return embedding;
  }

  /**
   * Simple hash function for word embedding
   */
  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  /**
   * Calculate cosine similarity between two vectors
   */
  private cosineSimilarity(vecA: number[], vecB: number[]): number {
    if (vecA.length !== vecB.length) return 0;
    
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    
    for (let i = 0; i < vecA.length; i++) {
      dotProduct += vecA[i] * vecB[i];
      normA += vecA[i] * vecA[i];
      normB += vecB[i] * vecB[i];
    }
    
    if (normA === 0 || normB === 0) return 0;
    
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  /**
   * Get store statistics
   */
  getStats(): { totalDocuments: number; avgDocumentLength: number } {
    const totalDocuments = this.documents.length;
    const avgDocumentLength = this.documents.reduce((sum, doc) => sum + doc.content.length, 0) / totalDocuments;
    
    return {
      totalDocuments,
      avgDocumentLength
    };
  }

  /**
   * Clear all documents
   */
  clear(): void {
    this.documents = [];
    this.embeddings.clear();
  }
}

/**
 * Factory function to create vector store from website content
 */
export async function createVectorStore(websiteContent: string): Promise<SimpleVectorStore> {
  const vectorStore = new SimpleVectorStore();
  
  // Split content into manageable chunks
  const chunks = splitContentIntoChunks(websiteContent, 500); // 500 characters per chunk
  
  // Create documents from chunks
  const documents = chunks.map((chunk, index) => ({
    id: `doc_${index}`,
    content: chunk,
    metadata: {
      source: 'website',
      chunkIndex: index,
      totalChunks: chunks.length
    }
  }));
  
  // Add documents to vector store
  await vectorStore.addDocuments(documents);
  
  console.log(`Vector store created with ${documents.length} documents`);
  return vectorStore;
}

/**
 * Split content into chunks of specified size
 */
function splitContentIntoChunks(content: string, chunkSize: number): string[] {
  const chunks: string[] = [];
  const sentences = content.split(/[.!?]+/);
  
  let currentChunk = '';
  
  for (const sentence of sentences) {
    const trimmedSentence = sentence.trim();
    if (trimmedSentence.length === 0) continue;
    
    if (currentChunk.length + trimmedSentence.length + 1 <= chunkSize) {
      currentChunk += (currentChunk ? '. ' : '') + trimmedSentence;
    } else {
      if (currentChunk) {
        chunks.push(currentChunk + '.');
      }
      currentChunk = trimmedSentence;
    }
  }
  
  if (currentChunk) {
    chunks.push(currentChunk + '.');
  }
  
  return chunks.filter(chunk => chunk.length > 50); // Filter out very small chunks
}

/**
 * Export singleton for easy use
 */
export const vectorStore = new SimpleVectorStore();