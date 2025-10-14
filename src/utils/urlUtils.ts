/**
 * Utility function to process and normalize website URLs
 * Adds https://www. prefix if not present
 */
export const processUrl = (url: string): string => {
  let processedUrl = url.trim();
  
  if (processedUrl && !/^https?:\/\//i.test(processedUrl)) {
    // Remove www. if it exists at the beginning
    if (processedUrl.startsWith('www.')) {
      processedUrl = processedUrl.substring(4);
    }
    processedUrl = `https://www.${processedUrl}`;
  }
  
  return processedUrl;
};