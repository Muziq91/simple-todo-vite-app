import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  secondary?: boolean;
};

function Button({ children, isLoading, disabled, secondary }: ButtonProps) {
  return (
    <button
      className={`btn ${secondary ? 'btn-secondary' : 'btn-primary'}`}
      disabled={disabled || isLoading}
      type="submit"
    >
      {isLoading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
}

export default Button;
