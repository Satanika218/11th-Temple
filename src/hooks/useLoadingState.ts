
import { useState } from 'react';

export const useLoadingState = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = async (asyncFunction: () => Promise<void>) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await asyncFunction();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setIsLoading(false);
    setError(null);
  };

  return { isLoading, error, execute, reset };
};
