'use client';

/**
 * Loading Components
 * Various loading states and skeletons for better UX
 */

// Spinner Component
export function Spinner({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-3',
    lg: 'w-10 h-10 border-4',
  };

  return (
    <div
      className={`spinner ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// Loading Dots Component
export function LoadingDots({ className = '' }: { className?: string }) {
  return (
    <div className={`loading-dots inline-flex items-center ${className}`} role="status" aria-label="Loading">
      <span></span>
      <span></span>
      <span></span>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// Skeleton Loader Components
export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`skeleton h-4 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`card p-6 ${className}`}>
      <div className="skeleton w-12 h-12 rounded-lg mb-4" />
      <div className="skeleton h-6 w-3/4 mb-3" />
      <div className="space-y-2">
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-2/3" />
      </div>
    </div>
  );
}

export function SkeletonAvatar({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`skeleton ${sizeClasses[size]} rounded-full ${className}`} />
  );
}

export function SkeletonImage({ className = '', aspectRatio = '16/9' }: { className?: string; aspectRatio?: string }) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ aspectRatio }}
    />
  );
}

// Pulse Component for Loading States
export function Pulse({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`pulse ${className}`}>
      {children}
    </div>
  );
}

// Page Loading Component
export function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <Spinner size="lg" className="mx-auto mb-4" />
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    </div>
  );
}

// Button Loading State
export function ButtonLoading({ children, loading, ...props }: {
  children: React.ReactNode;
  loading: boolean;
  [key: string]: any;
}) {
  return (
    <button {...props} disabled={loading || props.disabled}>
      {loading ? (
        <span className="inline-flex items-center">
          <Spinner size="sm" className="mr-2" />
          {typeof children === 'string' ? children : 'Loading...'}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
