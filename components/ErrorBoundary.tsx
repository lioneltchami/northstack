'use client';

import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorId?: string;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Generate a unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error for monitoring
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Send to Sentry error tracking in production
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_SENTRY_DSN) {
      // Dynamically import Sentry to avoid SSR issues
      import('@/lib/sentry')
        .then(({ captureException }) => {
          captureException(error, {
            tags: {
              errorBoundary: 'true',
              errorId: this.state.errorId || 'unknown',
            },
            extra: {
              componentStack: errorInfo.componentStack,
              errorInfo,
            },
            level: 'error',
          });
        })
        .catch((err) => {
          console.error('Failed to send error to Sentry:', err);
        });
    }
  }

  handleReload = () => {
    this.setState({ hasError: false, error: undefined, errorId: undefined });
    window.location.reload();
  };

  handleGoHome = () => {
    this.setState({ hasError: false, error: undefined, errorId: undefined });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            {/* Error Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>

            {/* Error Title */}
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Oops! Something went wrong
            </h2>

            {/* Error Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We apologize for the inconvenience. An unexpected error occurred while loading this page.
            </p>

            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs text-red-600 dark:text-red-400 overflow-auto">
                  {this.state.error.name}: {this.state.error.message}
                  {'\n\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}

            {/* Error ID for support */}
            {this.state.errorId && (
              <p className="text-xs text-gray-500 dark:text-gray-300 mb-6">
                Error ID: {this.state.errorId}
              </p>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>

              <button
                onClick={this.handleGoHome}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20 font-semibold rounded-lg transition-colors"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </div>

            {/* Support Contact */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                If this problem persists, please contact{' '}
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@northstack.solutions'}?subject=Error Report&body=Error ID: ${this.state.errorId}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
                >
                  our support team
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for easy wrapping
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback?: ReactNode
) {
  const WithErrorBoundaryComponent = (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  WithErrorBoundaryComponent.displayName = `withErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return WithErrorBoundaryComponent;
}