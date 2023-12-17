import { FallbackProps } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Something went wrong!</h1>
          <p className="py-6">{error.message}</p>
          <button className="btn btn-primary" onClick={resetErrorBoundary}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;
