
import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error }>;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback;
      if (FallbackComponent && this.state.error) {
        return <FallbackComponent error={this.state.error} />;
      }
      return (
        <div className="min-h-screen bg-brand-navy flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-brand-silver mb-4">Please refresh the page or contact support if the problem persists.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-brand-lime text-brand-navy px-4 py-2 rounded hover:bg-brand-lime-dark"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
